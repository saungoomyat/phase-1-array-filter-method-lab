// Code your solution here

 function findMatching(drivers, matchName) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === matchName.toLowerCase() 
    })
  }

  function fuzzyMatch(drivers, fuzzyName) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, fuzzyName.length) === fuzzyName.toLowerCase() 
    })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) {
        return driver.name === argument 
    })
  }
