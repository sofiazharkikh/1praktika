import React from 'react';

const header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <h1 style={styles.logo}>Кинотека</h1>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/" style={styles.navLink}>Главная</a></li>
                        <li style={styles.navItem}><a href="/about" style={styles.navLink}>О нас</a></li>
                        <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        margin: '0',
        fontSize: '24px',
    },
    nav: {
        display: 'flex',
    },
    navList: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default header;