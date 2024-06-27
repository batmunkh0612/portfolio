import Layout from "./Layout";
import { useState} from "react"
import {
  About,
  Footer,
  Main,
  Navbar,
  Skills,
  Work,
  ContactMe,
  Experience,
} from "./components";

const App = () => {
  const [isMobileMenuShow,setIsMobileMenuShow] = useState(false);

  const handlerClick = () => setIsMobileMenuShow(!isMobileMenuShow);

  return (
    <Layout>
      <Navbar handlerClick={handlerClick} />
     { isMobileMenuShow ? <div className="flex justify-end w-[375px] h-[667px] absolute top-0 right-0 bg-slate-400 z-10" >
      <button  className="p-5 text-white size-4" onClick={handlerClick}>x</button>
     </div> : <></> }
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </Layout>
  );
};

export default App;
