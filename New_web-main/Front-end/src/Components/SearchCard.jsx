// eslint-disable-next-line no-unused-vars
import React from 'react';


// eslint-disable-next-line react/prop-types
function SearchCard({ filter, data }) {
  // Lọc dữ liệu dựa trên giá trị filter
  // eslint-disable-next-line react/prop-types
  const filteredData = data.filter(item => {
    const textValue = `${item.name} ${item.genre} ${item.date} ${item.imdb}`.toUpperCase();
    // eslint-disable-next-line react/prop-types
    return textValue.includes(filter.toUpperCase());
  });

  // Render danh sách các mục tìm kiếm phù hợp
  return (
    <div className='search'>
      {filteredData.map((item, index) => (
        <a key={index} href={'/WatchMv'} className='search_user_search_card'>
          <img src={item.sposter} alt={item.name} className='search_user_search_card_img' />
          <div className='search_user_search_card_cont'>
            <h3 className='search_user_search_card_cont_h3'>{item.name}</h3>
            <p className='search_user_search_card_cont_p'>{item.genre}, {item.date}, <span className='search_user_search_card_cont_span'>IMDB</span><i className="bi bi-star-fill" style={{ marginRight: '5px' }}></i> {item.imdb}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SearchCard;

