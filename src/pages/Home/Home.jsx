import React from 'react';

const Home = () => {
  return <div>Welcome {localStorage.getItem('username')}</div>;
};

export default Home;
