import { useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import Header from './Header';


const Search = () => {
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);
  const [listName, setListName] = useState('');

  const searchImages = () => {
    const codes = [];
    const imgs = [];

    for (let i = 100; i <= 599; i++) {
      const codeStr = i.toString();
      if (new RegExp('^' + filter.replace('x', '\\d')).test(codeStr)) {
        codes.push(codeStr);
        imgs.push(`https://http.dog/${codeStr}.jpg`);
      }
    }

    setImages(imgs);
  };

  const saveList = async () => {
    const codes = images.map(img => img.match(/(\d+)\.jpg/)[1]);
    try {
      await API.post('/lists', {
        name: listName,
        codes,
        images,
      });
      alert('List saved!');
    } catch (err) {
      alert('Error saving list');
    }
  };

  return (
    <>
    <Header/>
    <div className='searchCont'>
      <div className='searchHead'>
      <h2>Search Response Codes</h2>
      <div>
      <input type="text" placeholder="Filter (e.g. 2xx, 203, 20x)" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button className='searchBtn' onClick={searchImages}>Search</button>
      </div>
      </div>
      <div className='imgCont' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img, idx) => (
          <img className='img' key={idx} src={img} alt="Dog" width="150" style={{ margin: '5px' }} />
        ))}
      </div>

      {images.length > 0 && (
        <div className='saveListOpt'>
          <input type="text" placeholder="List Name" value={listName} onChange={(e) => setListName(e.target.value)} />
          <button className='searchBtn' onClick={saveList}>Save List</button>
        </div>
      )}

      
    </div>
    </>
  );
};

export default Search;
