import Header from "./components/Header";
import Intro from "./components/Intro";
import CompanyInfo from "./components/CompanyInfo";
import Specialization from "./components/Specialization";
import Recruitment from "./components/Recruitment";
import Numbers from "./components/Numbers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import { useEffect, useState } from "react";

function App() {
  const [showSplash, setShowSpalsh] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpalsh(false);
      sessionStorage.setItem("showSplash", "false");
    }, 5000);
  }, []);
  return (
    <>
      {JSON.parse(sessionStorage.getItem("showSplash")) !== false &&
        showSplash && (
          <div className="absolute inset-0 bg-[#fffeff] overflow-hidden ">
            <Splash />
          </div>
        )}

      {!showSplash && (
        <div className="mx-20 sm:mx-0">
          <div className="p-5">
            <Header />
            <Intro />
            <CompanyInfo />
            <Specialization />
            <Recruitment />
            <Numbers />
            <Contact />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
