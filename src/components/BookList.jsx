import React from 'react';

// רשימת הספרים עם 5 מאפיינים לכל ספר
const booksData = [
    {
        id: 1,
        title: 'מסילת ישרים',
        author: 'רבי חיים לוצאטו (רמח"ל)',
        year: 1740,
        category: 'מוסר ומחשבה'
    },
    {
        id: 2,
        title: 'חובות הלבבות',
        author: 'רבנו בחיי  ',
        year: 1080,
        category: 'מוסר ומחשבה'
    },
    {
        id: 3,
        title: 'שער הציון',
        author: 'רבי ישראל מאיר הכהן (חפץ חיים)',
        year: 1883,
        category: 'הלכה'
    },
    {
        id: 4,
        title: 'ספר החינוך',
        author: 'מחבר לא נודע (מבעלי התוספות)',
        year: 1290,
        category: 'תרי"ג מצוות'
    },
    {
        id: 5,
        title: 'אגרא דכלה',
        author: 'רבי צבי אלימלך שפירא ',
        year: 1868,
        category: 'חסידות ודרוש'
    }
];

const BookList = () => {
    return (
        <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'sans-serif' }}>
            <h2>רשימת ספרים</h2>

            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'right',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ccc' }}>
                        <th style={{ padding: '12px', border: '1px solid #dddddd' }}>מזהה</th>
                        <th style={{ padding: '12px', border: '1px solid #dddddd' }}>שם הספר</th>
                        <th style={{ padding: '12px', border: '1px solid #dddddd' }}>מחבר</th>
                        <th style={{ padding: '12px', border: '1px solid #dddddd' }}>שנת הוצאה (משוערת)</th>
                        <th style={{ padding: '12px', border: '1px solid #dddddd' }}>קטגוריה</th>
                    </tr>
                </thead>
                <tbody>
                    {booksData.map((book) => (
                        <tr key={book.id} style={{ borderBottom: '1px solid #dddddd' }}>
                            <td style={{ padding: '10px', border: '1px solid #dddddd' }}>{book.id}</td>
                            <td style={{ padding: '10px', border: '1px solid #dddddd', fontWeight: 'bold' }}>{book.title}</td>
                            <td style={{ padding: '10px', border: '1px solid #dddddd' }}>{book.author}</td>
                            <td style={{ padding: '10px', border: '1px solid #dddddd' }}>{book.year}</td>
                            <td style={{ padding: '10px', border: '1px solid #dddddd' }}>{book.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;