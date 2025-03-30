import styles from './progressoPag.module.css'


export default function PrgressoPag(){
    return(
       
        <div className={styles.body}>
            <div className={styles.progressArea}>
                 <div className={styles.progressum}><label>Dados pessoais</label></div>
                 <div className={styles.circleum}></div>
                 <div className={styles.progressL}><label> Dados de localidade</label></div>
                 <div className={styles.circleL}></div>
                 <div className={styles.progress}><label>Dados de saude</label></div>
                 <div className={styles.circleS}></div>
                 <div className={styles.progress}><label>Pagamento</label></div>
                 <div className={styles.circleP}></div>
            </div>
            
        </div>
    
    )
}