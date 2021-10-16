const User = require("../models/user");
const request = require('request');

module.exports = class UserService{
    static async getAllUsers(){
        try {
            let userlist = [];
            await this.initialUsers('all').then(function (result){
                userlist=result;
            })
            return userlist;
        } catch (error) {
            console.log(`Could not fetch articles ${error}`)
        }
    }

    static async getUsersbyDept(dept){
        try {
            let userlist = [];
            await this.initialUsers(dept).then(function (result){
                userlist=result;
            })
            return userlist;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    /* TEST sample data */
    /* This is basically used randomuser Third party API. */
    /* There are some error about latitude & longitude, it is different to real address. */
    /* Department & position are defined randomly */
    static async initialUsers(dept, result = 10){
        let url = 'https://randomuser.me/api/?inc=name,location,email,phone,id,picture&results='+result;
        return new Promise(resolve=>{
            request(url, function(err, res, body){
                const obj = JSON.parse(body);
                const users = [];
                //console.log('obj: ' + body);

                const randomDept= ['Sales', 'Marketing', 'IT', 'HR'];
                const randomPosition= ['Manager', 'Senior Manager', 'Junior Manager', 'Staff'];

                //test markers=-34.9044,138.6067
                for (const [index, item] of obj.results.entries()) {
                    const name = item.name.first +' '+ item.name.last;

                    // Dept random setting
                    const rand_0_3 = Math.floor(Math.random() * 3);
                    const deptUser = (dept === 'all'?randomDept[rand_0_3]:dept);
                    const positionUser = randomPosition[rand_0_3];

                    const user = new User(name, deptUser, item.email, item.picture.large, item.location,positionUser);
                    users.push(user);
                }
                resolve(users);
            })
        })
    }

}
