import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className="flex justify-center p-10">
            <div className="max-h-full">
                <SignUp signInUrl='login' />
            </div>
        </div>
    )
}

export default RegisterPage