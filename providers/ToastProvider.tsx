'use client'
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
    return (
        <ToastContainer 
            position='top-right' 
            autoClose={4000} 
        />
    );
}

export default ToastProvider;