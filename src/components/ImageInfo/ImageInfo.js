import { useState, useEffect } from 'react';
import ImageAPI from '../ImageAPI/ImageAPI';
import PropTypes from 'prop-types';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loading from '../Loading';
import ImagesError from '../ImagesError';
import ImagesNotFound from '../ImagesNotFound';

export default function ImageInfo({ searchImage }) {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setPage(1);
    }, [searchImage]);

    useEffect(() => {
        if (searchImage === '') {
            return;
        }

        if (searchImage !== '' && page === 1) {
            setStatus('pending');

            ImageAPI.fetchImages(searchImage, page)
                .then(images => {
                    setImages([...images.hits]);
                    setStatus('resolved');
                })
                .catch(error => {
                    setError(error);
                    setStatus('rejected');
                });
        }

        if (searchImage !== '' && page !== 1) {
            ImageAPI.fetchImages(searchImage, page)
                .then(images => {
                    setImages(prevState => [...prevState, ...images.hits]);

                    setStatus('resolved');
                })
                .finally(() =>
                    setTimeout(() => {
                        window.scrollBy({
                            top: document.documentElement.clientHeight - 160,
                            behavior: 'smooth',
                        });
                    }, 500),
                );
        }
    }, [page, searchImage]);

    if (status === 'idle') {
        return <div style={{ textAlign: 'center' }}>Введите в поиск</div>;
    }

    if (status === 'pending') {
        return <Loading />;
    }

    if (status === 'rejected') {
        return <ImagesError message={error.message} />;
    }

    if (status === 'resolved') {
        return images.length ? (
            <div style={{ margin: '0 auto', padding: 10 }}>
                <ImageGallery images={images} />
                <Button loadMoreBtn={() => setPage(page + 1)} />
            </div>
        ) : (
            <ImagesNotFound />
        );
    }
}

ImageInfo.propTypes = {
    images: PropTypes.array,
    error: PropTypes.string,
    status: PropTypes.string,
    page: PropTypes.number,
    searchImage: PropTypes.string,
};
