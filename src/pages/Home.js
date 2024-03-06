import React from "react";
import Header from "../components/Header";
import VidsContainer  from "../components/VidsContainer";
import companyVideo from '../content/videos/Instituto de Design Estilo.gif'
import CardContainer from "../components/CardContainer";
import SpacingTitle from "../components/SpacingTitle";
import SingleCard from "../components/SingleCard";


export function Home() {
    return(
        <>
        <Header />
        <VidsContainer video = {companyVideo}/>
        <SpacingTitle 
            title = 'Conheça nossos serviços'
        />
        <CardContainer 
            firstTitle = 'Websites'
            firstContent = 'Desenvolvemos websites personalizados e templates exclusivos para a sua empresa, texto chamativo porque estou sem criatividade'
            secondTitle = 'Marketing Digital'
            secondContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'
            thirdTitle = 'Desing UI / UX'
            thirdContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'
        />
        <SingleCard 
            title = 'Sua empresa na era digital'
            content = 'Projete o seu negócio para ser reconhecido por profissionalismo e inovação, usando tecnologias usadas no Facebook, Youtube e Linkedin, para projetar um site exclusivo de mais alta performance.'
        />
        </>
    )
}

