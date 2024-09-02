import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ searchMovies }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        searchMovies(query);
    };

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='query'
                placeholder='Search movie'
                value={query}
                onChange={handleChange}
            />
            <button type='submit'>Search</button>
        </form>
    );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;




