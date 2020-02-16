import Head from "next/head";
//Components
import Header from "../components/Header";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";


    export default () => {
        return (
            <Layout>
            <div className="App">
                    <Head>
                        <title>Miguel Morales Portfolio</title>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
                    </Head>
                        <Navbar />
                        <Header />
                        <About />
                        <Projects />
                        <Contact />
            </div>
            </Layout>
        );
    } 