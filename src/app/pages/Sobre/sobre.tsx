
"use client"
import React from "react";
import styles from './sobre.module.css'
import ReactPlayer from "react-player";


function Sobre(){
   return(
      <div className={styles.sobrePage}>
          <h2 className={styles.txtTitulo}>Sobre</h2>
            <div className={styles.sublinhado}></div>

        <div className={styles.tableInfo}>
                <label>Data do evento:</label>  
                <label>inicio na igreja : </label>
                <label>Retorno do sitio: </label>
                <label>Investimento :  (Incluso trasnporte ,alimentação , hospedagem e camiseta do projeto)</label>
        </div>
          <div className={styles.txtParagrafos}>
            <p className={styles.txtP1}>Qualquer dificuldade na inscrição entre em contato com o administrador pelo Whastapp</p>
              <p className={styles.txtP2}>Click no Link abaixo : Falar com o organizador</p>
          </div>
          
          <div style={{maxWidth:"500px",margin:"auto"}}>
             <ReactPlayer url="https://youtu.be/XI8FWg9ArWY?si=rLuVYVaInx98Np9u" controls width="100%"/>
          
          </div>    
           
      </div>  

   )
}
export default Sobre;