import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { supabase } from "../lib/supabaseClient";
import { AuthContext } from "./AuthContext";

function SignOut({ setSignOutOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  async function signout() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    localStorage.clear();
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
          onSubmit={signout}
          className="flex flex-col rounded-md bg-white p-3 pb-10 w-full sm:max-w-[500px]"
        >
          {/* close icon */}
          <div
            onClick={() => setSignOutOpen((pre) => !pre)}
            className="flex flex-row justify-end "
          >
            {" "}
            <svg className="size-12  cursor-pointer p-3 rounded-md select-none transition-transform duration-200 hover:bg-slate-100/50">
              <use href="/sprite.svg#close_icon" />
            </svg>
          </div>
          {/* title */}
          <h3 className="font-bold text-center mb-9">
            Do you leave{" "}
            <span className="text-red-500 text-xl">Lasles Vpn </span> ?!🥺
          </h3>

          <button
            type="submit"
            className="rounded-md border-1 border-stone-600 text-white pr-2.5 pl-2.5 pt-1.5 pb-1.5 w-[80%] m-auto text-center hover:shadow-xs shadow-stone-700 bg-stone-500  cursor-pointer transition-all duration-100"
          >
            {loading ? "please wait..." : "Sign out"}
          </button>
        </form>
      </div>
    </>
  );
}

export default SignOut;
