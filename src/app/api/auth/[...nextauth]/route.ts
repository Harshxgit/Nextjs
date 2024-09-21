import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : "Email",
            credentials :{
                username :{label : 'username' , type : 'text' , placeholder : "email"},
                password :{label : 'password' , type : 'text' , placeholder : "password"}
            },
            async authorize(credentials:any){
                return{
                    id :"user1"
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
})


export {handler as GET , handler as Post}













// export function GET(req:NextRequest, arg : any){
//     // console.log(arg.params.authRoutes)
//     // params:{
//     //     authRoutes : string []
//     // }
//     return NextResponse.json({
//         "message" : "hello harshu"
//     })
// }

// export function POST(){
//     return NextResponse.json({
//         "message" : "hello "
//     })
// }