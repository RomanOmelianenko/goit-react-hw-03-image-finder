import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Notification from './Notification';
import ImageGallery from './ImageGallery';
import ImagesApi from '../services/ImagesApi';
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';

export default class App extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired,
        searchQuery: PropTypes.string.isRequired,
        page: PropTypes.number.isRequired,
        showModal: PropTypes.bool.isRequired,
        largeImageUrl: PropTypes.string.isRequired
    };
    
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 1,
        openModal: false,
        largeImageUrl: null
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;
        const { images } = this.state;

        if (prevQuery !== nextQuery) {
            this.fetchImages();
        } else

        if (images.length > 12) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        };
    };

    fetchImages = () => {
        const { searchQuery, page } = this.state;

        this.setState({ loading: true });

        ImagesApi
            .fetchImagesWithQuery(searchQuery, page)
            .then(images =>
                this.setState(prevState =>
                ({
                    images: [...prevState.images, ...images],
                    page: prevState.page + 1
                })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    handleSearchFormSubmit = query => {
        this.setState({ searchQuery: query, page: 1, images: [] });
    };

    onOpenModal = largeImageUrl => {
        this.setState(state => ({
            openModal: !state.openModal,
            largeImageUrl: largeImageUrl
        }));
    };

    onCloseModal = () => {
        this.setState(prevState => ({
            openModal: !prevState.openModal,
            largeImageUrl: null
        }));
    };

    render() {
        const { images, loading, error, openModal, largeImageUrl } = this.state;

        return (
            <>
                <Searchbar onSubmit={this.handleSearchFormSubmit} />

                {error && <Notification message={`Whoops, something went wrong: ${error.message}`} />}

                {images.length > 0 && <ImageGallery images={images} onClick={this.onOpenModal}/>}

                {openModal && <Modal onOpenlargeImage={largeImageUrl} onCloseModal={this.onCloseModal}/>}
                
                {loading && <Loader/>}

                {images.length > 0 && !loading && <Button onClick={this.fetchImages}/>}
            </>
        );
    };
};