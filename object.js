/* object in Javascript*/

var person = {
	firstName: 'Jay',
	lastName: 'Chou',
	getName:function(){
		return this.firstName + ' ' + this.lastName;
	},
	address: {
		zip: 33333,
		street: '123 somewhere st'
	}
};

console.log(person.address.street);