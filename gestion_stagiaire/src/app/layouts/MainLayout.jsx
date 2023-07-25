import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-background dark:bg-background-darker">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
