export const allTopicFiles = [
    'intro',
    'imagenet',
    'detection',
    //'programs',
    'systems',
    'unsupervised',
    'theory',
    'nas',
    //'augmentation',
    'rl',
    'sequential',
    'captioning',
    //'meta',
    'misc',
]

export const allPapers = [];
for (let topicFile of allTopicFiles) {
    let paper = require('../src/papers/' + topicFile + '.json');
    allPapers.push(paper);
}

export const allFlattenedPapers = {};
let queue = [];
let rootTopicIndex = 0;
for (let topic of allPapers) {
    queue.push([rootTopicIndex, topic]);
    rootTopicIndex++;
}
while (queue.length > 0) {
    let item = queue.pop();
    let rootTopicIndex = item[0];
    item = item[1];
    if (item.hasOwnProperty('children')) {
        for (let child of item.children) {
            queue.push([rootTopicIndex, child]);
        }
    } else {
        item.rootTopicIndex = rootTopicIndex;
        let key = item.flavor ? item.flavor : item.title;
        allFlattenedPapers[key] = item;
        if (!item.link) {
            console.warn("Paper has no link: " + key);
        }
    }
}

