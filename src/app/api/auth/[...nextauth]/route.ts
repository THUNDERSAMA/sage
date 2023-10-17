import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import mysql from "mysql2/promise"
const authOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
        }),
    ],
    callbacks: {
        async signIn({ user, account }:any) {
          if (account.provider === "google") {
            const { name, email } = user;
            try {
   
                const connection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password:'',
                    port: 3306,
                    database: 'sage'
                  });
                  let ar;
                
                  const [rows, fields] = await connection.execute('SELECT * FROM `user` WHERE STATUS=0 AND EMAIL = '+btoa(email));
    
              if (!rows) {
                const res = await fetch("http://localhost:3000/api/user", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                  }),
                });
    
                if (res.ok) {
                  return user;
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
    
          return user;
        },
    },
};
const handler =NextAuth(authOptions);
export {handler as GET, handler as POST}