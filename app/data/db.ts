import mysql from "mysql2";

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "next_test",
	password: "root",
	port: 8889,
});

export default pool.promise();