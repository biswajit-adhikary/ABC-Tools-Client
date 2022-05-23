import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='loading-area'>
            <Spinner animation="border" size="sm" />
        </div>
    );
};

export default Loading;