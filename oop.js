//write Person class which accept the name at constructor and Action method which return their name and action.  

class Person{ //class Classes are in fact "special functions"
	constructor(firstName, lastName){ //The constructor method is a special method for creating and initializing an object created within a class.
	  this.firstName = firstName;
	  this.lastName = lastName;
	  }
	Action() { //method
		return this.firstName+ " " + this.lastName + " can Dance";
	}
};

var Student =new Person("Chit","Maung");
console.log(Student.Action());

class Programmer extends Person{
	constructor(firstName){
		super (firstName); //The super keyword is used to access and call functions on an object's parent.
	}

	code() {
		return this.firstName + ' can code';
	}
	
}

var frontEndDeveloper = new Programmer("ahkeno","maung");
console.log( frontEndDeveloper.code());




