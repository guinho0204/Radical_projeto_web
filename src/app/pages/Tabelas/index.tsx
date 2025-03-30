import React from "react";
import styles from './tabelas.module.css'


export default function TabelaPreco(){
    return(
        <div className={styles.pageInscricao}>
            <h2 className={styles.txtTitle}>Inscrições</h2>
            <div className={styles.marginTop}></div>
             <ul className={styles.tablePrecos}>
                <li className={styles.linhaum}><label>Em até 12 vezes no cartão de credito(com acréscimo)</label></li>  
                <li className={styles.linhadois}><label>R$ 260,00 </label></li>
                <li className={styles.linhaum}><label>À vista via pix</label></li>
                <li className={styles.linhadois}><label>R$ 260,00 </label></li>
                <li className={styles.linhaum}>Em até 2 vezes no boleto</li>
                <li className={styles.linhadois}>R$ 260,00</li>
                <li className={styles.linhaum}>Em até 2 vezes no cartão</li>
                <li className={styles.linhadois}>R$ 260,00</li>
             </ul>

             <button className={styles.btnInscreva}>Inscreva-se ja!</button>
             
        </div>
    )
} 