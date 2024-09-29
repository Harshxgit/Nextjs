"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

import {signOut, signIn, useSession } from 'next-auth/react'
export function Appbar() {
  const session = useSession()
  return (
    <div>
        <button onClick={() => signIn()}>Signin</button>
        <button onClick={() => signOut()}>Sign out</button>

        {JSON.stringify(session)}
      </div>
  )
}
