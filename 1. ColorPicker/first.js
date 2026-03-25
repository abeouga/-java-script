const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker'); //type属性が colorの要素を取得。

const colorBg = () => {
    const val = color.value; // 何度も使うので変数に入れる
    document.body.style.backgroundColor = val;

    if (val === '#ffffff') {
        text.textContent = `カラーコード：${val} (white)`;
    } else if (val === '#000000') {
        text.textContent = `カラーコード：${val} (black)`;
    } else {
        text.textContent = `カラーコード：${val}`;
    }
}

// カラーピッカーが変更されたら colorBgを発動させる。
color.addEventListener('input', colorBg);

console.log('準備完了');