import React from 'react';
import styles from './style.module.css';

export function ContactsList({ contactsList = [] }) {
    return (
        <div className={styles.ContactsList}>
            {contactsList.map(({ name, phoneNumber, email }) => (
                <div>
                    <h4>{name}</h4>
                    <p>{phoneNumber}</p>
                    <p>{email}</p>
                </div>
            ))}
        </div>
    )
};