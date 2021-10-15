const findTheOldest = function(peoples) {
  
  const ages = peoples.map((people) => {
    if ('yearOfDeath' in people)
      return people.yearOfDeath - people.yearOfBirth;
    else {
      const dt = new Date();
      return dt.getFullYear() - people.yearOfBirth;
    }
  })

  const oldest = Math.max(...ages);
  return peoples[ages.findIndex((age) => age === oldest)];
};

// Do not edit below this line
module.exports = findTheOldest;
