//textContentをつけることで、文字を変更できるようになった。(どのように変更するのは後に決める)
//textCOntentに documentオブジェクトの querySelectorメソッドを使用し、#colorPickerが取得してきたカラーコードの色に動的に変化させる。
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker'); //type属性が colorの要素を取得。

//カラーピッカーを操作したときの一連の操作(関数定義 =>はアロー関数)
const colorBg = () => {
    //CSSプロパティ。背景の色を変えたいので、backgroundColorを用いる。また、値はカラーピッカーで指定した値を適用させるのでcolor.valueとする。
    document.body.style.backgroundColor = color.value;

    if (color.value === '#fffffff'){
        text.textContent = `カラーコード: ${color.value}(white)`;
    } else if(color.value === '#000000'){
        text.textContent = `カラーコード: ${color.value}(black)`;
    } else {
        text.textContent = `カラーコード: ${color.value}`;
    }
   
}

// カラーピッカーが変更されたら colorBgを発動させる。イベント名は「input」機能名(関数名)はcolorBg
color.addEventListener('input', colorBg);