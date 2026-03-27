import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TableComponent from './Components/TableComponent.tsx';
import './Stylings/App.css';
import Basketball from './Images/basketball.png';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className = "title">Hobbs March Madness Brackets</h1>
    <TableComponent/>
    <img src={Basketball} className="basketball"/>
  </StrictMode>,
);
