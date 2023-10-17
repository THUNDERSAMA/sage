import mysql from "mysql2/promise"
import { NextResponse } from "next/server";

export async function POST(request:any) {
  try {
    const { name, email } = await request.json();
   
    const connection = await mysql.createConnection({
      host: 'sql12.freemysqlhosting.net',
      user: 'sql12654081',
      password:'eAD7GlKj5H',
      port: 3306,
      database: 'sql12654081'
      });
      let ar;
      const [rows, fields] = await connection.execute('INSERT INTO `user` (NAME, TYPE, EMAIL) VALUES ("' + name + '", "GOOGLE", "' + atob(email) + '")');

    const mergedResults = {
      status: 'success',
      results: rows,
    };
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
   
  } catch (error) {
    //console.error("Error:", error);
    return NextResponse.json({
      status: 'error',
      message: 'Request payload error',
      errors:error,
    });
  }

}