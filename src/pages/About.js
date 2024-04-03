import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import CardContainer from "../components/CardContainer";
import RowCards  from '../components/RowCards'
import bruno from  '../content/images/bruno.jpeg'
import eduardo from '../content/images/eduardo.png'


export function About() {
    return(
        <>
        <Header />
        <InfoCard 
            title = 'Conheça a nossa história'
            content = 'Contar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresaContar a história da empresa'
        />
        <RowCards 
            image1 = {bruno}
            image2 = {eduardo}
        />
        <CardContainer 
         firstTitle = 'Missão'
         firstContent = 'Desenvolvemos websites personalizados e templates exclusivos para a sua empresa, texto chamativo porque estou sem criatividade'
         secondTitle = 'Visão'
         secondContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'
         thirdTitle = 'VValores'
         thirdContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'/>:
       <Footer />
        </>
    )
}

