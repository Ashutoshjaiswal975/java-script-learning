 const account_Id =144553 // it is paermanent constant... not changable at any cost
let account_Email = "ashutosh,jaiswal.a901@gmail.com"
var account_password = "12345"
account_city= "jaipur"
console.log(account_Id);
/* var is not used in  modern days, because it does not used because it create confusion usig  scope means {}

because of issue in block scope and fuunction scope
*/
account_Email = "ashutosh"
account_password = "12"
account_city= "punjab"
let accountState;
console.table([account_Id, 
    accountState,account_Email,account_password,account_city])
