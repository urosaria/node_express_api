const User = require("../models/user");

module.exports = class UserService{

    static async getAllUsers(){
        try {
            // const allArticles = await  User.find();
            const user1 = new User ({name: 'Todd', dept: 'Sales', id: 1});
            const user2 = new User ({name: 'Todd2', dept: 'HR', id: 2});
            const user3 = new User ({name: 'Todd3', dept: 'IT', id: 3});

            let userlist = [];
            userlist.push(user1);
            userlist.push(user2);
            userlist.push(user3);

            console.log(userlist + "service");

            return userlist;
        } catch (error) {
            console.log(`Could not fetch articles ${error}`)
        }
    }

    static async getUserbyId(userId){
        try {
            const user1 = new User ({name: 'Todd', dept: 'Sales', id: 1});
            return user1;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    static async getUsersbyDept(dept){
        try {
            const user1 = new User ({name: 'Todd', dept: 'Sales', id: 1});
            return user1;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

}
