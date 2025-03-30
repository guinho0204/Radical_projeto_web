"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Bottom from "@/components/Bottom/Bottom";

import Navbar from "@/components/Navbar"; 
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import CountdownTimer from "@/components/ContadorRegresso";
import Sobre from "./pages/Sobre/sobre";
import TabelaPreco from "./pages/Tabelas";


export default function Home() {
  return (

    <div className={styles.home}>
      <Navbar titulo="Home"/>
          <div className={styles.container}>
                <Image
                      src="/imagens/imagemradical.jpeg"
                      alt="teste"
                      fill
                      className={styles.imagem}
                      priority
                  />
             <h1 className={styles.txtTitulo}>RADICAL SÃO PAULO 23° EDIÇÃO</h1>
              <div className={styles.midle}></div>
               <h3 className={styles.txtSubTitulo}>De 25 a 27 de Abril 2025</h3>
              <button className={styles.btnInscreva}>Inscreva-se ja!</button>
           
        </div>
          
        <div>
      
           
        </div>
          <CountdownTimer  eventData=""/>
          <Sobre/>
         <TabelaPreco/>
      <Bottom/>
         
       
        
    </div>
     
  );
}
