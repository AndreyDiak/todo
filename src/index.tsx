import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { TodosProvider } from './context/TodosProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <TodosProvider>
         <App />
      </TodosProvider>
   </React.StrictMode>,
);
