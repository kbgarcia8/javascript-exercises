const findTheOldest = function() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let people = arguments[0];

    let ageArr = [];
    //for loop - age computation
    for(let i = 0; i<people.length; i++) {
      people[i].age = 0;
      //check if a key same the given argument is existing
      if (people[i].hasOwnProperty('yearOfDeath')) {
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        ageArr.push(people[i].age);
      } else {
        //assume still alive if no yearOfDeath
        people[i].age = currentYear - people[i].yearOfBirth;
        ageArr.push(people[i].age);
      }
    }

    const oldestAge = ageArr.reduce((max, currentValue) => {
        return currentValue > max ? currentValue : max;
    }, ageArr[0]);
    /*returns the highest number in the array; max and currentValue are declared variables.
      initial value is the first value of the array
      return statement is as follows: return (condition) ? if-true_value : if-false_value;
    */
    //for loop for getting name of oldest
    for(let i = 0; i<people.length; i++) {
      if (people[i].hasOwnProperty('age') && people[i]['age'] === oldestAge) {
        return people[i];
      }
    }
  };

// Do not edit below this line
module.exports = findTheOldest;