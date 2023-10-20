import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import mysql from "mysql2/promise"
const authOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
        }),
        CredentialsProvider({
          name: "Credentials",
    
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            email: { label: "email", type: "text", placeholder: "abc@gmail.com" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials, req) {
            //  logic here to look up the user from the credentials 
              console.log("hello");
              console.log(credentials?.username);
            try
            {
              var name=credentials?.username;
               var email= credentials?.email;
               var password= credentials?.password;
              const res = await fetch("http://localhost:3000/api/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                password,
              }),
            });
            const user = await res.json();
            console.log("from signup");
    console.log(user);
            if (user) {
              return user;
            } else {
              return null;
            }}
            catch(e){
              console.error(e);
            }
          },
        }),
    ],
    callbacks: {
        async signIn({ user, account }:any) {
          if (account.provider === "google") {
            const { name, email } = user;
            try {
   
                const connection = await mysql.createConnection({
                    host: 'sql12.freemysqlhosting.net',
                    user: 'sql12654081',
                    password:'eAD7GlKj5H',
                    port: 3306,
                    database: 'sql12654081'
                  });
                  let ar;
                
                  const [rows, fields] = await connection.execute('SELECT * FROM `user` WHERE STATUS=0 AND EMAIL = ?',[btoa(email)]);
    
              if (!rows) {
                const res = await fetch("/api/user", {
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
                  console.log("from g auth");
                  console.log(user);
                  return user;
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
          console.log("from g auth 2nd");
          console.log(user);
          return user;

        },
    },
    callbackUrl: "/Store",
};
const handler =NextAuth(authOptions);
export {handler as GET, handler as POST}