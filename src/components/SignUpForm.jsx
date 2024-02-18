import React from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../utils/firebase/FirebaseUtil'


const SignUpForm = () => {

    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: '',
    }

    const [signUpState, setSignUpState] = React.useState(initialState)
    const { displayName, email, password, confirmedPassword } = signUpState

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmedPassword) return
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            setSignUpState(initialState)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use')
                alert('email already in use')
            console.log(error)
        }
    }

    const inputHandler = (e) => {
        setSignUpState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="w-full sm:mx-0 ">
            <h1 className='text-lg md:text-xl lg:text-2xl'>Create an account</h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="mt-4 flex flex-col items-center gap-4 md:text-lg lg:text-xl"
            >
                <input
                    type="text"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Name"
                    onChange={(e) => inputHandler(e)}
                    name="displayName"
                    value={displayName}
                />
                <input
                    type="email"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Email"
                    onChange={(e) => inputHandler(e)}
                    name="email"
                    value={email}
                />
                <input
                    type="password"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Password"
                    onChange={(e) => inputHandler(e)}
                    name="password"
                    value={password}
                />
                <input
                    type="password"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Confirm Password"
                    onChange={(e) => inputHandler(e)}
                    name="confirmedPassword"
                    value={confirmedPassword}
                />
                <button type="submit" className="w-full p-2 bg-black text-white mt-4">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm
