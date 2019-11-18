import React from 'react';

export const contributors = ['Rohan Taori', 'Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>

<p>
Machine learning theory fills textbooks, not reading lists.
The math behind machine learning is incredibly rich,
as such we’ve focused here on a tiny subset of the subset that pertains to deep learning.
Some types of theory are important in applications,
such as robustness and generalization guarantees.
</p>

<p>
A solid math background is necessary for most theory papers,
particularly in linear algebra and probability,
a mid-level undergraduate understanding is sufficient.
Once that is sufficient, the following broader resources are excellent:
</p>
<ul>
<li>
Berkeley’s CS189: Introduction to Machine Learning is quite theoretical and gives a solid foundation for classical ML and some deep learning. Materials are 
{} <a
    href="https://www.eecs189.org/"
    target="_blank"
    rel="noopener noreferrer" >
        here
</a>.
</li>
<li>
<a
    href="https://www.inference.vc/"
    target="_blank"
    rel="noopener noreferrer" >
        inFERENCe
</a> {}
is an excellent theory-focused blog with strong Bayesian flavor.
</li>
<li>
There are many textbooks on ML, and they end up being quite theory and classical-focused.
The current editors of the reading list believe in your ability to find one that suits you 
(Bishop’s Pattern Recognition and Machine Learning,
James’s Introduction to Statistical Learning,
and Murphy’s Machine Learning: A Probabilistic Perspective are all commonly-recommended options).
</li>
</ul>

<p>
The topics so-far-covered in this reading list are generalization, robustness, and optimization for deep learning, each of which are of practical relevance.
</p>

<p>
Generalization is perhaps the key problem of machine learning:
How do we build models from data which perform well across an entire distribution,
not just our samples? 
Avoiding overfitting is of particular interest in the overparameterized 
regime of deep learning. A key question here is why does deep learning generalize 
(work at all!) given that there are almost always enough parameters in a model 
to perfectly fit your data infinitely many ways?
This line of research is particularly fascinating.
</p>

<p>
Robustness to adversaries and distribution shift is practically relevant,
as training data rarely looks like the data you deploy your model on.
Adversarial robustness refers to the ability of a model to perform well 
despite targeted attacks against it, in the form of input perturbations.
On the other hand, non-adversarial robustness is the ability of a model to perform 
well when it is deployed on data that is slightly different from training data.
Current deep learning methods are so far brittle against both adversaries and distribution shift.
</p>

<p>
Optimization is the procedure which minimizes an empirical cost of a model over a dataset,
typically taking iterative passes over the data and updating parameters.
Improved optimization methods adjust SGD to more quickly arrive at a minima 
which generalizes well, and there is a rich family of research at the 
intersection of optimization, systems, and generalization.
</p>
</div>
        );
    }
}

