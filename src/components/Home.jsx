import Header from './Header';
import StockDisplay from './StockDisplay';
import homepageimg from '../img/home.jpg'

function Home() {
  return (
    <div>
      <Header />
      <div className='img-container'>
      <img className='homepageimg' src={homepageimg} alt='stocks'></img>
      <div className="main-text">The real earning starts here.</div>
      <p className='caption'>find real-time stock prices below <span>&#8595;</span></p>
      </div>
      <div className='stats'>Stats by company</div>
      <StockDisplay />
    </div>
  );
}

export default Home;