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
    // Read
    static getUser(callback){
        connection.query("SELECT * FROM User", callback);
    }
    // Delete
    static deleteUser(userId,callback){
        connection.query("DELETE FROM User WHERE id=?", userId, callback);
    }
}

module.exports = User;