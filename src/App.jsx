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
function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  const [mobileMenu, setMObileMenu] = useState(false);
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
      </div>
    </AuthProvider>
  );
}

export default App;
