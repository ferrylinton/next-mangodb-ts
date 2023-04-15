import React from 'react';
import * as authorityService from "@/services/authority-service";
import Link from 'next/link';

type Authority = {
    id: string,
    name: string
}

type AuthorityPage = {
    data: Authority[],
    pagination: any
}

type Props = {
    authorityPage: AuthorityPage
}

const AuthorityList = (props: Props) => {
    const { authorityPage } = props;


    return (
        <>
            <div className="h-screen flex flex-col items-center  justify-center ">
                <h1 className='text-3xl mb-12'>Authority - List</h1>
                <div className='w-[500px] border'>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr className='text-xs font-bold text-left text-gray-500 uppercase'>
                                <th className='px-6 py-3'>No.</th>
                                <th className='px-6 py-3' colSpan={2}>Name</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {authorityPage.data.map((authority, index) => (
                                <tr key={authority.id}>
                                    <td className='px-6 py-3'>{index}</td>
                                    <td className='px-6 py-3'>{authority.name}</td>
                                    <td className='px-6 py-3'>
                                        <Link href={`/authorities/form/${authority.id}`}>edit</Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const authorityPage = await authorityService.find('', 1) as AuthorityPage;

    return {
        props: { authorityPage },
    }
}

export default AuthorityList