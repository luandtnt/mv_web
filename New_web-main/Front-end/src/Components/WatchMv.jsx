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


  const [movie, setMovie] = useState({});
  const { name } = useParams;

  useEffect(() => {
    fetch(`http://localhost:3000/WatchMv/${encodeURIComponent(name)}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [name]);
    
  return (
     <>
            {console.log(movie)}
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
