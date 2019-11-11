import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov']

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
ImageNet is one of the most famous datasets in machine learning.  
The task is simple: Given an image, classify it into one of 1000 classes 
(the full ImageNet has 22K classes, but when most people say ‘ImageNet’,
they mean the 1000 class version).
The classes are pulled from the 
{} <a 
href="https://wordnet.princeton.edu/"
target="_blank"
rel="noopener noreferrer" >
WordNet
</a> {}
project
(essentially, a dataset of a bunch of words and their relationships,
such as ‘dog’ is a type of ‘canine’).
Classes in ImageNet typically consist of simple object classes such as ‘cucumber’,
‘cup’, ‘table lamp’, and ‘minivan’; you can check out a full list of classes 
{} <a 
href="https://gist.github.com/yrevar/942d3a0ac09ec9e5eb3a"
target="_blank"
rel="noopener noreferrer" >
here
</a> {}
if you’re curious.
</p>

<p>
The ImageNet dataset was used as the basis for the 
ImageNet Large-Scale Visual Recognition Competition 
(<a 
href="http://www.image-net.org/challenges/LSVRC/"
target="_blank"
rel="noopener noreferrer" >
ILSVRC
</a>),
an annual competition from 2010 to 2017 that tested ability of ML models to
classify images.  There was also a sub-competition to classify and localize
(i.e., say where the object is as well),
but most people only talk about the classification task at ILSVRC.
</p>

<p>
The ILSVRC competition proved to help start the deep learning revolution:
In 2012, Alex Krizhevsky submitted AlexNet, the winning model that year.
Notably, 2012 was the first year that a neural network had beat out previous non-deep methods 
(usually hand-crafted features with a shallow learning algorithm, such as an SVM).
From then on, all winning submissions to ILSVRC used deep neural networks.
If you’re interested, one cool resource for looking at ImageNet performance over time is 
{} <a
href="https://paperswithcode.com/sota/image-classification-on-imagenet"
target="_blank"
rel="noopener noreferrer" >
this
</a>.
</p>

<p>
Studying the progress in ImageNet is helpful because 
you learn what tricks work well on real-world, large-scale datasets.
Indeed, many of the architectures and tricks that are used all over the place in deep learning 
(InceptionNets, ResNets, Batch Norm??, Dropout??)
were originally developed for the ILSVRC competition.
</p>
</div>
        );
    }
}

