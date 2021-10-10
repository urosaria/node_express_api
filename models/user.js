class User {
    constructor(name, dept, id) {
        this.name = name;
        this.dept = dept;
        this.id = id;
    }
    info () {
        return this.name + this.dept;
    }
    getId (id){
        return this.id;
        //return this.findAll
    }
}

const user1 = new User ({name: 'Todd', dept: 'Sales'});
const user2 = new User ({name: 'Todd2', dept: 'HR'});
const user3 = new User ({name: 'Todd3', dept: 'IT'});

let userlist = [];
userlist.push(user1);
userlist.push(user2);
userlist.push(user3);

module.exports = User;
