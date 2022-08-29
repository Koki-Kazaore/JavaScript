const question = "風折晃輝の風折。読み方は次のうちどれ？";
const answers = [
  "かざおり",
  "かざおれ",
  "かぜおり",
  "かぜおれ"
];
const correct = "かざおれ";

document.getElementById("js-question").textContent = question;

for(let index = 0; index < answers.length; index++){
  document.getElementsByTagName("button")[index].textContent = answers[index];

  // ボタンをクリックしたら正誤判定
  document.getElementsByTagName("button")[index].addEventListener("click", () => {
    if(correct === document.getElementsByTagName("button")[index].textContent){
      window.alert("正解!");
    }else{
      window.alert("不正解!");
    }
  });
}