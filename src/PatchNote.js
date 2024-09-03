import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import startinglogo from './images/logo.png';
import intro from './images/intro.mp4';
import poster from './images/poster.png';
import { faArrowUp, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

function PatchNote() {
  return (
    <div className='bg-gray vh-100'>
      <dic className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <span className='fs-3 text-white font-11'>준비중입니다.</span>
      </dic>
    </div>
  );
}

export default PatchNote;