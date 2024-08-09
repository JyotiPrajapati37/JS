const accountId = 12345
let accountEmail = "Jyoti@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.log(accountId);
/*
Prefer not use var
because  of issue in block scope and functional scope
*/

//accountId = 2 

accountEmail = "jp@prompt.com"
accountPassword = "212121"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])