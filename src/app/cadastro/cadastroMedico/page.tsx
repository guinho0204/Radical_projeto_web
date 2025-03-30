"use client"

import ProgressoS from "@/components/Progresso/ProgressoS/page";
import Navbar from "@/components/Navbar"
import styles from './cadastroM.module.css'
import { useState } from "react";

import { TextField,Container,Button} from '@mui/material';

export default function CadastroMedico(){
   
      const [nome,setNome] = useState('')
      const [tipo,setTipo] = useState('')
      const [cor,setCor] = useState('');
      const [numero_celular,setNumero_celular] = useState('')
      const [password,setPasssword] = useState('')
      const [cpf,setCpf] = useState('');
      const [rg,setRG] = useState('')
      const [email,setEmail] = useState('');
      const [pais,setPais] = useState('');
      const [estado,setEstado] = useState('');
      const [outro_numero,setOutro_numero] = useState('')
      const [cidade,setCidade] = useState('');
      const [cep,setCep] = useState('');
      const [rua,setRua] = useState('');
      const [complemento,setComplemento] = useState('');
      const [bairro,setBairro] = useState('');
      const [sexo,setSexo] = useState('');
      const [data_nascimento,setData_nascimento] = useState('')
      const [uso_medicamento,setUso_medicamento] = useState('')
      const [restricao_alimentar,setRestrcao_alimentar] = useState('')
      const [igreja_congrega,setIgreja_congrega] = useState('')
      const [funcao_igreja,setFuncao_igreja] = useState('')
      const [indicacao_projeto,setIndicacao_projeto] = useState('')
      const [problemas_saude,setProblemas_saude] = useState('');
      const [tratamento_medico,setTratamento_medico] = useState('')
      const [alergia,setAlegia] = useState('')
      const [deficiencia,setDeficiencia] = useState('')
      const [convenio,setConvenio] = useState('')
      const [caso_acidente,setCaso_acidente] = useState('')
      const [familiarconhecidoparticipando,setFamiliarparticipando] = useState('')
    
    
 

    return(
         <div>
            
            <div className={styles.pageum}>
                <Navbar titulo="Cadastro localidade"/>
                <ProgressoS/>
             <div className={styles.center}>
                <TextField
                    label="Data Nascimento"
                    variant="outlined"
                    value={cep}
                    onChange={(e) => setData_nascimento(e.target.value)}
                        className={styles.txtum}
                    />
                      <TextField
                        label="Tem Alguma restrição alimentar ? "
                        variant="outlined"
                        value={rua}
                        onChange={(e) => setRestrcao_alimentar(e.target.value)}
                        className={styles.txtum}
                        />
                      <TextField
                        label="Uso de algum medicamento?  qual?"
                        variant="outlined"
                        value={bairro}
                        onChange={(e) => setUso_medicamento(e.target.value)}
                            className={styles.txtum}
                        />
                         <TextField
                            label="Convenio Médico?  qual?"
                            variant="outlined"
                            value={bairro}
                            onChange={(e) => setConvenio(e.target.value)}
                                className={styles.txtum}
                            />
                             <TextField
                            label=" Tem alergia?  qual?"
                            variant="outlined"
                            value={bairro}
                            onChange={(e) => setAlegia(e.target.value)}
                                className={styles.txtum}
                            />

                    <TextField
                    label="Esta em tratamento ?  qual ?"
                    variant="outlined"
                    value={complemento}
                    onChange={(e) => setTratamento_medico(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Possui alguma deficiencia ? qual ?"
                    variant="outlined"
                    value={outro_numero}
                    onChange={(e) => setDeficiencia(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Em caso e acidente avisar quem ?"
                    variant="outlined"
                    value={pais}
                    onChange={(e) => setCaso_acidente(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Nome de quem é para ligar ? "
                    variant="outlined"
                    value={estado}
                    onChange={(e) => setCaso_acidente(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Numero de quem é para ligar ? "
                    variant="outlined"
                    value={cidade}
                    onChange={(e) => setCaso_acidente(e.target.value)}
                        className={styles.txtum}
                    />
                   
                </div>
                <button className={styles.btnSeguinte}>Seguinte</button>
            </div>
              
         </div>
    )
}