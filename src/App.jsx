import Features from "./components/Features";
import Header from "./components/Header";
import Information from "./components/Information";
import Interduction from "./components/Interduction";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./components/AuthContext";
import SignOut from "./components/SignOut";
import rocketimg from "/images/rocket-svgrepo-com.png";
function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  const [mobileMenu, setMObileMenu] = useState(false);
  const [rocket, setRocket] = useState(false);
  const featuresRef = useRef(null);
  const customerRef = useRef(null);
  const pricingRef = useRef(null);
  const helpRef = useRef(null);

  useEffect(() => {
    if (signUpOpen || loginOpen || signOutOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [signUpOpen, loginOpen, signOutOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < 100) {
        setRocket(false);
      }
      if (scrollTop > 100) {
        setRocket(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AuthProvider>
      <div className="flex flex-col">
        {(loginOpen || signUpOpen || signOutOpen) && (
          <div className="fixed top-0 z-10 w-full">
            {loginOpen && (
              <SignIn
                setLoginOpen={setLoginOpen}
                setMObileMenu={setMObileMenu}
                setSignUpOpen={setSignUpOpen}
              />
            )}
            {signUpOpen && (
              <SignUp
                setSignUpOpen={setSignUpOpen}
                setMObileMenu={setMObileMenu}
                setLoginOpen={setLoginOpen}
              />
            )}
            {signOutOpen && (
              <SignOut
                setSignOutOpen={setSignOutOpen}
                setMObileMenu={setMObileMenu}
              />
            )}
          </div>
        )}
        <Header
          setSignUpOpen={setSignUpOpen}
          setLoginOpen={setLoginOpen}
          setSignOutOpen={setSignOutOpen}
          mobileMenu={mobileMenu}
          setMObileMenu={setMObileMenu}
          featuresRef={featuresRef}
          customerRef={customerRef}
          pricingRef={pricingRef}
          helpRef={helpRef}
        />
        <Interduction />
        <Information />
        <Features ref={featuresRef} />
        <Pricing ref={pricingRef} />
        <Location />
        <Customer ref={customerRef} />
        <Footer ref={helpRef} />
        <div
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={` transition-all duration-200 fixed bottom-2.5 right-5 cursor-pointer  z-10 rounded-full bg-white shadow-md shadow-black p-3 flex justify-center items-center size-[50px] ${
            rocket ? "animate-bounce" : "-translate-y-100 opacity-0"
          }`}
        >
          <img src={rocketimg} alt="" />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
