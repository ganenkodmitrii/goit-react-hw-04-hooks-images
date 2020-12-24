import { useState } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';

export default function ImageGallery({ images }) {
    const [showModal, setShowModal] = useState(false);
    const [imageModal, setimageModal] = useState('');

    const openModal = largeImageURL => {
        setShowModal(true);
        setimageModal(largeImageURL);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ul className="ImageGallery">
                {images.map(el => (
                    <ImageGalleryItem
                        key={el.id}
                        webformatURL={el.webformatURL}
                        largeImageURL={el.largeImageURL}
                        clickOnImageItem={openModal}
                    />
                ))}
            </ul>
            {showModal && (
                <Modal onCloseModal={closeModal}>
                    {<img style={{ height: 540 }} src={imageModal} alt="" />}
                </Modal>
            )}
        </>
    );
}

ImageGalleryItem.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),

    showModal: PropTypes.bool,
    imageModal: PropTypes.string,
};
