// SeriesCard.jsx

function SeriesCard({ series }) {
  return (
    <div>
      {series.map((item, index) => (
        <a key={index} href={item.url} className='card'>
          <img src={item.sposter} alt={item.name} className='poster' />
          <div className='rest_card'>
            <img src={item.bposter} alt='' className='rest_card_img' />
            <div className='rest_card_cont'>
              <h4 className='rest_card_cont_h4'>{item.name}</h4>
              <div className='rest_card_cont_sub'>
                <p className='rest_card_cont_sub_p'>{item.genre}, {item.date}</p>
                <h3 className='rest_card_cont_sub_h3'><span className='rest_card_cont_sub_h3_span'>IMDB</span><i className="bi bi-star-fill" style={{ marginRight: '3px' }}></i>{item.imdb}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SeriesCard;
