import React from 'react';
import './App.css';
import {Layout, Anchor, Popover, Row} from 'antd';
const {Link} = Anchor;
const infoMall = (
  <div>
    <h1>발리, 숨쉬는 비용만 월 90</h1>

    <p>
      이 쇼핑몰에서 구매하시는 일정 금액이<strong> 저희에게 후원</strong>이
      됩니다. 받는 것 없이 후원해주시는 분들께<strong> 더 나은 선택</strong>을
      드리고 싶었어요. 건강한 사료, 발리 생활 필수품, 자연과 생명을 생각하는
      물건들을 담아보려합니다.
    </p>
  </div>
);

const infoYoutube = (
  <div>
    <h1>유튜브 채널</h1>

    <p>
      아가들을 돌보고 더 안정적으로 보살피기 위해선<strong> 선한 영향력</strong>
      을 더 널리 많이 퍼뜨리는게 필요하다고 생각했어요.
    </p>
    <p>저희들의 모습 일상, 발리의 모습과 아가들의 스토리를 담았습니다.</p>
  </div>
);

const infoCatMom = (
  <div>
    <h1>홀썸이 엄마의 인스타계정</h1>
    <p>
      묘한 묘연에 발리에 살게 된 캣맘 제나. 요가, 새벽, 생산성, 로푸드, 명상과
      같이 더 낫게 풍요로운 삶을 바라고 있어요. 세상에 선한 영향력을 줄 수 있는
      선한 부자를 꿈꿉니다.
    </p>
  </div>
);
const infoCatDaddy = (
  <div>
    <h1>캣대디 SJ</h1>
    <p>
      장애인을 가르치던 교사로 있다가, 호주, 프랑스 워홀하다 발리에 도착.
      <strong>어디서든 자유로울 수 있는</strong> 개발자, 그로스해커를 꿈꿉니다.
      코딩으로 세상에 <strong>선한일</strong>을 하며 살아가고 싶습니다. 캣맘과
      7냥이들을 돌보고 있습니다.
    </p>
  </div>
);
function App() {
  return (
    <>
      <header>
        <Popover
          placement="right"
          content={
	   <h1>😻️</h1>
          }>
          <img
            className="cat-sns-main-img"
            alt="cat-sns-logo-hug-seven"
            src="https://user-images.githubusercontent.com/35059428/73043231-39e12500-3e9f-11ea-8fd2-ba1ed33a08c1.jpg"
          />
        </Popover>
        <h1>홀썸이네</h1>
        <p>세상에 버림받았던 아이들과의 묘연</p>
      </header>
      <Layout id="lists">
        <Popover
          placement="right"
          content={
            <div>
              <h3>
                홀썸이네
                <br />
                후원하기
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://bit.ly/wholesome-donate-mall">
            <img
              style={{padding: '1vw'}}
              className="link-img"
              src="https://user-images.githubusercontent.com/35059428/73065048-92cfae00-3edd-11ea-900d-9be5316e5e5e.png"
            />
            <div>
              <h1>후원몰</h1>
              <p>조금 더 나은 방식의 후원</p>
            </div>
          </a>
        </Popover>
        <Popover
          placement="right"
          content={
            <div>
              <h3>
                홀썸이네 <br /> 일상 훔쳐보기
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://www.youtube.com/channel/UC4kb6gxOTKVBIKcFfZPiwoQ?view_as=subscriber">
            <img
              style={{padding: '1vw'}}
              className="link-img"
              src="https://user-images.githubusercontent.com/35059428/73051291-60ae5400-3ebd-11ea-8581-734032706c06.png"
            />
            <h1>유튜브 구독</h1>
          </a>
        </Popover>
        <Popover
          placement="left"
          content={
            <div>
              <h3>
                캣맘과 <br />
                소통하러가기
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://instagram.com/6catmom.zena">
            <img
              className="link-img"
              src=" https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/66765412_573054289894341_4324031579364691792_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=109&_nc_ohc=MiMmX_JlqTYAX86e8MC&oh=2b64f3c204382a120ea1b6317b23fd74&oe=5ED72C9C "
            />
            <div>
              <h1>캣맘 제나</h1>
              <p>@6catmom.zena</p>
            </div>
          </a>
        </Popover>
        <Popover
          placement="left"
          content={
            <div>
              <h3>
                캣대디와
                <br /> 소통하러가기
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://instagram.com/___sj___y">
            <img
              className="link-img"
              src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/47581801_323181528283940_4634403341321352258_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=qw80QeZfxH0AX9pz6Q4&oh=60674f16f04990cef52b37c64ec03f66&oe=5EC212C0"
            />
            <div>
              <h1>캣대디 SJ</h1>
              <p>@___sj___y</p>
            </div>
          </a>
        </Popover>
      </Layout>
    </>
  );
}

export default App;
