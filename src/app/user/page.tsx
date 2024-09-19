import React from 'react'

async function fetchData(){
    await new Promise(r=>setTimeout(r,3000))
}

async function page() {
    const data = await fetchData()
  return (
    <div>page</div>
  )
}

export default page