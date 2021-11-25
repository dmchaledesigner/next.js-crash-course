import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <h1 className={styles.title}><span>WebDev </span>News</h1>
            <p>{props.tagline}</p>
        </div>
    )
}

export default Header
