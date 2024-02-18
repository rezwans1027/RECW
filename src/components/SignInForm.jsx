import React from 'react'
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../utils/firebase/FirebaseUtil'

const SignInForm = () => {
    
    const initialState = {
        email: '',
        password: '',
    }
    const [signInForm, setSignInForm] = React.useState(initialState)
    const { email, password } = signInForm

    const inputHandler = (e) => {
        setSignInForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    //controlled sign in form ^^

    const [error, setError] = React.useState('') //error message
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            setSignInForm(initialState)
        } catch (error) {
            setError('Invalid Email or Password')
        }
    }

    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.log('Error signing in with Google:', error);
        }
    }

    return (
        <div className=" w-full sm:mx-0">
            <h1 className="text-lg md:text-xl lg:text-2xl">
                Already have an account?
            </h1>
            <form className="mt-4 flex flex-col gap-4 md:text-lg lg:text-xl">
                <input
                    type="email"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => inputHandler(e)}
                    value={email}
                />
                <input
                    type="password"
                    required
                    className="w-full border-[1px] border-solid border-black p-2"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => inputHandler(e)}
                    value={password}
                />
            </form>
            <h1 className="my-2 h-0 p-0 font-bold text-red-500">{error}</h1>
            <div className="mt-8 flex flex-col flex-wrap gap-4 min-[500px]:flex-row">
                <button
                    onClick={handleSubmit}
                    className="w-full flex-[9] bg-black p-2 text-white"
                >
                    Sign In
                </button>
                <button
                    onClick={logGoogleUser}
                    className="w-full min-w-40 flex-[11] bg-blue-600 p-2 text-white"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default SignInForm
