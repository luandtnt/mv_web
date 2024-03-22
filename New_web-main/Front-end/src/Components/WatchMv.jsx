/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
import '../App.css'

import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function WatchMv() {

  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/WatchMv');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setMovie(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchMovie();
  // }, []);


  const [movie, setMovie] = useState([]);
  const { name } = useParams({});

  useEffect(() => {
    fetch(`http://localhost:3000/WatchMv/${encodeURIComponent(name)}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }, []);
  // eslint-disable-next-line no-unused-vars
  return (
     <>
       {
          movie.map((item, i)=>(
            <div key = {i}>
                <h1> id :{item.id}</h1>
                {/* <img src={item.bposter} alt={'lỗi hình ảnh'} />  */}
                <h1> name :{item.name}</h1>
                <h1> imdb :{item.imdb}</h1>
                <h1> date :{item.date}</h1>
                <h1> sposter :{item.sposter}</h1>
                <h1> bposter :{item.bposter}</h1>
                <h1> genre :{item.genre}</h1>
                <h1> type :{item.type}</h1>
                <h1> url :{item.url}</h1>
                <h1> trailer :{item.trailer}</h1>
                <h1> low :{item.low}</h1>
                <h1> medium :{item.medium}</h1>
                <h1> high :{item.high}</h1>
            </div>
          ))
        }
       {/* {
          movie.map((item, i) => (
          <a key={i}  className='section_cards_card' > 
            <img src={item.sposter} alt={item.name} className='poster' />
            <div className='rest_card'>
              <img src={item.bposter} alt='' className='rest_card_img' />
              <div className='rest_card_cont'>
                <h4 className='rest_card_cont_h4'>{item.name}</h4>
                <div className='rest_card_cont_sub'>
                  <p className='rest_card_cont_sub_p'>{item.genre}, {item.date}</p>
                  <h3 className='rest_card_cont_sub_h3'>
                    <span className='rest_card_cont_sub_h3_span'>IMDB</span>
                    <i className="bi bi-star-fill" style={{ marginRight: '3px' }}></i>
                    {item.imdb}
                  </h3>
                </div>
              </div>
            </div>
          </a>
        ))
       } */}
        {/* <img src={movie[0].bposter}></img> */}
        {/* <a className='section_cards_card'>
                <img src={movie.sposter} alt={movie.name} className='poster' />
                    <div className='rest_card'>
                        <img src={movie.bposter} alt='' className='rest_card_img' />
                        <div className='rest_card_cont'>
                            <h4 className='rest_card_cont_h4'>{movie.name}</h4>
                           <div className='rest_card_cont_sub'>
                             <p className='rest_card_cont_sub_p'>{movie.genre}, {movie.date}</p>
                             <h3 className='rest_card_cont_sub_h3'>
                                 <span className='rest_card_cont_sub_h3_span'>IMDB</span>
                                 <i className="bi bi-star-fill" style={{ marginRight: '3px' }}></i>
                                 {movie.imdb}
                              </h3>
                         </div>
                     </div>
                 </div>
          </a> */}
     </>
  )
}

export default WatchMv
