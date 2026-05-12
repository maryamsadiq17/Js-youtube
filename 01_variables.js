const accountId = 1234567890
let accountEmail ="john.doe@example.com"
var accountPassword = "password123"
accountCity = "New York"
let accountState;

// accountId = 9876543210 // This will cause an error because accountId is a constant

console.log("Account ID:", accountId)

accountEmail = "jane.doe@example.com"
accountPassword = "newpassword456"
accountCity = "Los Angeles"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])