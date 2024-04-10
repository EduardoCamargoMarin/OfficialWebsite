import React from "react";
import Header from "../components/Header";
import VidsContainer  from "../components/VidsContainer";
import CardContainer from "../components/CardContainer";
import SpacingTitle from "../components/SpacingTitle";
import SingleCard from "../components/SingleCard";
import digitalCardImage from '../content/images/DigitalCard.jpg'
import ImageContainer from '../components/ImageContainer'
import Footer from "../components/Footer";

import companyVideo from '../content/videos/vidCompany.gif'


export function Home() {
    return(
        <>
        <Header />
        <VidsContainer 
        title = 'Conecte-se ao mundo digital'
        content = 'Inovação e qualidade para a sua empresa'
        video = {companyVideo}
        />
        <SingleCard 
            title = 'Sua empresa na era digital'
            content = 'Projete o seu negócio para ser reconhecido por profissionalismo e inovação, usando tecnologias usadas no Facebook, Youtube e Linkedin, para projetar um site exclusivo de mais alta performance.'
            />
        <SpacingTitle 
            title = 'Conheça nossos serviços'
        />
        <CardContainer 
            firstTitle = 'Websites'
            firstContent = 'Desenvolvemos websites personalizados e templates exclusivos para a sua empresa, texto chamativo porque estou sem criatividade'
            secondTitle = 'Marketing'
            secondContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'
            thirdTitle = 'Desing UI / UX'
            thirdContent = 'Texto criativo novo porque  eu estou sem criatividade mesmo, porém se servir de consolo eu estou tentando pensar em algo, mas é 21:38'
        />
        <ImageContainer 
            image = {digitalCardImage}
            title = 'Cartão Digital'
            content = 'Tenha o seu próprio cartão digital e aumente o impulsionamento da sua marca, através do compartilhamento rápido das informações 100% interativo .'
            
       />
       <Footer />
        </>
    )
}

