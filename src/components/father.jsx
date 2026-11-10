import React from 'react';
import Child from './Child';

const Father = () => {
    return (
        <div>
            <h1>שם: ישראל ישראלי | גיל: 30</h1>

            {/* קומפוננטת ילד ראשונה (ללא נכד) */}
            <Child courseName="פיתוח תוכנה" hasGrandchild={false} />

            {/* קומפוננטת ילד שנייה (מכילה נכד) */}
            <Child courseName="בסיסי נתונים" hasGrandchild={true} />
        </div>
    );
};

export default Father;