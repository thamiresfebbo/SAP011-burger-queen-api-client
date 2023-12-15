import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Menu');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
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
  );
};

export default Home;