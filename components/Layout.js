import React, { Fragment } from 'react';
import styles from './Layout.module.css';

import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';



const Layout = (props) => {
    return (
        <Fragment>
            <Meta title="about" keywords="some keywords here" />

            <Nav />
            <div className={styles.container}>
                <Header tagline="Keep up to date with the latest Web Development News" />
                <main className={styles.main}>{props.children}</main>
            </div>
        </Fragment>
    )
}

export default Layout
