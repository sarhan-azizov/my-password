import styles from './my-passwords.module.scss';

export const MyPasswordsPage = () => {
    const headers = ["type", 'category', "name", "Actions"];
    const rows = [
        {
            type: "Email",
            category: "Gmail",
            name: "sarhan.azizov@gmai.com"
        },
        {
            type: "Login",
            category: "NuO",
            name: "Super user"
        },
        {
            type: "Login",
            category: "VPN",
            name: "Open VPN"
        },
        {
            type: "Email",
            category: "Gmail",
            name: "sarhan.azizov@gmai.com"
        },
        {
            type: "Login",
            category: "NuO",
            name: "Super user"
        },
        {
            type: "Login",
            category: "VPN",
            name: "Open VPN"
        },
        {
            type: "Email",
            category: "Gmail",
            name: "sarhan.azizov@gmai.com"
        },
        {
            type: "Login",
            category: "NuO",
            name: "Super user"
        },
        {
            type: "Login",
            category: "VPN",
            name: "Open VPN"
        },
        {
            type: "Login",
            category: "VPN",
            name: "Open VPN"
        },
    ]
    return (
        <div className={styles.signIn}>
            <table className={styles.table}>
                <tr>
                    {headers.map((header) => <th className={styles.th}>{header}</th>)}
                </tr>
                {rows.map((row) => (
                    <tr className={styles.row}>
                        <td className={styles.cell}>{row.type}</td>
                        <td className={styles.cell}>{row.category}</td>
                        <td className={styles.cell}>{row.name}</td>
                        <td className={styles.cell}></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}