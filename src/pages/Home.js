import React from "react";
import Header from "../components/Header";
import  VidsContainer  from "../components/VidsContainer";
import companyVideo from '../content/videos/Instituto de Design Estilo.gif'


export function Home() {
    return(
        <>
        <Header />
        <VidsContainer video = {companyVideo}/>
        </>
    )
}

