/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate  } from 'react-router-dom';

function Show({dt}){
  const navigate  = useNavigate ();
  const handleClick = async (name) => {
    try {
      const response = await fetch(`http://localhost:3000/WatchMv/${name}`, {
        method: 'POST', // Sử dụng phương thức POST
        headers: {
          'Content-Type': 'application/json' // Đặt loại dữ liệu gửi đi là JSON
        },
        body: JSON.stringify({ name: name }) // Chuyển đổi dữ liệu thành chuỗi JSON và gửi đi
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Xử lý dữ liệu khi cần
      navigate(`/WatchMv/${name}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // /href={`/WatchMv/${ele.name}`}
  return (
    <>
      {dt.map((ele, i) => (
        <a key={i}  className='section_cards_card' onClick={() => handleClick(ele.name)} > 
          <img src={ele.sposter} alt={ele.name} className='poster' />
          <div className='rest_card'>
            <img src={ele.bposter} alt='' className='rest_card_img' />
            <div className='rest_card_cont'>
              <h4 className='rest_card_cont_h4'>{ele.name}</h4>
              <div className='rest_card_cont_sub'>
                <p className='rest_card_cont_sub_p'>{ele.genre}, {ele.date}</p>
                <h3 className='rest_card_cont_sub_h3'>
                  <span className='rest_card_cont_sub_h3_span'>IMDB</span>
                  <i className="bi bi-star-fill" style={{ marginRight: '3px' }}></i>
                  {ele.imdb}
                </h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

// import Show from "./test";
//eslint-disable-next-line react/prop-types
function ShowCard({ data }) {
  return (
    <>
    <Show dt = {data}/>
    </>
  );
}
export default ShowCard;

