import React from 'react'

import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

const SignIn = () => {
    return (
        <div
            className="mx-auto mt-4 flex max-w-[1200px] flex-col justify-between gap-10 
            p-12 sm:mt-16 sm:flex-row md:mt-20 md:gap-12 lg:justify-around"
        >
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default SignIn

