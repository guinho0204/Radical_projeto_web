"use client"

import { useState } from "react";
import styles from './navbar.module.css';
import Link from "next/link";
import Cadastro from "../../app/cadastro/page";


interface TitutloReq{
    titulo:string;
}

function Navbar({titulo}:TitutloReq){

   const [isOpen,setIsOpen] = useState(false)

    return(
        <>
            {/* Navbar fixa no topo */}
            <nav className={styles.navbar}>
            <h1 className={styles.logo}>{titulo}</h1>

            {/* Links visíveis no desktop */}
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><a href="#">Sobre</a></li>
                <li><Link href="/cadastro">Cadastro</Link></li>
            </ul>

            {/* Botão de menu no mobile */}
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            </nav>

            {/* Menu lateral no mobile */}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Cadastro</a></li>
            </ul>
            </div>
  </>
    )
}
export default Navbar;