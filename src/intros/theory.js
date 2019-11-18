import React from 'react';

export const contributors = ['Rohan Taori', 'Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>

<p>
Machine learning theory seeks to understand the principles
behind why ML works. ML theory on the whole is quite
expansive, and as such, we have decided to only
focus on the narrow subset that pertains to deep learning.
A solid math background is necessary for most theory papers,
particularly in linear algebra and probability.
With that background, the following resources are quite good:
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
There are many textbooks on ML, and 
many of them are quite theory and classical-ML-focused.
Common texbooks include Bishop’s Pattern Recognition and Machine Learning,
James’s Introduction to Statistical Learning,
and Murphy’s Machine Learning: A Probabilistic Perspective.
</li>
</ul>

<p>
The topics covered so far in this reading list are:
generalization, robustness, and optimization.
</p>

<p>
Generalization is perhaps the key problem of machine learning:
How do we build models which perform well across an entire distribution,
not just the particular samples that the model was trained on?
Avoiding overfitting is of particular interest in the overparameterized 
regime of deep learning. A key question here is why does deep learning generalize 
(work at all!) given that there are almost always enough parameters in a model 
to perfectly fit your data?
(Most generalization bounds for classical machine learning rely
on the fact that classical ML models usually have fewer parameters than
data points).
</p>

<p>
Robustness to adversaries and distribution shift is practically relevant,
as data that the model is tested on sometimes diverges substantially
from training data.
Adversarial robustness refers to the ability of a model to perform well 
despite targeted attacks against it,
whereas non-adversarial robustness is the ability of a model to perform 
well when it is deployed on data that differs in more natural ways
from training data.
Current deep learning models are thus far quite brittle against these perturbations,
so having more robust models is quite relevant for real-world applications.
</p>

<p>
Finally, optimization is the procedure which minimizes the loss of the model
over a fixed dataset.
Usually, this is done by gradient descent on iterative passes over the data.
Improved optimization methods adjust SGD to more quickly arrive at a minimum
which generalizes well, and there is a rich family of research at the 
intersection of optimization, systems, and generalization.
</p>
</div>
        );
    }
}

