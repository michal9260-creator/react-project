import React from 'react';
import Grandchild from './Grandchild';

const Child = ({ courseName, hasGrandchild }) => {
    return (
        <div>
            <h2>שם הקורס: {courseName}</h2>
            {hasGrandchild && <Grandchild />}
        </div>
    );
};

export default Child;