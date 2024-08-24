import styles from "./App.module.css";
import React,{Suspense} from "react";
const  Navbar  =React.lazy(()=>import("./components/Navbar/Navbar")) ;
const  Hero  = React.lazy(()=>import("./components/Hero/Hero"));
const  About  = React.lazy(()=>import("./components/About/About"));
const  Experience  =React.lazy(()=>import( "./components/Experience/Experience"));
const  Projects  = React.lazy(()=>import("./components/Projects/Projects"));
const  Contact  =React.lazy(()=>import("./components/Contact/Contact")) ;
const  Certificates  =React.lazy(()=>import( "./components/certificates/Certificates"));
import Lazy from "./components/Lazy/Lazy";

function App() {
  return (
    <Suspense fallback={<Lazy/>}>
    <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certificates/>
        <Projects />
        <Contact/>
    </div>
    </Suspense>
  );
}

export default App;
