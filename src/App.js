import React from 'react';
import './App.css';
import {Layout, Anchor, Popover, Row} from 'antd';
const {Link} = Anchor;

function App() {
  return (
    <>
      <header id="header">
        <Popover placement="right" content={<h2>😻️</h2>}>
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
        {' '}
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
          <div className="list-link">
            <div className="img-wrapper">
              <img
                className="link-img"
                src="https://user-images.githubusercontent.com/35059428/73117502-7dac5b00-3f81-11ea-8b04-678856c6d550.png"
              />
            </div>
            <div>
              <h2>후원계좌</h2>
              <p>신한 110-499-513028 김**</p>
              <p>
                <a
                  href="https://www.paypal.me/betterworldforweak"
                  target="_blank">
                  페이팔
                </a>
              </p>
            </div>
          </div>
        </Popover>
        <Popover
          placement="right"
          content={
            <div>
              <h3>
                아가들 사료, 필터를
                <br />
                사실 수 있습니다.
  		</h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://bit.ly/wholesome-donate-mall">
            <div className="img-wrapper">
              
              <img
                className="link-img"
                src="https://user-images.githubusercontent.com/35059428/73065048-92cfae00-3edd-11ea-900d-9be5316e5e5e.png"
              />
            </div>
            <div>
              <h2>후원몰</h2>
              <p>집사님들을 위한 더 나은 방식의 후원</p>
            </div>
          </a>
        </Popover>
        <Popover
          placement="right"
          content={
            <div>
              <h3>
                홀썸이네는 <br /> 발리서 어떻게 지낼까?
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://www.youtube.com/channel/UC4kb6gxOTKVBIKcFfZPiwoQ?view_as=subscriber">
            <div className="img-wrapper">
              <img
                className="link-img"
                src="https://user-images.githubusercontent.com/35059428/73070683-e9dc7f80-3eeb-11ea-9dec-4667f53d5673.png"
              />
            </div>
            <h2>유튜브 구독</h2>
          </a>
        </Popover>
        <Popover
          placement="left"
          content={
            <div>
              <h3>
                캣맘 <br />
                인스타
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://instagram.com/6catmom.zena">
            <div className="img-wrapper">
              <img
                className="link-img"
                src=" https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/66765412_573054289894341_4324031579364691792_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=109&_nc_ohc=MiMmX_JlqTYAX86e8MC&oh=2b64f3c204382a120ea1b6317b23fd74&oe=5ED72C9C "
              />
            </div>
            <div>
              <h2>캣맘</h2>
              <p>@6catmom.zena</p>
            </div>
          </a>
        </Popover>
        <Popover
          placement="left"
          content={
            <div>
              <h3>
                캣대디 SJ 인스타
                <br />
              </h3>
            </div>
          }>
          <a
            className="list-link"
            target="_blank"
            href="https://instagram.com/___sj___y">
            <div className="img-wrapper">
              <img
                className="link-img"
                src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/47581801_323181528283940_4634403341321352258_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=qw80QeZfxH0AX9pz6Q4&oh=60674f16f04990cef52b37c64ec03f66&oe=5EC212C0"
              />
            </div>
            <div>
              <h2>캣대디</h2>
              <p>@___sj___y</p>
            </div>
          </a>
        </Popover>
      </Layout>
    </>
  );
}

export default App;
