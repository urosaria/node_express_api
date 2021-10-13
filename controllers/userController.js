"use strict";

const UserService = require('../service/userService')

module.exports = class User{

    static async apiGetAllUsers(req, res, next){
        try {
            const users = await UserService.getAllUsers();
            if(!users){
                res.status(404).json("ERROR")
            }
            res.jsonp({ users: users });
        } catch (error) {
            res.status(500).json({error: error})
        }

    }

    static async apiGetUserById(req, res, next){
        try {
            let id = req.params.id || {};
            const user = await UserService.getUserbyId(id);
            res.json(user);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiGetUsersByDept(req, res, next){
        try {
            let dept = req.params.dept || {};
            const users = await UserService.getUsersbyDept(dept);
            if(!users){
                res.status(404).json("There are no employees in this department.")
            }
            res.jsonp({ users: users });
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}

