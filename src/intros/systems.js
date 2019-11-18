import React from 'react';

export const contributors = ['Brian Friedenberg', 'Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>

<p>
Many of the recent advances in machine learning can, at least in part,
be credited to systems improvements. Notably,
much of the AlexNet paper is spent discussing how they fit their neural
network onto two GPUs, enabling much faster training than before.
(AlexNet was trained with two GTX 580s, which had 3GB of GPU memory each,
much less than we have today!)
</p>

<p>
ML systems research typically falls into one of two categories: training and inference.
For training time, problems that ML systems researchers think about include:
How can we make training a neural network over multiple GPUs faster?
What about multiple machines (each with multiple GPUs)?
If we are training a neural network over many machines, how do we deal
with random machine failure?
How do we design machine learning frameworks (such as PyTorch and TensorFlow)
with the right level of abstraction, such that machine learning researchers
find the system both easy to use and flexible?
Can we design custom circuits that make it faster to train models?
If our model is too big to fit on a single GPU, can we develop a tool
to automatically split the model over multiple GPUs to minimize
communication overhead between the GPUs?
</p>

<p>
In contrast, on the inference side, problems that ML systems researchers
think about include:
Given a trained network, can we distill the number of floating point
operations that the particular network requires, in order to speed
up inference?
If we have lots of inference requests coming in, how can we best batch
requests together?
If our serving system requires various hardware backends (e.g., we use both CPUs
and GPUs at inference time), how can we best allocate these resources
to different parts of the computation?
</p>

<p>
To get a high-level view of the history of and the big ideas in ML systems research,
the intro slides from
{} <a
    href="https://ucbrise.github.io/cs294-ai-sys-fa19/"
    target="_blank"
    rel="noopener noreferrer" >
        Berkeley ML Systems Course
</a> {}
is a great resource.
</p>

</div>
        );
    }
}

