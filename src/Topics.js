export class Paper {
    constructor(flavor, title, authors, link, relevance) {
        this.flavor = flavor;
        this.title = title;
        this.authors = authors;
        this.link = link;
        this.relevance = relevance;
    }
}

export class Topic {
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
}

const imagenet = new Topic(
    'ImageNet Architectures and Tricks',
    [
        new Paper(
            'AlexNet',
            'ImageNet Classification with Deep Convolutional Neural Networks',
            [['Alex', 'Krizhevsky'], ['Ilya', 'Sutskever'], ['Geoffrey', 'E.', 'Hinton']],
            'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
            1,
        ),
        new Paper(
            'GoogLeNet',
            'Going Deeper with Convolutions',
            null,
            'https://arxiv.org/abs/1409.4842',
            2,
        ),
        new Paper(
            'Inception-v2/v3',
            'Rethinking the Inception Architecture for Computer Vision',
            null,
            'https://arxiv.org/abs/1512.00567',
            1,
        ),
        new Paper(
            'ResNet',
            'Deep Residual Learning for Image Recognition',
            null,
            'https://arxiv.org/abs/1512.03385',
            3,
        ),
        new Paper(
            'ResNet-v2',
            'Identity Mappings in Deep Residual Networks',
            null,
            'https://arxiv.org/abs/1603.05027',
            1,
        ),
        new Paper(
            'ResNeXt',
            'Aggregated Residual Transformations for Deep Neural Networks',
            null,
            'https://arxiv.org/abs/1611.05431',
            1,
        ),
        new Paper(
            'Batch Norm',
            'Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift',
            null,
            'https://arxiv.org/abs/1502.03167',
            3,
        ),
        new Paper(
            'Dropout',
            'Dropout: A Simple Way to Prevent Neural Networks from Overfitting',
            null,
            'http://jmlr.org/papers/v15/srivastava14a.html',
            2,
        ),
        new Paper(
            'VGG',
            'Very Deep Convolutional Networks for Large-Scale Image Recognition',
            null,
            'https://arxiv.org/abs/1409.1556',
            1,
        ),
        new Paper(
            'Squeeze & Excitation',
            'Squeeze-and-Excitation Networks',
            null,
            'https://arxiv.org/abs/1709.01507',
            2,
        ),
        new Paper(
            'EfficientNet',
            'EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks',
            null,
            'https://arxiv.org/abs/1905.11946',
            3,
        ),
        new Paper(
            'ImageNet',
            'ImageNet: A Large-Scale Hierarchical Image Database',
            null,
            'http://www.image-net.org/papers/imagenet_cvpr09.pdf',
            1,
        ),
        new Paper(
            'Layer Norm',
            'Layer Normalization',
            null,
            'https://arxiv.org/abs/1607.06450',
            1,
        ),
        new Paper(
            'Group Norm',
            'Group Normalization',
            null,
            'https://arxiv.org/abs/1803.08494',
            2,
        ),
        new Paper(
            'Xception',
            'Xception: Deep Learning with Depthwise Separable Convolutions',
            null,
            'https://arxiv.org/abs/1610.02357',
            1,
        ),
    ],
)

const detection = new Topic(
    'Object Detection and Segmentation',
    [
        new Topic(
            'Shallow Stuff',
            [
                new Paper(
                    'Selective Search',
                    'Selective Search for Object Recognition',
                    null,
                    'http://www.huppelen.nl/publications/selectiveSearchDraft.pdf',
                    2,
                ),
                new Paper(
                    'DPM',
                    'Object Detection with Discriminatively Trained Part Based Models',
                    null,
                    'http://cs.brown.edu/people/pfelzens/papers/lsvm-pami.pdf',
                    1,
                ),
                new Paper(
                    'HOG',
                    'Histograms of Oriented Gradients for Human Detection',
                    null,
                    'https://lear.inrialpes.fr/people/triggs/pubs/Dalal-cvpr05.pdf',
                    1,
                ),
            ],
        ),
        new Topic(
            '2D',
            [
                new Paper(
                    'R-CNN',
                    'Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation',
                    null,
                    'https://arxiv.org/abs/1311.2524',
                    2,
                ),
                new Paper(
                    'Fast R-CNN',
                    'Fast R-CNN',
                    null,
                    'https://arxiv.org/abs/1504.08083',
                    2,
                ),
                new Paper(
                    'Faster R-CNN',
                    'Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks',
                    null,
                    'https://arxiv.org/abs/1506.01497',
                    3,
                ),
                new Paper(
                    'Mask R-CNN',
                    'Mask R-CNN',
                    null,
                    'https://arxiv.org/abs/1703.06870',
                    3,
                ),
                new Paper(
                    'Yolo',
                    'You Only Look Once: Unified, Real-Time Object Detection',
                    null,
                    'https://arxiv.org/abs/1506.02640',
                    2,
                ),
                new Paper(
                    'SSD',
                    'SSD: Single Shot MultiBox Detector',
                    null,
                    'https://arxiv.org/abs/1512.02325',
                    1,
                ),
                new Paper(
                    'Fast Yolo',
                    'Fast YOLO: A Fast You Only Look Once System for Real-time Embedded Object Detection in Video',
                    null,
                    'https://arxiv.org/abs/1709.05943',
                    1,
                ),
                new Paper(
                    'U-Net',
                    'U-Net: Convolutional Networks for Biomedical Image Segmentation',
                    null,
                    'https://arxiv.org/abs/1505.04597',
                    2,
                ),
                new Paper(
                    'DeepLab-v3',
                    'Rethinking Atrous Convolution for Semantic Image Segmentation',
                    null,
                    'https://arxiv.org/abs/1706.05587',
                    2,
                ),
            ],
        ),
        new Topic(
            '3D',
            [
                new Paper(
                    'PointNet',
                    'PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation',
                    null,
                    'https://arxiv.org/abs/1612.00593',
                    3,
                ),
                new Paper(
                    'Mesh R-CNN',
                    'Mesh R-CNN',
                    null,
                    'https://arxiv.org/abs/1906.02739',
                    3,
                ),
                new Paper(
                    'PointNet++',
                    'PointNet++: Deep Hierarchical Feature Learning on Point Sets in a Metric Space',
                    null,
                    'https://arxiv.org/abs/1706.02413',
                    1,
                ),
                new Paper(
                    'Frustum PointNet',
                    'Frustum PointNets for 3D Object Detection from RGB-D Data',
                    null,
                    'https://arxiv.org/abs/1711.08488',
                    1,
                ),
                new Paper(
                    'VoxelNet',
                    'VoxelNet: End-to-End Learning for Point Cloud Based 3D Object Detection',
                    null,
                    'https://arxiv.org/abs/1711.06396',
                    2,
                ),
            ],
        ),
    ],
)

const sequential = new Topic(
    'Sequential / NLP',
    [
        new Topic(
            'Sequential Models',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Word Vectors',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Unsupervised',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Attention',
            [
                new Paper(''),
            ],
        ),
    ],
)

const captioning = new Topic(
    'Image Captioning / VQA',
    [
        new Paper(''),
    ],
)

const programs = new Topic(
    'Program Synthesis',
    [
        new Paper(''),
        new Paper(''),
    ],
)

const systems = new Topic(
    'Systems for ML',
    [
        new Topic(
            'Small Models',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Quantization',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Model Serving',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Graph Compilation',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Distributed Training',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Training with Low Memory',
            [
                new Paper(''),
            ],
        ),
    ],
)

const theory = new Topic(
    'Theory',
    [
        new Topic(
            'Generalization',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Information Bottleneck',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Neural Tangent Kernel',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Robustness',
            [
                new Topic(
                    'Adversarial Robustness',
                    [
                        new Paper(''),
                    ],
                ),
                new Topic(
                    'Non-Adversarial Robustness',
                    [
                        new Paper(''),
                    ],
                ),
            ],
        ),
        new Topic(
            'Optimization',
            [
                new Topic(
                    'Optimizers',
                    [
                        new Paper(''),
                    ],
                ),
                new Topic(
                    'Non-Optimizers',
                    [
                        new Paper(''),
                    ],
                ),
            ],
        ),
    ],
)

const nas = new Topic(
    'Neural Architecture Search',
    [
        new Topic(
            'Random Search',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'RL Based',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Hierarchical',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Differentiable',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Evolutionary',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Weight Tying',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Other',
            [
                new Paper(''),
            ],
        ),
    ],
)

const augmentation = new Topic(
    'Augmentation',
    [
        new Paper(''),
    ],
)

const unsupervised = new Topic(
    'Unsupervised Learning',
    [
        new Topic(
            'Generative Adversarial Networks',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Style Transfer and Colorization',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Autoregressive Models',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Normalizing Flows',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Variational Autoencoders',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Other Representation Learning',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Metrics',
            [
                new Paper(''),
            ],
        ),
    ],
)

const rl = new Topic(
    'Reinforcement Learning',
    [
        new Topic(
            'Q Learning',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Policy Gradients',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Model-Based RL',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Meta RL',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Goal-Conditioned RL',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Off-Policy RL',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Inverse RL / Reward Learning',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Imitation Learning',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Exploration',
            [
                new Paper(''),
            ],
        ),
        new Topic(
            'Self-Play',
            [
                new Paper(''),
            ],
        ),
    ],
)

const meta = new Topic(
    'Meta Learning',
    [
        new Paper(''),
    ],
)

const misc = new Topic(
    'Miscellaneous',
    [
        new Paper(''),
    ],
)
        

export const allTopics = [
    imagenet,
    detection,
    sequential,
    captioning,
    programs,
    systems,
    theory,
    nas,
    augmentation,
    unsupervised,
    rl,
    meta,
    misc,
]

