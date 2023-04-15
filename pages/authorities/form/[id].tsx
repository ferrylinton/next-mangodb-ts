import type { GetServerSideProps } from 'next';
import * as authorityService from "@/services/authority-service";
import React from 'react'
import AuthorityForm from '@/components/AuthorityForm';


const AuthorityEditForm = ({ id, authority }: AuthorityFormType) => {
    console.log(id);
    console.log(authority);

    return (
        <div className="h-screen flex flex-col items-center  justify-center border  rounded">
            <h1 className='text-3xl mb-12'>Authority - Edit Form</h1>
            <AuthorityForm id={id} authority={authority} />
        </div>
    )
}

export default AuthorityEditForm;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log(params);
    const id = params?.id as string;
    const authority = await authorityService.findOneById(id);
    return {
        props: {
            id,
            authority
        }
    }
}