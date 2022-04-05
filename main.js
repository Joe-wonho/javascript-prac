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
    // console.log(res);
    const h1El = document.querySelector('h1');
    const imgEl = document.querySelector('img');
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}
fetchMovies();

//정규표현식 사용하기
const str2 = `
010-1234-5678
tonethe@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://local.com
`;
//생성자 함수 방식
const regexp1 = new RegExp('the', 'gi'); //g플래그는 the라는 단어를 모두 찾아서 배열로 만들어줌
//i플래그는 대소문자 구분없이 모두 찾을 때 사용
console.log(str2.match(regexp1));

//리터럴 방식
const regexp2 = /the/gi;
const regexp3 = /fox/gi;
const regexp4 = /wonho/gi;
//match 메소드
console.log(str2.match(regexp2));
//test 메소드
console.log(regexp3.test(str2));
console.log(regexp4.test(str2));
//replace 메소드
console.log(str2.replace(regexp3, 'AAA'));
console.log(str2);

//플래그 연습
console.log('************플래그 연습**************');
console.log(str2.match(/the/gi)); //정규식에 별다른 플래그(옵션)가 없다면 최초 the만 찾아서 반환한다.
console.log(str2.match(/\.$/gim)); // \(이스케이프 문자)는 정규 표현식에서 특정 기호가 특정 기능을 할 경우 일반적인 문자로 해석하기 위해 붙여준다
// ./$ 에서 $는 .(마침표)가 str2의 문장 끝부분에 있는지 여부를 알기 위해 사용된다. 이때 str2는 `기호 앞이 끝이므로 마침표가 없으므로 null이 나오고 플래그로 m을 써주면 str2의 각각의 줄에서 마침표로 끝나는 부분이 있는지 여부를 알려준다

//정규식 표현 연습
console.log('***********패턴 연습************');
console.log(str2.match(/d$/gm));
console.log(str2.match(/^t/gim));
console.log(str2.match(/./g)); //.은 어떠한 글자도 올 수 있다.
console.log(str2.match(/h..p/g)); //hxxp , x엔 어떠한 문자도 올 수 있다.
console.log(str2.match(/https?/g)); //http까지 찾고 ?앞의 문자 s 는 있을 수도 없을 수 도 있다..
console.log(str2.match(/d{2}/g)); //d가 두번 반복되는 부분 찾아서 반환
console.log(str2.match(/d{2,}/g));
console.log(str2.match(/d{2,3}/g));
console.log(str2.match(/\w{2,3}/g)); // \w 이 부분은 숫자 포함 영어 알파벳을 의미 하는 부분임,(2글자 이상 3글자 이하의 부분을 찾는 것)
console.log(str2.match(/\b\w{2,3}\b/g)); //  \b~\b 로 감싸면 특수문자를 경계로 해줌
console.log('[]구간 사이의 문자 찾기 연습');
console.log(str2.match(/[fox]/g)); // f o x 가 있는 모든 문자 반환
console.log(str2.match(/[0-9]/g));
console.log(str2.match(/[0-9]{1,}/g));
console.log(str2.match(/\bf\w{1,}\b/g)); //f로 시작하는 단어 찾기

//공백을 없애서 출력하는 방법
const h = `  the hello  world !
  
`;
console.log(h.replace(/\s/g, ''));

console.log(str2.match(/.{1,}(?=@)/g)); //@앞쪽을 .{1,} 조건으로 해서 추출하면 @ 앞만 나옴
console.log(str2.match(/(?<=@).{1,}/g)); //@뒤쪽을 .{1,} 조건으로 해서 추출하면 @ 뒤만 나옴
