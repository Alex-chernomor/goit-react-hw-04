import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ImageModal from './components/ImageModal/ImageModal';
import {fetchImages} from './components/ImageGallery/images';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import NoMorePages from './components/ErrorMessage/NoMorePages';
import './App.css';

Modal.setAppElement("#root"); 

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchImg, setSearchImg] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [noImg, setNoImg] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };


  const handleSearch = async (topic)=>{
    setSearchImg(topic);
    setPage(1);
    setImages([]);
    setNoImg(false)
    
  }; 

  const handleLoadMoreClickBtn = () =>{
    setPage(page + 1);
  }

  useEffect(() => {
    if (isModalOpen && modalImage) {
      return;
    }
    if (modalImage) {
      openModal(modalImage);
    }
  }, [modalImage]);

  useEffect(()=>{
    if(searchImg === ''){
      return
    }
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(searchImg, page);   
        if (data.total_pages === 0) {
          setNoImg(true)
        }           
        setMaxPage(data.total_pages);     
        setImages(prevImg =>{
          return [...prevImg, ...data.results]
       })
      } catch (error){
          setError(true);
      }
       finally {
          setIsLoading(false);
      }
    }
    getData()
  },[page, searchImg]);

  return (
    <>
    <Header onSearch = {handleSearch}/>
    {error && <ErrorMessage />}
    {images.length > 0 && <ImageGallery openModal={openModal} items={images}/>}
    {isLoading && <Loader />}
    {noImg && <ErrorMessage/>}
    {images.length > 0 && maxPage !== page && !isLoading && <LoadMoreBtn onClick = {handleLoadMoreClickBtn}/>}
    {maxPage === page && <NoMorePages/>}
      <ImageModal
          isOpen={isModalOpen}
          image={modalImage}
          closeModal={closeModal}
        />
    </>
  )
}

export default App
