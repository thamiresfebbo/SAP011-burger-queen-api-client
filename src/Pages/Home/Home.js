import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Menu');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <header className="header-container">
        <nav>
          <ul className="tabs">
            <li className={activeTab === 'Menu' ? 'active' : ''} onClick={() => handleTabClick('Menu')}>
              Menu
            </li>
            <li className={activeTab === 'Pedidos' ? 'active' : ''} onClick={() => handleTabClick('Pedidos')}>
              Pedidos
            </li>
          </ul>
        </nav>
      </header>
      {activeTab === 'Menu' && (
        <section className="body-container">
          <h2>Café</h2>
          {/* Conteúdo do cardápio de imagens */}
          <div className="menu-café">

            <div className="menu-item">
              <img src="./café/café com leite.svg" alt="Café com Leite" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Café com Leite</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./café/café.svg" alt="Café" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Café</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./café/suco de fruta.svg" alt="Suco de fruta" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Suco de fruta</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./café/sanduiche.svg" alt="Sanduíche" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Sanduíche</h3>
              <h4>R$ 0,00</h4>
            </div>
          </div>
          <h2>Bebidas</h2>
          <div className="menu-bebidas">
            <div className="menu-item">
              <img src="./bebidas/agua_2.svg" alt="Agua 2" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Água 2</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./bebidas/agua.svg" alt="Água" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Água</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./bebidas/coca_2.svg" alt="Coca 2" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Coca 2</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./bebidas/coca.svg" alt="Coca" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Coca</h3>
              <h4>R$ 0,00</h4>
            </div>
          </div>
          <h2>Lanches</h2>
          <div className="menu-lanches">
            <div className="menu-item">
              <img src="./lanches/aneis de cebola.svg" alt="Anéis de Cebola" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Anéis de Cebola</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./lanches/batata frita.svg" alt="Batata Frita" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Batata Frita</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./lanches/Hambúrguer duplo.svg" alt="Hambúrguer duplo" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Hambúrguer duplo</h3>
              <h4>R$ 0,00</h4>
            </div>
            <div className="menu-item">
              <img src="./lanches/Hambúrguer simples.svg" alt="Hambúrguer simples" />
              <button>+</button>
              <input className='quantidade'></input>
              <button>-</button>
              <h3>Hambúrguer simples</h3>
              <h4>R$ 0,00</h4>
            </div>
          </div>
        </section>
      )}
    </div>
  );

};

export default Home;