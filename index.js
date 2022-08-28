// 変数
let unko = "Hello World!";

// unko = "Hello World2!!";

// 定数
const bigUnko = "He..Hell...Hello World!"

// bigUnko = "hello world2!!"

const inoki = ['いーち','にーい','さーん','ダーー！']

// // ループ分
// let index = 0;
// while(index < inoki.length){
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

// if / else


// 関数
const test = (arg) => {
  // ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！')
  } else {
    console.log('ボンバ...!')
  }
};

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

// console.log(window.innerWidth);
// window.alert();

// console.log(document);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello world');
});