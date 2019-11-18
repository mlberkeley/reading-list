import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Supervised learning deals with problems that can be cast as function approximation:
Given paired input-output data, approximate a function from inputs to outputs.
For example, for the task of object detection,
the input space consists of all possible images,
and the output space consists of the set of all possible sets of bounding boxes
and their labels.
However, labels are often difficult to acquire:
Can we learn interesting things about a dataset without explicit labels?
This task is known as unsupervised learning.
</p>

<p>
More specifically, tasks in unsupervised learning typically fall into one of the
four following categories:
</p>
<ul>
<li>
Explicitly learning the probability density function of data, p(x).
</li>
<li>
Generating samples from the probablity density function p(x).
</li>
<li>
Learning better representations of data (more semantic than a vector of all the pixels)
that are useful for downstream tasks.
</li>
<li>
Clustering similar data points together.
</li>
</ul>

<p>
Applications of unsupervised learning include learning to generate new pieces of complex data 
(e.g., synthesizing human speech, generating text),
data compression, and large-scale learning of features without labels.
</p>

<p>
Probability is particularly important in unsupervised learning,
which tends to have more advanced mathematical concepts than deep supervised learning.
Concepts such as normalizing flows, VAEs, and GANs all require a decent knowledge of probability.
</p>

<p>
One great resource for learning about unsupervised learning is UC Berkeley's
{} <a
    href="https://sites.google.com/view/berkeley-cs294-158-sp19/home"
    target="_blank"
    rel="noopener noreferrer" >
        Deep Unsupervised Learning
</a> {}
class.
</p>

</div>
        );
    }
}

