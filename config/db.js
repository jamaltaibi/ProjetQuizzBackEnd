const mysql = require('mysql2');
require ('dotenv').config();

const connex = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connex.connect((err) => {
    if (err){
        console.log('Erreur de connexion a la base de données:',err);
        
    } else {
        console.log('Connexion a la base de données MYSQL');
        
    }
})

module.exports = connex;