import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPhotos} from './gallerySlice'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {lazyloader} from 'lazyloader'

function App() {
  const dispatch=useDispatch();
  const photos=useSelector(state=>state.gallery.photos)
  useEffect(()=>
  {
    dispatch(getPhotos());
  },[dispatch])
  console.log("photos",photos)

  const getAnotherPhotos=()=>
  {
    window.location.reload(false)
  }
  return (
    <>
    <h1>Photo Gallery</h1>
    <p>Redux toolkit redux thunk</p>
    <hr/>
    <div className='gallery'>
      {
        photos.map(photo=>
          (
           <img id="img" key={photo.id} alt={photo.author} src={photo.download_url} width="400" height="400"/>

          ))
      }
    </div>
    <button   id="button"  onClick={getAnotherPhotos}className='btn btn-primary'>VIEW MORE</button>
    </>
  );
}

export default App;
//https://www.youtube.com/watch?v=lH-yFJZF0ts