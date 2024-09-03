import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import startinglogo from './images/logo.png';
import intro from './images/intro.mp4';
import poster from './images/poster.png';
import { faArrowUp, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <div className="bg-video-prj">
        <video className="bg-video__content" autoPlay muted loop poster={poster}>
          <source src={intro} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;