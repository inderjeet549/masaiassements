import React from 'react';

const Navbar = ({ setActivePage, activePage }) => {
  const linkStyle = (page) => ({
    marginRight: '20px',
    cursor: 'pointer',
    fontWeight: activePage === page ? 'bold' : 'normal',
    color: activePage === page ? '#007bff' : '#333',
  });

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <span style={linkStyle('home')} onClick={() => setActivePage('home')}>Home</span>
      <span style={linkStyle('about')} onClick={() => setActivePage('about')}>About</span>
      <span style={linkStyle('contact')} onClick={() => setActivePage('contact')}>Contact</span>
    </nav>
  );
};

export default Navbar;
