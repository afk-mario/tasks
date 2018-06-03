import loremIpsum from 'lorem-ipsum';

function rndm(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rndmDecimal(min, max) {
  const number = Math.random() * (max - min) + min;
  return Math.round(number * 100) / 100;
}

const randomDurations = [30, 35, 45, 70, 60, 72, 85, 90, 105, 120];

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

export const GenRandomTitle = () =>
  `${randomTitleVerb[rndm(randomTitleVerb.length - 1)]} ${
    randomTitleSubject[rndm(randomTitleSubject.length - 1)]
  }`;

export const GenRandomDescription = () =>
  loremIpsum({ count: rndm(3), units: 'paragraphs' });

export const GenRandomDuration = () =>
  randomDurations[rndm(randomDurations.length - 1)];

export const GenRandomTask = () => {
  const name = GenRandomTitle();
  const description = GenRandomDescription();
  const duration = GenRandomDuration();
  const timeDone = Math.round(duration * rndmDecimal(0.8, 1) * 100) / 100;
  const status = timeDone == duration ? 'CMP' : 'SRT';

  return {
    name,
    description,
    duration,
    timeDone,
    status,
  };
};
