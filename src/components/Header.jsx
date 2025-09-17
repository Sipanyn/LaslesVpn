import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Header({
  setSignUpOpen,
  setLoginOpen,
  mobileMenu,
  setSignOutOpen,
  setMObileMenu,
  featuresRef,
  customerRef,
  pricingRef,
  helpRef,
}) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className=" flex flex-row justify-between pt-1.5  pr-0 pb-1.5 md:pr-10  mb-5 md:mb-15 relative">
        {/* logo + title */}
        <div className="flex flex-row items-center pl-4 md:pl-10">
          <svg className="size-6">
            <use href="/sprite.svg#logo_icon" />
          </svg>
          <p>
            Lasles <span className="font-bold">VPN</span>
          </p>
        </div>
        {/* links  */}
        <div className=" flex-row justify-between items-center gap-10 *:cursor-pointer hidden md:flex">
          <p
            onClick={() =>
              featuresRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group text-stone-600 transition-all duration-100 hover:text-red-400"
          >
            features
            <span className="absolute left-0  -bottom-1 h-[1.5px] w-0 bg-red-400 rounded-md transition-all duration-200 group-hover:w-full"></span>
          </p>
          <p
            onClick={() =>
              pricingRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group text-stone-600 transition-all duration-100 hover:text-red-400"
          >
            Pricing
            <span className="absolute left-0  -bottom-1 h-[1.5px] w-0 bg-red-400 rounded-md transition-all duration-200 group-hover:w-full"></span>
          </p>
          <p
            onClick={() =>
              customerRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group text-stone-600 transition-all duration-100 hover:text-red-400"
          >
            Testimonial
            <span className="absolute left-0  -bottom-1 h-[1.5px] w-0 bg-red-400 rounded-md transition-all duration-200 group-hover:w-full"></span>
          </p>
          <p
            onClick={() =>
              helpRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group text-stone-600 transition-all duration-100 hover:text-red-400"
          >
            Help
            <span className="absolute left-0  -bottom-1 h-[1.5px] w-0 bg-red-400 rounded-md transition-all duration-200 group-hover:w-full"></span>
          </p>
        </div>
        {/* sign up+in +signout*/}
        <div className=" flex-row items-center gap-1.5 hidden md:flex">
          {user !== null ? (
            <p
              onClick={() => setSignOutOpen((pre) => !pre)}
              className="pt-2 pb-2 pl-5 pr-5 border-1 border-red-500 text-red-500 rounded-full cursor-pointer text-center hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-100"
            >
              Sign out
            </p>
          ) : (
            <>
              {" "}
              <p
                onClick={() => setLoginOpen((pre) => !pre)}
                className="pt-2 pb-2 pl-5 pr-5 rounded-full cursor-pointer border-1 border-slate-100 hover:border-1 hover:border-black  hover:bg-slate-100/50 transition-all duration-100"
              >
                Sign in
              </p>
              <p
                onClick={() => setSignUpOpen((pre) => !pre)}
                className="pt-2 pb-2 pl-5 pr-5 border-1 border-red-500 text-red-500 rounded-full cursor-pointer text-center hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-100"
              >
                Sign up
              </p>
            </>
          )}
        </div>
        {/* hamburger */}

        <svg
          onClick={() => setMObileMenu((pre) => !pre)}
          className={`size-12 sm:size-9 md:hidden cursor-pointer p-1 rounded-md select-none transition-transform duration-200 hover:bg-slate-100/50 ${
            mobileMenu ? "rotate-90 scale-90" : "rotate-0 scale-100"
          }`}
        >
          <use
            href={`${
              mobileMenu
                ? "/sprite.svg#close_icon"
                : "/sprite.svg#hamburger_icon"
            }`}
          />
        </svg>
      </div>
      {/* mobile menu */}
      {mobileMenu && (
        <div
          className={`bg-slate-50 flex flex-col gap-2.5 absolute w-full p-4 
    transition-[maxHeight] duration-500 ease-in-out overflow-hidden top-14 shadow-2xl 
    ${mobileMenu ? "h-fit" : "max-h-0"}
  `}
        >
          <div
            onClick={() => {
              featuresRef.current?.scrollIntoView({ behavior: "smooth" });
              setMObileMenu(false);
            }}
            className="flex flex-row justify-between border-b-1 border-slate-300 pb-3  cursor-pointer"
          >
            <p className="font-bold">features</p>
            <svg className="size-6">
              <use href="/sprite.svg#right_icon" />
            </svg>
          </div>
          <div
            onClick={() => {
              pricingRef.current?.scrollIntoView({ behavior: "smooth" });
              setMObileMenu(false);
            }}
            className="flex flex-row justify-between border-b-1 border-slate-300 pb-3  cursor-pointer"
          >
            <p className="font-bold">Pricing</p>
            <svg className="size-6">
              <use href="/sprite.svg#right_icon" />
            </svg>
          </div>

          <div
            onClick={() => {
              customerRef.current?.scrollIntoView({ behavior: "smooth" });
              setMObileMenu(false);
            }}
            className="flex flex-row justify-between border-b-1 border-slate-300 pb-3  cursor-pointer"
          >
            <p className="font-bold">Testimonial</p>
            <svg className="size-6">
              <use href="/sprite.svg#right_icon" />
            </svg>
          </div>
          <div
            onClick={() => {
              helpRef.current?.scrollIntoView({ behavior: "smooth" });
              setMObileMenu(false);
            }}
            className="flex flex-row justify-between border-b-1 border-slate-300 pb-3  cursor-pointer"
          >
            <p className="font-bold">Help</p>
            <svg className="size-6">
              <use href="/sprite.svg#right_icon" />
            </svg>
          </div>
          {/* sign up+in */}
          <div className=" flex-col items-center gap-1.5 flex md:hidden">
            {user !== null ? (
              <p
                onClick={() => setSignOutOpen((pre) => !pre)}
                className="pt-2 pb-2 pl-5 pr-5 border-1 border-red-500 text-red-500 rounded-md cursor-pointer text-center hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-100 w-full"
              >
                Sign out
              </p>
            ) : (
              <>
                <p
                  onClick={() => setLoginOpen((pre) => !pre)}
                  className="pt-2 pb-2 pl-5 pr-5 rounded-md cursor-pointer border-1 text-center border-slate-300 hover:border-1 hover:border-black  hover:bg-slate-100/50 transition-all duration-100 w-full"
                >
                  Sign in
                </p>
                <p
                  onClick={() => setSignUpOpen((pre) => !pre)}
                  className="pt-2 pb-2 pl-5 pr-5 border-1 border-red-500 text-red-500 rounded-md cursor-pointer text-center hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-100 w-full"
                >
                  Sign up
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
