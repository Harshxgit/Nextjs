import { NextRequest ,NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client/extension";
const client = new PrismaClient()
// export function GET(){
//     //database logic
//     return Response.json({
//         email : "harshupahade@gmail.com",
//         name : "harshit"
//     })
// }

export async function  POST(req : NextRequest ){
    //extract body
    const body = await req.json()
    const user = await client.user.create({
        data :{
        username : body.email,
        password :body.password
        }
    })
    return NextResponse.json({
        
    })
}