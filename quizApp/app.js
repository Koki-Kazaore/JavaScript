const  quiz = [
  {
    question: "風折晃輝の風折。読み方は次のうちどれ？",
    answers: [
      "かざおり",
      "かざおれ",
      "かぜおり",
      "かぜおれ"
    ],
    correct: "かざおれ"
  }, {
    question: "風折晃輝の風折。全国人数およそ何人？",
    answers: [
      "120",
      "100",
      "85",
      "70"
    ],
    correct: "70"
  }, {
    question: "風折晃輝の風折。全国順位は?(1位:佐藤さん, 2位:鈴木さん)",
    answers: [
      "38,430位",
      "19,215位",
      "9,610位",
      "200位"
    ],
    correct: "38,430位"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const question = "風折晃輝の風折。読み方は次のうちどれ？";
const answers = [
  "かざおり",
  "かざおれ",
  "かぜおり",
  "かぜおれ"
];
const correct = "かざおれ";

document.getElementById("js-question").textContent = quiz[0].question;

// クイズの選択肢を設定する関数定義
const setupChoices = (i) => {
  document.getElementsByTagName("button")[i].textContent = answers[i];
}

// ボタンをクリックしたら正誤判定する関数
const clickHandler = (i) => {
  document.getElementsByTagName("button")[i].addEventListener("click", (e) => {
    if(correct === document.getElementsByTagName("button")[i].textContent){
      window.alert("正解!");
    }else{
      window.alert("不正解!");
    }
  });
}

for(let index = 0; index < answers.length; index++){
  // 関数呼び出し
  setupChoices(index);

  clickHandler(index);
}