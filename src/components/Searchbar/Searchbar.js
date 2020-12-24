import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ formSubmitHandler }) {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (search.trim() === '') {
            return toast.info('Ничего не ввели в поиск! :(');
        }

        formSubmitHandler(search);
        reset();
    };

    const reset = () => {
        setSearch('');
    };

    return (
        <header className="Searchbar">
            <form onSubmit={handleSubmit} className="SearchForm">
                <input
                    className="SearchForm-input"
                    type="text"
                    value={search}
                    autoComplete="off"
                    autoFocus
                    placeholder="Поиск"
                    onChange={handleChange}
                />

                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    search: PropTypes.string,
    formSubmitHandler: PropTypes.func,
};
