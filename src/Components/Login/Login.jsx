import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio")
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
