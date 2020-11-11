import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // Para garantir SPA (Single Page Application), trocar a por a href por Link to 

import { Link } from 'react-router-dom';

import './styles.css'; // Como o styles não tem nenhuma exportação de dentro dele, podemos colocar apenas o nome do arquivo já que só queremos executar o código dele

import logo from '../../assets/logo.svg';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    {/* <img src={logo} alt="Projeto Marthe Logo"/> */}
                </header>

                <main>
                    <h1>Projeto Marthe</h1>
                    <p>Uma rede de apoio entre ONGs, empresas, voluntários e prostitutas.</p>

                    <Link to="/cadastro-mulher">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre-se na nossa plataforma</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;