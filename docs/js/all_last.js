/*
memo
score: 現在の点数
score_raw: 試合終了時の素点
score_final: 試合終了時のウマオカ含む点数
total: リーグにおけるトータル点数
total_final: リーグにおける試合終了時のトータル点数
*/

function calc_orasu() {

// 点数表
const tumo_oya = [
    ["500_all_tumo", 1500, 500],
    ["700_all_tumo", 2100, 700],
    ["800_all_tumo", 2400, 800],
    ["1000_all_tumo", 3000, 1000],
    ["1200_all_tumo", 3600, 1200],
    ["1300_all_tumo", 3900, 1300],
    ["1500_all_tumo", 4500, 1500],
    ["1600_all_tumo", 4800, 1600],
    ["1800_all_tumo", 5400, 1800],
    ["2000_all_tumo", 6000, 2000],
    ["2300_all_tumo", 6900, 2300],
    ["2600_all_tumo", 7800, 2600],
    ["2900_all_tumo", 8700, 2900],
    ["3200_all_tumo", 9600, 3200],
    ["3600_all_tumo", 10800, 3600],
    ["3900_all_tumo", 11700, 3900],
    ["4000_all_tumo", 12000, 4000],
    ["6000_all_tumo", 18000, 6000],
    ["8000_all_tumo", 24000, 8000],
    ["12000_all_tumo", 36000, 12000],
    ["16000_all_tumo", 48000, 16000],
    ["32000_all_tumo", 96000, 32000]
    ];
const tumo_ko = [
    ["300_500_tumo", 1100, 300, 500],
    ["400_700_tumo", 1500, 400, 700],
    ["400_800_tumo", 1600, 400, 800],
    ["500_1000_tumo", 2000, 500, 1000],
    ["600_1200_tumo", 2400, 600, 1200],
    ["700_1300_tumo", 2700, 700, 1300],
    ["800_1500_tumo", 3100, 800, 1500],
    ["800_1600_tumo", 3200, 800, 1600],
    ["900_1800_tumo", 3600, 900, 1800],
    ["1000_2000_tumo", 4000, 1000, 2000],
    ["1200_2300_tumo", 4700, 1200, 2300],
    ["1300_2600_tumo", 5200, 1300, 2600],
    ["1500_2900_tumo", 5900, 1500, 2900],
    ["1600_3200_tumo", 6400, 1600, 3200],
    ["1800_3600_tumo", 7200, 1800, 3600],
    ["2000_3900_tumo", 7900, 2000, 3900],
    ["2000_4000_tumo", 8000, 2000, 4000],
    ["3000_6000_tumo", 12000, 3000, 6000],
    ["4000_8000_tumo", 16000, 4000, 8000],
    ["6000_12000_tumo", 24000, 6000, 12000],
    ["8000_16000_tumo", 32000, 8000, 16000],
    ["16000_32000_tumo", 64000, 16000, 32000]
];
const ron_oya = [
    ["1500_ron", 1500],
    ["2000_ron", 2000],
    ["2400_ron", 2400],
    ["2900_ron", 2900],
    ["3400_ron", 3400],
    ["3900_ron", 3900],
    ["4400_ron", 4400],
    ["4800_ron", 4800],
    ["5300_ron", 5300],
    ["5800_ron", 5800],
    ["6800_ron", 6800],
    ["7700_ron", 7700],
    ["8700_ron", 8700],
    ["9600_ron", 9600],
    ["10600_ron", 10600],
    ["11600_ron", 11600],
    ["12000_ron", 12000],
    ["18000_ron", 18000],
    ["24000_ron", 24000],
    ["36000_ron", 36000],
    ["48000_ron", 48000],
    ["96000_ron", 96000]
    ];
const ron_ko = [
    ["1000_ron", 1000],
    ["1300_ron", 1300],
    ["1600_ron", 1600],
    ["2000_ron", 2000],
    ["2300_ron", 2300],
    ["2600_ron", 2600],
    ["2900_ron", 2900],
    ["3200_ron", 3200],
    ["3600_ron", 3600],
    ["3900_ron", 3900],
    ["4500_ron", 4500],
    ["5200_ron", 5200],
    ["5800_ron", 5800],
    ["6400_ron", 6400],
    ["7100_ron", 7100],
    ["7700_ron", 7700],
    ["8000_ron", 8000],
    ["12000_ron", 12000],
    ["16000_ron", 16000],
    ["24000_ron", 24000],
    ["32000_ron", 32000],
    ["64000_ron", 64000]
];

// 素点の計算(ツモアガり)
function tumo_agari(hora) {
    let score_raw = [];
    // 親のアガり
    if (hora == oya) {
        // 全得点パターンを計算
        for (let i = 0; i < tumo_oya.length; i++) {
            let tmp = new Array(4);
            // 各々の点棒移動
            for (let j = 0; j < score.length; j++) {
                // アガった人
                if (j == hora) {
                    tmp[j] = score[j] + tumo_oya[i][1] + honba * 300 + kyotaku * 1000;
                }
                // アガられた人
                else {
                    tmp[j] = score[j] - tumo_oya[i][2] - honba * 100;
                }
            }
            score_raw.push(tmp);
        }
    }
    // 子のアガり
    else {
        // 全得点パターンを計算
        for (let i = 0; i < tumo_ko.length; i++) {
            let tmp = new Array(4);
            // 各々の点棒移動
            for (let j = 0; j < score.length; j++) {
                // アガった人
                if (j == hora) {
                    tmp[j] = score[j] + tumo_ko[i][1] + honba * 300 + kyotaku * 1000;
                }
                // アガられた人(親)
                else if (j == oya) {
                    tmp[j] = score[j] - tumo_ko[i][3] - honba * 100;
                }
                // アガられた人(子)
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
function ron_agari(hora, hojyu) {
    let score_raw = [];
    // 親のアガり
    if (hora == oya) {
        // 全得点パターンを計算
        for (let i = 0; i < ron_oya.length; i++) {
            let tmp = new Array(4);
            // 各々の点棒移動
            for (let j = 0; j < score.length; j++) {
                // アガった人
                if (j == hora) {
                    tmp[j] = score[j] + ron_oya[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 放銃した人
                else if (j == hojyu) {
                    tmp[j] = score[j] - ron_oya[i][1] - honba * 300;
                }
            }
            score_raw.push(tmp);
        }
    }
    // 子のアガり
    else {
        // 全得点パターンを計算
        for (let i = 0; i < tumo_ko.length; i++) {
            let tmp = new Array(4);
            // 各々の点棒移動
            for (let j = 0; j < score.length; j++) {
                // アガった人
                if (j == hora) {
                    tmp[j] = score[j] + ron_ko[i][1] + honba * 300 + kyotaku * 1000;
                }
                // 放銃した人
                else if (j == hojyu) {
                    tmp[j] = score[j] - ron_ko[i][1] - honba * 300;
                }
            }
            score_raw.push(tmp);
        }
    }
    return score_raw;
}

// ランク付け(タイのときは平均順位)
function rank_ave(score_raw) {
    let score_rank = [];
    for (let i = 0; i < score_raw.length; i++) {
        let tmp = new Array(4);
        for (let j = 0; j < score_raw[i].length; j++) {
            tmp[j] = 0.5;
            for (let k = 0; k < score_raw[i].length; k++) {
                if (score_raw[i][j] < score_raw[i][k]) {
                    tmp[j] += 1;
                }
                else if (score_raw[i][j] == score_raw[i][k]) {
                    tmp[j] += 0.5;
                }
            }
        }
        score_rank.push(tmp);
    }
    return score_rank;
}

// ウマオカ含む点数の計算
function calc_score(score_raw) {
    let score_final = [];
    let score_rank = rank_ave(score_raw);
    for (let i = 0; i < score_raw.length; i++) {
        let tmp = new Array(4);
        for (let j = 0; j < score_raw[i].length; j++) {
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
        let tmp = new Array(4);
        for (let j = 0; j < score_final[i].length; j++) {
            tmp[j] = Math.round(score_final[i][j] * 10 + total[j] * 10) / 10;
        }
        total_final.push(tmp);
    }
    return total_final;
}

// ランク付け(タイのときは最上順位)
function rank_eq(total_final) {
    let total_rank = [];
    for (let i = 0; i < total_final.length; i++) {
        let tmp = new Array(4);
        for (let j = 0; j < total_final[i].length; j++) {
            tmp[j] = 1;
            for (let k = 0; k < total_final[i].length; k++) {
                if (total_final[i][j] < total_final[i][k]) {
                    tmp[j] += 1;
                }
            }
        }
        total_rank.push(tmp);
    }
    return total_rank;
}

// 条件判定
function judge(total_final, hora, target) {
    let total_judge = [];
    let total_rank = rank_eq(total_final);
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

// 値の取得
let score = [
    document.getElementById("score_A").valueAsNumber,
    document.getElementById("score_B").valueAsNumber,
    document.getElementById("score_C").valueAsNumber,
    document.getElementById("score_D").valueAsNumber
];
let total = [
    document.getElementById("total_A").valueAsNumber,
    document.getElementById("total_B").valueAsNumber,
    document.getElementById("total_C").valueAsNumber,
    document.getElementById("total_D").valueAsNumber
];
let umaoka = [
    (document.getElementById("uma_4to1").valueAsNumber + document.getElementById("oka").valueAsNumber) * 1000,
    document.getElementById("uma_3to2").valueAsNumber * 1000,
    - document.getElementById("uma_3to2").valueAsNumber * 1000,
    - document.getElementById("uma_4to1").valueAsNumber * 1000,
];
let genten = document.getElementById("genten").valueAsNumber;
let honba = document.getElementById("honba").valueAsNumber;
let kyotaku = document.getElementById("kyotaku").valueAsNumber;
let target = document.getElementById("target").valueAsNumber;
let elems = document.getElementsByName("oya");
let oya = "";
for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked){
        oya = Number(elems[i].value);
    }
}

console.clear();
console.log(score);
console.log(total);
console.log(umaoka);
console.log(genten);
console.log(honba);
console.log(kyotaku);
console.log(target);
console.log(oya);

let hora = 0;

let score_raw = tumo_agari(hora);
console.log(JSON.stringify(score_raw));

let score_rank = rank_ave(score_raw);
console.log(JSON.stringify(score_rank));

let score_final = calc_score(score_raw);
console.log(JSON.stringify(score_final));

let total_final = calc_total(score_final, total);
console.log(JSON.stringify(total_final));

let total_rank = rank_eq(total_final);
console.log(JSON.stringify(total_rank));

let total_judge = judge(total_final, hora, target);
console.log(JSON.stringify(total_judge));


// let b = rank(a[1]);
// console.log(b);
// sum = score[0] + score[1];
// console.log(sum);
// let condition_A = document.getElementById("condition_A");
// condition_A.textContent = sum;
}