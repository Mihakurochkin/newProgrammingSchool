function User(name, age) {
    this.name = name;
    this.age = age;
    if(this.age < 18) {
        this.status = 'kid';
        return console.log('Hello, ' + this.name + '! ' + 'You are just kid(');
    }
    this.status = 'admin';
    return console.log('Hello, ' + this.name + '! ' + 'You are already adult)')
}

console.log(new User('Yevheniy', 19));