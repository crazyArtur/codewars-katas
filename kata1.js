/*
If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
*/

function NamedOne(first, last) {
    this.firstN = first;
    this.lastN = last;

    Object.defineProperties(this, {
        "firstName": {
            get: function() { return this.firstN; },
            set: function(name) { this.firstN = name; }
        },
        "lastName": {
            get: function() { return this.lastN; },
            set: function(name) { this.lastN = name; }
        },
        "fullName": {
            get: function() { return this.firstN + ' ' + this.lastN; },
            set: function(name) { let parts = name.split('');
                                this.firstN = parts[0];
                                this.lastN = parts[1];
                            }
        }

        });
//    this.fullName = this.firstName + ' ' + this.lastName;
}

var namedOne = new NamedOne('Naomi', 'Wang');

console.log(namedOne);

namedOne.firstName = "John";
console.log(namedOne);

namedOne.lastName = "Doe";
console.log(namedOne);