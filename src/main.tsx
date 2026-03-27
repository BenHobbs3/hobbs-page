import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TableComponent from './Components/TableComponent.tsx'
import './Stylings/App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className = "title">Hobbs March Madness Brackets</h1>
    <TableComponent/>
  </StrictMode>,
)
