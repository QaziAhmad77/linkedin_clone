import { linkedinLogo } from '../../assets';
import { useState, LoginAPI, styles, toast } from '../componentImports';
import GoogleButton from 'react-google-button';

export const LoginComponent = () => {
  const [credentails, setCredentials] = useState({});
  console.log(credentails);

  const login = async () => {
    try {
      const res = await LoginAPI(credentails.email, credentails.password);
      console.log(res);
    } catch (err) {
      toast.warning(`${err}`, styles);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col bg-gray-100">
      <div className="flex items-center gap-[1px] text-linkedinColor font-systemUi p-4">
        <p className="text-md font-600">Linked</p>
        <div className="w-[40px] h-[40px]">
          <img className="w-full h-full" src={linkedinLogo} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col h-full">
        <div className="p-4 flex flex-col w-[350px] gap-4 bg-white rounded-md formShadow">
          <div>
            <h1 className="text-lg">Sign in</h1>
            <p className="text-sm">Stay updated on your professional world</p>
          </div>
          <form action="" className="w-full flex flex-col gap-3">
            <input
              className="w-full pl-2 py-3 rounded-[4px] border-[1px] border-gray-500"
              type="email"
              placeholder="Email or Phone"
            />
            <div className="relative">
              <input
                className="w-full pl-2 py-3 rounded-[4px] border-[1px] border-gray-500"
                type="email"
                placeholder="Password"
              />
              <p className="text-sm font-systemUi text-linkedinColor max-w-fit absolute  top-4 right-2">
                show
              </p>
            </div>
            <p className="font-sm text-linkedinColor font-600">
              Forgot password
            </p>
            <button className="w-full rounded-full font-600 bg-linkedinColor text-white py-4">
              Sign in
            </button>
            <div className="relative">
              <div className="h-[1px] bg-gray-400 w-full"></div>
              <p className="bg-white px-1 text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                or
              </p>
            </div>
            <GoogleButton
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: 'black',
                fontWeight:"400"
              }}
            />
            <button className="w-full border-[1px] border-gray-300 border-black text-black py-3 bg-white">
              Sign in with Apple
            </button>
          </form>
          <div>
            <p>New to Linkedin?</p>
            <p>Join now</p>
          </div>
        </div>
      </div>
    </div>
  );
};
