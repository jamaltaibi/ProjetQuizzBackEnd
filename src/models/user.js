const connection = require ('../../config/db');

class User {
    //Create
    static addUser(userData, callback){
        connection.query("INSERT INTO user (name_user, email_user, mdp_user) VALUES (?, ?, ?)", userData,callback)
    }
    // Read 
    static getUser(callback){
        connection.query("SELECT * FROM User", callback);
    }
    // Update
    static updateUser(userData, userId, callback){
        const queryData = [...userData,userId];
        connection.query("UPDATE User SET email_user=?, mdp_user=? WHERE id = ?", queryData, callback );
    }
    // Delete
    static deleteUser(userId,callback){
        connection.query("DELETE FROM User WHERE id=?", userId, callback);
    }

    // Read conditions id
    static getUserById(userId,callback){
        connection.query("SELECT * FROM User WHERE id=?",userId, callback);
    }
    //Read conditions email
    static getUserByEmail(email, callback){
        connection.query("SELECT * FROM User WHERE email_user = ?", email, callback);
    }
}

module.exports = User;