import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages.js/landing";
import Price from "./pages.js/pricing";
import Faqq from "./pages.js/faqq";
import Contact from "./pages.js/contact";
import Login from "./pages.js/login";
import Signup from "./pages.js/signup";
import Dashboard from "./pages.js/dashboard";
import Transaction from "./pages.js/transaction";
import Settings from "./pages.js/settings";
import UpdatePassword from "./pages.js/updatePassword";
import FgPass from "./pages.js/fgpass";
import EnterCode from "./pages.js/entercode";
import Newpass from "./pages.js/newpass";
import Verified from "./pages.js/verfified";
import NotVerified from "./pages.js/notverified";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/pricing" element={<Price/>}/>
      <Route path="/faq" element={<Faqq/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/forgotPassword" element={<FgPass/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/updatePass" element={<UpdatePassword/>}/>
      <Route path="/enterpasscode" element={<EnterCode/>}/>
      <Route path="/createnewpassword" element={<Newpass/>}/>
      <Route path="/CheckVerification/success" element={<Verified/>}/>
      <Route path="/CheckVerification/failed" element={<NotVerified/>}/>
    </Routes>
    </>
  );
}

export default App;
