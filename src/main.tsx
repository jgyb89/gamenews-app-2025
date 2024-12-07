
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

console.log('Appwrite URL:', import.meta.env.VITE_APPWRITE_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

