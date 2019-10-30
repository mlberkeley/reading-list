import React from 'react';
import './App.css';
import { allTopics } from './Topics.js';
import { LoremIpsum } from 'react-lorem-ipsum';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    getListOfTopicNamesHelper(topics, depth, returnVal) {

        let topicNames = new Array();
        for (let i = 0; i < topics.length; i++) {

            let topic = topics[i];
            let thisReturnVal = depth === 0 ? i : returnVal;

            var topicName = (
                <li onClick={this.props.makeOnClick(thisReturnVal)}>
                    {topic.name}
                </li>
            );
            if (depth == 0) {
                topicName = <b>{topicName}</b>;
            }
            if (topic.hasOwnProperty('children')) {
                topicName = (
                    <>
                        {topicName}
                        <ul>
                            {this.getListOfTopicNamesHelper(
                                topic.children, depth + 1, thisReturnVal)}
                        </ul>
                    </>
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

        const listOfTopics = this.getListOfTopicNames(allTopics);
        return (
            <div className="App-index-inner">
                Machine Learning at Berkeley Reading List
                {listOfTopics}
            </div>
        );
    }

}

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="App-header-text">
                    {allTopics[this.props.currentSection].name}.
                </div>
                <div className="App-header-logo">
                    <img 
                        src="mlab-logo-horizontal.png" />
                </div>
            </div>
        );
    }

}

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    processSinglePaper(paper) {
        return (
            <>
                <li>
                    {paper.flavor}
                </li>
                <ul>
                    <li>
                        {paper.title}
                    </li>
                    <li>
                        <a href={paper.link} target="_blank">
                            {paper.link}
                        </a>
                    </li>
                    <li>
                        Relevance: {paper.relevance} of 3
                    </li>
                </ul>
            </>
        );
    }

    processPapers(children) {

        let processed = new Array();
        for (let i = 0; i < children.length; i++) {

            let child = children[i];
            console.log(child);
            if (child.type === 'paper') {
                console.log("Processing " + child.name);
                processed.push(this.processSinglePaper(child));
            } else if (child.type === 'topic') {
                processed.push(
                    <>
                        <li>
                            {child.name}
                        </li>
                        <ul>
                            {this.processPapers(child.children)}
                        </ul>
                    </>
                );
            }

        }

        return processed;

    }

    render() {

        let processedPapers = this.processPapers(allTopics[this.props.currentSection].children)
        console.log(processedPapers);

        return (
            <div className="App-content-inner" >
                <LoremIpsum p={20} />
                <ul>{processedPapers}</ul>
            </div>
        );
    }

}

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
        };
        this.makeOnSectionClicked = this.makeOnSectionClicked.bind(this);
    }

    makeOnSectionClicked(idx){
        return ev => {
            this.setState({
                currentSection: idx,
            })
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-index">
                    <Index makeOnClick={this.makeOnSectionClicked} />
                </div>
                <div className="App-header">
                    <Header
                        currentSection={this.state.currentSection}
                    />
                </div>
                <div className="App-content">
                    <Content
                        currentSection={this.state.currentSection}
                    />
                </div>
            </div>
        );
        
    }

}

function App() {
    return (
        <AppMain/>
    );
}

export default App;
//            <div className="App">
//              <header className="App-header">
//                <p>
//                  Edit <code>src/App.js</code> and save to reload.
//                </p>
//                <a
//                  className="App-link"
//                  href="https://reactjs.org"
//                  target="_blank"
//                  rel="noopener noreferrer"
//                >
//                  Learn React
//                </a>
//              </header>
//            </div>
