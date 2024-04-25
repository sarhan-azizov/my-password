import { Outlet } from "react-router-dom";

import { Logo } from "@/components";
import styles from "./layout.module.scss";

export const LayoutPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <header className={styles.mainHeader}>
                    <div className={styles.contentWrapper}>
                        <Logo />
                    </div>
                </header>
                <main className={styles.mainContent}>
                    <div className={styles.contentWrapper}>
                        <Outlet />
                    </div>
                </main>
            </div>
            <footer className={styles.mainFooter}>
                <div className={styles.copyright}>© 2024  MyPassword Inc. All rights reserved</div>
            </footer>
        </>
    );
};