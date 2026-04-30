import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <HashLoader color='#9AD872' />
        </div>
    );
};

export default LoadingPage;