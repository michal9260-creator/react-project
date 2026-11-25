import React, { useState } from 'react';
import CourseDetails from './CourseDetails';

const PersonDetails = () => {
    const name = "ישראל ישראלי";
    const age = 22;

    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("הטופס נשלח בהצלחה");
    };

    return (
        <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'sans-serif' }}>
            <h2>פרטים אישיים</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        setIsTyping(true);
                    }}
                />

                {isTyping && <p>typing...</p>}

                <button type="submit">שליחה</button>
            </form>

            <p><strong>שם:</strong> {name}</p>
            <p><strong>גיל:</strong> {age}</p>

            <hr />

            <h2>קורסים</h2>

            <CourseDetails
                courseName="אלגוריתמים ובניית נתונים"
                grade={95}
            />

            <CourseDetails
                courseName="שפות תכנות ו-C#"
                grade={90}
            />
        </div>
    );
};

export default PersonDetails;