import { NextResponse } from "next/server";
import mysql, { RowDataPacket } from "mysql2/promise";
import bcrypt from "bcrypt";
export async function POST(request:any) {
    try{
        const { name, email, password }= await request.json();

        const connection = await mysql.createConnection({
            host: 'sql12.freemysqlhosting.net',
            user: 'sql12654081',
            password:'eAD7GlKj5H',
            port: 3306, 
            database: 'sql12654081'
            });
            const [existingUser] = await connection.execute<RowDataPacket[]>('SELECT * FROM `user` WHERE EMAIL = ?', [email])
            if(existingUser.length>0){
              return NextResponse.json({
                status: 'error',
                message: 'Email already in use'
              })
            }

            const hashedPassword= await bcrypt.hash(password, 10);
            let ar;
            const [rows] = await connection.execute('INSERT INTO `user` (NAME, EMAIL, PASSWORD) VALUES ("'+ name +'","'+ email +'","'+ hashedPassword +'")');
           // [name, email, password, confirmpassword]
          const mergedResults = {
            status: 'success',
            results: rows,
          };
          return NextResponse.json({ message: "User Registered" }, { status: 201 });
         
        } catch (error) {
          return NextResponse.json({
            status: 'error',
            message: 'Request payload error',
            errors:error,
          });
    }   
}