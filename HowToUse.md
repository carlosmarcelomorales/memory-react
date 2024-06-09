# Read before starting

## Installation

First of all, let's clone the repository:

> git clone https://github.com/carlosmarcelomorales/memory-react.git

> cd memory-react

We will need to install all the dependencies:

> npm install

## Start the game

To start the server we will need to use:

> npm start

Then we will need to go to: `http://localhost:3000`

## Run Tests

For running the test we will need to run

> npm test

This will run all the unit and integration tests.

If we want to see the code coverage we can use:

> npm run test:coverage

# Structure

All the code is on the **src** folder. Inside you will find the App folder, which is the init state. There will be the
code, styles and test.

Inside the components folder, we will find all the components that I used. On the folder of screens we will find the
different types of screen that I decided to use: Defeat, Game, Menu, Victory.

For every component, we will find on the folder the code (**.jsx**), the styles and the tests.

Lastly, on the folder hooks we will find the custom hooks, that in this case I only used one: **useContributors**.

The structure follow this tree:

```
src/
├─ App/
├─ components/
│  ├─ screens/
│  │  ├─ VictoryScreen/
│  │  ├─ GameScreen/
│  │  ├─ Menu/
│  │  ├─ DefeatScreen/
│  ├─ Countdown/
|  ├─ Modal/
│  ├─ Card/
│  ├─ Board/
├─ hooks/
```

# Relevant information

It was not my first time writing unit test, however it was a big project that I had to do on my own and I faced problems
and decisions that I didn't have to face before, so it was a valuable experience to improve my understanding of React
and how to better work with it.

As I mentioned in previous interviews, working with React or doing a project with React and on my own is a challenge,
since I'm more focused on the backend (PHP). So this task helped me to understand better how to create and organize a
project from zero, even there are things that I would like to do better.

I'm used to other patterns of architecture, like DDD, Hexagonal Architecture, but in projects with React I was not sure
how to apply it. I was reading before starting the project and I tried to find this model of architecture that I used,
because I thought that for a small project would be good and structured. However, if the project grows I would need to
find another way of doing it.

# How would be in the future

I've tried to follow best practices and doing the code as structured and clear as possible, however there are some
things
that I would change with more time.

* The **App** component has more logic than I would like. One thing that I would do, for example is create a React
  Context
  so that I could define there some business logic and then the component would be clear.

* Same with the **useContributors** custom Hook. There is a lot of logic there that I would like to move somewhere else,
  even at this moment I'm not 100% sure what would be the best approach.

* Lastly, the **Board** component has this function **handleCardClick** that is huge. If I had more time I would extract
  parts of this function to methods and maybe move this code somewhere else.

* Also with more time I would improve the designs and the responsive so that looks better.

# Conclusion

This task was a good opportunity to demonstrate and consolidate my knowledge about react and it's environment. In my
opinion it was not an easy task and I had to think several times about how to do something, but I really enjoyed doing
it
and I became a better developer after this.

With this, I wanted to thank you for the opportunity and for considering my candidacy.

Please, let me know if you have any question!