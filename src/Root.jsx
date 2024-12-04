import { Outlet } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Root = () => {
    return (
       <>
       <Header/>
       <Hero/>
       <About/>
       <Outlet/>
       </>
    );
};

export default Root;