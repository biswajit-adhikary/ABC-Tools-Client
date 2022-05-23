import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='loading-area text-center py-2'>
            <Spinner animation="border" size="sm" />
        </div>
    );
};

export default Loading;