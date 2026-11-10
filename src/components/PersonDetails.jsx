import React from 'react';
import CourseDetails from './CourseDetails';

const PersonDetails = () => {
    const name = "ישראל ישראלי";
    const age = 22;

    return (
        <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'sans-serif' }}>
            <h2>פרטים אישיים</h2>
            <p><strong>שם:</strong> {name}</p>
            <p><strong>גיל:</strong> {age}</p>

            <hr />

            <h2>קורסים</h2>
            <CourseDetails courseName="אלגוריתמים ובניית נתונים" grade={95} />

            <CourseDetails courseName="שפות תכנות ו-C#" grade={90} />
        </div>
    );
};

export default PersonDetails;