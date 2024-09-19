import { NextRequest } from "next/server";

export function GET(){
    //database logic
    return Response.json({
        email : "harshupahade@gmail.com",
        name : "harshit"
    })
}
export async function  POST(req : NextRequest){
    //extract body
    const body = await req.json()
    return Response.json({
        "message" : "request accepted"
    })
}