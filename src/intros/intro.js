import React from 'react';
import { allFlattenedPapers } from '../Papers.js';

export const contributors = ['Chris Bender', 'Phillip Kravtsov']

class PaperJump extends React.Component {

    render() {
        let paper = allFlattenedPapers[this.props.name];
        if (paper == null) {
            throw new Error("Invalid paper " + this.props.name + " passed to PaperJump.");
        }

        return (
            <li>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer" >
                        {paper.flavor ? paper.flavor : paper.title}
                </a>
            </li>
        );
        //return (
        //    <li>
        //        <span 
        //            className="App-paperjump-element"
        //            onClick={this.props.makeOnPaperJump(paper)} >
        //                {paper.flavor ? paper.flavor : paper.title}
        //        </span>
        //    </li>
        //);
    }

}

class Guide extends React.Component {
    render() {

        return (
            <>
                <PaperJump 
                    name="EfficientNet" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        When we want to scale up a neural network to a
                        bigger task, the most natural way to do so is to add more layers.
                        However, we also have control over layer width and the resolution
                        of our input (we usually downsize ImageNet samples to 
                        224x224 resolution, but you can increase the resolution for
                        a minor accuracy boost). In practice, though, it is not clear 
                        how to scale up these three components; the EfficientNet paper
                        gives a more principled method for model scaling that
                        achieves significantly better accuracy-FLOP tradeoff.
                    </li>
                </ul>
                <PaperJump 
                    name="Yolo" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Yolo is one of the more important (and easier to understand)
                        methods for detecting objects within an image.
                    </li>
                </ul>
                <PaperJump 
                    name="PointNet" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        We usually see computer vision problems operate on 2D (image)
                        data, but we sometimes want to do processing on 3D data.
                        (One predominant example of this is 3D object detection from
                        LiDAR points for self-driving cars.)
                        This paper proposes a simple method for processing
                        3D point clouds and serves as the backbone for many
                        more sophisticated 3D object detectors.
                    </li>
                </ul>
                <PaperJump
                    name="Show and Tell"
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        This paper gives a simple LSTM-based architecture
                        that can automatically generate a caption for an image.
                        A great intro that puts together well-understood pieces
                        to solve an interesting new problem.
                    </li>
                    <li>
                        In order to fully understand the paper, it is helpful
                        to have familiarity with the evaluation measure that they use
                        (the BLEU score).
                        {} <a 
                            href="https://en.wikipedia.org/wiki/BLEU"
                            target="_blank"
                            rel="noopener noreferrer" >
                                Here
                        </a> {}
                        is the Wikipedia page for the BLEU score and is a good start.
                    </li>
                </ul>
                <PaperJump 
                    name="Transformer" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Many of the recent NLP models (e.g., BERT) rely
                        heavily on the 'self-attention' operation. The original
                        Transformer paper helped start this trend and is
                        a great resource for understanding how self-attention works.
                    </li>
                </ul>
                <PaperJump 
                    name="Distributed Overview" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Much of the recent progress in machine learning has been fueled by
                        the increasing ability to train larger neural networks
                        over many different GPUs (and perhaps even on multiple machines).
                        This problem of distributed training is one of the fundamental
                        issues that systems researchers study (among others). This paper
                        provides a great overview of the different systems problems
                        that are faced in machine learning.
                    </li>
                </ul>
                <PaperJump
                    name="Hidden Technical Debt in Machine Learning Systems"
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        When deploying ML systems in the real world,
                        there are lots of unexpected challenges that you face
                        (data dependencies, feedback loops, overlapping data 
                        pipelines, etc.). Learn about the practical side 
                        of ML deployment, written by a bunch of Googlers.
                    </li>
                </ul>
                <PaperJump 
                    name="Rethinking Generalization" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        In machine learning, we oftentimes talk about the problem of
                        <i>generalization</i>: how do we ensure that neural networks
                        perform correctly on inputs that have not been seen before.
                        This paper casts doubt on the ability for all known classical
                        techniques (such as VC Dimension) to explain why neural
                        networks generalize, and claims that we need better fundamental
                        understanding of the generalization properties of neural networks.
                    </li>
                    <li>
                        Although not strictly necessary, it may be helpful to
                        understand VC Dimension before reading the paper.
                        {} <a 
                            href="https://towardsdatascience.com/measuring-the-power-of-a-classifier-c765a7446c1c"
                            target="_blank"
                            rel="noopener noreferrer" >
                                Here
                        </a> {}
                        is a reasonably good blog post that introduces the VC Dimension.
                    </li>
                </ul>
                <PaperJump 
                    name="The Lottery Ticket Hypothesis" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        A very cool paper that points out an interesting property
                        of neural networks: Given a randomly initialized neural network,
                        it is usually possible to identify a smaller sub-network
                        that can train just as easily as the original, larger network.
                        The paper hypothesizes that this property can help explain
                        why larger networks usually give better performance.
                    </li>
                </ul>
                <PaperJump 
                    name="AutoAugment" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        We usually augment data by applying random transformations
                        (crops, brightness/contrast shifts, etc.). This paper shows
                        that we can improve this by having a neural network choose
                        the augmentation strategy instead.
                    </li>
                    <li>
                        Fully understanding this paper will require a bit of reinforcement
                        learning knowledge: In particular, they use Proximal Policy
                        Optimization (PPO) to train the augmentation strategy.
                        However, a basic familiarlity with reinforcement learning
                        will be sufficient to get the main idea and understand the
                        results.
                    </li>
                </ul>
                <PaperJump 
                    name="CycleGAN" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Make pretty pictures and transform horses into zebras
                        with GANs! This paper uses a cool trick (cycle-consistency)
                        to make this possible without collecting a "horse-to-zebra"
                        dataset.
                    </li>
                </ul>
                <PaperJump 
                    name="PixelCNN" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Intuitively, the "ultimate" form of unsupervised learning
                        is to learn an exact probability density function
                        over your entire data space: This allows you to
                        both estimate the likelihood of input samples, and
                        to generate new samples from the distribution.
                        This task of estimating the exact density is termed
                        <i>likelihood modeling</i>. The PixelCNN is one very important
                        approach to do likelihood modeling on images directly.
                    </li>
                </ul>
                <PaperJump 
                    name="VAE Tutorial" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        One drawback of many unsupervised learning models is
                        that they are usually good at one thing only:
                        For example, GANs can produce really high-quality
                        samples, but are not helpful in estimating the probability
                        of an image. Similarly, PixelCNNs are great for estimating
                        image probabilities, but are not great for producing samples.
                        In contrast, variational autoencoders (VAEs) can
                        produce samples, estimate approximate likelihoods,
                        and interpolate between images, all in one model.
                    </li>
                </ul>
                <PaperJump 
                    name="RotNet" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        We know that we can use the hidden layers of a pretrained
                        classifier to extract meaningful features from an image
                        (i.e., features that are more sensitive to semantic 
                        changes in the image), but this implicitly relies
                        on labels (the original pretrained classifier was trained with
                        labels). This paper proposes a method to learn
                        these representations with no human-labeled images at all.
                    </li>
                </ul>
                <PaperJump 
                    name="MAML" 
                    makeOnPaperJump={this.props.makeOnPaperJump} />
                <ul>
                    <li>
                        Humans are much more efficient than neural networks:
                        We only need a few examples (perhaps even one) of a given
                        class to be able to reliably recognize it.
                        One explanation for this is that we have "learned how to learn";
                        tht is, we have seen many other objects in the real world,
                        so we have an undderstanding of the general properties of
                        objects. The study of "learning to learn" in neural networks
                        is termed <i>meta-learning</i>, and the MAML paper introduces
                        a very simple approach for meta-learning: Just train
                        the model to be easy to fine-tune.
                    </li>
                </ul>
            </>
        );
    }
}

class TwitterAccount extends React.Component {
    render() {
        return (
            <li>{this.props.name} (
                <a 
                    href={'https://twitter.com/' + this.props.user + '/'}
                    target="_blank"
                    rel="noopener noreferrer" >
                        @{this.props.user}
                </a>
            )</li>
        );
    }
}

export class Intro extends React.Component {

    render() {
        return (
            <div>

                <p>
                    Welcome to the Machine Learning at Berkeley reading list!
                    This was assembled by students at UC Berkeley,
                    and was designed to be a good reference for those
                    in the intermediate stages of learning ML.
                </p>

                <p>Made By: {this.props.contributors}</p>

                <p>
                    For various sub-topics in machine learning, we have assembled
                    a hierarchical reading list, alongside an introduction to the sub-topic.
                    For each paper, we have put a star-rating, with (*) denoting low-importance
                    papers that are only helpful for those most interested in the topic,
                    (**) for papers with medium importance, and (***) for the high-importance
                    papers that should be read first.
                </p>

                <p><b>Beginning Guide</b></p>
                <p>
                    The following papers give you a flavor of each of the sections, 
                    and don’t require much extra knowledge beyond basic
                    deep learning concepts (you should know about MLPs/CNNs and how
                    to train them).
                </p>
                <ul><Guide makeOnPaperJump={this.props.makeOnPaperJump} /></ul>
                <p><b>Good Resources</b></p>
                <p>
                    Arxiv Sanity (
                    <a 
                        href="http://www.arxiv-sanity.com/" 
                        target="_blank"
                        rel="noopener noreferrer" >
                            www.arxiv-sanity.com
                    </a>
                    ). Developed by Andrej Karpathy,
                    Arxiv Sanity is a great resource for finding the 
                    most relevant papers published on Arxiv.
                    The website has tools for saving papers to a personal
                    library, seeing recommendations based on your 
                    saved papers, and filtering papers by most-saved or most-discussed.
                </p>
                <p>
                    Arxiv Vanity (
                    <a 
                        href="http://www.arxiv-vanity.com/"
                        target="_blank"
                        rel="noopener noreferrer" >
                        www.arxiv-vanity.com
                    </a>
                    ). Arxiv Vanity renders Arxiv PDFs in a mobile-friendly
                    HTML format.
                </p>
                <p>
                    Depth First Learning (
                    <a 
                        href="https://www.depthfirstlearning.com/"
                        target="_blank"
                        rel="noopener noreferrer" >
                        www.depthfirstlearning.com
                    </a>
                    ). Typically tackling paper that require more background knowledge,
                    DFL is a great resource for very high-quality blogs and explanations
                    of ML research concepts.
                </p>
                <p>
                    Distill.pub (
                    <a 
                        href="https://distill.pub/"
                        target="_blank"
                        rel="noopener noreferrer" >
                        distill.pub
                    </a>
                    ). Typically tackling papers that require more background knowledge,
                    DFL is a great resource for very high-quality blogs and explanations
                    of ML research concepts.
                </p>
                <p>
                    Berkeley AI Research Blog (
                    <a
                        href="https://bair.berkeley.edu/blog/"
                        target="_blank"
                        rel="noopener noreferrer" >
                        www.bair.berkeley.edu/blog
                    </a>
                    ). A great resource for high-quality blogs written
                    by Berkeley ML researchers.
                </p>
                <p>
                    r/MachineLearning (
                    <a 
                        href="https://www.reddit.com/r/machinelearning/"
                        target="_blank"
                        rel="noopener noreferrer" >
                        www.reddit.com/r/machinelearning
                    </a>
                    ). A great Reddit community for discussions on ML.
                </p>
                <p><b>Twitter Accounts</b></p>
                <ul>
                    <li>ML Researchers</li>
                    <ul>
                        <TwitterAccount
                            name="Andrej Karpathy"
                            user="karpathy" />
                        <TwitterAccount
                            name="Ian Goodfellow"
                            user="goodfellow_ian" />
                        <TwitterAccount
                            name="Woj Zaremba"
                            user="woj_zaremba" />
                        <TwitterAccount
                            name="Oriol Vinayls"
                            user="OriolVinyalsML" />
                        <TwitterAccount
                            name="David Ha"
                            user="hardmaru" />
                        <TwitterAccount
                            name="François Chollet"
                            user="fchollet" />
                        <TwitterAccount
                            name="Justin Johnson"
                            user="jcjohnss" />
                        <TwitterAccount
                            name="Jeff Dean"
                            user="JeffDean" />
                        <TwitterAccount
                            name="Pieter Abbeel"
                            user="pabbeel" />
                    </ul>
                    <li>Research Labs</li>
                    <ul>
                        <TwitterAccount
                            name="DeepMind"
                            user="DeepMindAI" />
                        <TwitterAccount
                            name="OpenAI"
                            user="OpenAI" />
                        <TwitterAccount
                            name="Berkeley AI Research"
                            user="berkeley_ai" />
                        <TwitterAccount
                            name="Stanford NLP Group"
                            user="stanfordnlp" />
                    </ul>
                </ul>
                <p><b>Other Reading Lists</b></p>
                <ul>
                    <li>
                        Chelsea Finn and Sergey Levine:
                        {} <a 
                                href="https://sites.google.com/view/icml19metalearning"
                                target="_blank"
                                rel="noopener noreferrer" >
                                    ICML 2019 Meta-Learning Tutorial
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

Intro.displayedContributors = true;

