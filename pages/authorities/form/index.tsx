import AuthorityForm from '@/components/AuthorityForm'
import React from 'react'


const AuthorityAddForm = () => {
    return (
        <div className="h-screen flex flex-col items-center  justify-center border  rounded">
            <h1 className='text-3xl mb-12'>Authority - Add Form</h1>
            <AuthorityForm />
        </div>
    )
}

export default AuthorityAddForm