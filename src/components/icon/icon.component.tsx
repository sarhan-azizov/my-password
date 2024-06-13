import styles from "./icon.module.scss";
import netflix from './svg/netflix.svg';
import google from './svg/google.svg';
import copy from './svg/copy.svg';
import adobe from './svg/adobe.svg';
import amazon from './svg/amazon.svg';
import dropbox from './svg/dropbox.svg';
import facebook from './svg/facebook.svg';
import github from './svg/github.svg';
import instagram from './svg/instagram.svg';
import linkedin from './svg/linkedin.svg';
import microsoft from './svg/microsoft.svg';
import pinterest from './svg/pinterest.svg';
import salesforce from './svg/salesforce.svg';
import slack from './svg/slack.svg';
import spotify from './svg/spotify.svg';
import trello from './svg/trello.svg';
import twitter from './svg/twitter.svg';
import youtube from './svg/youtube.svg';
import eye from './svg/eye.svg';

type IconProps = {
    iconName: string;
    size: number;
    className?: string;
};

export const Icon = (props: IconProps) => {
    const icons: any = {
        netflix,
        google,
        copy,
        adobe,
        amazon,
        dropbox,
        facebook,
        github,
        instagram,
        linkedin,
        microsoft,
        pinterest ,
        salesforce,
        slack,
        spotify,
        trello,
        twitter,
        youtube,
        eye,
    };

    return (
        <div className={`${styles.root} ${props.className}`}>
            <img src={icons[props.iconName]} width={props.size} height={props.size} className={styles.icon} alt=""/>
        </div>
    );
}