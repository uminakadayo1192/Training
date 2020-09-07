/* ------------------------------------------------------------
 * 2-2
 * ------------------------------------------------------------ */

/**
 * 要素にマウスカーソルが乗った際に、テキストを表示させる
 */
function textInput() {
  var target = document.getElementById("output"); // id="output" とついたタグを取得
  target.innerHTML = "産地: 青森県<br>糖度: 13度"; // タグのテキスト情報を上書きする
}

/**
 * 要素からマウスカーソルが離れた際に、テキストを空にする
 */
function textDelete() {
  var target = document.getElementById("output");
  target.innerHTML = "";
}


/* ------------------------------------------------------------
 * 2-3
 * ------------------------------------------------------------ */

 /**
  * 入力値を元に「成人」「未成年」を判定する
  */
function ageCheck() {
  var ageTag = document.getElementById("age"); // id="age" のついたタグを取得
  var age = ageTag.value; // ↑ のタグから「入力値 (value)」を取得
  var checkResult = ""; // 年齢の判定結果を格納

  /*
   * ! ... 結果を反転させる。true なら false, false なら true。
   * 今回なら「0~9のみ、である」→「0-9のみ、ではない！」
   */
  if (!age.match(/^[0-9]+$/)) {
    //0～9以外が含まれる or 未入力
    alert("正しく入力してください");
    exit; // 処理終了！！
  } else if (20 <= age) {
    // 20歳 以上
    checkResult = "成人です";
  } else {
    checkResult = "未成年です";
  }

  alert(
    "年齢: " + age // 年齢を表示
    + "\n"
    + checkResult // 判定結果
  );
}
