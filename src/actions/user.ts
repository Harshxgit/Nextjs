"use server"

import client from "../../db"
import { NextResponse } from "next/server"
export async function signup(email : string , password : string){

    const user = await client.user.create({
        data :{
        username :email,
        password :password
        }
    })
    return NextResponse.json({
        "message" : "done"
    })

}