import React, { useEffect, useRef, useState } from 'react';
import intro from '../images/intro.mp4';
import unitylogo from '../images/unity.jpg';
import secret from '../images/secret.png';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [videoScale, setVideoScale] = useState(1);
  const [bgImage, setBgImage] = useState('url(initial-bg.jpg)');

  const [introVisible, setIntroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [thirdSectionVisible, setThirdSectionVisible] = useState(false);

  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const thirdSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 동영상 크기 조절
      const scaleValue = Math.max(1 - scrollY / viewportHeight, 0.5);
      setVideoScale(scaleValue);

      // 배경 이미지 변경
      const backgroundChangeStart = viewportHeight * 2; // 필요시 값 조절
      if (scrollY > backgroundChangeStart) {
        setBgImage('url(another-bg.jpg)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === introRef.current) {
              setIntroVisible(true);
            } else if (entry.target === featuresRef.current) {
              setFeaturesVisible(true);
            } else if (entry.target === thirdSectionRef.current) {
              setThirdSectionVisible(true);
            }
          } else {
            if (entry.target === introRef.current) {
              setIntroVisible(false);
            } else if (entry.target === featuresRef.current) {
              setFeaturesVisible(false);
            } else if (entry.target === thirdSectionRef.current) {
              setThirdSectionVisible(false);
            }
          }
        });
      },
      { threshold: 0.5 } // 50%가 보일 때를 기준으로
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    if (thirdSectionRef.current) {
      observer.observe(thirdSectionRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
      if (thirdSectionRef.current) {
        observer.unobserve(thirdSectionRef.current);
      }
    };
  }, []);

  return (
    <div className='bg-black box-parent'>
      <Helmet><title>오르빗</title></Helmet>
        <div class="box">
          <p>scroll down</p>
          <div class="vertical"></div>
        </div>
      <div className="bg-video-prj " style={{ transform: `scale(${videoScale})` }}>
        <video className="bg-video__content bg-black" autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>

      </div>

      <div
        className="game-intro justify-content-center align-items-center px-5 vh-100"
        ref={introRef}
        style={{ opacity: introVisible ? 1 : 0, transition: 'opacity 1s ease' }}
      >
        <div className='fs-0 font-11 text-sig1 pb-5'>AI에게 지배당한 세상을 구원하라</div>
        <div className='fs-5 font-11 mb-5 pb-5'>
          지구는 특이점에 도달했습니다.
          현 지구는 AI(인공지능)의 실효지배를 받고 있으며,<br />
          인간은 허용된 행위(놀기, 먹기 등)를 제외한 지식을 쌓는 일체의 행위를 할 수 없습니다.<br />
          지식을 갖고 깨어있는 인간은 AI의 적으로 간주됩니다.<br />
          게임 내 여러 구역이 존재하며, 각 구역별로 AI를 움직일 수 있게 하는 원동력인 아레테가 존재합니다.<br />
          이 아레테를 파괴하여 AI를 막아야 합니다.<br />
          주인공은 깨어있는 지식인을 표방하는 자들의 모인 그룹인 이리스에서 행동대원 역할을 합니다.
        </div>
      </div>

      <div
        className="game-intro justify-content-center align-items-center px-5 vh-100"
        ref={featuresRef}
        style={{ opacity: featuresVisible ? 1 : 0, transition: 'opacity 1s ease' }}
      >
        <div className='fs-2 text-sig2 font-11'>고퀄리티 그래픽</div>
        <div className='fs-5 font-11 mb-5'>
          최신 <img className="unitylogo" src={unitylogo} />Unity6 엔진의 HDRP(High Definition Reder Pipeline)를 통해 고퀄리티 그래픽을 제공합니다.
        </div>
        <div className='fs-2 text-sig2 font-11'>쉬운 조작감</div>
        <div className='fs-5 font-11 mb-3'>
          FPS를 한 번이라도 해본 사람이라면 어려움 없이 게임을 플레이할 수 있습니다.<br />
          새로운 게임을 시작함에 있어서 조작키를 학습하는 부분이 은근한 걸림돌이 될 수 있지만,<br />
          직관적인 조작으로 통용되는 키 세팅을 사용하였습니다.
        </div>
        <div className='font-11'>
          <span className='text-orange'>움직임</span> - WASD<br />
          <span className='text-orange'>달리기</span> - Left SHIFT<br />
          <span className='text-orange'>상호 작용</span> - F<br />
          <span className='text-orange'>무기 변경</span> - TAB<br />
          <span className='text-orange'>총알 재장전</span> - R<br />
          <span className='text-orange'>총 발사</span> - 마우스 좌클릭<br />
          <span className='text-orange'>총 줌(Zoom)</span> - 마우스 우클릭<br />
          <span className='text-orange'>마우스 커서 보이기</span> - Left Alt
        </div>
      </div>

      <div
        className="game-intro justify-content-center align-items-center px-5 vh-100"
        ref={thirdSectionRef}
        style={{ opacity: thirdSectionVisible ? 1 : 0, transition: 'opacity 1s ease' }}
      >
        <div class="card text-bg-dark rounded-4 border-0 position-absolute top-50 start-50 translate-middle shadow-md">
          <img src={secret} class="card-img" alt="..."/>
          <div class="card-img-overlay position-absolute top-50 start-50 translate-middle">
            <h5 class="font-11 fs-2 text-white fw-bolder">이 곳은 어디일까요?</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
