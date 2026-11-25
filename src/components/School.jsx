
import React from 'react';
import Student from './Student';

const School = () => {

    const students = [
        {
            id: 1,
            name: "ישראל ישראלי",
            age: 17,
            grades: [95, 92, 98]
        },
        {
            id: 2,
            name: "דוד כהן",
            age: 16,
            grades: [55, 60, 50]
        },
        {
            id: 3,
            name: "יוסף לוי",
            age: 17,
            grades: [80, 85, 75]
        }
    ];
const handleExit = (studentName) => {
    const exitTime = new Date().toLocaleTimeString('he-IL');

    alert(`${studentName} יצאת בשעה ${exitTime}`);
};
    return (
        <div style={{ direction: 'rtl', padding: '20px' }}>
            <h1>בית הספר שלנו</h1>

            {students.map((student) => (
                <Student
                    key={student.id}
                    student={student}
                   onExit={() => handleExit(student.name)}
                />
            ))}
        </div>
    );
};

export default School;
