
import React from 'react';

const Student = ({ student, onExit }) => {

    const sum = student.grades.reduce((total, grade) => total + grade, 0);

    const average = sum / student.grades.length;

    return (
        <div style={{
            border: '1px solid gray',
            padding: '15px',
            margin: '15px 0',
            borderRadius: '8px'
        }}>

            <h2>{student.name}</h2>

            <p>גיל: {student.age}</p>

            <p>ציונים: {student.grades.join(', ')}</p>

            <p>ממוצע ציונים: {average.toFixed(2)}</p>

            {average > 90 && <p>תלמיד מצטיין</p>}

            {average < 60 && <p>טעון שיפור</p>}

            <button onClick={onExit}>
                יציאה מבית הספר
            </button>

        </div>
    );
};

export default Student;
