import React from 'react';

export const contributors = ['Brian Friedenberg', 'Phillip Kravtsov'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Systems for ML, not to be confused with ML for Systems, aims to build performant, robust, systems to train and deploy complex ML algorithms. The systems which we use to run ML underly quite literally every application ML has. To illustrate, autonomous driving needs robust systems to run deep models in real-time on potentially limited hardware. All training of large deep models relies on efficient frameworks and hardware for computation and strategies to split computation across multiple machines and GPU’s. Google Translate and Assistant are massively complex systems which serve large deep learning models to millions of users.
</p>

<p>
Much of the advances in the current ML wave can, at least partially, be traced back to drastic systems improvements. For instance, much of the AlexNet paper discusses how to fit a large neural network across two GPU’s, enabling much faster training for larger models than was possible beforehand. Research in systems for ML broadly aims to better map ML algorithms on to hardware, and focuses on creating efficient, robust software+hardware systems to train and deploy ML algorithms. We enjoy the fruits of this labor in the form of faster training and inference, models served at scale, and better software for deployment of models.
</p>

<p>
Since 2012, deep learning systems research has made improvements in a number of key areas. These include efficient hardware, strategies for faster distributed training, quantization of networks for faster inference, faster and easier-to-use deep learning frameworks, systems for serving ML models, and training under constraints.
</p>

<p>
To get a quick understanding of what we’re looking at, feel free to glance at the
{} <a
    href="https://ucbrise.github.io/cs294-ai-sys-fa19/"
    target="_blank"
    rel="noopener noreferrer" >
        Berkeley ML Systems Course
</a>. Much of the content here comes, in part, from that course. The intro slides give a broad overview.
</p>

</div>
        );
    }
}

