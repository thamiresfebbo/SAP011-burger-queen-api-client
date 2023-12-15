import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importe useNavigate

const Login = ({ user }) => {
    const navigate = useNavigate();  // Substitua useHistory por useNavigate

    // Controle de inputs e gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [password, setPassword] = useState("");  // Adicionando estado para a senha
    const [role, setRole] = useState("");

    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, role, password);

        // Limpar form
        setName("");
        setEmail("");
        setPassword("");  // Limpando a senha
    };
const CliqueEnviar = () => {
        // Redirecionar para a página Home
        navigate('/Home');  // Substitua history.push por navigate
    };

    const handleSignUpClick = () => {
        // Redirecionar para a página de Cadastro
        navigate('/Cadastro');
    };

    return (
        <div>
            <div className='logo'>
                <img src="./logo Hello Kitty.svg" alt="logo" />
            </div>
            {/* Formulário */}
            <form onSubmit={handleSubmit}>
                <h2 className='títuloForm'>Hello Kitty</h2>
                <h2 className='subTítuloForm'>Burguer</h2>
                {/* Label envolvendo input */}
                <label>
                    <span></span>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* Adicionando campo de senha */}
                <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={handlePassword}
                        value={password}
                    />
                </div>
                {/* Select */}
                <div className="role">
                    <label>
                        <input
                            type='radio'
                            name="role"
                            value="salao"
                            onChange={(e) => handleRoleChange(e.target.value)}
                            checked={role === 'salao'}
                        />
                        Salão
                    </label>
                    <label>
                        <input
                            type='radio'
                            name="role"
                            value="cozinha"
                            onChange={(e) => handleRoleChange(e.target.value)}
                            checked={role === 'cozinha'}
                        />
                        Cozinha
                    </label>
                </div>

                {/* Botão de Envio */}
                <input
                    className='submit'
                    type="submit"
                    onClick={CliqueEnviar}

                    value="Enviar"
                />

                {/* Cadastre-se*/}
                <input
                    className='btnCadastrar'
                    type="submit"
                    onClick={handleSignUpClick}

                    value="Não tem uma conta? Cadastre-se"
                />

            </form>
        </div>
    );
};

export default Login;
