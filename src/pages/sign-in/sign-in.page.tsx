import styles from './sign-in.module.scss';

export const SignInPage = () => {
    return (
        <div className={styles.signIn}>
            <h1 className={styles.title}>Sign in</h1>
            <label className={styles.field}>
                <span className={styles.fieldLabel}>Username</span>
                <input type="text" className={styles.fieldInput} autoFocus />
            </label>

            <label className={styles.field}>
                <span className={styles.fieldLabel}>Password</span>
                <input type="password" className={styles.fieldInput} />
            </label>
            <div className={styles.signInFooter}>
                <button className={`${styles.button} ${styles.createAccount}`}>Create an Account</button>
                <button className={styles.button}>Sign In</button>
            </div>
        </div>
    )
}