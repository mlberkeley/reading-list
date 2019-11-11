import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>

<p>
Image classification, despite being the first and most fruitful tasks of deep computer vision, isn’t a particularly useful task on it’s own. Far more frequently, we care about localization as well: not just what, but also where are the interesting things in the image. Most visual experience contains multiple objects, and the location of those objects is often key to the task at hand, think of autonomous driving or tumor identification; both tasks require localization in addition to semantic understanding. Most broadly, we care about finding functions from images to structured output, such as a set of boxes or pixel-wise predictions.
</p>

<p>
Detection refers to the task of mapping from input images to a set of bounding boxes with location and class information for each (major) object in the image. The number of detections is variable, and the outputs are quite heterogeneous (regression + distribution over classes), as such the architectures for detection tend to be heavier, more complex, and more prone to bugs and subtle failures. Measures of quality for detection are more complex than those for classification.
</p>

<p>
Detection methods generally fall into two categories: single and multistage. Multistage detection, also called two stage detection, splits the problem into two phases: extracting the objects, and then predicting information about the objects. The R-CNN family of models, for instance, extracts regions (bounding boxes) from an image and then classifies them and adjusts the bounding boxes separately. Single stage detectors only involve a single pass through a network which outputs all of the information needed. Single stage detectors tend to be much faster, but less accurate, than two stage methods. Significant research has gone into trying to close this gap.
</p>

<p>
In addition to bounding boxes, one can predict pixel-wise outputs. For instance, pixel-wise classification is referred to as segmentation, judging to what object (instance segmentation) or what type of object (semantic segmentation) a particular pixel belongs to. One can also perform pixel-wise regression, an example of which is monocular depth estimation (at each pixel, how far is it away in 3-space?).
</p>

<p>
Finally, structured outputs can predict 3d information from a 2d image. Such tasks have ripe potential for research, as many problems are still unsolved.
</p>

</div>
        );
    }
}

