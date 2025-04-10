import React from 'react';

const footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© 2023 Кинотека. Все права защищены.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    text: {
        margin: '0',
        fontSize: '14px',
    },
};

export default footer;