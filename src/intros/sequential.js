import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Although computer vision is the most popular sub-field of machine
learning, many advancements have been made recently in Natural
Language Processing, the sub-field of ML that aims to understand
natural-language text that humans write.
</p>

<p>
Just as neural networks have seen increasing application 
in the computer vision world, so too has NLP seen a rise of
state-of-the-art deep-learning-based models.
Some of the problems studied in NLP that have seen
significant improvements recently due to neural networks include:
Article summarization, sentiment analysis 
(i.e., classifying if the author of the text is happy, sad, etc.),
translation, part-of-speech classification, and language modeling
(i.e., placing a probability distribution over all sentences).
</p>

<p>
The papers begin with a section on word embeddings:
Since machine learning models usually operate on vectors rather
than strings, how do we best represent a sentence to a ML algorithm?
The next section introduces a class of attention-based models,
which have proven to be extremely powerful for many NLP tasks.
The final section contains a few ways to use these attention-based
models for large-scale unsupervised representation learning of
natural language.
</p>
</div>
        );
    }
}

