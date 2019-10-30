const allTopicFiles = [
    'data/imagenet.json',
    'data/detection.json',
    'data/sequential.json',
    'data/captioning.json',
    'data/programs.json',
    'data/systems.json',
    'data/theory.json',
    'data/nas.json',
    'data/augmentation.json',
    'data/unsupervised.json',
    'data/rl.json',
    'data/meta.json',
    'data/misc.json',
]

export const allTopics = [];
for (let topicFile of allTopicFiles) {
    let data = require('../src/' + topicFile);
    allTopics.push(data);
}

//export const allTopics = [
//    imagenet,
//    detection,
//    sequential,
//    captioning,
//    programs,
//    systems,
//    theory,
//    nas,
//    augmentation,
//    unsupervised,
//    rl,
//    meta,
//    misc,
//]

