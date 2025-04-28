import { useEffect, useState } from 'react';
import API from '../services/api';

import Header from './Header';

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);


  const fetchLists = async () => {
    const { data } = await API.get('/lists');
    setLists(data);
  };

  const deleteList = async (id) => {
    await API.delete(`/lists/${id}`);
    fetchLists();
    window.location.reload()
    
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <>
    <Header/>
    <div className='searchCont'>
      <h2>Your Saved Lists</h2>
      <div>
        {lists.length==0 ? <h3 className='notify'>You don't have any saved item ! </h3> : lists.map(list => (
          <p key={list._id}>
            <div>
             
            <strong onClick={() => setSelectedList(list)} style={{ cursor: 'pointer' }}>{list.name}</strong>
            <button className='searchBtn' onClick={() => deleteList(list._id)}>Delete</button>
            </div>
          </p>
        ))}
      </div>

      {selectedList && (
        <div>
          <h3>{selectedList.name}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedList.images.map((img, idx) => (
              <img className='img' key={idx} src={img} alt="Dog" width="150" style={{ margin: '5px' }} />
            ))}
          </div>
        </div>
      )}
    
    </div>
    </>
  );
};

export default Lists;
