import users from "./index.js";

// console.log(users);

//task_1
const getUserNames = (users) => users.map((name) => name.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//task_2
const getUsersWithEyeColor = (users, color) => {
  // return users.filter(eye => eye.eyeColor===color).map(el => ("object"), el.name);
  return users
    .filter((user) => user.eyeColor === color)
    .map((el) => console.log( el.name));
};
console.log(`объект`, getUsersWithEyeColor( users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


//task_3
const getUsersWithGender = (users, gender) => {
  const getUserNames = (users) => users.map((name) => name.name);
  return users
    .filter((user) => user.gender === gender)
    .map((el) => console.log(el.name));
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task_4
const getInactiveUsers = users => {
  return users
  .filter((user) => user.isActive === false)
  .map((el) => console.log("object", el.name));
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//task_5
const getUserWithEmail = (users, email) => {
  return users.find((lm) => lm.email === email);
  // .map((elem) => console.log("object", elem.name));
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//task_6
const getUsersWithAge = (users, min, max) => {
  return users.filter((lm) => lm.age < max && lm.age > min);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task_7
const calculateTotalBalance = (users) => {
  return users.reduce((total, el) => total + el.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//task_8
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((lm) => lm.friends.includes(friendName))
    .map((lm) => lm.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//task_9
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((min, max) => min.friends.length - max.friends.length)
    .map((lm) => lm.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//task_10
const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, lm) => {
      allSkills.push(...lm.skills);
      return allSkills;
    }, [])
    .reduce((uniqSkills, lm) => {
      if (!uniqSkills.includes(lm)) {
        uniqSkills.push(lm);
      }
      return uniqSkills;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
