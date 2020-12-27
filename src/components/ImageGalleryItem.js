import React from 'react';
import styles from './styles.module.css';

function ImageGalleryItem ({ smallImage, largeImage, onClick }) {
    return (
        <>
            <li className={styles.ImageGalleryItem}>
                <img
                    className={styles.ImageGalleryItemImage}
                    onClick={() => onClick(largeImage)}
                    src={smallImage}
                    alt=""
                    width=""
                />
            </li>
        </>
    )};

export default ImageGalleryItem;