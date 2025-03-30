"use client"

import ProgressoL from "@/components/Progresso/ProgressoL/page"
import Navbar from "@/components/Navbar"
import styles from './cadastroL.module.css'
import { useState } from "react";

import { TextField,Container,Button} from '@mui/material';

export default function CadastroLocalidade(){
   
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
                <ProgressoL/>
             <div className={styles.center}>
                <TextField
                    label="Cep"
                    variant="outlined"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                        className={styles.txtum}
                    />
                      <TextField
                    label="Rua"
                    variant="outlined"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                        className={styles.txtum}
                    />
                      <TextField
                    label="Bairro"
                    variant="outlined"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                        className={styles.txtum}
                    />

                    <TextField
                    label="Complmento"
                    variant="outlined"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Numero °"
                    variant="outlined"
                    value={outro_numero}
                    onChange={(e) => setOutro_numero(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Pais"
                    variant="outlined"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Estado"
                    variant="outlined"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                        className={styles.txtum}
                    />
                    <TextField
                    label="Cidade"
                    variant="outlined"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                        className={styles.txtum}
                    />
                   
                </div>
                <button className={styles.btnSeguinte}>Seguinte</button>
            </div>
              
         </div>
    )
}