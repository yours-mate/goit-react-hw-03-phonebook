import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newContact = { id: nanoid(), name: '', number: '', };
    newContact.name = form.elements.name.value;
    newContact.number = form.elements.number.value;
    this.handleSubmit(newContact);
  }

  handleSubmit = (newContact) => {
    const names = this.state.contacts.map(c => c.name.toLowerCase());
    if (names.includes(newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in the contacts list.`);
      return;
    } else {
      this.setState(prevState => (
        {
          contacts: [...prevState.contacts, newContact],
        }
      ));
      document.getElementById("form").reset();
}
  }


  handleFilterState = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  handleSearch = () => {
    const newContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return newContacts;
  }

  handleBtnDeleteClick = (e) => {
    const id = e.target.name;
    this.handleDelete(id);
  }

  handleDelete = (id) => {
    const contactToDelete = this.state.contacts.map(c => c.id).indexOf(id);
    this.state.contacts.splice(contactToDelete, 1);
    this.setState(prevState => ({
      contacts: prevState.contacts,
    }))
  }

  render() {
    const searchedContacts = this.handleSearch();
    return (
       <div
      style={{
        height: '100vh',
        fontSize: 20,
          color: '#010101',
          padding: '40px',
       
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter handleFilterState={this.handleFilterState}/>
        <ContactsList contacts={searchedContacts} handleDelete={this.handleBtnDeleteClick} />
    </div>
    )
  }
}
