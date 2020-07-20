import React from "react";

const theInstaDonators = [
  "luckykbg",
  "zero_return",
  "seo.usagi",
  "hanayi86",
  "pappermint_patty1",
  "mong__mimi__dongdong",
  "kimsome999",
  "mozziya07",
  "___mayo_150301",
  "jyh_0217",
  "lim.xtine",
  "_be__better",
];
const instaLink = "https://instagram.com/";
const theYoutubeDonators = [
  "신은영",
  "최경희",
  "커엽쏘야",
  "tv소소",
  "청순가련 주아는프린세스",
  "신상철",
  "Jung Hwa Hong",
  "김미경",
  "임선영",
  "송민호",
  "서애심",
  "박경륜",
  "예하군",
  "민성호",
  "신연섭",
  "박홍희",
  "박세원",
  "권리영",
  "한창미",
  "경미니",
  "프렌즈냥멍",
  "김영임",
];
const youtubeLink = "https://www.youtube.com/channel/";
const profilePhoto = [];
const peoplePlusInstaLink =[];


const instaGridGenerator = theInstaDonators.map((person, n) => {
  var instaConcatLink = instaLink + person;
  console.table(instaConcatLink);
  peoplePlusInstaLink.push(instaConcatLink);
 
	return peoplePlusInstaLink;
});


export default function DonatorsCrawling() {
	return (
    <>
       <div>
        {instaGridGenerator.map((instaUrl, i) => {
          return (
            <span key={i}>
              {" "}
              <a key={i} href={instaUrl[i]}>
                {theInstaDonators[i]}  
              </a>
            </span>
          );
        })
	}
      </div>
      <div>
        {theYoutubeDonators.map((user, a) => {
                console.log(user, a);                 
		return (<span key={a}>{user} </span>
		)})
	}
      </div>

   </>
  );
}

