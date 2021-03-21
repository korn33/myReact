import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import avatarDefault from '../../../assets/img/avatarDefault.jpg';
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    const getContacts = (contacts) => {
        return Object.keys(contacts).map(property => {
            if (contacts[property] != null) {
                return <li key={property}>{property}: <a target="_blank" href={`http://${contacts[property]}`}>{contacts[property]}</a>
                </li>
            }
        })
    };

    if (!props.profile) {
        return <div className={s.preloader}>
            <Preloader/>
        </div>
    }
    return (
        <div>
            {/*<div className={s.profileHeader}>*/}
            {/*</div>*/}
            <div className={s.profileInfo}>
                <div>
                    <img className={s.photo} src={props.profile.photos.large ? props.profile.photos.large : avatarDefault} alt={props.profile.photos.small ? props.profile.photos.small : avatarDefault}/>
                </div>
                <div className={s.description}>
                    <div>
                        <span className={s.property}>Name: </span>
                        <span>{props.profile.fullName}</span>
                    </div>
                    <div>
                        <span className={s.property}>About me: </span>
                        <span className={s.property}>{props.profile.aboutMe}</span>
                    </div>
                    <div>
                        <span className={s.property}>Status: </span>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div>
                        <span className={s.property}>Contacts:</span>
                        <ul className={s.contacts}>
                            {getContacts(props.profile.contacts)}
                        </ul>
                    </div>
                    <div><span
                        className={s.property}>{props.profile.lookingForAJob ? 'Looking for a job:' : 'Don\'t looking for a job'}</span>
                    </div>
                    <div><span>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : ''}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo