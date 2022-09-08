let user = {
    name: "Louis",
    lastName: "Ferrari",
    "Likes birds": true
}
// Can add values to it afterwards
// user.name
// dot access doesn't work for multiword properties
// Square access notations
// user["property"]
// Square brackets can also get a property name as a result of an expression.
user.isAdmin = true;

console.log(user.name)
console.log(user["Likes birds"]);

function sayHello() {

}



