import React from 'react'


const AuthBackground = () => {
    return (
        <div className="absolute top-0 w-full h-full bg-[url('/images/auth-bg.jpg')] bg-blue-400 bg-cover bg-center bg-no-repeat">
            <div className='absolute bottom-0 right-0 m-5 text-white drop-shadow'>
                <span className='px-1'>Photo by</span><a className='hover:text-gray-500' href="https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JJ Ying</a>
                <span className='px-1'>on</span><a className='hover:text-gray-500' href="https://unsplash.com/wallpapers/cool/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    )
}

export default AuthBackground