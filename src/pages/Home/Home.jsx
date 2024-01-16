import React from 'react';

const Home = () => {
  return <div>Welcome {localStorage.getItem('email')}</div>;
};

export default Home;
