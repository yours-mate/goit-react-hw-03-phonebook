import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export function ContactListItem({ contact, handleDelete }) {
  return (
    <li className={css.contact}>
      {contact.name}: {contact.number}
      <button
        className={css.contact__btn}
        name={contact.id}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
};
