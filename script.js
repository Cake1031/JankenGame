"usestrict";
function p_hand(p_random){
    //相手の手を決める
    const janken = ["グー","チョキ","パー","ファイア","ウォーター"];
    const random = Math.floor(Math.random() * 5);

    //自分の手を決める
    const p_janken = ["グー","チョキ","パー","ファイア","ウォーター"];

    //勝ち負けの判定　　メモ【0=グー　1=チョキ　2=パー 3=ファイア　4=ウォーター】
    let result;

    if(p_random === random) {
        result = "<span class='drow'>【あいこ】</span>です";
    } else if(p_random === 0 && random === 1 || p_random === 0 && random === 4) {
        result = "あなたの<span class='win'>【勝ち】</span>です！";
    } else if(p_random === 1 && random === 2 || p_random === 1 && random === 4) {
        result = "あなたの<span class='win'>【勝ち】</span>です！";
    } else if(p_random === 2 && random === 0 || p_random === 2 && random === 4) {
        result = "あなたの<span class='win'>【勝ち】</span>です！";
    } else if(p_random === 3 && random === 0 || p_random === 3 && random === 1 || p_random === 3 && random === 2) {
        result = "あなたの<span class='win'>【勝ち】</span>です！";
    } else if(p_random === 4 && random === 3) {
        result = "あなたの<span class='win'>【勝ち】</span>です！";
    } else {
        result = "あなたの<span class='lose'>【負け】</span>です...。"
    }

    document.getElementById("jankenpon").src="/JankenGame/images/jan" + random + ".png";
    document.getElementById("jankenpon2").src="/JankenGame/images/jan" + p_random + ".png";

    document.getElementById("output").innerHTML = 
    `${p_janken[p_random]}を出しました。<br>相手は${janken[random]}を出しました。<br>
    結果は...。${result}`;
};