import loremIpsum from 'lorem-ipsum';

// Helper function to get random int number
function rndm(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// helper function to get random float number
function rndmDecimal(min, max) {
  const number = Math.random() * (max - min) + min;
  return Math.round(number * 100) / 100;
}

// List of random durations
const randomDurations = [
  13,
  14,
  22,
  30,
  35,
  42,
  45,
  50,
  55,
  60,
  70,
  85,
  90,
  120,
];

// List of random titles to construct random names of tasks
const randomTitleVerb = [
  'Do',
  'Design',
  'Play',
  'Delete',
  'Trash',
  'Water',
  'Run',
  'Hire',
  'Complete',
  'Destroy',
  'Eat',
  'Smoke',
  'Mesure',
  'Split',
  'Split',
  'Kiss',
];

// list of random subjects to generate random task names
const randomTitleSubject = [
  'the dog',
  'the plants',
  'my friend',
  'the card',
  'the cigar',
  'the house',
  'the car',
  'my chair',
  'my sandwich',
  'the cake',
  'the floor',
  'the office',
  'the splinter',
  'my face',
];

// Combine the subject and the verb to generate a random task name
export const GenRandomTitle = () =>
  `${randomTitleVerb[rndm(randomTitleVerb.length - 1)]} ${
    randomTitleSubject[rndm(randomTitleSubject.length - 1)]
  }`;

// Use Lorem Ipsum to generate descriptions
export const GenRandomDescription = () =>
  loremIpsum({ count: rndm(3), units: 'paragraphs' });

export const GenRandomDuration = () =>
  randomDurations[rndm(randomDurations.length - 1)];

export const GenRandomTask = () => {
  const name = GenRandomTitle();
  const description = GenRandomDescription();
  const duration = GenRandomDuration();
  const timeDone = Math.round(duration * rndmDecimal(0.8, 1) * 100) / 100;
  const status = timeDone === duration ? 'CMP' : 'SRT';

  return {
    name,
    description,
    duration,
    timeDone: timeDone * 60,
    status,
  };
};
