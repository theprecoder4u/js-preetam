const accountId = 8120
let accountEmail = "hitesh@google.com"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed
accountEmail = "preet@goo.com"
accountPassword = "276278"
accountCity= "Bengaluru"
console.log(accountId);


/*
Prefer not to use var
Because of issue in block scope and functional
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);


