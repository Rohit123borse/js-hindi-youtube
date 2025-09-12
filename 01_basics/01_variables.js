const accountId = 144553
let accountEmail = "rohot@borse.com"
var accountPassword = "12345"
accountcity = "jaipur"

// accountId = 2 not allawed 

accountEmail = "ro@borse.com"
accountPassword = "21212121"
accountcity = "bengaluru"

/* prefer not to use var
   because of issue in block scope and functional scope
   */
console.table([accountEmail, accountPassword, accountcity])
