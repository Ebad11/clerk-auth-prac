import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
const navbar = () => {
  return (
    <div className='flex justify-between items-center my-10 px-6'>
        <div className="logo font-bold text-xl">Clerk Template</div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Services</li>
        </ul>
        <SignedOut>
            <SignInButton>
                <div className="button bg-green-300 px-3 py-2 rounded-lg"> Sign In </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}

export default navbar