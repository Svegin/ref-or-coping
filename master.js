// start with strings, numbers and booleans
// let age =100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'eu';
// let name2 = name;
// console.log(name, name2);
// name = 'gene';
// console.log(name, name2);
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);
// and we want to make a copy of it.
const team = players;
console.log(team, players);
// You might think we can just do something like this:
// team[3]='Eugene';
// console.log(team, players);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
team2[3]='Eugene';
console.log(team2, players);
// one day

// or create a new array and concat the old one in
const team3 =[].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
team4[3]='Roman';
const team5 =Array.from(players);
console.log('team4', team4, team3, players, 'team5', team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// with Objects
const person ={
  name: 'Eliron',
  age: 6
};


// and think we make a copy:
const cap = person;
// cap.number =99;
console.log('cap', cap, 'person', person);
// how do we take a copy instead?
const CAP2 = Object.assign({}, person, {number:99, age: 12});
console.log('CAP2', CAP2, 'person', person);
// We will hopefully soon see the object ...spread
// const CAP3 = {...person}; not work
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const WW ={
  name:'WW',
  age: 120,
  social: {
    twit:'@WW',
    facebook: 'WW.dev'
  }
};
console.log();
console.log(WW);
const dev= Object.assign({}, WW);//this is working for copying, but only for 1 level, for more deep inserts not working
const dev2 JSON.parse(JSON.stringify(WW));
