import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from './Form.styled';

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
            <Input
                type="text"
                name='query'
                placeholder='Search movie'
                value={query}
                onChange={handleChange}
            />
            <Button type='submit'>Search</Button>
        </form>
    );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;




