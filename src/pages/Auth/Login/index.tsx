import { useState } from 'react'
// import { useSignIn } from "react-auth-kit";
// import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../../libs/axios';
import { useErrorBoundary } from "react-error-boundary";
import useSignIn from 'react-auth-kit/hooks/useSignIn';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = useSignIn();
  const navigate = useNavigate();
  const location = useLocation();
  const redirection = location.state?.from?.pathname || '/';

  const { showBoundary } = useErrorBoundary();

  const changeEmail = (value : string) => {
    setEmail(value)
  }
  const changePassword= (value: string) => {
    setPassword(value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    try {
      const response = await axios.post(
        "/login",
        { email, password, type: 1 }
      );
      
      signIn({
        auth: {
            token: response?.data?.data?.token,
            type: 'Bearer'
        },
        userState: response?.data?.data?.user_details
    })
    console.log("success");

    // axios.defaults.headers
    
      setEmail('');
      setPassword('');
      navigate(redirection, { replace: true }); // We redirect to the previous page
      
    } catch (err) {
      showBoundary(err);
      
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  onChange={(e) => changeEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => changePassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>    
    </>
  )
}

export default Login