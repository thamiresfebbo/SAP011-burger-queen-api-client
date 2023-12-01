import './MyForm.css'

import { useState } from 'react';

const MyForm = ({ user }) => {
    //6 -controle inputs
    // 3 gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");
    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role)


        //7-limpar form
        setName("");
        setEmail("");
        setBio("");
    };

    return (
        <div>
            {/*5 envio de form */}
            {/*1 form*/}
            <form onSubmit={handleSubmit}>
                <h2 className='títuloForm'>Hello Kitty</h2>
                <h2>Burguer</h2>
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
                {/*2 - label envolvendo input*/}
                <label>
                    <span></span>
                    <input type="email"
                        name="email"
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/*8 -textarea 
                <labe>
                    <span>Bio:</span>
                    <textarea name="Bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </labe> */}
                {/*9 select */}
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

                <input className='submit' type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;