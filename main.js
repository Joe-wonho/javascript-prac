// import _, { wrap } from 'lodash';
// //경로(이름)가 있는 내보내기와 경로가 기본인 내보내기 차이
// //경로 있는 내보내기는 여러개를 내보낼 수 있다. 반대로 경로가 기본인 내보내기는 하나만 내보낼 수 있다.
// import checkType from './getType'; //default로 내보낸걸 받아올 때는 그냥 참조할 js파일만 받고 내가 원하는 이름으로 사용할 수 있다.
// import { random, user } from './getRandom'; //경로가 있는 내보내기에서 받아올 때는 {내보낸이름}으로 가져와야한다
// //전체 다 가져올 경우
// // import * as R from './getRandom'  이렇게 하면 R로 사용하겠다 의미임
// //ex) console.log(R) 하면 모든 내용 가져와짐
// console.log('Hello World');
// console.log(_.camelCase('hello world'));
// console.log(checkType([1, 2]));
// console.log(random());
// console.log(user);

// //loadsh 추가적인 메소드들
// const userA = [
//   { id: '1', name: 'one' },
//   { id: '2', name: 'two' },
// ];
// const userB = [
//   { id: '1', name: 'one' },
//   { id: '3', name: 'three' },
// ];
// const userC = userA.concat(userB); //concat배열데이터A에 인수로 배열데이터를 넣어주면 A에 B가 합쳐짐
// console.log('concat', userC);
// console.log('uniqBy', _.uniqBy(userC, 'id')); //concat은 중복데이터도 추가, id가 중복되면 배제 후 합침

// const userD = _.unionBy(userA, userB, 'id'); //uniq는 인수가 배열데이터 1개지만 union은 여러개 가능
// console.log('unionBy', userD);

// const users = [
//   { id: '1', name: 'one' },
//   { id: '2', name: 'two' },
//   { id: '3', name: 'three' },
//   { id: '4', name: 'four' },
// ];
// const foundUser = _.find(users, { name: 'three' });
// const foundUserIndex = _.findIndex(users, { name: 'four' });
// console.log(foundUser);
// console.log(foundUserIndex);

// _.remove(users, { name: 'two' });
// console.log(users);

// //JSON 기본,
// //JSON 은 문자데이터 형식으로 관리된다.
// const juser = {
//   name: 'wonho',
//   age: 85,
//   emails: ['one@naver.com', 'one@gmail.com'],
// };
// console.log('******************JSON 테스트*******************');
// console.log('juser', juser);

// const str = JSON.stringify(juser); //특정한 데이터를 JSON형태로 문자데이터화 시켜주는 메소드
// console.log('str', str);
// console.log(typeof str);

// const obj = JSON.parse(str); // 문자데이터를 javascript의 실제 데이터로 변경해주는 메소드
// console.log('obj', obj);

// //local strage 접근하기
// // localStorage.setItem('juser', JSON.stringify(juser)); //배열이나 객체를 그냥 스토리지에 저장 못함, 문자열로 처리해줘야함 그냥 juser를 set 하면 [object object]라고 나온다
// console.log('Local storage 부분');
// // console.log(localStorage.getItem('juser'));
// // console.log(JSON.parse(localStorage.getItem('juser')));
// //만약 데이터를 가공하고 싶다면 아래와 같이 해야함, 위의 로컬스토리지는 반영구적 데이터므로 가공 힘듦
// const str1 = localStorage.getItem('juser');
// console.log(str1);
// const obj1 = JSON.parse(str1);
// obj1.age = 22;
// console.log(obj1);
// localStorage.setItem('juser', JSON.stringify(obj1));

//axios 사용하기 omdb로 영화 api 찾기
import axios from 'axios';
function fetchMovies() {
  axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen').then((res) => {
    console.log(res);
    const h1El = document.querySelector('h1');
    const imgEl = document.querySelector('img');
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}
fetchMovies();
