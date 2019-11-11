import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Supervised learning approximates a function from an input space to an output space given paired data. However, labels are often difficult to acquire: can we learn interesting things about data without explicit labels? Unsupervised learning is the study of this question.
</p>

<p>
However, this question needs some more specification, so we’ll set forth four core tasks in unsupervised learning:
</p>
<ul>
<li>
Explicitly learning the distribution of data, p(x)
</li>
<li>
Sampling from the distribution of data
</li>
<li>
Learning useful high-level representations of data which are useful for downstream tasks
</li>
<li>
Clustering similar data together
</li>
</ul>

<p>
Applications of unsupervised learning include learning to generate new pieces of complex data, such as synthesizing human speech, generating text, and transferring between distributions, data compression, and large-scale learning of features without labels.
</p>

<p>
Probability is particularly important in unsupervised learning, which tends to be  more math-y than deep supervised learning. Concepts such as normalizing flows, VAE’s, and GAN’s all require a decent knowledge of probability.
</p>

<p>
Resources for learning about unsupervised learning include:
UC Berkeley’s CS294-158, Deep Unsupervised Learning. This is a truly excellent graduate level course with materials online, from which much of the content on this reading list is derived: https://sites.google.com/view/berkeley-cs294-158-sp19/home
</p>

</div>
        );
    }
}

