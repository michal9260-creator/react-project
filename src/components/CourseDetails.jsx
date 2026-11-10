import React from 'react';

const CourseDetails = ({ courseName, grade }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>שם הקורס: {courseName}</h3>
            <p>ציון: {grade}</p>
        </div>
    );
};

export default CourseDetails;