import './Cadastro.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importe useNavigate

const Cadastro = ({ user }) => {
  const navigate = useNavigate();  // Substitua useHistory por useNavigate

  // Controle de inputs e gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");  // Adicionando estado para a senha
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role, password);

    // Limpar form
    setName("");
    setEmail("");
    setBio("");
    setPassword("");  // Limpando a senha


    // Redirecionar para a página Home
    navigate('/Home');  // Substitua history.push por navigate
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
        {/* Formulário */}
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleName}
            value={name}
          />
        </div>
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
        {/* Adicionando campo de senha */}
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Confirme a Senha"
            onChange={handlePassword}
            value={password}
          />
        </div>
        {/* Textarea */}
        {/* <label>
                    <span>Bio:</span>
                    <textarea name="Bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label> */}
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

        {/* Botão de Cadastro */}
        <input
          className='submit'
          type="submit"
          value="Cadastrar"
        />
      </form>
    </div>
  );
};

export default Cadastro;
