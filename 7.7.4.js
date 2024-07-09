const person = {
    firstName: "Nata",
    lastName: "Peing",
}

function setFullName(Obj, name) {
    Obj.fullName = name;
}
const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");

console.log(person.fullName);