import React, { Component } from 'react';
import styles from './styles.module.css';

class Searchbar extends Component {

    state = {
        inputValue: '',
    };

    handleChangeInput = e => {
        this.setState({ inputValue: e.target.value })
    };

    handleSubmitForm = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <header
                className={styles.Searchbar}>
                <form
                    className={styles.SearchForm}
                    onSubmit={this.handleSubmitForm}
                    >
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChangeInput}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }; 
};

export default Searchbar;