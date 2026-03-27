//ロード画面を出すためのスクリプト
const loading = document.querySelector("#loading");/**以下の定数がここに代入されている。 */

//イベントのターゲットは画面なので、windowオブジェクトを指定。イベントの種類はload(webページ内のすべてのリソースの読み込みが完了したら)
window.addEventListener('load', () => {
    loading.classList.add('loaded'); /**loading定数。loadingに対してloadedクラスを追加することで、style.cssで設定したopacity:0;visibility:hidden;が適用され、ロード画面が非表示になる */
});