import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
		],
		filtered: ''
	};

	componentDidMount() {
		const localStorContacts = localStorage.getItem('contacts');

		if (localStorContacts) {
			this.setState({
				contacts: JSON.parse(localStorContacts)
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleAddToContacts = (e) => {
		const contact = {
			id: uuidv4(),
			name: this.state.name,
			number: this.state.number
		};

		if (contact.name === '' || contact.number === '') {
			alert('One of the fields is not filled');
		} else if (
			this.state.contacts.find((contact) => contact.name.toLowerCase() === this.state.name.toLowerCase())
		) {
			alert(`${this.state.name} is already in contacts`);
		} else {
			this.setState((prevState) => ({
				contacts: [ ...prevState.contacts, contact ]
			}));
		}
	};

	changeFilter = (filter) => {
		this.setState({ filter });
	};

	handleFilter = () => {
		const { contacts, filtered } = this.state;
		return contacts.filter((contact) => contact.name.toLowerCase().includes(filtered.toLowerCase()));
	};

	removeContact = (id) => {
		this.setState((prevState) => {
			return {
				contacts: prevState.contacts.filter((contact) => contact.id !== id)
			};
		});
	};

	render() {
		const filteredArr = this.handleFilter();
		return (
			<div>
				<h2>Phonebook</h2>
				<ContactForm
					preventSubmit={this.handleSubmit}
					nameChange={this.handleChange}
					numberChange={this.handleChange}
					clickEvent={this.handleAddToContacts}
				/>
				<h2>Contacts</h2>
				<Filter value={this.state.filtered} onChangeFilter={filteredArr} />
				<ContactList click={this.removeContact} filteredArr={filteredArr} />
			</div>
		);
	}
}

export default App;
