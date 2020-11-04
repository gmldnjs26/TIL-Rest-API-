function listPages() {
  // ページナビを作成する。
  return Array(10)
    .fill()
    .map((v, i) => i + 1)
    .filter(i => i >= 1 && i <= 10);
}

var arr = listPages();
console.log(arr);
var a = 3;
var b = 4;
console.log(a / b + 1);
