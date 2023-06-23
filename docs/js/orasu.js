// フォームの追加・削除
$(function() {
    $(".add").click(function() {
        $(".all_players").append("<tr> <td><input type=\"text\" class=\"name\" name=\"name\" placeholder=\"Xさん\" onfocus=\"this.select();\"></td> <td><input type=\"number\" class=\"total\" name=\"total\" step=\"0.1\" placeholder=\"0\" onfocus=\"this.select();\"></td> <td><button type=\"button\" class=\"del\">－</button></td> </tr>");
    });
    $(".all_players").on("click", ".del", function() {
        $(this).closest("tr").remove();
    });
});

/* オーラス条件関数 */

function doOrasu() {

/* 配列と関数 */

// 子のツモアガり
let tsumoKo = [
    {
        "display": "300-500",
        "fuhan": "30符1飜",
        "gain": 1100,
        "loseKo": 300,
        "loseOya": 500
    },
    {
        "display": "400-700",
        "fuhan": "20符2飜・40符1飜",
        "gain": 1500,
        "loseKo": 400,
        "loseOya": 700
    },
    {
        "display": "400-800",
        "fuhan": "25符2飜・50符1飜",
        "gain": 1600,
        "loseKo": 400,
        "loseOya": 800
    },
    {
        "display": "500-1000",
        "fuhan": "30符2飜・60符1飜",
        "gain": 2000,
        "loseKo": 500,
        "loseOya": 1000
    },
    {
        "display": "600-1200",
        "fuhan": "70符1飜",
        "gain": 2400,
        "loseKo": 600,
        "loseOya": 1200
    },
    {
        "display": "700-1300",
        "fuhan": "20符3飜・40符2飜・80符1飜",
        "gain": 2700,
        "loseKo": 700,
        "loseOya": 1300
    },
    {
        "display": "800-1500",
        "fuhan": "90符1飜",
        "gain": 3100,
        "loseKo": 800,
        "loseOya": 1500
    },
    {
        "display": "800-1600",
        "fuhan": "25符3飜・50符2飜・100符1飜",
        "gain": 3200,
        "loseKo": 800,
        "loseOya": 1600
    },
    {
        "display": "900-1800",
        "fuhan": "110符1飜",
        "gain": 3600,
        "loseKo": 900,
        "loseOya": 1800
    },
    {
        "display": "1000-2000",
        "fuhan": "30符3飜・60符2飜",
        "gain": 4000,
        "loseKo": 1000,
        "loseOya": 2000
    },
    {
        "display": "1200-2300",
        "fuhan": "70符2飜",
        "gain": 4700,
        "loseKo": 1200,
        "loseOya": 2300
    },
    {
        "display": "1300-2600",
        "fuhan": "20符4飜・40符3飜・80符2飜",
        "gain": 5200,
        "loseKo": 1300,
        "loseOya": 2600
    },
    {
        "display": "1500-2900",
        "fuhan": "90符1飜",
        "gain": 5900,
        "loseKo": 1500,
        "loseOya": 2900
    },
    {
        "display": "1600-3200",
        "fuhan": "25符4飜・50符3飜・100符2飜",
        "gain": 6400,
        "loseKo": 1600,
        "loseOya": 3200
    },
    {
        "display": "1800-3600",
        "fuhan": "110符2飜",
        "gain": 7200,
        "loseKo": 1800,
        "loseOya": 3600
    },
    {
        "display": "2000-3900",
        "fuhan": "30符4飜・60符3飜",
        "gain": 7900,
        "loseKo": 2000,
        "loseOya": 3900
    },
    {
        "display": "2000-4000",
        "fuhan": "満貫",
        "gain": 8000,
        "loseKo": 2000,
        "loseOya": 4000
    },
    {
        "display": "3000-6000",
        "fuhan": "跳満",
        "gain": 12000,
        "loseKo": 3000,
        "loseOya": 6000
    },
    {
        "display": "4000-8000",
        "fuhan": "倍満",
        "gain": 16000,
        "loseKo": 4000,
        "loseOya": 8000
    },
    {
        "display": "6000-12000",
        "fuhan": "三倍満",
        "gain": 24000,
        "loseKo": 6000,
        "loseOya": 12000
    },
    {
        "display": "8000-16000",
        "fuhan": "役満",
        "gain": 32000,
        "loseKo": 8000,
        "loseOya": 16000
    },
    {
        "display": "16000-32000",
        "fuhan": "ダブル役満",
        "gain": 64000,
        "loseKo": 16000,
        "loseOya": 32000
    }
]

// 親のツモアガり
let tsumoOya = [
    {
        "display": "500オール",
        "fuhan": "30符1飜",
        "gain": 1500,
        "loseKo": 500
    },
    {
        "display": "700オール",
        "fuhan": "20符2飜・40符1飜",
        "gain": 2100,
        "loseKo": 700
    },
    {
        "display": "800オール",
        "fuhan": "25符2飜・50符1飜",
        "gain": 2400,
        "loseKo": 800
    },
    {
        "display": "1000オール",
        "fuhan": "30符2飜・60符1飜",
        "gain": 3000,
        "loseKo": 1000
    },
    {
        "display": "1200オール",
        "fuhan": "70符1飜",
        "gain": 3600,
        "loseKo": 1200
    },
    {
        "display": "1300オール",
        "fuhan": "20符3飜・40符2飜・80符1飜",
        "gain": 3900,
        "loseKo": 1300
    },
    {
        "display": "1500オール",
        "fuhan": "90符1飜",
        "gain": 4500,
        "loseKo": 1500
    },
    {
        "display": "1600オール",
        "fuhan": "25符3飜・50符2飜・100符1飜",
        "gain": 4800,
        "loseKo": 1600
    },
    {
        "display": "1800オール",
        "fuhan": "110符1飜",
        "gain": 5400,
        "loseKo": 1800
    },
    {
        "display": "2000オール",
        "fuhan": "30符3飜・60符2飜",
        "gain": 6000,
        "loseKo": 2000
    },
    {
        "display": "2300オール",
        "fuhan": "70符2飜",
        "gain": 6900,
        "loseKo": 2300
    },
    {
        "display": "2600オール",
        "fuhan": "20符4飜・40符3飜・80符2飜",
        "gain": 7800,
        "loseKo": 2600
    },
    {
        "display": "2900オール",
        "fuhan": "90符1飜",
        "gain": 8700,
        "loseKo": 2900
    },
    {
        "display": "3200オール",
        "fuhan": "25符4飜・50符3飜・100符2飜",
        "gain": 9600,
        "loseKo": 3200
    },
    {
        "display": "3600オール",
        "fuhan": "110符2飜",
        "gain": 10800,
        "loseKo": 3600
    },
    {
        "display": "3900オール",
        "fuhan": "30符4飜・60符3飜",
        "gain": 11700,
        "loseKo": 3900
    },
    {
        "display": "4000オール",
        "fuhan": "満貫",
        "gain": 12000,
        "loseKo": 4000
    },
    {
        "display": "6000オール",
        "fuhan": "跳満",
        "gain": 18000,
        "loseKo": 6000
    },
    {
        "display": "8000オール",
        "fuhan": "倍満",
        "gain": 24000,
        "loseKo": 8000
    },
    {
        "display": "12000オール",
        "fuhan": "三倍満",
        "gain": 36000,
        "loseKo": 12000
    },
    {
        "display": "16000オール",
        "fuhan": "役満",
        "gain": 48000,
        "loseKo": 16000
    },
    {
        "display": "32000オール",
        "fuhan": "ダブル役満",
        "gain": 96000,
        "loseKo": 32000
    }
]

// 親のロンアガり
let ronKo = [
    {
        "display": "1000",
        "fuhan": "30符1飜",
        "gain": 1000,
        "lose": 1000
    },
    {
        "display": "1300",
        "fuhan": "40符1飜",
        "gain": 1300,
        "lose": 1300
    },
    {
        "display": "1600",
        "fuhan": "25符2飜・50符1飜",
        "gain": 1600,
        "lose": 1600
    },
    {
        "display": "2000",
        "fuhan": "30符2飜・60符1飜",
        "gain": 2000,
        "lose": 2000
    },
    {
        "display": "2300",
        "fuhan": "70符1飜",
        "gain": 2300,
        "lose": 2300
    },
    {
        "display": "2600",
        "fuhan": "40符2飜・80符1飜",
        "gain": 2600,
        "lose": 2600
    },
    {
        "display": "2900",
        "fuhan": "90符1飜",
        "gain": 2900,
        "lose": 2900
    },
    {
        "display": "3200",
        "fuhan": "25符3飜・50符2飜・100符1飜",
        "gain": 3200,
        "lose": 3200
    },
    {
        "display": "3600",
        "fuhan": "110符1飜",
        "gain": 3600,
        "lose": 3600
    },
    {
        "display": "3900",
        "fuhan": "30符3飜・60符2飜",
        "gain": 3900,
        "lose": 3900
    },
    {
        "display": "4500",
        "fuhan": "70符2飜",
        "gain": 4500,
        "lose": 4500
    },
    {
        "display": "5200",
        "fuhan": "40符3飜・80符2飜",
        "gain": 5200,
        "lose": 5200
    },
    {
        "display": "5800",
        "fuhan": "90符1飜",
        "gain": 5800,
        "lose": 5800
    },
    {
        "display": "6400",
        "fuhan": "25符4飜・50符3飜・100符2飜",
        "gain": 6400,
        "lose": 6400
    },
    {
        "display": "7100",
        "fuhan": "110符2飜",
        "gain": 7100,
        "lose": 7100
    },
    {
        "display": "7700",
        "fuhan": "30符4飜・60符3飜",
        "gain": 7700,
        "lose": 7700
    },
    {
        "display": "8000",
        "fuhan": "満貫",
        "gain": 8000,
        "lose": 8000
    },
    {
        "display": "12000",
        "fuhan": "跳満",
        "gain": 12000,
        "lose": 12000
    },
    {
        "display": "16000",
        "fuhan": "倍満",
        "gain": 16000,
        "lose": 16000
    },
    {
        "display": "24000",
        "fuhan": "三倍満",
        "gain": 24000,
        "lose": 24000
    },
    {
        "display": "32000",
        "fuhan": "役満",
        "gain": 32000,
        "lose": 32000
    },
    {
        "display": "64000",
        "fuhan": "ダブル役満",
        "gain": 64000,
        "lose": 64000
    }
]

// 親のロンアガり
let ronOya = [
    {
        "display": "1500",
        "fuhan": "30符1飜",
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2000",
        "fuhan": "40符1飜",
        "gain": 2000,
        "lose": 2000
    },
    {
        "display": "2400",
        "fuhan": "25符2飜・50符1飜",
        "gain": 2400,
        "lose": 2400
    },
    {
        "display": "2900",
        "fuhan": "30符2飜・60符1飜",
        "gain": 2900,
        "lose": 2900
    },
    {
        "display": "3400",
        "fuhan": "70符1飜",
        "gain": 3400,
        "lose": 3400
    },
    {
        "display": "3900",
        "fuhan": "40符2飜・80符1飜",
        "gain": 3900,
        "lose": 3900
    },
    {
        "display": "4400",
        "fuhan": "90符1飜",
        "gain": 4400,
        "lose": 4400
    },
    {
        "display": "4800",
        "fuhan": "25符3飜・50符2飜・100符1飜",
        "gain": 4800,
        "lose": 4800
    },
    {
        "display": "5300",
        "fuhan": "110符1飜",
        "gain": 5300,
        "lose": 5300
    },
    {
        "display": "5800",
        "fuhan": "30符3飜・60符2飜",
        "gain": 5800,
        "lose": 5800
    },
    {
        "display": "6800",
        "fuhan": "70符2飜",
        "gain": 6800,
        "lose": 6800
    },
    {
        "display": "7700",
        "fuhan": "40符3飜・80符2飜",
        "gain": 7700,
        "lose": 7700
    },
    {
        "display": "8700",
        "fuhan": "90符1飜",
        "gain": 8700,
        "lose": 8700
    },
    {
        "display": "9600",
        "fuhan": "25符4飜・50符3飜・100符2飜",
        "gain": 9600,
        "lose": 9600
    },
    {
        "display": "10600",
        "fuhan": "110符2飜",
        "gain": 10600,
        "lose": 10600
    },
    {
        "display": "11600",
        "fuhan": "30符4飜・60符3飜",
        "gain": 11600,
        "lose": 11600
    },
    {
        "display": "12000",
        "fuhan": "満貫",
        "gain": 12000,
        "lose": 12000
    },
    {
        "display": "18000",
        "fuhan": "跳満",
        "gain": 18000,
        "lose": 18000
    },
    {
        "display": "24000",
        "fuhan": "倍満",
        "gain": 24000,
        "lose": 24000
    },
    {
        "display": "36000",
        "fuhan": "三倍満",
        "gain": 36000,
        "lose": 36000
    },
    {
        "display": "48000",
        "fuhan": "役満",
        "gain": 48000,
        "lose": 48000
    },
    {
        "display": "96000",
        "fuhan": "ダブル役満",
        "gain": 96000,
        "lose": 96000
    }
]

// 流局
let bappu = [
    {
        "display": "全員ノーテン",
        "tenpai": [false, false, false, false],
        "gain": 0,
        "lose": 0
    },
    {
        "display": "1人テンパイ",
        "tenpai": [true, false, false, false],
        "gain": 3000,
        "lose": 1000
    },
    {
        "display": "1人テンパイ",
        "tenpai": [false, true, false, false],
        "gain": 3000,
        "lose": 1000
    },
    {
        "display": "1人テンパイ",
        "tenpai": [false, false, true, false],
        "gain": 3000,
        "lose": 1000
    },
    {
        "display": "1人テンパイ",
        "tenpai": [false, false, false, true],
        "gain": 3000,
        "lose": 1000
    },
    {
        "display": "2人テンパイ",
        "tenpai": [true, true, false, false],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2人テンパイ",
        "tenpai": [true, false, true, false],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2人テンパイ",
        "tenpai": [true, false, false, true],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2人テンパイ",
        "tenpai": [false, true, true, false],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2人テンパイ",
        "tenpai": [false, true, false, true],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "2人テンパイ",
        "tenpai": [false, false, true, true],
        "gain": 1500,
        "lose": 1500
    },
    {
        "display": "3人テンパイ",
        "tenpai": [true, true, true, false],
        "gain": 1000,
        "lose": 3000
    },
    {
        "display": "3人テンパイ",
        "tenpai": [true, true, false, true],
        "gain": 1000,
        "lose": 3000
    },
    {
        "display": "3人テンパイ",
        "tenpai": [true, false, true, true],
        "gain": 1000,
        "lose": 3000
    },
    {
        "display": "3人テンパイ",
        "tenpai": [false, true, true, true],
        "gain": 1000,
        "lose": 3000
    },
    {
        "display": "全員テンパイ",
        "tenpai": [true, true, true, true],
        "gain": 0,
        "lose": 0
    }
]

// 切り上げ満貫と70符以上の除外
function delKiriageAndOver70(options, arrayTsumoOrRon) {
    let array = arrayTsumoOrRon
    // 切り上げ満貫
    if (options.kiriage == true) {
        array = array.filter(item => item.fuhan != "30符4飜・60符3飜")
    }
    // 70符以上
    if (options.over70 == false) {
        array = array.filter(item => item.fuhan != "70符1飜" && item.fuhan != "90符1飜" && item.fuhan != "110符1飜" && item.fuhan != "70符2飜" && item.fuhan != "90符2飜" && item.fuhan != "110符2飜")
    }
    return array
}

// 親とリーチ時供託の確認
function checkOyaAndRiichiKyotaku(players, options) {
    // 親
    options.oya = players.filter(item => item.oya == true)[0].id
    // リーチ
    for (let i = 0; i < players.length; i++) {
        if (players[i].riichi == true) {
            options.kyotaku += 1
        }
    }
    return options
}

// リーチ時スコアの確認
function checkRiichiScore(players) {
    // リーチ
    for (let i = 0; i < players.length; i++) {
        if (players[i].riichi == true) {
            players[i].score -= 1000
        }
    }
    return players
}

// 素点
function addScoreFinal(players, options, tsumoKo, tsumoOya, ronKo, ronOya, horaID, hojyuID, horaNum) {
    for (let i = 0; i < players.length; i++) {
        // ツモアガり(和了者と放銃者が同じときは放銃者なしと判定)
        if (horaID == hojyuID) {
            // 和了
            if (players[i].id == horaID) {
                // 親のアガり
                if (horaID == options.oya) {
                    players[i].scoreFinal = players[i].score + tsumoOya[horaNum].gain + options.honba * 300 + options.kyotaku * 1000
                    players[i].display = tsumoOya[horaNum].display
                }
                // 子のアガり
                else {
                    players[i].scoreFinal = players[i].score + tsumoKo[horaNum].gain + options.honba * 300 + options.kyotaku * 1000
                    players[i].display = tsumoKo[horaNum].display
                }
            }
            // 被ツモ
            else {
                // 親のアガり
                if (horaID == options.oya) {
                    players[i].scoreFinal = players[i].score - tsumoOya[horaNum].loseKo - options.honba * 100
                    players[i].display = tsumoOya[horaNum].display
                }
                // 子のアガり
                else {
                    // 親被り
                    if (players[i].id == options.oya) {
                        players[i].scoreFinal = players[i].score - tsumoKo[horaNum].loseOya - options.honba * 100
                        players[i].display = tsumoKo[horaNum].display
                    }
                    else {
                        players[i].scoreFinal = players[i].score - tsumoKo[horaNum].loseKo - options.honba * 100
                        players[i].display = tsumoKo[horaNum].display
                    }
                }
            }
        }
        // ロンアガり(和了者と放銃者が異なるとき)
        else {
            // 和了
            if (players[i].id == horaID) {
                // 親のアガり
                if (horaID == options.oya) {
                    players[i].scoreFinal = players[i].score + ronOya[horaNum].gain + options.honba * 300 + options.kyotaku * 1000
                    players[i].display = ronOya[horaNum].display
                }
                // 子のアガり
                else {
                    players[i].scoreFinal = players[i].score + ronKo[horaNum].gain + options.honba * 300 + options.kyotaku * 1000
                    players[i].display = ronKo[horaNum].display
                }
            }
            // 放銃
            else if (players[i].id == hojyuID) {
                // 親のアガり
                if (horaID == options.oya) {
                    players[i].scoreFinal = players[i].score - ronOya[horaNum].lose - options.honba * 300
                    players[i].display = ronOya[horaNum].display
                }
                // 子のアガり
                else {
                    players[i].scoreFinal = players[i].score - ronKo[horaNum].lose - options.honba * 300
                    players[i].display = ronKo[horaNum].display
                }
            }
            // 横移動
            else {
                // 親のアガり
                if (horaID == options.oya) {
                    players[i].scoreFinal = players[i].score
                    players[i].display = ronOya[horaNum].display
                }
                // 子のアガり
                else {
                    players[i].scoreFinal = players[i].score
                    players[i].display = ronKo[horaNum].display
                }
            }
        }
    }
    return players
}

// 順位
function addScoreRank(players, options) {
    for (let i = 0; i < players.length; i++) {
        // 同点のとき同順位(最高順位)
        let numEq = 1
        // 同点のとき別順位
        let numNeq = 1
        for (let j = 0; j < players.length; j++) {
            if (players[i].scoreFinal < players[j].scoreFinal) {
                numEq += 1
                numNeq += 1
            }
            else if (players[i].scoreFinal == players[j].scoreFinal && players[i].id > players[j].id) {
                numNeq += 1
                if (options.tie == false) {
                    numEq += 1
                }
            }
        }
        players[i].rankEq = numEq
        players[i].rankNeq = numNeq
    }
    return players
}

// ウマオカ
function calcUmaoka(players, options) {
    let uma = [options.uma4to1, options.uma3to2, -options.uma3to2, -options.uma4to1]
    let oka = (options.genten - options.haikyu) * 4
    let umaoka = []
    for (let i = 0; i < players.length; i++) {
        let array = players.filter(item => item.rankEq == i + 1)
        if (array.length > 0) {
            let sum = 0
            let ave = 0
            // ウマ
            for (let j = 0; j < array.length; j++) {
                sum += uma[i + j]
            }
            // オカ
            if (i == 0) {
                sum += oka
            }
            // 折半
            if (array.length == 1 || array.length == 2 || array.length == 4) {
                ave = sum / array.length
            }
            else if (array.length == 3) {
                ave = sum / array.length
                // 100点単位で切り捨て
                ave = Math.floor(ave / 100) * 100
            }
            for (let j = 0; j < array.length; j++) {
                umaoka.push(ave)
            }
        }
    }
    // 3人同順位の端数を修正
    if (players.filter(item => item.rankEq == 1).length == 3) {
        umaoka[0] = oka - (umaoka[1] + umaoka[2] + umaoka[3])
    }
    else if (players.filter(item => item.rankEq == 2).length == 3) {
        umaoka[1] = oka - (umaoka[0] + umaoka[2] + umaoka[3])
    }
    console.log(JSON.stringify(umaoka))
    return umaoka
}

// 順位点含むスコア
function addTotalChange(players, options, umaoka) {
    for (let i = 0; i < players.length; i++) {
        players[i].totalChange = (players[i].scoreFinal - options.genten + umaoka[players[i].rankNeq - 1]) / 1000
    }
    return players
}

// 残留供託
function calcResidues(players, options) {
    let array = players.filter(item => item.rankEq == 1)
    let ave = 0
    // 折半
    if (array.length == 1 || array.length == 2 || array.length == 4) {
        ave = options.kyotaku * 1000 / array.length
    }
    else if (array.length == 3) {
        // 100点単位で切り捨て
        ave = options.kyotaku * 300
    }
    // 1位に追加
    let residues = [0, 0, 0, 0]
    for (let i = 0; i < array.length; i++) {
        residues[i] = ave
    }
    // 3人1位の端数を修正
    if (array.length == 3) {
        residues[0] = options.kyotaku * 1000 - (residues[1] + residues[2] + residues[3])
    }
    return residues
}

// 残留供託含むスコア
function addTotalChangeRyukyoku(players, options, residues) {
    if (options.residue == true) {
        for (let i = 0; i < players.length; i++) {
            players[i].totalChange = (players[i].totalChange * 1000 + residues[players[i].rankNeq - 1]) / 1000
        }
    }
    return players
}

// トータル
function addTotalFinal(players, allPlayers) {
    for (let i = 0; i < allPlayers.length; i++) {
        let array = players.filter(item => item.name == allPlayers[i].name)
        if (array.length != 0) {
            allPlayers[i].totalFinal = (allPlayers[i].total * 1000 + array[0].totalChange * 1000) / 1000
        }
        else {
            allPlayers[i].totalFinal = allPlayers[i].total
        }
    }
    return allPlayers
}

// トータル順位と判定
function addTotalRankAndJudge(allPlayers, options) {
    for (let i = 0; i < allPlayers.length; i++) {
        // 順位(最低順位)
        let num = 1
        // 順位(最高順位)
        let numPrelim = 1
        for (let j = 0; j < allPlayers.length; j++) {
            if (allPlayers[i].totalFinal < allPlayers[j].totalFinal) {
                num += 1
                numPrelim += 1
            }
            // 単独のみ可
            else if (allPlayers[i].totalFinal == allPlayers[j].totalFinal && i != j && options.solo == true) {
                num += 1
            }
            // タイも可
            else if (allPlayers[i].totalFinal == allPlayers[j].totalFinal && allPlayers[i].id > allPlayers[j].id && options.solo == false) {
                num += 1
                numPrelim += 1
            }
        }
        allPlayers[i].rank = num
        allPlayers[i].rankPrelim = numPrelim
        // 判定
        if (allPlayers[i].rank <= options.target) {
            allPlayers[i].judge = true
        }
        else {
            allPlayers[i].judge = false
        }
    }
    return allPlayers
}

// 結果を統合
function createResults(players, allPlayers, options, tsumoKo, tsumoOya, ronKo, ronOya, horaID, hojyuID) {
    let results = []
    for (let horaNum = 0; horaNum < tsumoKo.length; horaNum++) {
        let array = {}
        players = addScoreFinal(players, options, tsumoKo, tsumoOya, ronKo, ronOya, horaID, hojyuID, horaNum)
        players = addScoreRank(players, options)
        let umaoka = calcUmaoka(players, options)
        players = addTotalChange(players, options, umaoka)
        allPlayers = addTotalFinal(players, allPlayers)
        allPlayers = addTotalRankAndJudge(allPlayers, options)
        array.display = players[horaID].display
        array.judge = allPlayers[horaID].judge
        results.push(array)
    }
    return results
}

// 結果を表示
function docConditions(results, options, horaID, hojyuID) {
    let outputs = {}
    // ツモアガり(和了者と放銃者が同じときは放銃者なしと判定)
    if (horaID == hojyuID) {
        outputs.type = players[hojyuID].name + "のツモ"
    }
    // ロンアガり(和了者と放銃者が異なるとき)
    else {
        outputs.type = players[hojyuID].name + "からロン"
    }
    // 文章化
    if (results.every(item => item.judge == true) == true) {
        outputs.condition = "無条件"
    }
    else if (results.every(item => item.judge == false) == true) {
        if (horaID == options.oya) {
            outputs.condition = "続行"
        }
        else {
            outputs.condition = "目無し"
        }
    }
    else {
        // ダミーを先頭に追加
        let dummy = {
            display: "dummy",
            judge: false
        }
        results.unshift(dummy)
        let tmp = ""
        for (let i = 0; i < results.length - 1; i++) {
            // false, trueと並んでいるとき
            if (results[i].judge == false && results[i + 1].judge == true) {
                tmp = tmp + results[i + 1].display + "以上"
            }
            // true, falseと並んでいるとき
            if (results[i].judge == true && results[i + 1].judge == false) {
                // true, falseと並んでいる直前がfalseのとき
                if (results[i - 1].judge == false) {
                    tmp = tmp.slice(0, -2) + "<br>"
                }
                // true, falseと並んでいる直前がtrueのとき
                else {
                    tmp = tmp + results[i].display + "以下<br>"
                }
            }
        }
        // 末尾の"<br>"を削除
        if (tmp.slice(-4) == "<br>") {
            tmp = tmp.slice(0, -4)
        }
        outputs.condition = tmp
    }
    return outputs
}

// 和了条件を計算
function horaConditions(players, allPlayers, options, tsumoKo, tsumoOya, ronKo, ronOya) {
    let horaOutputs = []
    for (let horaID = 0; horaID < players.length; horaID++) {
        let array = []
        for (let hojyuID = 0; hojyuID < players.length; hojyuID++) {
            let results = createResults(players, allPlayers, options, tsumoKo, tsumoOya, ronKo, ronOya, horaID, hojyuID)
            let outputs = docConditions(results, options, horaID, hojyuID)
            array.push(outputs)
        }
        horaOutputs.push(array)
    }
    return horaOutputs
}

// 流局素点
function addScoreFinalRyukyoku(players, bappu, ryukyokuNum) {
    for (let i = 0; i < players.length; i++) {
        players[i].display = bappu[ryukyokuNum].display
        players[i].tenpai = bappu[ryukyokuNum].tenpai
        if (players[i].tenpai[i] == true) {
            players[i].scoreFinal = players[i].score + bappu[ryukyokuNum].gain
        }
        else {
            players[i].scoreFinal = players[i].score - bappu[ryukyokuNum].lose
        }
    }
    return players
}

// 流局結果を統合
function createResultsRyukyoku(players, allPlayers, options, bappu) {
    let results = []
    for (let ryukyokuNum = 0; ryukyokuNum < bappu.length; ryukyokuNum++) {
        let array = {}
        players = addScoreFinalRyukyoku(players, bappu, ryukyokuNum)
        players = addScoreRank(players, options)
        let umaoka = calcUmaoka(players, options)
        players = addTotalChange(players, options, umaoka)
        let residues = calcResidues(players, options)
        players = addTotalChangeRyukyoku(players, options, residues)
        allPlayers = addTotalFinal(players, allPlayers)
        allPlayers = addTotalRankAndJudge(allPlayers, options)
        array.display = players[options.oya].display
        array.tenpai = players[options.oya].tenpai
        array.judge = allPlayers[options.oya].judge
        // 親のノーテン
        if (array.tenpai[options.oya] == false) {
            results.push(array)
        }
    }
    return results
}

// 流局結果を表示
function docConditionsRyukyoku(results, players, options) {
    let outputs = {}
    outputs.nameOya = players[options.oya].name
    // 文章化
    if (results.every(item => item.judge == true) == true) {
        outputs.condition = "無条件"
    }
    else if (results.every(item => item.judge == false) == true) {
        outputs.condition = "テンパイ必須"
    }
    else {
        let tmp = ""
        for (let i = 0; i < results.length; i++) {
            if (results[i].judge == true) {
                for (let j = 0; j < results[i].tenpai.length; j++) {
                    if (results[i].tenpai[j] == true) {
                        tmp = tmp + players[j].name + "・"
                    }
                }
                // 末尾の"・"を削除
                tmp = tmp.slice(0, -1)
                let array = results[i].tenpai.filter(item => item == true)
                if (array.length == 0 || array.length == 3) {
                    tmp = tmp + results[i].display + "<br>"
                }
                else {
                    tmp = tmp + "の" + results[i].display + "<br>"
                }
            }
        }
        // 末尾の"<br>"を削除
        if (tmp.slice(-4) == "<br>") {
            tmp = tmp.slice(0, -4)
        }
        outputs.condition = tmp
    }
    return outputs
}

// 流局条件を計算
function ryukyokuConditions(players, allPlayers, options, bappu) {
    let results = createResultsRyukyoku(players, allPlayers, options, bappu)
    let ryukyokuOutputs = docConditionsRyukyoku(results, players, options)
    return ryukyokuOutputs
}

// 暫定素点
function addScoreFinalPrelim(players) {
    for (let i = 0; i < players.length; i++) {
        players[i].scoreFinal = players[i].score
    }
    return players
}

// 暫定結果を統合
function createResultsPrelim(players, allPlayers, options) {
    players = addScoreFinalPrelim(players)
    players = addScoreRank(players, options)
    let umaoka = calcUmaoka(players, options)
    players = addTotalChange(players, options, umaoka)
    let residues = calcResidues(players, options)
    players = addTotalChangeRyukyoku(players, options, residues)
    allPlayers = addTotalFinal(players, allPlayers)
    allPlayers = addTotalRankAndJudge(allPlayers, options)
    let results = allPlayers.sort((first, second) => first.rankPrelim - second.rankPrelim)
    return results
}

/* 入力 */

// 卓内
let players = [
    {
        "id": 0,
        "name": document.getElementById("name_0").value,
        "total": document.getElementById("total_0").valueAsNumber,
        "score": document.getElementById("score_0").valueAsNumber * 100,
        "oya": document.getElementById("oya_0").checked,
        "riichi": document.getElementById("riichi_0").checked
    },
    {
        "id": 1,
        "name": document.getElementById("name_1").value,
        "total": document.getElementById("total_1").valueAsNumber,
        "score": document.getElementById("score_1").valueAsNumber * 100,
        "oya": document.getElementById("oya_1").checked,
        "riichi": document.getElementById("riichi_1").checked
    },
    {
        "id": 2,
        "name": document.getElementById("name_2").value,
        "total": document.getElementById("total_2").valueAsNumber,
        "score": document.getElementById("score_2").valueAsNumber * 100,
        "oya": document.getElementById("oya_2").checked,
        "riichi": document.getElementById("riichi_2").checked
    },
    {
        "id": 3,
        "name": document.getElementById("name_3").value,
        "total": document.getElementById("total_3").valueAsNumber,
        "score": document.getElementById("score_3").valueAsNumber * 100,
        "oya": document.getElementById("oya_3").checked,
        "riichi": document.getElementById("riichi_3").checked
    }
]

// 卓外
let allPlayers = []
let names = document.getElementsByName("name")
let totals = document.getElementsByName("total")
for (let i = 0; i < names.length; i++) {
    let array = {
        "id": 4 + i,
        "name": names[i].value,
        "total": totals[i].valueAsNumber
    }
    allPlayers.push(array)
}

// 卓内と卓外を統合
for (let i = players.length - 1; i >= 0; i--) {
    if (allPlayers.filter(item => item.name == players[i].name).length == 0) {
        let array = {
            "id": i,
            "name": players[i].name,
            "total": players[i].total
        }
        allPlayers.unshift(array)
    }
}

// ルール
let options = {
    "honba": document.getElementById("honba").valueAsNumber,
    "kyotaku": document.getElementById("kyotaku").valueAsNumber,
    "haikyu": document.getElementById("haikyu").valueAsNumber * 100,
    "genten": document.getElementById("genten").valueAsNumber * 100,
    "uma4to1": document.getElementById("uma_4to1").valueAsNumber * 1000,
    "uma3to2": document.getElementById("uma_3to2").valueAsNumber * 1000,
    "tie": document.getElementById("tie_T").checked,
    "kiriage": document.getElementById("kiriage_T").checked,
    "over70": document.getElementById("over70_T").checked,
    "residue": document.getElementById("residue_T").checked,
    "target": document.getElementById("target").valueAsNumber,
    "solo": document.getElementById("solo_T").checked
}

/* 実行 */

// 切り上げ満貫と70符以上の除外
tsumoKo = delKiriageAndOver70(options, tsumoKo)
tsumoOya = delKiriageAndOver70(options, tsumoOya)
ronKo = delKiriageAndOver70(options, ronKo)
ronOya = delKiriageAndOver70(options, ronOya)

// 親とリーチの確認
options = checkOyaAndRiichiKyotaku(players, options)
players = checkRiichiScore(players)

// 計算
let horaOutputs = horaConditions(players, allPlayers, options, tsumoKo, tsumoOya, ronKo, ronOya)
let ryukyokuOutputs = ryukyokuConditions(players, allPlayers, options, bappu)
let results = createResultsPrelim(players, allPlayers, options)

/* 出力 */

// 暫定結果
let tbl = document.getElementById("output_prelim")
for (let i = tbl.rows.length - 1; i >= 1; i--) {
    tbl.deleteRow(i)
}
for (let i = 0; i < results.length; i++) {
    let tr = document.createElement("tr")
    let tdRank = document.createElement("td")
    let tdName = document.createElement("td")
    let tdTotal = document.createElement("td")
    tdRank.textContent = results[i].rankPrelim
    tdName.textContent = results[i].name
    tdTotal.textContent = results[i].totalFinal.toFixed(1)
    tr.appendChild(tdRank)
    tr.appendChild(tdName)
    tr.appendChild(tdTotal)
    document.getElementById("output_prelim").appendChild(tr)
}

// 名前
let name0 = document.getElementsByName("output_name_0")
let name1 = document.getElementsByName("output_name_1")
let name2 = document.getElementsByName("output_name_2")
let name3 = document.getElementsByName("output_name_3")
for (let i = 0; i < players.length; i++) {
    name0[i].innerHTML = players[0].name
    name1[i].innerHTML = players[1].name
    name2[i].innerHTML = players[2].name
    name3[i].innerHTML = players[3].name
}

// ツモアガり
let tsumo0 = document.getElementById("output_tsumo_0")
let tsumo1 = document.getElementById("output_tsumo_1")
let tsumo2 = document.getElementById("output_tsumo_2")
let tsumo3 = document.getElementById("output_tsumo_3")
tsumo0.innerHTML = horaOutputs[0][0].condition
tsumo1.innerHTML = horaOutputs[1][1].condition
tsumo2.innerHTML = horaOutputs[2][2].condition
tsumo3.innerHTML = horaOutputs[3][3].condition

// ロンアガり
let ron0from1 = document.getElementById("output_ron_0from1")
let ron0from2 = document.getElementById("output_ron_0from2")
let ron0from3 = document.getElementById("output_ron_0from3")
let ron1from0 = document.getElementById("output_ron_1from0")
let ron1from2 = document.getElementById("output_ron_1from2")
let ron1from3 = document.getElementById("output_ron_1from3")
let ron2from0 = document.getElementById("output_ron_2from0")
let ron2from1 = document.getElementById("output_ron_2from1")
let ron2from3 = document.getElementById("output_ron_2from3")
let ron3from0 = document.getElementById("output_ron_3from0")
let ron3from1 = document.getElementById("output_ron_3from1")
let ron3from2 = document.getElementById("output_ron_3from2")
ron0from1.innerHTML = horaOutputs[0][1].condition
ron0from2.innerHTML = horaOutputs[0][2].condition
ron0from3.innerHTML = horaOutputs[0][3].condition
ron1from0.innerHTML = horaOutputs[1][0].condition
ron1from2.innerHTML = horaOutputs[1][2].condition
ron1from3.innerHTML = horaOutputs[1][3].condition
ron2from0.innerHTML = horaOutputs[2][0].condition
ron2from1.innerHTML = horaOutputs[2][1].condition
ron2from3.innerHTML = horaOutputs[2][3].condition
ron3from0.innerHTML = horaOutputs[3][0].condition
ron3from1.innerHTML = horaOutputs[3][1].condition
ron3from2.innerHTML = horaOutputs[3][2].condition

// 流局
let nameOya = document.getElementById("output_name_oya");
nameOya.innerHTML = ryukyokuOutputs.nameOya
let resultNoten = document.getElementById("output_ryukyoku");
resultNoten.innerHTML = ryukyokuOutputs.condition

// 非表示用の属性を削除
$(".result").removeClass("hidden");

}
