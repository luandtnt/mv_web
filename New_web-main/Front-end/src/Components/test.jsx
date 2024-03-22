import '../App.css'

import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Test(){
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
    return(
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
        </>
    )
}
export default Test