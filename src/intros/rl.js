import React from 'react';

export const contributors = ['Murtaza Dalal', 'Chris Bender'];

export class Intro extends React.Component {
    render() {
        return (
<div>
<p>
Reinforcement learning is the study of <i>sequential decision making under uncertainty</i>.
In contrast to most tasks in computer vision and natural language processing
that can be cast as simple input-output function approximation problems,
reinforcement learning tackles the problem of agents acting in an environment,
where the agent seeks to optimize a (unknown) reward function over many timesteps.
For a more detailed explanation on Markov Decision Processes
(the basic framework that RL algorithms work in), take a look at
{} <a 
    href="https://www.geeksforgeeks.org/markov-decision-process/"
    target="_blank"
    rel="noopener noreferrer" >
        this
</a> {}
post.
</p>

<p>
Note that RL algorithms assume no properties of the reward function
(we don't even assume that it is differentiable).
So, this allows for RL to be used as a framwork for a large
variety of problems; indeed, many impressive results in machine learning
recently, from 
{} <a 
    href="https://openai.com/blog/learning-dexterity/"
    target="_blank"
    rel="noopener noreferrer" >
        robotic hand manipulation 
</a> {}
to a 
{} <a 
    href="https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii"
    target="_blank"
    rel="noopener noreferrer" >
        StarCraft bot 
</a> {}
have
been because of advances in RL.
</p>

<p>
The papers in this section begin with a look at the very common
algorithms that are used in a wide array of tasks, including both model-free
RL algorithms such as Q-learning and policy-gradient-based methods, and
model-based algorithms. 
Then, papers in Meta RL and Off-Policy RL show improvements in the notorious
sample-inefficiency of most RL algorithms.
Next, a series of Goal-Conditioned
RL algorithms show how it is possible to make RL agent more general;
instead of optimizing for a fixed reward, it is possible to train an algorithm
to optimize to be in a given state. Similarly, the papers in Inverse RL add additional
flexibility to the standard RL setup, allowing for the algorithm to learn a reward
function from expert demonstrations.
Finally, papers in exploration and self-play show how to train RL algorithms
by giving rewards for either exploring their environment (curiosity), or 
by performing better than a previous version of themselves (self-play).
</p>
</div>
        );
    }
}

