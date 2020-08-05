import React from 'react';
import styles from './styleContactForm.module.css';

export default function ContactForm({ preventSubmit, nameChange, numberChange, clickEvent }) {
	return (
		<form className={styles.form} onSubmit={preventSubmit}>
			<label>
				Name
				<input className={styles.inputName} name="name" type="text" onChange={nameChange} />
				<br />
				Number
				<input className={styles.inputNumber} name="number" type="text" onChange={numberChange} />
			</label>
			<br />
			<button className={styles.submit} name="name" onClick={clickEvent} type="submit">
				Add to contacts
			</button>
		</form>
	);
}
