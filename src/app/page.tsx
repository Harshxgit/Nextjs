
import client from "../../db"
//no need to call directly prisma
async function getUserData(){
  try{
  const user = await client.user.findFirst({})
  return {name : user?.username}
  }catch(e){
    console.log(e)
  }
}

//async component
export default async function render (){
  //First fetch it then render it.wait for fetching data , then render this component
  const userData = await getUserData();
  return <>
  <div className="h1 text-9xl text-center p-4">
    <h1>hii there</h1>
    {userData?.name}
   
  </div>
  </>
}