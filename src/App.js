import React from "react";
import './App.scss';
import {Layout, Popover} from 'antd';
import DonatorsCrawling from './donators';

function App() {
                 return (
                   <>
                     <div className="landingPage-wrapper">
                       {" "}
                       <a
                         alt="Visit Wholesome's house "
                         href="https://www.youtube.com/channel/UC4kb6gxOTKVBIKcFfZPiwoQ?"
                       >
                         <header id="header">
                           <Popover
                             placement="right"
                             content={<span aria-label="😻️">😻️</span>}
                           >
                             <img
                               className="cat-sns-main-img"
                               alt="cat-sns-logo-hug-seven"
                               src="https://user-images.githubusercontent.com/35059428/73043231-39e12500-3e9f-11ea-8fd2-ba1ed33a08c1.jpg"
                             />
                           </Popover>
                         </header>
                       </a>
                       <div className="frame radius">
                         <h1 className="title">홀썸이네</h1>
                         <p id="title-description">
                           끝까지 책임지겠다고 6마리 구조냥과 함께사는 둘
                         </p>
                       </div>
                       <div id="lists" className="frame radius">
                           <a
                             className="list-link"
                             target="_blank"
                             rel="noopener noreferrer"
                             href="https://docs.google.com/spreadsheets/d/1vgcRD-WVSTwbJn1Z5w0QxvPBgADcX2Cqdt5uC7-8g3E/edit#gid=892915377"
                           >
                             <div className="img-wrapper">
                               <img
                                 className="link-img"
                                 alt="후원내역"
                                 src="https://user-images.githubusercontent.com/35059428/82720707-a30b6480-9ce8-11ea-911a-0272df4cbd4e.png"
                               />
                             </div>
                           </a>
                          <a
                             className="list-link"
                             target="_blank"
                             rel="noopener noreferrer"
                             href="https://www.youtube.com/channel/UC4kb6gxOTKVBIKcFfZPiwoQ?view_as=subscriber"
                           >
                             <div className="img-wrapper">
                               <img
                                 className="link-img"
                                 alt="유튜브 채널"
                                 src="https://user-images.githubusercontent.com/35059428/73070683-e9dc7f80-3eeb-11ea-9dec-4667f53d5673.png"
                               />
                             </div>
                           </a>
                       </div>
                       <div className="text-info frame radius">
                         <h1>응원 방법</h1>
                         <ul className="ul-clear grid-4">
                           <li>신한 110-499-513028 김**</li>
                           <li>
                             <a
                               href="https:://www.paypal.me/betterworldforweak"
                               target="_blank"
                               rel="noopener noreferrer"
                             >
                               페이팔
                             </a>
                           </li>
                           <li>
                             <a href="https://bit.ly/wholesome-donate-mall">
                               후원몰 구매
                             </a>
                           </li>
                           <li>
                             <a href="https://www.youtube.com/channel/UC4kb6gxOTKVBIKcFfZPiwoQ/?sub_confirmation=1">
                               유튜브 광고시청
                             </a>
                           </li>
                         </ul>
                       </div>
                       <div className="frame radius">
                         <h1>함께 돌봐주신 분들</h1>
                         <div className="thanks-to-who-helped-us grid-2">
                           <DonatorsCrawling />
                         </div>

                         <br />
                         <span style={{ color: "#8e8e8eb5" }}>
                           (더 계시는데, 존함 파악이 안되서...😭)
                         </span>
                       </div>
                       <div className="frame radius">
                         {" "}
                         <h1>eBook 쓰는 중입니다!</h1>
                         <p>
                           남집사가 부족한 손을 놀려 eBook을 쓰고 있습니다.
                           아이들의 이야기가 세상에 퍼지고,
                           <br /> 고양이를 구조한 경험이 조금이나마 세상에 선한
                           영향력을 끼칠 수 있으면 좋겠습니다.
                         </p>
                       </div>
                       <div className="frame radius">
                         {" "}
                         <h1>주요 영상</h1>
                         <div>
                           <iframe
                             width="100%"
                             height="410"
                             src="https://www.youtube.com/embed/videoseries?list=PLDBCgTooqH3KUsNCXJeI2sIJSkwaP3t_7"
                             frameborder="0"
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen
                           ></iframe>
                         </div>
                       </div>
                       <div className="frame radius grid-2">
                         <a href="https://instagram.com/___sj___y">남집사</a>
                         <a href="https://instagram.com/6catmom.zena">여집사</a>
                       </div>
                     </div>{" "}
                   </>
                 );
               }



export default App;
