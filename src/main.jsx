import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Layout.jsx';
import { BrowserRouter } from 'react-router-dom';
import cat from './img/catHacker.jpg';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout/>
      <img src={cat} alt="cat" style={{width:'100%', height:'84vh '}} />
    </BrowserRouter>
  </StrictMode>,
)
