import React from 'react';

type IconProps = {
  className?: string;
};

export const ThermometerIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V8a3 3 0 00-6 0v8a3 3 0 106 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v2" />
  </svg>
);

export const HumidityIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.232C12 18.232 15 15.232 15 12a3 3 0 00-6 0c0 3.232 3 6.232 3 6.232z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.232V21m0-12a3 3 0 013 3" />
  </svg>
);

export const PressureIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const WindIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 12h14M5 16h14" />
  </svg>
);

export const SunriseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 16v-4m-7.07-7.07L9 9m6 6l2.07 2.07M3 12h18M5 18h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
  </svg>
);

export const SunsetIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-4m-7.07-2.93L9 9m6 6l2.07 2.07M3 12h18M5 18h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
  </svg>
);