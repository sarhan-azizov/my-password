import React from 'react';
import styles from './my-passwords.module.scss';

import { Icon } from '../../components';

export const MyPasswordsPage = () => {
    const data = [
        {
            "logo": "google",
            "name": "Google",
            "category": "Web Services Web Services  Web Services ",
            "subCategory": "Search Engine Web Services  Web Services ",
            "login": "user1@gmail.com",
            "password": "************"
        },
        {
            "logo": "facebook",
            "name": "Facebook",
            "category": "Social Media",
            "subCategory": "Networking",
            "login": "user2@facebook.com",
            "password": "************"
        },
        {
            "logo": "twitter",
            "name": "Twitter",
            "category": "Social Media",
            "subCategory": "Microblogging",
            "login": "user3@twitter.com",
            "password": "************"
        },
        {
            "logo": "linkedin",
            "name": "LinkedIn",
            "category": "Social Media",
            "subCategory": "Professional Networking",
            "login": "user4@linkedin.com",
            "password": "************"
        },
        {
            "logo": "instagram",
            "name": "Instagram",
            "category": "Social Media",
            "subCategory": "Photo Sharing",
            "login": "user5@instagram.com",
            "password": "************"
        },
        {
            "logo": "amazon",
            "name": "Amazon",
            "category": "E-commerce",
            "subCategory": "Online Shopping",
            "login": "user6@amazon.com",
            "password": "************"
        },
        {
            "logo": "netflix",
            "name": "Netflix",
            "category": "Entertainment",
            "subCategory": "Streaming Service",
            "login": "user7@netflix.com",
            "password": "************"
        },
        {
            "logo": "spotify",
            "name": "Spotify",
            "category": "Entertainment",
            "subCategory": "Music Streaming",
            "login": "user8@spotify.com",
            "password": "************"
        },
        {
            "logo": "youtube",
            "name": "Reddit",
            "category": "Social Media",
            "subCategory": "Discussion Forum",
            "login": "user9@reddit.com",
            "password": "************"
        },
        {
            "logo": "github",
            "name": "GitHub",
            "category": "Development",
            "subCategory": "Code Hosting",
            "login": "user10@github.com",
            "password": "************"
        },
        {
            "logo": "microsoft",
            "name": "Microsoft",
            "category": "Web Services",
            "subCategory": "Software",
            "login": "user11@microsoft.com",
            "password": "************"
        },
        {
            "logo": "slack",
            "name": "Slack",
            "category": "Communication",
            "subCategory": "Team Collaboration",
            "login": "user12@slack.com",
            "password": "************"
        },
        {
            "logo": "dropbox",
            "name": "Dropbox",
            "category": "Storage",
            "subCategory": "Cloud Storage",
            "login": "user13@dropbox.com",
            "password": "************"
        },
        {
            "logo": "trello",
            "name": "Trello",
            "category": "Productivity",
            "subCategory": "Project Management",
            "login": "user14@trello.com",
            "password": "************"
        },
        {
            "logo": "pinterest",
            "name": "Pinterest",
            "category": "Social Media",
            "subCategory": "Visual Discovery",
            "login": "user15@pinterest.com",
            "password": "************"
        },
        {
            "logo": "adobe",
            "name": "Adobe",
            "category": "Web Services",
            "subCategory": "Creative Software",
            "login": "user16@adobe.com",
            "password": "************"
        },
        {
            "logo": "youtube",
            "name": "Quora",
            "category": "Social Media",
            "subCategory": "Question & Answer",
            "login": "user17@quora.com",
            "password": "************"
        },
        {
            "logo": "salesforce",
            "name": "Salesforce",
            "category": "Web Services",
            "subCategory": "CRM",
            "login": "user18@salesforce.com",
            "password": "************"
        },
        {
            "logo": "salesforce",
            "name": "WordPress",
            "category": "Development",
            "subCategory": "CMS",
            "login": "user19@wordpress.com",
            "password": "************"
        },
        {
            "logo": "youtube",
            "name": "YouTube",
            "category": "Entertainment",
            "subCategory": "Video Sharing",
            "login": "user20@youtube.com",
            "password": "************"
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {data.map((tile, index) => (
                <div className={styles.tile}>
                    <Icon iconName={tile.logo} className={styles.icon} size={56} />
                    <div className={styles.info}>
                        <div className={styles.name}>
                            <span className={styles.label}>Name:</span>
                            {tile.name}
                        </div>
                        <div className={styles.filters}>
                            <span className={styles.category}>{tile.category || "N/A"}</span>
                            <span className={styles.subCategory}>{tile.subCategory || "N/A"}</span>
                        </div>
                        <div className={styles.login}>
                            <span className={styles.label}>Login:</span>
                            {tile.login} <Icon iconName="copy" className={styles.copyIcon} size={14} />
                        </div>
                        <div className={styles.password}>
                        <span className={styles.label}>Password:</span>
                            {tile.password}
                            <Icon iconName="eye" className={styles.copyIcon} size={14} />
                            <Icon iconName="copy" className={styles.copyIcon} size={14} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}