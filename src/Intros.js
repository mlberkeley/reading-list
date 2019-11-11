import { allTopicFiles } from './Papers.js'

export const contributorToEmail = {
    'Chris Bender': 'chris@ml.berkeley.edu',
    'Phillip Kravtsov': 'phillipk@ml.berkeley.edu',
    'Brian Friedenberg': 'brian@ml.berkeley.edu',
    'Murtaza Dalal': 'mdalal@ml.berkeley.edu',
    'Rohan Taori': 'rohan@ml.berkeley.edu',
    'Brandon Trabucco': 'btrabucco@berkeley.edu',
};

export const allContributors = [];
export const allIntros = [];
for (let topicFile of allTopicFiles) {
    let { contributors, Intro } = require('../src/intros/' + topicFile + '.js');
    allContributors.push(contributors);
    allIntros.push(Intro);

}

