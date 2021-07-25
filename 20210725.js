window.onload = ()=>{
  let btn = document.getElementById("myonoffswitch");
  changeMode(btn);
};

// チェックボックスの取得
const btn = document.getElementById("myonoffswitch");
 
// チェックした時の挙動
btn.addEventListener("change", () => {
  changeMode(btn);
});

function changeMode(btn) {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
}