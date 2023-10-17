import bcrypt from 'bcrypt';
import base64url from 'base64url';
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

const dbConfig = {
  host: 'localhost',
        user: 'root',
        password:'',
        port: 3306,
        database: 'sage'
};

export default async (req: { method: string; body: { username: any; password: any; }; }, res: { json: (arg0: { message: string; }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) => {
  try{

  if (req.method === 'POST') {
    const { username, password } = req.body;

    console.log(username);
    const connection = await mysql.createConnection(dbConfig);
    var str='SELECT * FROM `user` WHERE STATUS = 0 AND NAME ='+username;
    const [rows] = await connection.execute(
      'SELECT * FROM `user` WHERE STATUS = 0',
      [username]
    );
    connection.end();
      console.log(str);
    // if (rows != null) {
    //   const storedPassword = rows[0].password;

      
    //   const inputPasswordBase64 = base64url.fromBase64(password);
    //   const isPasswordValid = await bcrypt.compare(inputPasswordBase64, storedPassword);

    //   if (isPasswordValid) {
    //     res.json({ message: 'Sign-in successful!' });
    //   } else {
    //     res.status(401).json({ message: 'Invalid username or password.' });
    //   }
    // } else {
    //   res.status(401).json({ message: 'Invalid username or password.' });
    // }
  } else {
    res.status(405).end();
  }
}
catch(error){
  return NextResponse.json({
    status: 'error',
    message: 'Request payload error',
    errors:error,
  });
}
};
