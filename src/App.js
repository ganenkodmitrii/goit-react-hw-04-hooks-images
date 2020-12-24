import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageInfo from './components/ImageInfo';

function App() {
    const [searchImage, setSearchImage] = useState('');

    const handleFormSubmit = searchImage => {
        setSearchImage(searchImage);
    };

    return (
        <div className="App">
            <Searchbar formSubmitHandler={handleFormSubmit} />
            <ImageInfo searchImage={searchImage} />
            <ToastContainer autoClose={2000} position="top-center" />
        </div>
    );
}

export default App;
