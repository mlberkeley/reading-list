import React from 'react';

export const contributors = ['Chris Bender'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Before deep learning overtook the world of ML, most algorithms
consisted of shallow learning algorithms (linear/logistic regression,
SVMs, decicion trees, etc.) trained on hand-extracted features.
Lots of work went into finding good classes of features to extract
from input data, and many researchers spent their time
attempting to craft better sets of features to feed into these
shallow algorithms.
</p>

<p>
Today, very little hand-engineering of features is done.
Instead, we train a deep neural network to extract features for
us, with the hope that the neural network will automatically
extract the relevant features. It turns out that,
in practice, neural networks are quite good at this,
and the types of features that neural networks extract
are somewhat similar to the types of features that have been
hand-engineered by experts (e.g., edge detectors, color gradients).
For a great set of visualizations as to what types of features
neural networks extract, take a look at
{} <a
    href="https://distill.pub/2017/feature-visualization/"
    target="_blank"
    rel="noopener noreferrer" >
        this
</a> {}
Distill blog post.
</p>

<p>
Today, we are no longer hand-engineering many features
to feed into our networks. However, we still are definitely
hand-tuning many aspects of our architectures (layer count,
filter counts, where to include dropout and batch norm layers, etc.)
Much of the effort that goes into training networks consists of
hand-tuning an architecture to best work on a particular dataset.
So, it is natural to think: Just as we learn features from the data
with a neural network, can we also learn the neural network
architecture directly?
</p>

<p>
This is precisely the problem of Neural Architecture Search:
Automatically generating a neural network architecture from
a given dataset. It is part of a broader research direction
known as AutoML that tries to automate away the job of a 
machine learning engineer: The goal is to simply plug
in a dataset and have a trained model at the end.
</p>
</div>
        );
    }
}

