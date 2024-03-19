import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className='ul'>
      <li className='ul_li'>
        {/* <a className='ul_li_a' href='#'>Home</a> */}
        <Link to="/" className='ul_li_a'>Home</Link>
      </li>
      <li className='ul_li'>
        <Link to="/Series" className='ul_li_a'>Series</Link>
      </li>
      <li className='ul_li'>
        {/* <a className='ul_li_a' href='#'>Movies</a> */}
        <Link to="/Movies" className='ul_li_a'>Movie</Link>
      </li>
      <li className='ul_li'>
        {/* <a className='ul_li_a' href='#'>Kids</a> */}
        <Link to="/Kid" className='ul_li_a'>Kid</Link>
      </li>
    </ul>
  );
}

export default Navigation;
