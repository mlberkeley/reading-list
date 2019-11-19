import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { allTopicFiles, allPapers } from './Papers.js';
import { allContributors, allIntros, contributorToEmail } from './Intros.js';

class Index extends React.Component {

    getListOfTopicNamesHelper(topics, depth, returnVal) {

        let topicNames = [];
        for (let i = 0; i < topics.length; i++) {

            let topic = topics[i];
            let thisReturnVal = depth === 0 ? i : returnVal;

            var topicName = (
                <li 
                    className="App-index-li"
                    onClick={this.props.makeOnClick(thisReturnVal)}>
                    {topic.name}
                </li>
            );
            if (depth === 0) {
                topicName = <b>{topicName}</b>;
            }
            if (topic.hasOwnProperty('children')) {
                topicName = (
                    <div key={topic.name}>
                        {topicName}
                        <ul>
                            {this.getListOfTopicNamesHelper(
                                topic.children, depth + 1, thisReturnVal)}
                        </ul>
                    </div>
                );
                topicNames.push(topicName);
            }

        }

        return topicNames;

    }

    getListOfTopicNames(keysAndTopics) {
        return (
            <ul>
                {this.getListOfTopicNamesHelper(keysAndTopics, 0, null)}
            </ul>
        );
    }

    render() {

        const listOfTopics = this.getListOfTopicNames(allPapers);
        return (
            <div className="App-index-inner">
                <p><b>Machine Learning at Berkeley Reading List</b></p>
                {listOfTopics}
            </div>
        );
    }

}

class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="App-header-text">
                    {allPapers[this.props.currentSection].name}
                </div>
                <div className="App-header-logo">
                    <img 
                        src="mlab-logo-horizontal.png"
                        alt="ML@B Logo" />
                </div>
            </div>
        );
    }

}

class Content extends React.Component {

    processSinglePaper(paper) {
        let shouldHighlight = this.props.paperToHighlight !== null && 
            paper.title === this.props.paperToHighlight.title;
        let className = shouldHighlight ? "App-content-paper-highlight" : "App-content-paper"
        let identifier = paper.flavor ? paper.flavor : paper.title;
        return (
            <div key={identifier}>
                <li id={identifier}>
                    <span className={className} >
                        <a 
                            href={paper.link} 
                            target="_blank"
                            rel="noopener noreferrer" >
                                {identifier}
                        </a>
                    </span>
                    {'*'.repeat(paper.relevance)}
                </li>
            </div>
        );
    }

    processPapers(children) {

        let processed = [];
        for (let i = 0; i < children.length; i++) {

            let child = children[i];
            if (child.type === 'paper') {
                processed.push(this.processSinglePaper(child));
            } else if (child.type === 'topic') {
                processed.push(
                    <div key={child.name}>
                        <li>
                            {child.name}
                        </li>
                        <ul>
                            {this.processPapers(child.children)}
                        </ul>
                    </div>
                );
            }

        }
        return processed;

    }

    scrollToHighlight() {
        let paperToHighlight = this.props.paperToHighlight;
        if (paperToHighlight != null) {
            let id = paperToHighlight.flavor ? paperToHighlight.flavor : paperToHighlight.title;
            let element = document.getElementById(id);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    componentDidMount() {
        this.scrollToHighlight();
    }
    componentDidUpdate() {
        this.scrollToHighlight();
    }

    makeContributors(contributors) {

        contributors = contributors.map((contributor) => {
            let email = contributorToEmail[contributor];
            email = email.split('@').join(' at ');
            email = email.split('.').join(' dot ');
            email = '(' + email + ')';
            return (
                [
                    <b>{contributor}</b>,
                    ' ',
                    <span className="App-content-contributor-email">{email}</span>
                ]
            );
        }); //.reduce((a, b) => [a, ', ', b]);
        if (contributors.length > 2) {
            contributors[contributors.length - 1].unshift(' and ');
            contributors = contributors.reduce((a, b) => [a, ', ', b]);
        } else {
            contributors = contributors.reduce((a, b) => [a, ' and ', b]);
        }
        return contributors;
    }

    render() {

        let processedPapers = this.processPapers(allPapers[this.props.currentSection].children)
        let ThisIntro = allIntros[this.props.currentSection];
        let contributors = this.makeContributors(allContributors[this.props.currentSection]);
        let intro = (
            <ThisIntro 
                makeOnPaperJump={this.props.makeOnPaperJump}
                contributors={contributors} />
        );
        let papersTitle = processedPapers.length !== 0 ? <p><b>Papers</b>:</p> : '';
        return (
            <div className="App-content-inner" >
                {intro}
                {papersTitle}
                <ul>{processedPapers}</ul>
                {ThisIntro.displayedContributors ? [] : ['Contributors: ', contributors]}
            </div>
        );

    }

}

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paperToHighlight: null,
        };
        this.makeOnSectionClicked = this.makeOnSectionClicked.bind(this);
        this.makeOnPaperJump = this.makeOnPaperJump.bind(this);
    }

    makeOnSectionClicked(idx) {
        return ev => {
            if (idx !== this.props.sectionIdx) {
                if (idx === 0) {
                    this.props.history.push('/')
                } else {
                    this.props.history.push('/' + allTopicFiles[idx])
                }
                this.setState({
                    paperToHighlight: null,
                })
            }
        };
    }

    makeOnPaperJump(paper) {
        return (event) => {
            this.setState({
                currentSection: paper.rootTopicIndex,
                paperToHighlight: paper,
            })
        }
    }

    render() {

        

        return (
            <div className="App">
                <div className="App-index">
                    <Index 
                        makeOnClick={this.makeOnSectionClicked}
                    />
                </div>
                <div className="App-header">
                    <Header
                        currentSection={this.props.sectionIdx}
                    />
                </div>
                <div className="App-content">
                    <Content
                        currentSection={this.props.sectionIdx}
                        makeOnPaperJump={this.makeOnPaperJump}
                        paperToHighlight={this.state.paperToHighlight}
                    />
                </div>
            </div>
        );
        
    }

}

function App() {

    let routes = [];
    for (let i = 0; i < allTopicFiles.length; i++) {
        if (i === 0) {
            routes.push(
                <Route 
                    exact path="/"
                    render={props => <AppMain sectionIdx={i} {...props} />} />
            );
        } else {
            routes.push(
                <Route 
                    exact path={"/" + allTopicFiles[i]} 
                    render={props => <AppMain sectionIdx={i} {...props} />} />
            );
        }
    }

    return (
        <Router>
            <div>{routes}</div>
        </Router>
    );
}

export default App;

