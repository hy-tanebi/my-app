import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import ImageList from './components/ImageList';



function App() {
  const [images,setImages] = useState([]);
  const ApiKey = import.meta.env.VITE_API_KEY;

  const onSearchSubmit = async (term)=>{
  try{
      const params = {
        key: ApiKey,ApiKey,
       q : term
      }

    const response = await axios.get('https://pixabay.com/api/', {params});
      console.log(response);
      setImages(response.data.hits);

      if(response.data.total === 0){
        window.alert('お探しの画像はありません');
      }

    }catch{
      window.alert('取得できませんでした');
    }

  }

  return (
    <div className='ui container' style={{ marginTop:'30px' }}>
    <SearchBar onSubmit = {onSearchSubmit}/>
    <ImageList images={images}/>
    </div>
  )
}

export default App
