import axios from "axios"
async function getUserData(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}

//async component
export default async function render (){
  //First fetch it then render it.wait for fetching data , then render this component
  const userDatat = await getUserData();
  return <>
  <div className="h1 text-4xl text-center p-4">
    {userDatat.name}
  </div>
  </>
}