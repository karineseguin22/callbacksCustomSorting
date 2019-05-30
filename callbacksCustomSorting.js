//sort array name and age 

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

  var ageSort = function compare(a, b) {
    if (a.age < b.age) {
        return 1;
    }
    if (a.age > b.age){
        return -1;
    } 
    return 0
    }
    
    


var nameSort = function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    if (a.name === b.name) {
        return ageSort(a,b)
    }
    return 0;
    }

    
    
    //return a - b; 
    //console.log(nameSort)
 



console.log(students.sort(nameSort))

// function compare(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//    }