import Link from 'next/link';
import Header from '../components/Header'
import Swipecards from '../components/swipecards'

const Home = () => {
  return (
    <div>
    <Header/>
    <div>
      <h1 className='font-coffee font-bold  ml-4 mt-4 text-4xl  text-white'>Top Stories </h1>
    <Swipecards/>
    </div>
    <div>
      <h1 className='font-coffee font-bold  ml-4 mt-4 text-4xl  text-white'>Feed</h1>
    </div>
    </div>
  );
};

export default Home;
