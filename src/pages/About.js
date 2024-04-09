import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import CardContainer from "../components/CardContainer";
import RowCards  from '../components/RowCards'
import SpacingTitle from '../components/SpacingTitle'

import bruno from  '../content/images/bruno.jpeg'
import eduardo from '../content/images/eduardo.png'


export function About() {
    return(
        <>
        <Header />
        <InfoCard 
            title = 'Conheça a nossa história'
            content = 'Na intersecção entre a visão empreendedora e a expertise técnica, nasce a nossa empresa, fruto da colaboração entre Bruno e Eduardo. Combinando décadas de experiência em vendas e empreendedorismo de Bruno com o talento excepcional de Eduardo como desenvolvedor, nossa empresa se destaca como uma força inovadora no mundo digital. Com uma abordagem centrada no cliente, nossa empresa visa não apenas atender, mas superar as necessidades de nossos clientes, proporcionando resultados tangíveis que promovem o crescimento e a sustentabilidade a longo prazo. Acreditamos que a excelência é a chave para o sucesso, e é por isso que nos dedicamos incansavelmente a fornecer serviços de desenvolvimento web e marketing digital de qualidade superior'
        />
        <SpacingTitle 
            title = 'Conheça nossa equipe'
        />
        <RowCards 
            image1 = {bruno}
            title = 'Bruno Gavasso'
            content1 = 'Diretor Comercial'
            link01 = 'Linkedin'
            linkTo01 = 'https://www.linkedin.com/in/bruno-gavasso-8642a838/'
            image2 = {eduardo}
            secondTitle = 'Eduardo Marin'
            link02 = 'Linkedin'
            linkTo02 = 'https://www.linkedin.com/in/eduardo-de-camargo-marin-88209a21a/'
            content2 = 'Desenvolvedor'
        />
        <CardContainer 
         firstTitle = 'Missão'
         firstContent = 'Nossa missão é simples: capacitar empresas varejistas e emergentes a prosperarem na era digital. Reconhecemos as crescentes demandas e desafios enfrentados pelas empresas hoje em dia, e estamos comprometidos em fornecer soluções sob medida que impulsionem suas marcas e maximizem seu potencial online.'
         secondTitle = 'Visão'
         secondContent = 'Nossa visão é ser reconhecidos como a principal referência no mercado digital, conhecidos por nossa excelência em oferecer soluções integradas que ajudam as empresas a se destacarem online. Queremos ser os parceiros preferenciais das empresas que buscam expandir sua presença digital e alcançar novos patamares de sucesso, impulsionando constantemente a inovação e liderando pelo exemplo em nosso setor.'
         thirdTitle = 'Valores'
         thirdContent = 'Excelência: Buscamos a excelência em tudo o que fazemos, desde o desenvolvimento de websites até as estratégias de marketing digital, sempre nos esforçando para superar as expectativas dos nossos clientes.'/>:
       <Footer />
        </>
    )
}

