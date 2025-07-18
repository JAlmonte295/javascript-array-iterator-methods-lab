
// ------INVENTORS-------

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// ------PEOPLE-------

const people = [
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

// ------TRAVEL METHODS-------

const travelMethods = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

// -------DEVS---------

const devs = [
  { name: 'Alex', year: 1988 },
  { name: 'Dani', year: 1986 },
  { name: 'Matt', year: 1970 },
  { name: 'Wes', year: 2015 },
];

// -------COMMENTS-------

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];


// Excersise 1

let veryOldInventors = [];

const result = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1599) {
        veryOldInventors.push(inventor);
    }
});

// console.log('Exercise 1 my result: ', veryOldInventors);
// console.log('Exercise 1 correct result: ', [
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// ]);

// Excersise 2

let inventorNames = [];

const result2 = inventors.map((inventor) => {
    inventorNames.push({
        first: inventor.first,
        last: inventor.last
    })
});


// console.log('Exercise 2 my result: ', inventorNames);
// console.log('Exercise 2 correct result: ', [
//   { first: 'Albert', last: 'Einstein' },
//   { first: 'Isaac', last: 'Newton' },
//   { first: 'Galileo', last: 'Galilei' },
//   { first: 'Marie', last: 'Curie' },
//   { first: 'Johannes', last: 'Kepler' },
//   { first: 'Nicolaus', last: 'Copernicus' },
//   { first: 'Max', last: 'Planck' },
//   { first: 'Katherine', last: 'Blodgett' },
//   { first: 'Ada', last: 'Lovelace' },
//   { first: 'Sarah E.', last: 'Goode' },
//   { first: 'Lise', last: 'Meitner' },
//   { first: 'Hanna', last: 'Hammarström' },
// ]);


// Exercise 3

let sortedByBirthYear = [];

// const result3 = inventors.sort((a, b) => { //my original attempt, but I forgot about cloning 
//     if (a.year > b.year) {
//         return 1;
//     } else if (a.year < b.year) {
//         return -1;
//     } else {
//         return 0;
//     }
//     const sorted = {};
    
//     sortedByBirthYear.push(a, b);
// });

const clonedInventors = [...inventors]; //clone the original array to avoid mutating it
const clonedInventors2 = inventors.slice(); // another way to clone the original array, (index,index) you can also clone a specific ammount

const result3 = [...inventors].sort((a, b) => a.year - b.year);
sortedByBirthYear.push(...result3); //


// console.log('Exercise 3 my result: ', sortedByBirthYear);
// console.log('Exercise 3 correct result: ', [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// ]);

// Excercise 4

let inventorNamedAda = {};

const result4 = inventors.find((inventor) => {
    if (inventor.first === 'Ada') {
        inventorNamedAda = inventor;
    }
});

// console.log('Exercise 4 my result: ', inventorNamedAda);
// console.log('Exercise 4 correct result: ', {
//   first: 'Ada',
//   last: 'Lovelace',
//   year: 1815,
//   passed: 1852,
// });

// Exercise 5


let firstLast = [];

const fullNames = people.map(person => {
    const [lastName, firstName] = person.split(', ');
    return firstLast.push(`${firstName} ${lastName}`);
});

// console.log('Exercise 5 my result: ', firstLast);
// console.log('Exercise 5 correct result: ', [
//   'Carl Becker',
//   'Samuel Beckett',
//   'Mick Beddoes',
//   'Henry Beecher',
//   'Ludwig Beethoven',
//   'Menachem Begin',
//   'Hilaire Belloc',
//   'Saul Bellow',
//   'Robert Benchley',
//   'Peter Benenson',
//   'David Ben-Gurion',
//   'Walter Benjamin',
//   'Tony Benn',
//   'Chester Bennington',
//   'Leana Benson',
//   'Silas Bent',
//   'Lloyd Bentsen',
//   'Ric Berger',
//   'Ingmar Bergman',
//   'Luciano Berio',
//   'Milton Berle',
//   'Irving Berlin',
//   'Eric Berne',
//   'Sandra Bernhard',
//   'Yogi Berra',
//   'Halle Berry',
//   'Wendell Berry',
//   'Erin Bethea',
//   'Aneurin Bevan',
//   'Ken Bevel',
//   'Joseph Biden',
//   'Ambrose Bierce',
//   'Steve Biko',
//   'Josh Billings',
//   'Frank Biondo',
//   'Augustine Birrell',
//   'Elk Black',
//   'Robert Blair',
//   'Tony Blair',
//   'William Blake',
// ]);

// Exercise 6 

let isAdultPresent = null;

const youngAdults = devs.map(dev => 
    (2025 - dev.year) >= 18
);

isAdultPresent = youngAdults.includes(true); //originally just had adults but it kept showing the boolean for each dev.


// console.log('Exercise 6 my result: ', isAdultPresent);
// console.log('Exercise 6 correct result: ', true);

// Exercise 7

let isEveryone19OrOlder = null;

const adults = devs.every(dev => 
    (2025 - dev.year) >= 19
);

isEveryone19OrOlder = adults;

// console.log('Exercise 7 my result: ', isEveryone19OrOlder);
// console.log('Exercise 7 correct result: ', false);

// Exercise 8

let commentById = {};

const findID = comments.find(comment => 
    comment.id === 823423
);

commentById = findID;

// console.log('Exercise 8 my result: ', commentById);
// console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });

// Exercise 9

let idx = null;

const findIndex = comments.findIndex(comment =>
    comment.id === 123523
);

idx = findIndex;

// console.log('Exercise 9 my result: ', idx);
// console.log('Exercise 9 correct result: ', 3);

// Level Up Ex1

let totalYearsLived = 0;

const lifeSpan = inventors.reduce((acc, inventor) => {
    return acc + (inventor.passed - inventor.year);
}, 0); //forgot about the 0 initial value T_T

totalYearsLived = lifeSpan;


console.log('Level Up 1 my result: ', totalYearsLived);
console.log('Level Up 1 correct result: ', 861);

// Level Up Ex2

let travelMethodCounts = {};

const travelTimes = travelMethods.reduce((acc, travel) => {
    if (acc[travel]) {
        acc[travel] += 1;
    } else {
        acc[travel] = 1;
    }
    return acc;
}, {}); // and then I added 0 T_T...

travelMethodCounts = travelTimes;

// I wonder if reduce automaticall adds ":"?

// console.log('Level Up 2 my result: ', travelMethodCounts);
// console.log('Level Up 2 correct result: ', {
//   car: 5,
//   truck: 3,
//   bike: 2,
//   walk: 2,
//   van: 2,
// });