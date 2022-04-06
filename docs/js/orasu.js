$(function() {
    let i = 0;
    $(".add").click(function() {
        $(".nonplayer-tbl").append("<tr> <td><input type=\"text\" class=\"name\" name=\"name\" placeholder=\"Xさん\"></td> <td><input type=\"number\" class=\"lg-num\" name=\"total\" placeholder=\"0\"></td> <td><button type=\"button\" class=\"del\">－</button></td> </tr>");
    });
    $(".nonplayer-tbl").on("click", ".del", function() {
        $(this).closest("tr").remove();
    });
});



/*
変数名
score: 現在の点数
score_raw: 試合終了時の素点
score_final: 試合終了時のウマオカ含む点数
total: リーグにおけるトータル点数
total_final: リーグにおける試合終了時のトータル点数
*/

function calcOrasu() {

/* 関数 */

// 点数表
let tumo_oya = [
    ["500all", 1500, 500],
    ["700all", 2100, 700],
    ["800all", 2400, 800],
    ["1000all", 3000, 1000],
    ["1200all", 3600, 1200],
    ["1300all", 3900, 1300],
    ["1500all", 4500, 1500],
    ["1600all", 4800, 1600],
    ["1800all", 5400, 1800],
    ["2000all", 6000, 2000],
    ["2300all", 6900, 2300],
    ["2600all", 7800, 2600],
    ["2900all", 8700, 2900],
    ["3200all", 9600, 3200],
    ["3600all", 10800, 3600],
    ["3900all", 11700, 3900],
    ["4000all", 12000, 4000],
    ["6000all", 18000, 6000],
    ["8000all", 24000, 8000],
    ["12000all", 36000, 12000],
    ["16000all", 48000, 16000],
    ["32000all", 96000, 32000]
    ];
let tumo_ko = [
    ["300-500", 1100, 300, 500],
    ["400-700", 1500, 400, 700],
    ["400-800", 1600, 400, 800],
    ["500-1000", 2000, 500, 1000],
    ["600-1200", 2400, 600, 1200],
    ["700-1300", 2700, 700, 1300],
    ["800-1500", 3100, 800, 1500],
    ["800-1600", 3200, 800, 1600],
    ["900-1800", 3600, 900, 1800],
    ["1000-2000", 4000, 1000, 2000],
    ["1200-2300", 4700, 1200, 2300],
    ["1300-2600", 5200, 1300, 2600],
    ["1500-2900", 5900, 1500, 2900],
    ["1600-3200", 6400, 1600, 3200],
    ["1800-3600", 7200, 1800, 3600],
    ["2000-3900", 7900, 2000, 3900],
    ["2000-4000", 8000, 2000, 4000],
    ["3000-6000", 12000, 3000, 6000],
    ["4000-8000", 16000, 4000, 8000],
    ["6000-12000", 24000, 6000, 12000],
    ["8000-16000", 32000, 8000, 16000],
    ["16000-32000", 64000, 16000, 32000]
];
let ron_oya = [
    ["1500", 1500],
    ["2000", 2000],
    ["2400", 2400],
    ["2900", 2900],
    ["3400", 3400],
    ["3900", 3900],
    ["4400", 4400],
    ["4800", 4800],
    ["5300", 5300],
    ["5800", 5800],
    ["6800", 6800],
    ["7700", 7700],
    ["8700", 8700],
    ["9600", 9600],
    ["10600", 10600],
    ["11600", 11600],
    ["12000", 12000],
    ["18000", 18000],
    ["24000", 24000],
    ["36000", 36000],
    ["48000", 48000],
    ["96000", 96000]
    ];
let ron_ko = [
    ["1000", 1000],
    ["1300", 1300],
    ["1600", 1600],
    ["2000", 2000],
    ["2300", 2300],
    ["2600", 2600],
    ["2900", 2900],
    ["3200", 3200],
    ["3600", 3600],
    ["3900", 3900],
    ["4500", 4500],
    ["5200", 5200],
    ["5800", 5800],
    ["6400", 6400],
    ["7100", 7100],
    ["7700", 7700],
    ["8000", 8000],
    ["12000", 12000],
    ["16000", 16000],
    ["24000", 24000],
    ["32000", 32000],
    ["64000", 64000]
];

// 切り上げ満貫と70符以上の除外
function del(array, kiriage, rare) {
    if (kiriage == 0) {
        // 30符4翻除外
        array.splice(15, 1);
    }
    if (rare == 0) {
        // 110符2翻除外
        array.splice(14, 1);
        // 90符2翻除外
        array.splice(12, 1);
        // 70符2翻除外
        array.splice(10, 1);
        // 110符1翻除外
        array.splice(8, 1);
        // 90符1翻除外
        array.splice(6, 1);
        // 70符1翻除外
        array.splice(4, 1);
    }
    return array;
}

// 流局
let bappu = [
    ["全員ノーテン", 0, 0, 0, 0],
    ["Aの1人テンパイ", 3000, -1000, -1000, -1000],
    ["Bの1人テンパイ", -1000, 3000, -1000, -1000],
    ["Cの1人テンパイ", -1000, -1000, 3000, -1000],
    ["Dの1人テンパイ", -1000, -1000, -1000, 3000],
    ["A・Bの2人テンパイ", 1500, 1500, -1500, -1500],
    ["A・Cの2人テンパイ", 1500, -1500, 1500, -1500],
    ["A・Dの2人テンパイ", 1500, -1500, -1500, 1500],
    ["B・Cの2人テンパイ", -1500, 1500, 1500, -1500],
    ["B・Dの2人テンパイ", -1500, 1500, -1500, 1500],
    ["C・Dの2人テンパイ", -1500, -1500, 1500, 1500],
    ["A・B・Cの3人テンパイ", 1000, 1000, 1000, -3000],
    ["A・B・Dの3人テンパイ", 1000, 1000, -3000, 1000],
    ["A・C・Dの3人テンパイ", 1000, -3000, 1000, 1000],
    ["B・C・Dの3人テンパイ", -3000, 1000, 1000, 1000],
    ["全員テンパイ", 0, 0, 0, 0]
];

// 名前の置換と親による分類
function repl(bappu, name, oya) {
    for (let i = 0; i < bappu.length; i++) {
        bappu[i][0] = bappu[i][0].replace("A", name[0]);
        bappu[i][0] = bappu[i][0].replace("B", name[1]);
        bappu[i][0] = bappu[i][0].replace("C", name[2]);
        bappu[i][0] = bappu[i][0].replace("D", name[3]);
    }
    switch (oya) {
        case 0:
            bappu.splice(15, 1);
            bappu.splice(13, 1);
            bappu.splice(12, 1);
            bappu.splice(11, 1);
            bappu.splice(7, 1);
            bappu.splice(6, 1);
            bappu.splice(5, 1);
            bappu.splice(1, 1);
            break;
        case 1:
            bappu.splice(15, 1);
            bappu.splice(14, 1);
            bappu.splice(12, 1);
            bappu.splice(11, 1);
            bappu.splice(9, 1);
            bappu.splice(8, 1);
            bappu.splice(5, 1);
            bappu.splice(2, 1);
            break;
        case 2:
            bappu.splice(15, 1);
            bappu.splice(14, 1);
            bappu.splice(13, 1);
            bappu.splice(11, 1);
            bappu.splice(10, 1);
            bappu.splice(8, 1);
            bappu.splice(6, 1);
            bappu.splice(3, 1);
            break;
        case 3:
            bappu.splice(15, 1);
            bappu.splice(14, 1);
            bappu.splice(13, 1);
            bappu.splice(12, 1);
            bappu.splice(10, 1);
            bappu.splice(9, 1);
            bappu.splice(7, 1);
            bappu.splice(4, 1);
            break;
        default:
            break;
    }
    return bappu;
}

// ランク付け(タイのときは全員平均順位)
function rank_ave(array) {
    let array_rank = [];
    for (let i = 0; i < array.length; i++) {
        let tmp = new Array(array[i].length);
        for (let j = 0; j < array[i].length; j++) {
            tmp[j] = 0.5;
            for (let k = 0; k < array[i].length; k++) {
                if (array[i][j] < array[i][k]) {
                    tmp[j] += 1;
                }
                else if (array[i][j] == array[i][k]) {
                    tmp[j] += 0.5;
                }
            }
        }
        array_rank.push(tmp);
    }
    return array_rank;
}

// ランク付け(タイのときは全員最上順位)
function rank_eq(array) {
    let array_rank = [];
    for (let i = 0; i < array.length; i++) {
        let tmp = new Array(array[i].length);
        for (let j = 0; j < array[i].length; j++) {
            tmp[j] = 1;
            for (let k = 0; k < array[i].length; k++) {
                if (array[i][j] < array[i][k]) {
                    tmp[j] += 1;
                }
            }
        }
        array_rank.push(tmp);
    }
    return array_rank;
}

// ランク付け(タイのときでも上から順位付け)
function rank_neq(array) {
    let array_rank = [];
    for (let i = 0; i < array.length; i++) {
        let tmp = new Array(array[i].length);
        for (let j = 0; j < array[i].length; j++) {
            tmp[j] = 1;
            for (let k = 0; k < array[i].length; k++) {
                if (j > k && array[i][j] <= array[i][k]) {
                    tmp[j] += 1;
                }
                if (j <= k && array[i][j] < array[i][k]) {
                    tmp[j] += 1;
                }
            }
        }
        array_rank.push(tmp);
    }
    return array_rank;
}

// 素点の計算(ツモアガり)
function tumo_agari(hora, tumo_oya, tumo_ko, score, oya, honba, kyotaku) {
    let score_raw = [];
    // 親のアガり
    if (hora == oya) {
        for (let i = 0; i < tumo_oya.length; i++) {
            let tmp = new Array(4);
            for (let j = 0; j < 4; j++) {
                // 和了
                if (j == hora) {
                    tmp[j] = score[j] + tumo_oya[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 被ツモ
                else {
                    tmp[j] = score[j] - tumo_oya[i][2] - honba * 100;
                }
            }
            score_raw.push(tmp);
        }
    }
    // 子のアガり
    else {
        for (let i = 0; i < tumo_ko.length; i++) {
            let tmp = new Array(4);
            for (let j = 0; j < 4; j++) {
                // 和了
                if (j == hora) {
                    tmp[j] = score[j] + tumo_ko[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 被ツモ(親)
                else if (j == oya) {
                    tmp[j] = score[j] - tumo_ko[i][3] - honba * 100;
                }
                // 被ツモ(子)
                else {
                    tmp[j] = score[j] - tumo_ko[i][2] - honba * 100;
                }
            }
            score_raw.push(tmp);
        }
    }
    return score_raw;
}

// 素点の計算(ロンアガり)
function ron_agari(hora, hojyu, ron_oya, ron_ko, score, oya, honba, kyotaku) {
    let score_raw = [];
    // 親のアガり
    if (hora == oya) {
        for (let i = 0; i < ron_oya.length; i++) {
            let tmp = new Array(4);
            for (let j = 0; j < 4; j++) {
                // 和了
                if (j == hora) {
                    tmp[j] = score[j] + ron_oya[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 放銃
                else if (j == hojyu) {
                    tmp[j] = score[j] - ron_oya[i][1] - honba * 300;
                }
                // 横移動
                else {
                    tmp[j] = score[j]
                }
            }
            score_raw.push(tmp);
        }
    }
    // 子のアガり
    else {
        for (let i = 0; i < ron_ko.length; i++) {
            let tmp = new Array(4);
            for (let j = 0; j < 4; j++) {
                // 和了
                if (j == hora) {
                    tmp[j] = score[j] + ron_ko[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 放銃
                else if (j == hojyu) {
                    tmp[j] = score[j] - ron_ko[i][1] - honba * 300;
                }
                // 横移動
                else {
                    tmp[j] = score[j]
                }
            }
            score_raw.push(tmp);
        }
    }
    return score_raw;
}

// 素点の計算(流局)
function ryukyoku(bappu, score) {
    let score_raw = [];
    for (let i = 0; i < bappu.length; i++) {
        let tmp = new Array(4);
        for (let j = 0; j < 4; j++) {
            tmp[j] = score[j] + bappu[i][j+1]
        }
        score_raw.push(tmp);
    }
    return score_raw;
}

// 残留供託の計算(流局)
function calc_zanryu(score_raw, half, zanryu) {
    let score_rank = [];
    // 同点時の残留供託の扱い
    if (half == 1) {
        score_rank = rank_ave(score_raw);
    }
    else {
        score_rank = rank_neq(score_raw);
    }
    let score_raw_ryukyoku = score_raw.slice(0);
    // 流局時の残留供託の扱い
    if (zanryu == 1) {
        for (let i = 0; i < score_raw.length; i++) {
            for (let j = 0; j < 4; j++) {
                switch (score_rank[i][j]) {
                    case 1:
                        score_raw_ryukyoku[i][j] = score_raw[i][j] + kyotaku * 1000
                        break;
                    case 1.5:
                        score_raw_ryukyoku[i][j] = score_raw[i][j] + kyotaku * 500
                        break;
                    default:
                        break;
                }
            }
            
        }
    }
    return score_raw_ryukyoku;
}

// ウマオカ含む点数の計算
function calc_score(score_raw, genten, umaoka, half) {
    let score_rank = [];
    // 同点時のウマオカの扱い
    if (half == 1) {
        score_rank = rank_ave(score_raw);
    }
    else {
        score_rank = rank_neq(score_raw);
    }
    let score_final = [];
    for (let i = 0; i < score_raw.length; i++) {
        let tmp = new Array(4);
        for (let j = 0; j < 4; j++) {
            // 順位に応じたウマオカを計算
            switch (score_rank[i][j]) {
                case 1:
                    tmp[j] = (score_raw[i][j] - genten + umaoka[0]) / 1000;
                    break;
                case 2:
                    tmp[j] = (score_raw[i][j] - genten + umaoka[1]) / 1000;
                    break;
                case 3:
                    tmp[j] = (score_raw[i][j] - genten + umaoka[2]) / 1000;
                    break;
                case 4:
                    tmp[j] = (score_raw[i][j] - genten + umaoka[3]) / 1000;
                    break;
                case 1.5:
                    tmp[j] = (score_raw[i][j] - genten + (umaoka[0] + umaoka[1]) / 2) / 1000;
                    break;
                case 2.5:
                    tmp[j] = (score_raw[i][j] - genten + (umaoka[1] + umaoka[2]) / 2) / 1000;
                    break;
                case 3.5:
                    tmp[j] = (score_raw[i][j] - genten + (umaoka[2] + umaoka[3]) / 2) / 1000;
                    break;
                default:
                    break;
            }
        }
        score_final.push(tmp);
    }
    return score_final;
}

// トータル点数の計算
function calc_total(score_final, total) {
    let total_final = [];
    for (let i = 0; i < score_final.length; i++) {
        let tmp = total.slice(0);
        for (let j = 0; j < 4; j++) {
            tmp[j] = Math.round(score_final[i][j] * 10 + total[j] * 10) / 10;
        }
        total_final.push(tmp);
    }
    return total_final;
}

// 条件判定
function judge(total_final, hora, target, tie) {
    // トータル同順位の扱い
    let total_rank = [];
    if (tie == 1) {
        total_rank = rank_neq(total_final);
    }
    else {
        total_rank = rank_eq(total_final);
    }
    let total_judge = [];
    for (let i = 0; i < total_final.length; i++) {
        if (total_rank[i][hora] <= target) {
            total_judge.push("T");
        }
        else {
            total_judge.push("F");
        }
    }
    return total_judge;
}

// 判定結果を統合
function int(tumo_oya, tumo_ko, ron_oya, ron_ko, total, score, oya, honba, kyotaku, genten, umaoka, half, target, tie) {
    tumo_oya = del(tumo_oya, kiriage, rare);
    tumo_ko = del(tumo_ko, kiriage, rare);
    ron_oya = del(ron_oya, kiriage, rare);
    ron_ko = del(ron_ko, kiriage, rare);
    let judgement = [];
    for (let hora = 0; hora < 4; hora++) {
        let tmp = [];
        for (let hojyu = 0; hojyu < 4; hojyu++) {
            // ツモアガり
            if (hojyu == hora) {
                let score_raw = tumo_agari(hora, tumo_oya, tumo_ko, score, oya, honba, kyotaku);
                let score_final = calc_score(score_raw, genten, umaoka, half);
                let total_final = calc_total(score_final, total);
                let total_judge = judge(total_final, hora, target, tie);
                tmp.push(total_judge);
            }
            // ロンアガり
            else {
                let score_raw = ron_agari(hora, hojyu, ron_oya, ron_ko, score, oya, honba, kyotaku);
                let score_final = calc_score(score_raw, genten, umaoka, half);
                let total_final = calc_total(score_final, total);
                let total_judge = judge(total_final, hora, target, tie);
                tmp.push(total_judge);
            }
        }
        judgement.push(tmp);
    }
    return judgement;
}

// 文章化
function doc(judgement) {
    let result = [];
    for (let i = 0; i < 4; i++) {
        let tmp = [];
        for (let j = 0; j < judgement[i].length; j++) {
            // 全てTのとき
            if (judgement[i][j].every(value => value == "T") == true) {
                tmp.push("無条件")
            }
            // 全てFのとき
            else if (judgement[i][j].every(value => value == "F") == true) {
                if (i == oya) {
                    tmp.push("続行")
                }
                else {
                    tmp.push("目無し")
                }
            }
            // それ以外のとき
            else {
                let buf = "";
                // 30符1翻判定のため先頭にFを追加
                judgement[i][j].unshift("F");
                // ツモアガり
                if (i == j) {
                    // 親のアガり
                    if (i == oya) {
                        for (let k = 0; k < judgement[i][j].length - 1; k++) {
                            // FTと並んでいるとき
                            if (judgement[i][j][k] == "F" && judgement[i][j][k+1] == "T") {
                                buf = buf + tumo_oya[k][0] + "以上";
                            }
                            // TFと並んでいるとき
                            if (judgement[i][j][k] == "T" && judgement[i][j][k+1] == "F") {
                                // FTFと並んでいるとき
                                if (judgement[i][j][k-1] == "F") {
                                    buf = buf.slice(0, -2) + "<br>";
                                }
                                // それ以外のとき
                                else {
                                    buf = buf + tumo_oya[k-1][0] + "以下<br>";
                                }
                            }
                        }
                    }
                    // 子のアガり
                    else {
                        for (let k = 0; k < judgement[i][j].length - 1; k++) {
                            // FTが並んでいるとき
                            if (judgement[i][j][k] == "F" && judgement[i][j][k+1] == "T") {
                                buf = buf + tumo_ko[k][0] + "以上";
                            }
                            // TFと並んでいるとき
                            if (judgement[i][j][k] == "T" && judgement[i][j][k+1] == "F") {
                                // FTFと並んでいるとき
                                if (judgement[i][j][k-1] == "F") {
                                    buf = buf.slice(0, -2) + "<br>";
                                }
                                // それ以外のとき
                                else {
                                    buf = buf + tumo_ko[k-1][0] + "以下<br>";
                                }
                            }
                        }
                    }
                }
                // ロンアガり
                else {
                    // 親のアガり
                    if (i == oya) {
                        for (let k = 0; k < judgement[i][j].length - 1; k++) {
                            // FTが並んでいるとき
                            if (judgement[i][j][k] == "F" && judgement[i][j][k+1] == "T") {
                                buf = buf + ron_oya[k][0] + "以上";
                            }
                            // TFと並んでいるとき
                            if (judgement[i][j][k] == "T" && judgement[i][j][k+1] == "F") {
                                // FTFと並んでいるとき
                                if (judgement[i][j][k-1] == "F") {
                                    buf = buf.slice(0, -2) + "<br>";
                                }
                                // それ以外のとき
                                else {
                                    buf = buf + ron_oya[k-1][0] + "以下<br>";
                                }
                            }
                        }
                    }
                    // 子のアガり
                    else {
                        for (let k = 0; k < judgement[i][j].length - 1; k++) {
                            // FTが並んでいるとき
                            if (judgement[i][j][k] == "F" && judgement[i][j][k+1] == "T") {
                                buf = buf + ron_ko[k][0] + "以上";
                            }
                            // TFと並んでいるとき
                            if (judgement[i][j][k] == "T" && judgement[i][j][k+1] == "F") {
                                // FTFと並んでいるとき
                                if (judgement[i][j][k-1] == "F") {
                                    buf = buf.slice(0, -2) + "<br>";
                                }
                                // それ以外のとき
                                else {
                                    buf = buf + ron_ko[k-1][0] + "以下<br>";
                                }
                            }
                        }
                    }
                }
                // 末尾が<br>のとき削除
                if (buf.slice(-4) == "<br>") {
                    buf = buf.slice(0, -4);
                }
                tmp.push(buf)
            }
        }
        result.push(tmp)
    }
    return result;
}

// 流局
function int_ryukyoku(bappu, name, total, score, oya, genten, umaoka, half, zanryu, target, tie) {
    // 判定結果を統合
    bappu = repl(bappu, name, oya);
    let score_raw = ryukyoku(bappu, score);
    let score_raw_ryukyoku = calc_zanryu(score_raw, half, zanryu);
    let score_final = calc_score(score_raw_ryukyoku, genten, umaoka, half);
    let total_final = calc_total(score_final, total);
    let total_judge = judge(total_final, oya, target, tie);
    // 文章化
    let result_ryukyoku = "";
    // 全てTのとき
    if (total_judge.every(value => value == "T") == true) {
        result_ryukyoku = "無条件";
    }
    // 全てFのとき
    else if (total_judge.every(value => value == "F") == true) {
        result_ryukyoku = "テンパイ必須";
    }
    // それ以外のとき
    else {
        for (let i = 0; i < total_judge.length; i++) {
            if (total_judge[i] == "T") {
                result_ryukyoku = result_ryukyoku + bappu[i][0] + "<br>";
            }
        }
        // 末尾が<br>のとき削除
        if (result_ryukyoku.slice(-4) == "<br>") {
            result_ryukyoku = result_ryukyoku.slice(0, -4);
        }
    }
    return result_ryukyoku;
}

/* 実行 */

// 値の入力
let name = [
    document.getElementById("name-A").value,
    document.getElementById("name-B").value,
    document.getElementById("name-C").value,
    document.getElementById("name-D").value
];
let total = [
    document.getElementById("total-A").valueAsNumber,
    document.getElementById("total-B").valueAsNumber,
    document.getElementById("total-C").valueAsNumber,
    document.getElementById("total-D").valueAsNumber
];
let score = [
    document.getElementById("score-A").valueAsNumber,
    document.getElementById("score-B").valueAsNumber,
    document.getElementById("score-C").valueAsNumber,
    document.getElementById("score-D").valueAsNumber
];
let elems = "";
let oya = "";
elems = document.getElementsByName("oya");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        oya = Number(elems[i].value);
    }
}
let honba = document.getElementById("honba").valueAsNumber;
let kyotaku = document.getElementById("kyotaku").valueAsNumber;
let genten = document.getElementById("genten").valueAsNumber;
let umaoka = [
    (document.getElementById("uma-4to1").valueAsNumber + document.getElementById("oka").valueAsNumber) * 1000,
    document.getElementById("uma-3to2").valueAsNumber * 1000,
    - document.getElementById("uma-3to2").valueAsNumber * 1000,
    - document.getElementById("uma-4to1").valueAsNumber * 1000,
];
let half = "";
elems = document.getElementsByName("half");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        half = Number(elems[i].value);
    }
}
let kiriage = "";
elems = document.getElementsByName("kiriage");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        kiriage = Number(elems[i].value);
    }
}
let rare = "";
elems = document.getElementsByName("rare");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        rare = Number(elems[i].value);
    }
}
let zanryu = "";
elems = document.getElementsByName("zanryu");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        zanryu = Number(elems[i].value);
    }
}
let target = document.getElementById("target").valueAsNumber;
let tie = "";
elems = document.getElementsByName("tie");
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        tie = Number(elems[i].value);
    }
}

// 卓外ポイントを追加
$("input[name='name']").each(function(i, elem){
    name.push($(elem).val());
});
name = name.filter(Boolean);
$("input[name='total']").each(function(i, elem){
    total.push($(elem).val());
});
total = total.filter(Boolean);

// 入力値を表示
console.log("名前:" + name);
console.log("トータル:" + total);
console.log("持ち点:" + score);
console.log("親:" + oya);
console.log("本場:" + honba);
console.log("供託:" + kyotaku);
console.log("原点:" + genten);
console.log("ウマオカ:" + umaoka);
console.log("折半:" + half);
console.log("切り上げ満貫:" + kiriage);
console.log("70符以上:" + rare);
console.log("残留供託:" + zanryu);
console.log("名前:" + target);
console.log("単独:" + tie);

// 計算
let judgement = int(tumo_oya, tumo_ko, ron_oya, ron_ko, total, score, oya, honba, kyotaku, genten, umaoka, half, target, tie)
let result = doc(judgement);
let result_ryukyoku = int_ryukyoku(bappu, name, total, score, oya, genten, umaoka, half, zanryu, target, tie);

// 計算結果を表示
console.log("判定");
console.log(judgement);
console.log("条件");
console.log(result);

// 値を出力
let nameA1 = document.getElementById("name-A1-output");
let nameA2 = document.getElementById("name-A2-output");
let nameA3 = document.getElementById("name-A3-output");
let nameA4 = document.getElementById("name-A4-output");
nameA1.innerHTML = name[0];
nameA2.innerHTML = name[0];
nameA3.innerHTML = name[0];
nameA4.innerHTML = name[0];
let nameB1 = document.getElementById("name-B1-output");
let nameB2 = document.getElementById("name-B2-output");
let nameB3 = document.getElementById("name-B3-output");
let nameB4 = document.getElementById("name-B4-output");
nameB1.innerHTML = name[1];
nameB2.innerHTML = name[1];
nameB3.innerHTML = name[1];
nameB4.innerHTML = name[1];
let nameC1 = document.getElementById("name-C1-output");
let nameC2 = document.getElementById("name-C2-output");
let nameC3 = document.getElementById("name-C3-output");
let nameC4 = document.getElementById("name-C4-output");
nameC1.innerHTML = name[2];
nameC2.innerHTML = name[2];
nameC3.innerHTML = name[2];
nameC4.innerHTML = name[2];
let nameD1 = document.getElementById("name-D1-output");
let nameD2 = document.getElementById("name-D2-output");
let nameD3 = document.getElementById("name-D3-output");
let nameD4 = document.getElementById("name-D4-output");
nameD1.innerHTML = name[3];
nameD2.innerHTML = name[3];
nameD3.innerHTML = name[3];
nameD4.innerHTML = name[3];
let resultTumoA = document.getElementById("result-tumoA-output");
resultTumoA.innerHTML = result[0][0];
let resultTumoB = document.getElementById("result-tumoB-output");
resultTumoB.innerHTML = result[1][1];
let resultTumoC = document.getElementById("result-tumoC-output");
resultTumoC.innerHTML = result[2][2];
let resultTumoD = document.getElementById("result-tumoD-output");
resultTumoD.innerHTML = result[3][3];
let resultRonAfromB = document.getElementById("result-ronAfromB-output");
resultRonAfromB.innerHTML = result[0][1];
let resultRonAfromC = document.getElementById("result-ronAfromC-output");
resultRonAfromC.innerHTML = result[0][2];
let resultRonAfromD = document.getElementById("result-ronAfromD-output");
resultRonAfromD.innerHTML = result[0][3];
let resultRonBfromA = document.getElementById("result-ronBfromA-output");
resultRonBfromA.innerHTML = result[1][0];
let resultRonBfromC = document.getElementById("result-ronBfromC-output");
resultRonBfromC.innerHTML = result[1][2];
let resultRonBfromD = document.getElementById("result-ronBfromD-output");
resultRonBfromD.innerHTML = result[1][3];
let resultRonCfromA = document.getElementById("result-ronCfromA-output");
resultRonCfromA.innerHTML = result[2][0];
let resultRonCfromB = document.getElementById("result-ronCfromB-output");
resultRonCfromB.innerHTML = result[2][1];
let resultRonCfromD = document.getElementById("result-ronCfromD-output");
resultRonCfromD.innerHTML = result[2][3];
let resultRonDfromA = document.getElementById("result-ronDfromA-output");
resultRonDfromA.innerHTML = result[3][0];
let resultRonDfromB = document.getElementById("result-ronDfromB-output");
resultRonDfromB.innerHTML = result[3][1];
let resultRonDfromC = document.getElementById("result-ronDfromC-output");
resultRonDfromC.innerHTML = result[3][2];
let nameOya = document.getElementById("name-oya-output");
nameOya.innerHTML = name[oya];
let resultRyukyoku = document.getElementById("result-ryukyoku-output");
resultRyukyoku.innerHTML = result_ryukyoku;

// 非表示用の属性を削除
$(".result").removeClass("hidden");
}
