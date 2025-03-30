'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './cadastro.module.css'
import { TextField,Container,Button} from '@mui/material';
import MaskInput from 'react-text-mask'
import ProgressoP from '@/components/Progresso/ProgressoP/page';
import {AiFillCamera} from 'react-icons/ai'

function Cadastro(){

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



  return (
     <div>
        <Navbar titulo='Cadastro'/>
          
         <div className={styles.page}>
              <ProgressoP/>
            <div className={styles.areaDados}>
                 
               
               <div className={styles.imageArea}>
               <input
                  type="file"
                  accept="image/*"
                
                  id="upload-input"
                  style={{ display: "none" }}
                  />

                  {/* Botão estilizado usando label */}
                  <label htmlFor="upload-input" className={styles.btnFoto}>
                     <AiFillCamera size={30} color='gray'/>
                  </label>
               </div>
                <Container className={styles.center}>
                     <TextField
                        label="Nome"
                        variant="outlined"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                         className={styles.txtum}
                      />
                       
                       <MaskInput
                           mask={["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                           value={numero_celular}
                           type='number'
                           onChange={(e) => setNumero_celular(e.target.value)}
                           placeholder="Numero celular (00) 0000-0000"
                           id="phone"
                           className={styles.txtNumero}
                           
                        />
                       <MaskInput
                           mask={["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                           value={outro_numero}
                           type='number'
                           onChange={(e) => setOutro_numero(e.target.value)}
                           placeholder="Outro numero (00) 0000-0000"
                           id="outropone"
                           className={styles.txtNumero}
                           
                        />
                       <TextField
                        label="Password"
                        variant="outlined"
                        type='password'
                        value={password}
                        onChange={(e) => setPasssword(e.target.value)}
                         className={styles.txtum}
                      />
                       <TextField
                        label="Cpf"
                        variant="outlined"
                        type='numebr'
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                         className={styles.txtum}
                      />
                       <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         className={styles.txtum}
                      />

                </Container>
            </div>
           

         </div>
     </div>
      
  )
};

export default Cadastro;