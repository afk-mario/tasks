import loremIpsum from 'lorem-ipsum';

function rndm(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomDurations = [
  '00:30',
  '00:35',
  '00:45',
  '01:10',
  '01:00',
  '01:12',
  '01:25',
  '01:30',
  '01:45',
  '02:00',
];

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
  return {
    name: GenRandomTitle(),
    description: GenRandomDescription(),
    duration: GenRandomDuration(),
  };
};
