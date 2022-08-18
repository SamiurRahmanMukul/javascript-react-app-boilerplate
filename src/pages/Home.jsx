import React from 'react';
import MainLayout from '../components/layout/MainLayout';

function Home() {
  window.document.title = 'React App — Home';

  return (
    <MainLayout>
      <h1 className='text-center text-2xl text-gradient font-bold pt-5'>
        Welcome! JavaScript React App Boilerplate !!!
      </h1>
    </MainLayout>
  );
}

export default Home;
