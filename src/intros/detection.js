import React from 'react';

export const contributors = ['Chris Bender', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>

<p>
Image classification, despite being a well-expored task in computer vision research, 
isn’t a particularly useful task on its own.
Far more frequently, we care about localization as well: 
Not only identifying if an object exists in an image, but also where in the image it is.
Most computer vision tasks are helped by this location information;
for example, when driving an autonomous car, we care about identifying the
exact location of other cars in the frame, not only whether a car exists or not.
</p>

<p>
Object Detection refers to the task of mapping from input images 
to a set of bounding boxes with location and class information for each desired 
object type in the image.
Since the number of detections is variable and we need to predict both
bounding boxes and classes, the architectures for object detection 
tend to be more complex and prone to bugs and subtle failures.
Also, it is not as clear how to measure object detector performance
(most people use 
{} <a
    href="https://medium.com/@jonathan_hui/map-mean-average-precision-for-object-detection-45c121a31173"
    target="_blank"
    rel="noopener noreferrer" >
        Mean Average Precision
</a>,
but there are still hyperparameters that you need to pick).
</p>

<p>
Detection methods generally fall into two categories: 
single-stage and multi-stage. 
Multistage detection, also called two stage detection, splits the problem into two phases: 
extract locations of potential objects within the image, then predict the class
of the potential objects.
The R-CNN family of models takes this approach.
Single-stage detectors, in contrast, only involve a single pass through a network 
which outputs all of the desired information.
Single stage detectors tend to be much faster, but less accurate, than two stage methods.
</p>

<p>
In addition to bounding boxes, one can also predict pixel-wise class information.
This task of labelling the class of every single pixel in the image is known as
<i>semantic segmentation</i>.
Closely related is the task of <i>instance segmentation</i>, where we desire to 
not only label the class of every pixel, but also distinguish between different instances
of the same class.
For example, in the self-driving setting,
a semantic segmentation network would label all the cars in the image with the
class "Car", while an instance segmentation network would label each car
with the class "Car" and a different index.
</p>

<p>
2D object detection and segmentation are very common tasks for applied computer vision,
but there exist more complex tasks with structured outputs:
For example, one can do object detection on 3D point cloud data, 
or one can do pixelwise regression for monocular (i.e., from a single image) depth estimation.
</p>

</div>
        );
    }
}

