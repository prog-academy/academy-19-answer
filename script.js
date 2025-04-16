// 1.1 要素の書き換え (テキスト)

document.querySelector("h1").textContent = "最初のh1ヘッダーのタイトルを変更"; //最初のh1ヘッダーのテキスト内容を変更

let let_h2 = document.querySelectorAll("h2");
for (let element of let_h2) {
  element.textContent = "全てのh2のタイトルを変更";
} //すべてのh2ヘッダーのテキスト内容を変更

// 1.2 要素の書き換え (css)

document.querySelector("h2").style.color = "blue"; //最初のh2ヘッダーのみ青色に
document.querySelector(".class1").style.border = "solid 1px blue"; //class1クラスのみ青色のボーダーラインを
document.querySelector("#id2").style.backgroundColor = "red"; //id1の背景を赤色に

//確認問題

// ①すべてのclass1のテキストの色をpink色にする
let let_class1 = document.querySelectorAll(".class1");
for (let element of let_class1) {
  element.style.color = "pink";
}

// ②#orangeのオレンジの文字の大きさを36pxにする
document.querySelector("#orange").style.fontSize = "36px"; /* 太字の大きさ */
