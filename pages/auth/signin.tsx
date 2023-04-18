import React, { useEffect } from 'react'
import Head from 'next/head';
import { useApp } from '@/components/AppProvider';
import { LayoutPage } from '@/types/app';
import Link from 'next/link';

type Props = {}

const SignPage: LayoutPage = (props: Props) => {

  //const css: string = '/css/dark.css';
  //const { setTheme} = useApp();

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.body.className = 'dark';
  //     setTheme('dark');
  //   }, 1000);
  // });

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>

      <div className="w-screen h-screen flex content-center items-center justify-center">
        <div className="w-full sm:w-[400px] px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0 sm:border">
            <div className="text-gray-600 text-2xl font-bold uppercase pt-5  pb-10   px-4 lg:px-10  text-center border-b sm:border-0">
              Sign In
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:ring w-full"
                    placeholder="Password"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                      style={{ transition: "all .15s ease" }}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blue-900 text-white active:bg-blue-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-1/2">
              <Link href="/auth/forgotpassword" className='text-gray-400 hover:text-gray-500'>Forgot password?</Link>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/auth/signup" className='text-gray-400 hover:text-gray-500'>Create new account?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignPage.Layout = "PublicLayout";

export default SignPage

export async function getServerSideProps() {
  return { props: { theme1: "dark11" } };
}