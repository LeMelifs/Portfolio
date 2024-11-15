import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Header} from "./components/Header.tsx";

createRoot(document.getElementById('root')!).render(
    <App />
)
