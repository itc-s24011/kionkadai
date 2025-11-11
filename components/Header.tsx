import React from 'react';
import { ThermometerIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-6 mb-4 animate-slideInDown">
      <div className="max-w-7xl mx-auto flex items-center">
        <ThermometerIcon className="w-8 h-8 md:w-10 md:h-10 mr-4 text-purple-300" />
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
          Global Temperature Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;