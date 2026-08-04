window.remoteTemplates = {
  "ALL": [
    {
      "title": "フェイス呼び出し",
      "desc": "フェイス1 ➔ wait6 フェイス2 ➔ wait6 ➔ フェイス3 ➔ wait6 ➔ フェイス4 ➔ wait6 フェイス5 ➔ wait6",
      "lines": [
        "/ma ヴァレンラール <me> <wait 6>",
        "/ma イロハII <me> <wait 6>",
        "/ma コルモル <me> <wait 6>",
        "/ma シャントットII <me> <wait 6>",
        "/ma ヨランオラン(UC) <me> <wait 6>"
      ]
    },
    {
      "title": "全フェイス格納",
      "desc": "出しているフェイスを瞬時に消す",
      "lines": [
        "/returnfaith all"
      ]
    },
    {
      "title": "聖水（死の宣告解除）",
      "desc": "聖水装備に着替えて聖水を使用",
      "lines": [
        "/equipset 装備セット番号 echo 聖水装備",
        "/wait 1",
        "/item 聖水 <me>"
      ]
    }
  ],
  "BLM": [
    {
      "title": "精霊魔法 (FC着替え ➔ 威力着替え)",
      "desc": "FC装備 ➔ 精霊詠唱 ➔ wait 1 ➔ 威力装備 ➔ wait 3 ➔ 通常装備",
      "lines": [
        "/equipset 1 echo FC装備へ",
        "/ma ファイアIV <t> <wait 1>",
        "/equipset 2 echo 精霊威力装備へ <wait 3>",
        "/equipset 3 echo 通常装備へ",
        "",
        ""
      ]
    }
  ],
  "WAR": [
    {
      "title": "WSサベッジブレード (着替え連動)",
      "desc": "WS装備に着替えてサベッジブレード発動後に通常装備へ復帰",
      "lines": [
        "/equipset 10 echo WS装備へ",
        "/ws サベッジブレード <t> <wait 2>",
        "/equipset 1 echo 通常装備へ",
        "",
        "",
        ""
      ]
    }
  ],
  "THF": [
    {
      "title": "投擲釣りマクロ",
      "desc": "ブーメランを装備してターゲットへ遠隔攻撃（釣り）",
      "lines": [
        "/equip ammo ブーメラン <wait 1>",
        "/range <t>",
        "",
        "",
        "",
        ""
      ]
    }
  ]
};