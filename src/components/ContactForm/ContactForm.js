import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export function ContactForm({ handleSubmit }) {
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit} id="form">
        <label className={css.form__label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
