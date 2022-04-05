export default function (data) {
  //fuction 의 이름이 없어도 된다 default로 내보내기 때문
  return Object.prototype.toString.call(data);
}
