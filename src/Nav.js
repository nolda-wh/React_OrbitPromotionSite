import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import startinglogo from './images/logo.png';
import orbitlogo from './images/orbit_logo.png';
import { faCloudArrowDown, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Nav() {
  return (
<nav class="navbar fixed-top navbar-expand-lg font-11">
  <div class="container-fluid">
    <ul class="navbar-nav py-3 px-4">
      <li class="nav-item dropdown pe-4">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="starting-logo pe-3" src={startinglogo} />
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://starting.run" target='_blank'>STARTING 바로가기 <FontAwesomeIcon icon={faSquareArrowUpRight}/></a></li>
          <li><a class="dropdown-item" href="#">게임 모두보기(준비중)</a></li>
          <li><a class="dropdown-item" href="#">(준비중)</a></li>
        </ul>
      </li>
    </ul>
    <Link class="navbar-brand" to="/">
      <img src={orbitlogo} className='orbit-logo'/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ps-3" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item px-2 d-flex align-items-center">
          <Link exact='true' to="/" class="nav-link active text-light box-click"><span>메인</span></Link>
        </li>
        <li class="nav-item px-2 d-flex align-items-center">
          <Link exact='true' to="/patchnote" className='nav-link text-light box-click'><span>패치노트</span></Link>
        </li>
        <li class="nav-item px-2 d-flex align-items-center">
          <a href="https://store.onstove.com/ko/games/3783" target='_blank' className='text-light box-click nav-link'><span>스토어 <FontAwesomeIcon icon={faSquareArrowUpRight}/></span></a>
        </li>
      </ul>
    </div>
    <a href="https://store.onstove.com/ko/games/3783">
      <div className="downloadBtn">
        <div className='position-absolute top-50 start-50 translate-middle'><FontAwesomeIcon className='fa-2xl' icon={faCloudArrowDown}/></div>
      </div>
    </a>
  </div>
</nav>
  );
}

export default Nav;