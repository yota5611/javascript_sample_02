// JavaScript Sample 02
//外部変数の宣言・定義（以下２つの関数で共通して利用）
var scale = 100;

// 文字を拡大する関数
function enlarge(){
   scale *= 1.25;  // scale = scale * 1.25 と同義（現在のscaleを1.25倍）
   var obj = document.getElementById('ID07');
   obj.style.fontSize = scale + '%';
}

//文字を縮小する関数
function reduce(){
   scale /= 1.25;  // 現在のscaleを1.25で割る
   var obj = document.getElementById('ID07');
   obj.style.fontSize = scale + '%';
}
// ユーザー入力でターゲット要素の背景色を変更
function ChangeBGColor() {
  var obj = document.getElementById('ID08'); // ターゲット要素
  var col = document.getElementById('COL'); // 入力
  obj.style.backgroundColor = col.value;
}
// ユーザー入力でターゲット要素の文字列を変更
function ChangeContent(){
    var m = document.getElementById('ID09'); // ターゲット要素
    var n = document.getElementById('NAME'); // 入力
    var res = 'こんにちは <b>' + n.value + '</b> さん';
    m.innerHTML = res;
}
// ２つの値を掛け算するプログラム
function Calc01() {
    var ans = document.getElementById('ANS'); // ターゲット要素
    var x = document.getElementById('X'); // 入力１
    var y = document.getElementById('Y'); // 入力２
    ans.value =Number( x.value ) * Number( y.value );
}
// 総和を求めるプログラム
function Calc02() {
  var ans = document.getElementById('ANS2'); // ターゲット要素
  var xs = document.getElementById('XS'); // 入力１
  var xe = document.getElementById('XE'); // 入力２

  // 変数 s に順次値を足し込む
  var s = 0;
  for(var i=Number(xs.value); i<=Number(xe.value); i++){
    s = s + i;
  }
  ans.value = s;
}
// クリックイベントに反応するイベントリスナーを定義
window.onload = function() {
    var btn = document.getElementById('CALC03');
    btn.addEventListener('click', Calc03, false);
}
// イベントハンドラー
function Calc03() {
    var ans = document.getElementById('ANS3');
    var x = document.getElementById('X3');
    var y = document.getElementById('Y3');
    ans.value =Number( x.value ) * Number( y.value );
}
