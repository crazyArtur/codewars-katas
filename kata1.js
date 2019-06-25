function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}

var namedOne = new NamedOne("Naomi","Wang");

console.log(namedOne);

namedOne.firstName = "John";
console.log(namedOne);

namedOne.lastName = "Doe";
console.log(namedOne);