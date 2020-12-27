import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import styles from './styles.module.css';

function ImageGallery({ images, onClick }) {
    return (
        <ul className={styles.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    smallImage={image.webformatURL}
                    largeImage={image.largeImageURL}
                    onClick={onClick}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;