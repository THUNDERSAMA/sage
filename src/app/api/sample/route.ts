import { NextResponse } from "next/server";
import mysql from "mysql2/promise"
import { useSession, getSession } from "next-auth/react";
export async function POST(request: any) {
  try {
   // const {data} = await request.json();
   
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        port: 3306,
        database: 'sage'
      });
      let ar;
      const [rows, fields] = await connection.execute('SELECT * FROM `user` WHERE STATUS=0');
      // console.log(rows);
   

    const mergedResults = {
      status: 'success',
      results: rows,
    };
    return NextResponse.json(mergedResults);
  } catch (error) {
    //console.error("Error:", error);
    return NextResponse.json({
      status: 'error',
      message: 'Request payload error',
      errors:error,
    });
  }
}