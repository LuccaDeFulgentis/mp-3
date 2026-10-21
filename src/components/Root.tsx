import {Routes, Route} from "react-router";
import Home from "../pages/Home.tsx";
import NavComp from "./Nav.tsx";
import { PageWrapper, Container } from "../styles/styles.tsx";   
import FooterComp from "./Footer.tsx";
import HeaderComp from "./Header.tsx";
import { GlobalStyle } from "../styles/styles.tsx";
import Education from "../pages/Education.tsx";
import Experience from "../pages/Experience.tsx";
import Certifications from "../pages/Certifications.tsx";
import Interests from "../pages/Interests.tsx";
import Skills from "../pages/Skills.tsx";
import Projects from "../pages/Projects.tsx";

export default function Root(){
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet"/>

            <GlobalStyle/>
            <PageWrapper>
                <HeaderComp/>
                    <Container>
                    
                        <NavComp/>
                            <Routes>
                                <Route path={'/'} element ={<Home/>}/>
                                <Route path={'/education'} element ={<Education/>}/>
                                <Route path={'/experiences'} element ={<Experience/>}/>
                                <Route path={'/certifications'} element ={<Certifications/>}/>
                                <Route path={'/skills'} element ={<Skills/>}/>
                                <Route path={'/interests'} element ={<Interests/>}/>
                                <Route path={'/projects'} element ={<Projects/>}/>
                            </Routes>

                            
                        </Container>

                    <FooterComp/>
            </PageWrapper>

        </>
    );
}
