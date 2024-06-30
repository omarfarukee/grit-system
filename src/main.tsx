import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import  { QueryClient, QueryClientProvider } from 'react-query'
import { ToastProvider } from 'react-toast-notifications'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
     <ToastProvider  
    autoDismiss
    autoDismissTimeout={6000}>
        <App/>
    </ToastProvider>
  </React.StrictMode>
  </QueryClientProvider>,
)
