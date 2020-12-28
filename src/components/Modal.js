import React, { Component } from 'react';
import styles from './styles.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onClickNotImageCloseModal)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onClickNotImageCloseModal)
    }

    onPressEscape = event => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        };
    };

    onClickNotImageCloseModal = event => {
        if (event.target.nodeName !== 'IMG') {
            this.props.onCloseModal()
        };
    };

    render() {
        return (
            <div className={styles.Overlay} onClick={this.onClickNotImageCloseModal}>
                <div className={styles.Modal}>
                    <img src={this.props.onOpenlargeImage} alt="" />
                </div>
            </div>
        );
    };
};

export default Modal;