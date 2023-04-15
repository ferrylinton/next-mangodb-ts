import React from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthorityType, authoritySchema } from '@/validations/authority-schema';

type Props = {}

const AuthorityAdd = (props: Props) => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthorityType>({
        resolver: zodResolver(authoritySchema),
    });

    const config = {
        headers: { 
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        }
    }

    const onSubmit: SubmitHandler<AuthorityType> = async (data) => {
        console.log(data);
        const response = await axios.post(`/api/authorities`, data, config);
        console.log(response);

        if(response.status === 200 && response.data){
            router.push("/authorities")
        }
    };


    return (
        <div className="h-screen flex flex-col items-center  justify-center border  rounded">
            <h1 className='text-3xl mb-12'>Authority - Add Form</h1>
            <form
                className='w-[300px]'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete='off' >

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.name && "border-red-500"
                            } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="name"
                        type="text"
                        placeholder="name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-xs italic text-red-500 mt-2">
                            {errors.name?.message}
                        </p>
                    )}
                </div>
                <div className="my-8 text-center">
                    <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthorityAdd