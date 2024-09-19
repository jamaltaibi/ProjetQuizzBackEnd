const connection = require ('../../config/db');

class User {
    //Create
    static addUser(userData, callback){
        connection.query("INSERT INTO user (name_user, email_user, mdp_user) VALUES (?, ?, ?)", userData,callback)
    }
    // Update
    static updateUser(userData, userId, callback){
        const queryData = [...userData,userId];
        connection.query("UPDATE User SET name_user = ?, email_user=?, mdp_user=? WHERE id = ?", queryData, callback );
    }
    // Read conditions id
    static getUser(userId,callback){
        connection.query("SELECT * FROM User WHERE id=?",userId, callback);
    }
    // Delete
    static deleteUser(userId,callback){
        connection.query("DELETE FROM User WHERE id=?", userId, callback);
    }
    //Read conditions email
    static getUserByEmail(email, callback){
        connection.query("SELECT * FROM User WHERE email_user = ?", email, callback);
    }
}

module.exports = User;