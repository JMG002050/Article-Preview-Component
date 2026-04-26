let spaceship = {
   crew: {
   captain: {
       name: 'Lily',
       degree: 'Computer Engineering',
       cheerTeam() { console.log('You got this!') }
       },
   'chief officer': {
       name: 'Dan',
       degree: 'Aerospace Engineering',
       agree() { console.log('I agree, captain!') }
       },
   medic: {
       name: 'Clementine',
       degree: 'Physics',
       announce() { console.log(`Jets on!`) } },
   translator: {
       name: 'Shauna',
       degree: 'Conservation Science',
       powerFuel() { console.log('The tank is full!') }
       }
   }
};


// here crewRole is like the “let i” in a for loop. More exactly, it will be each key name in the object
// for (let crewRole in spaceship.crew) {
//  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`);
// } 

 
// for (let crewDegree in spaceship.crew) {
// console.log(`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`);
// };
