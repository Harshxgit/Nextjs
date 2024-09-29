import React from 'react'

import { getServerSession } from 'next-auth'
import { json } from 'node:stream/consumers'
import { NEXT_AUTH } from '../lib/auth'

async function page() {
   const session = getServerSession(NEXT_AUTH)
  return (
    <div>page
      {JSON.stringify(session)}
    </div>
  )
}

export default page