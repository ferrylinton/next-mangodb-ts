import React from 'react'

const LoginForm = () => {
  return (
    <div className="w-full sm:w-[400px] px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 bg-opacity-80 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-2xl font-bold uppercase">
                    Sign In
                  </h6>
                </div>
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
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
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
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
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
                <a
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <a
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>Create new account</small>
                </a>
              </div>
            </div>
          </div>
  )
}

export default LoginForm