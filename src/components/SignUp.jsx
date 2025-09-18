import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import toast, { Toaster } from "react-hot-toast";
function SignUp({ setSignUpOpen, setMObileMenu, setLoginOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassInvalid, setIsPassInvalid] = useState(false);
  const [isMailInvalid, setIsMailInvalid] = useState(false);

  const [loading, setLoading] = useState(false);
  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      toast.error(error.code);
    }
    if (!error) {
      toast.success("Successfully create account");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setSignUpOpen((pre) => !pre);
        setMObileMenu(false);
      }, 1500);
    }
  }
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            icon: "✅",
            duration: 1000,
          },
          error: {
            icon: "❌",
            duration: 1500,
          },
        }}
      />
      <div className="w-full h-dvh flex justify-center items-center bg-stone-500/80  pr-2.5 pl-2.5 backdrop-blur-sm">
        <form
          noValidate
          onSubmit={handleSignUp}
          className="flex flex-col rounded-md bg-white p-3 pb-10 w-full sm:max-w-[500px]"
        >
          {/* close icon */}
          <div
            onClick={() => setSignUpOpen((pre) => !pre)}
            className="flex flex-row justify-end "
          >
            {" "}
            <svg className="size-12  cursor-pointer p-3 rounded-md select-none transition-transform duration-200 hover:bg-slate-100/50">
              <use href="/sprite.svg#close_icon" />
            </svg>
          </div>
          {/* title */}
          <h3 className="font-bold text-center mb-9">
            Welcome to <span className="text-red-500 text-xl">Lasles Vpn</span>
          </h3>
          {/* mail div */}
          <div className="flex flex-col mb-7 items-center">
            <div className="mailDiv flex flex-row gap-1 w-[80%] m-auto  border-1 border-slate-300 rounded-md pl-1 text-stone-400 fill-stone-400 cursor-pointer transition-all duration-100">
              <svg className="size-8 ">
                <use href="/sprite.svg#mail_icon" />
              </svg>
              <input
                className="w-full outline-0 border-0   text-black bg-white"
                type="email"
                placeholder="Please enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsMailInvalid(!e.target.checkValidity());
                }}
              />
            </div>
            {isMailInvalid && (
              <p className="text-xs text-slate-400 mt-1  w-[80%]">
                example@gmail.com
              </p>
            )}
          </div>
          {/* pass div */}
          <div className="flex flex-col items-center mb-7">
            <div className="passDiv flex flex-row gap-1 w-[80%] m-auto border-1 border-slate-300 rounded-md pl-1 text-stone-400 fill-stone-400 cursor-pointer transition-all duration-100">
              <svg className="size-8 ">
                <use href="/sprite.svg#pass_icon" />
              </svg>
              <input
                className="w-full outline-0 border-0  text-black bg-white"
                type="password"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsPassInvalid(!e.target.checkValidity());
                }}
                minLength={6}
              />
            </div>
            {isPassInvalid && (
              <p className="text-xs text-slate-400 mt-1  w-[80%]">
                Min password length must be 6
              </p>
            )}
          </div>

          <div className="flex flex-col  gap-2.5">
            <p
              onClick={() => {
                setSignUpOpen((pre) => !pre);
                setLoginOpen(() => true);
              }}
              className="cursor-pointer text-slate-300 text-xs w-[80%]  mr-auto ml-auto"
            >
              Already have an account?
            </p>
            <button
              type="submit"
              className="rounded-md border-1 border-slate-600 text-slate-400 pr-2.5 pl-2.5 pt-1.5 pb-1.5 w-[80%] m-auto text-center   cursor-pointer transition-all duration-100 hover:scale-[1.02]"
            >
              {loading ? "please wait..." : "Create account"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
