'use strict';

const datacenters = {
    "Elemental": [
      {
        "id": 90,
        "name": "Aegis"
      },
      {
        "id": 68,
        "name": "Atomos"
      },
      {
        "id": 45,
        "name": "Carbuncle"
      },
      {
        "id": 58,
        "name": "Garuda"
      },
      {
        "id": 94,
        "name": "Gungnir"
      },
      {
        "id": 49,
        "name": "Kujata"
      },
      {
        "id": 60,
        "name": "Ramuh"
      },
      {
        "id": 72,
        "name": "Tonberry"
      },
      {
        "id": 50,
        "name": "Typhon"
      },
      {
        "id": 30,
        "name": "Unicorn"
      }
    ],
    "Gaia": [
      {
        "id": 43,
        "name": "Alexander"
      },
      {
        "id": 69,
        "name": "Bahamut"
      },
      {
        "id": 92,
        "name": "Durandal"
      },
      {
        "id": 46,
        "name": "Fenrir"
      },
      {
        "id": 59,
        "name": "Ifrit"
      },
      {
        "id": 98,
        "name": "Ridill"
      },
      {
        "id": 76,
        "name": "Tiamat"
      },
      {
        "id": 51,
        "name": "Ultima"
      },
      {
        "id": 52,
        "name": "Valefor"
      },
      {
        "id": 31,
        "name": "Yojimbo"
      },
      {
        "id": 32,
        "name": "Zeromus"
      }
    ],
    "Mana": [
      {
        "id": 44,
        "name": "Anima"
      },
      {
        "id": 23,
        "name": "Asura"
      },
      {
        "id": 24,
        "name": "Belias"
      },
      {
        "id": 70,
        "name": "Chocobo"
      },
      {
        "id": 47,
        "name": "Hades"
      },
      {
        "id": 48,
        "name": "Ixion"
      },
      {
        "id": 82,
        "name": "Mandragora"
      },
      {
        "id": 96,
        "name": "Masamune"
      },
      {
        "id": 28,
        "name": "Pandaemonium"
      },
      {
        "id": 29,
        "name": "Shinryu"
      },
      {
        "id": 61,
        "name": "Titan"
      }
    ]
  };

const zones = {
    "134": {
      "id": 30,
      "name": "中央ラノシア",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2962,
          "name": "クロック・ミテーヌ",
          "rank": "S"
        },
        {
          "id": 2945,
          "name": "醜男のヴォガージャ",
          "rank": "A"
        },
        {
          "id": 2928,
          "name": "スコッグ・フリュー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 16.55,
          "y": 7.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.6,
          "y": 9.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.95,
          "y": 10.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.15,
          "y": 11.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.9,
          "y": 11.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.35,
          "y": 13.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.9,
          "y": 13.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.4,
          "y": 13.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.35,
          "y": 14,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.2,
          "y": 15.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.75,
          "y": 15.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.7,
          "y": 16.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.3,
          "y": 17,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.15,
          "y": 17.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.45,
          "y": 18.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21,
          "y": 18.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.9,
          "y": 19.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.25,
          "y": 20.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.4,
          "y": 20.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.25,
          "y": 21.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.9,
          "y": 22.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.9,
          "y": 22.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.1,
          "y": 23.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.2,
          "y": 24.2,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/s1f1/s1f1.00.jpg"
    },
    "135": {
      "id": 31,
      "name": "低地ラノシア",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2963,
          "name": "ケロゲロス",
          "rank": "S"
        },
        {
          "id": 2946,
          "name": "ウンクテヒ",
          "rank": "A"
        },
        {
          "id": 2929,
          "name": "バーバステル",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 30.05,
          "y": 14.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33,
          "y": 16.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.5,
          "y": 16.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29,
          "y": 17,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33.5,
          "y": 17.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.55,
          "y": 18.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.65,
          "y": 20.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.1,
          "y": 22.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.95,
          "y": 24.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.45,
          "y": 26.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.3,
          "y": 26.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.25,
          "y": 32,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.1,
          "y": 34.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.7,
          "y": 34.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.9,
          "y": 35.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.2,
          "y": 35.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.6,
          "y": 35.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.15,
          "y": 36,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20,
          "y": 37.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.9,
          "y": 38.2,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/s1f2/s1f2.00.jpg"
    },
    "137": {
      "id": 32,
      "name": "東ラノシア",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2964,
          "name": "ガーロック",
          "rank": "S"
        },
        {
          "id": 2947,
          "name": "魔導ヘルズクロー",
          "rank": "A"
        },
        {
          "id": 2930,
          "name": "ブラッディ・マリー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 28.95,
          "y": 19.3,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 30.4,
          "y": 19.3,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 31.05,
          "y": 19.95,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 25.55,
          "y": 20.4,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 28.65,
          "y": 20.65,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 29.7,
          "y": 21.4,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 25.4,
          "y": 21.8,
          "flags": [
            false,
            true,
            false
          ]
        },
        {
          "x": 27.55,
          "y": 25,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 30.1,
          "y": 25,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 20.3,
          "y": 25.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.25,
          "y": 25.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.3,
          "y": 26.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.1,
          "y": 26.55,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 30.7,
          "y": 26.7,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 32.1,
          "y": 27.2,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 17.9,
          "y": 27.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.35,
          "y": 28,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 21.45,
          "y": 28.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.75,
          "y": 28.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.3,
          "y": 29.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.4,
          "y": 29.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15,
          "y": 30.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.6,
          "y": 30.9,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 21.3,
          "y": 31.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.55,
          "y": 31.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.5,
          "y": 32.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.5,
          "y": 33.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.7,
          "y": 33.15,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 25.9,
          "y": 33.8,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 17,
          "y": 33.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.9,
          "y": 35.6,
          "flags": [
            true,
            false,
            true
          ]
        },
        {
          "x": 31.75,
          "y": 36.25,
          "flags": [
            true,
            false,
            true
          ]
        }
      ],
      "url": "/m/s1f3/s1f3.01.jpg"
    },
    "138": {
      "id": 33,
      "name": "西ラノシア",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2965,
          "name": "ボナコン",
          "rank": "S"
        },
        {
          "id": 2948,
          "name": "ナン",
          "rank": "A"
        },
        {
          "id": 2931,
          "name": "ダークヘルメット",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 14.55,
          "y": 14.25,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 16.1,
          "y": 14.5,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 12.9,
          "y": 14.55,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 14.2,
          "y": 15.85,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 14.35,
          "y": 17.05,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 20.2,
          "y": 18.4,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 17.05,
          "y": 19.4,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 19.6,
          "y": 19.55,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 23.15,
          "y": 21.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.85,
          "y": 21.95,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 24.7,
          "y": 22.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.1,
          "y": 23.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.65,
          "y": 24,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.3,
          "y": 24.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29,
          "y": 25.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.25,
          "y": 27.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 34.05,
          "y": 28.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.75,
          "y": 28.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.8,
          "y": 28.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33,
          "y": 29.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.15,
          "y": 34.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.95,
          "y": 35.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.95,
          "y": 36.05,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/s1f4/s1f4.00.jpg"
    },
    "139": {
      "id": 34,
      "key": "Upper La Noscea",
      "name": "高地ラノシア",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2966,
          "name": "ナンディ",
          "rank": "S"
        },
        {
          "id": 2949,
          "name": "マーベリー",
          "rank": "A"
        },
        {
          "id": 2932,
          "name": "ミラドロッシュ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 27.7,
          "y": 19.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.05,
          "y": 21.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.2,
          "y": 21.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.55,
          "y": 21.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.15,
          "y": 21.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.75,
          "y": 22.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11.6,
          "y": 22.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.65,
          "y": 23.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 35.2,
          "y": 23.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.35,
          "y": 23.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.45,
          "y": 23.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33.4,
          "y": 24.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.45,
          "y": 25.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.05,
          "y": 25.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.7,
          "y": 25.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33.25,
          "y": 25.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.85,
          "y": 25.9,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/s1f5/s1f5.00.jpg"
    },
    "140": {
      "id": 42,
      "name": "西ザナラーン",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2957,
          "name": "ゾーナ・シーカー",
          "rank": "S"
        },
        {
          "id": 2940,
          "name": "アレクトリオン",
          "rank": "A"
        },
        {
          "id": 2923,
          "name": "スェアーシロップ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 10.35,
          "y": 5.25,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 8.45,
          "y": 5.5,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 12.15,
          "y": 5.95,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 14.95,
          "y": 6,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 10.2,
          "y": 6.4,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 12,
          "y": 7.5,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 14.05,
          "y": 7.85,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 18.3,
          "y": 15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.95,
          "y": 16.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.85,
          "y": 16.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.3,
          "y": 17.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.2,
          "y": 19.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.85,
          "y": 20.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.95,
          "y": 22.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.25,
          "y": 24,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.3,
          "y": 24,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.75,
          "y": 24.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.65,
          "y": 25.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.1,
          "y": 26.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.3,
          "y": 27.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.9,
          "y": 29.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.3,
          "y": 29.35,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/w1f1/w1f1.00.jpg"
    },
    "141": {
      "id": 43,
      "key": "Central Thanalan",
      "name": "中央ザナラーン",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2958,
          "name": "ブロンテス",
          "rank": "S"
        },
        {
          "id": 2941,
          "name": "サボテンダー・バイラリーナ",
          "rank": "A"
        },
        {
          "id": 2924,
          "name": "アヴゼン",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 16.3,
          "y": 12.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18,
          "y": 13.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.75,
          "y": 13.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.9,
          "y": 15.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.6,
          "y": 16.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.8,
          "y": 16.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.1,
          "y": 17.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.4,
          "y": 17.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.75,
          "y": 18,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.9,
          "y": 18.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.3,
          "y": 19.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.5,
          "y": 20.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.6,
          "y": 21.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.2,
          "y": 21.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.2,
          "y": 21.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.95,
          "y": 23.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.45,
          "y": 23.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.7,
          "y": 25.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.45,
          "y": 26.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.8,
          "y": 29.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.4,
          "y": 31.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.9,
          "y": 31.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.7,
          "y": 35,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/w1f2/w1f2.00.jpg"
    },
    "145": {
      "id": 44,
      "name": "東ザナラーン",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2959,
          "name": "バルウール",
          "rank": "S"
        },
        {
          "id": 2942,
          "name": "マヘス",
          "rank": "A"
        },
        {
          "id": 2925,
          "name": "ガトリングス",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 12.8,
          "y": 15.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.5,
          "y": 16.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.6,
          "y": 17.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.8,
          "y": 17.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.35,
          "y": 17.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.65,
          "y": 18.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.7,
          "y": 18.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.3,
          "y": 18.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.4,
          "y": 19.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.7,
          "y": 19.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.8,
          "y": 19.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.4,
          "y": 20,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.65,
          "y": 20.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.95,
          "y": 21.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.1,
          "y": 21.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.5,
          "y": 21.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.95,
          "y": 22.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.45,
          "y": 22.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25,
          "y": 23.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.85,
          "y": 24.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.4,
          "y": 24.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.7,
          "y": 25.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.85,
          "y": 25.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.4,
          "y": 25.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.9,
          "y": 25.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.6,
          "y": 25.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.55,
          "y": 26.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.4,
          "y": 26.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.3,
          "y": 26.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.4,
          "y": 26.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.45,
          "y": 28,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.55,
          "y": 28.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.35,
          "y": 28.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.9,
          "y": 29,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/w1f3/w1f3.00.jpg"
    },
    "146": {
      "id": 45,
      "name": "南ザナラーン",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2960,
          "name": "ヌニュヌウィ",
          "rank": "S"
        },
        {
          "id": 2943,
          "name": "ザニゴ",
          "rank": "A"
        },
        {
          "id": 2926,
          "name": "死灰のアルビン",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 23.2,
          "y": 7.95,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 24.65,
          "y": 9.35,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 18,
          "y": 10.2,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 21.25,
          "y": 10.85,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 18.25,
          "y": 11.2,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 24.65,
          "y": 11.45,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 17.2,
          "y": 11.7,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 23.8,
          "y": 12.45,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 17.2,
          "y": 16.95,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 19.55,
          "y": 17.2,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 31,
          "y": 18.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.7,
          "y": 19.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 32.9,
          "y": 19.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.95,
          "y": 20.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.4,
          "y": 20.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.5,
          "y": 20.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.35,
          "y": 21.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.15,
          "y": 21.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.45,
          "y": 22.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.05,
          "y": 22.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.65,
          "y": 23.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16,
          "y": 24.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.8,
          "y": 24.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.4,
          "y": 24.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.05,
          "y": 25.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.15,
          "y": 26.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.25,
          "y": 28.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.6,
          "y": 29.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.85,
          "y": 30.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.85,
          "y": 30.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.2,
          "y": 32.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.85,
          "y": 33.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.45,
          "y": 33.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.8,
          "y": 34.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.5,
          "y": 34.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.8,
          "y": 34.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.1,
          "y": 36.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.45,
          "y": 36.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.1,
          "y": 38.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.5,
          "y": 38.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.75,
          "y": 38.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.1,
          "y": 40.85,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/w1f4/w1f4.01.jpg"
    },
    "147": {
      "id": 46,
      "name": "北ザナラーン",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2961,
          "name": "ミニョーカオン",
          "rank": "S"
        },
        {
          "id": 2944,
          "name": "ファイナルフレイム",
          "rank": "A"
        },
        {
          "id": 2927,
          "name": "不滅のフェランド闘軍曹",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 16.05,
          "y": 14.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.25,
          "y": 15.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.05,
          "y": 15.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.05,
          "y": 16.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.85,
          "y": 16.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.25,
          "y": 17.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.75,
          "y": 18,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.4,
          "y": 18.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.35,
          "y": 19.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.95,
          "y": 22.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.3,
          "y": 23.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.65,
          "y": 24.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.05,
          "y": 25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.6,
          "y": 25.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.45,
          "y": 26.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.2,
          "y": 27,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.6,
          "y": 27.8,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/w1f5/w1f5.00.jpg"
    },
    "148": {
      "id": 54,
      "key": "Central Shroud",
      "name": "黒衣森：中央森林",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2953,
          "name": "レドロネット",
          "rank": "S"
        },
        {
          "id": 2936,
          "name": "ファルネウス",
          "rank": "A"
        },
        {
          "id": 2919,
          "name": "ホワイトジョーカー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 28.75,
          "y": 14.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.75,
          "y": 16.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 9.55,
          "y": 16.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.65,
          "y": 17.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.1,
          "y": 18.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.1,
          "y": 18.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.05,
          "y": 18.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.1,
          "y": 19.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.1,
          "y": 19.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.25,
          "y": 19.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.8,
          "y": 19.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.75,
          "y": 20.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.75,
          "y": 20.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.05,
          "y": 21.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.45,
          "y": 21.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.25,
          "y": 22.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.05,
          "y": 22.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.65,
          "y": 23.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11.6,
          "y": 23.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.85,
          "y": 24,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.05,
          "y": 24.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.4,
          "y": 27.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.6,
          "y": 30.05,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/f1f1/f1f1.00.jpg"
    },
    "152": {
      "id": 55,
      "name": "黒衣森：東部森林",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2954,
          "name": "ウルガル",
          "rank": "S"
        },
        {
          "id": 2937,
          "name": "メルティゼリー",
          "rank": "A"
        },
        {
          "id": 2920,
          "name": "スティンギング・ソフィー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 25.05,
          "y": 9.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.5,
          "y": 11.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.5,
          "y": 11.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.45,
          "y": 11.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.1,
          "y": 12.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.9,
          "y": 13.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.9,
          "y": 13.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.3,
          "y": 15.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.9,
          "y": 15.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.7,
          "y": 16.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24,
          "y": 16.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.8,
          "y": 17.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.3,
          "y": 17.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27,
          "y": 17.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.8,
          "y": 18.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.7,
          "y": 20.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29,
          "y": 20.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.7,
          "y": 21.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.85,
          "y": 21.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23,
          "y": 21.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.25,
          "y": 21.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.6,
          "y": 22.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.4,
          "y": 22.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.6,
          "y": 23.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.3,
          "y": 23.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.6,
          "y": 23.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.7,
          "y": 24.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.8,
          "y": 25.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.35,
          "y": 25.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.05,
          "y": 25.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.5,
          "y": 27.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22,
          "y": 28.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.95,
          "y": 28.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.1,
          "y": 29.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.8,
          "y": 30.85,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/f1f2/f1f2.00.jpg"
    },
    "153": {
      "id": 56,
      "name": "黒衣森：南部森林",
      "insCount": 1,
      "filter": true,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2955,
          "name": "マインドフレア",
          "rank": "S"
        },
        {
          "id": 2938,
          "name": "ゲーデ",
          "rank": "A"
        },
        {
          "id": 2921,
          "name": "モナーク・オーガフライ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 27.75,
          "y": 17.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.35,
          "y": 18.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.9,
          "y": 18.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.8,
          "y": 18.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.15,
          "y": 19.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.8,
          "y": 19.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.95,
          "y": 19.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17,
          "y": 21.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.4,
          "y": 21.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.6,
          "y": 22.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.65,
          "y": 22.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.05,
          "y": 22.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.9,
          "y": 23.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.7,
          "y": 23.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 32.7,
          "y": 23.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23,
          "y": 24.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.85,
          "y": 24.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.55,
          "y": 25.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.65,
          "y": 25.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.4,
          "y": 27.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.15,
          "y": 27.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.4,
          "y": 27.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.7,
          "y": 28.55,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19,
          "y": 28.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.25,
          "y": 30.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.25,
          "y": 30.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.3,
          "y": 32.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.15,
          "y": 32.45,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/f1f3/f1f3.00.jpg"
    },
    "154": {
      "id": 57,
      "name": "黒衣森：北部森林",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2956,
          "name": "サウザンドキャスト・セダ",
          "rank": "S"
        },
        {
          "id": 2939,
          "name": "ギルタブ",
          "rank": "A"
        },
        {
          "id": 2922,
          "name": "フェクダ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 23.45,
          "y": 19.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.45,
          "y": 20.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.65,
          "y": 20.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.65,
          "y": 20.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.6,
          "y": 21.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.65,
          "y": 22.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.95,
          "y": 22.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.15,
          "y": 23.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.95,
          "y": 24.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.65,
          "y": 25.4,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.8,
          "y": 25.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.8,
          "y": 26.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.2,
          "y": 27.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.05,
          "y": 27.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.45,
          "y": 28.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.95,
          "y": 28.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.55,
          "y": 28.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.4,
          "y": 28.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 18.15,
          "y": 28.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.55,
          "y": 30.05,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/f1f4/f1f4.00.jpg"
    },
    "155": {
      "id": 63,
      "name": "クルザス中央高地",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2968,
          "name": "サファト",
          "rank": "S"
        },
        {
          "id": 2951,
          "name": "マラク",
          "rank": "A"
        },
        {
          "id": 2934,
          "name": "ナウル",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 32.05,
          "y": 7.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.9,
          "y": 7.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.95,
          "y": 8.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.65,
          "y": 9.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.15,
          "y": 10.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.3,
          "y": 11.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.1,
          "y": 11.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 8.95,
          "y": 11.9,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.2,
          "y": 12.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.8,
          "y": 12.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.05,
          "y": 13.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 8.85,
          "y": 13.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.8,
          "y": 13.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11.75,
          "y": 14.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.5,
          "y": 14.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 8.85,
          "y": 14.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.4,
          "y": 14.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 35.05,
          "y": 15.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 5.25,
          "y": 16,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 20.55,
          "y": 16.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 4.15,
          "y": 16.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 31.9,
          "y": 16.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 5.6,
          "y": 18.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.3,
          "y": 18.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 10.5,
          "y": 18.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.4,
          "y": 18.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.55,
          "y": 18.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.55,
          "y": 18.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.5,
          "y": 18.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11.55,
          "y": 19.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.3,
          "y": 19.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 6.45,
          "y": 19.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.6,
          "y": 20,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.85,
          "y": 20.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.1,
          "y": 20.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 8.35,
          "y": 21,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.15,
          "y": 21.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.4,
          "y": 22.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 34.8,
          "y": 22.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 35.8,
          "y": 23.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 32.8,
          "y": 23.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.65,
          "y": 23.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.4,
          "y": 25.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.9,
          "y": 25.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 28.1,
          "y": 25.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 25.65,
          "y": 25.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.45,
          "y": 26.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 9,
          "y": 27.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11,
          "y": 27.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.8,
          "y": 27.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 29.3,
          "y": 27.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.65,
          "y": 28.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.4,
          "y": 28.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 6.6,
          "y": 28.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.5,
          "y": 28.7,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 11.05,
          "y": 28.95,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19.8,
          "y": 29.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 17.7,
          "y": 29.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.3,
          "y": 29.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 30.75,
          "y": 31.05,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/r1f1/r1f1.00.jpg"
    },
    "156": {
      "id": 67,
      "name": "モードゥナ",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2969,
          "name": "アグリッパ",
          "rank": "S"
        },
        {
          "id": 2952,
          "name": "クーレア",
          "rank": "A"
        },
        {
          "id": 2935,
          "name": "リーチキング",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 30.6,
          "y": 6.4,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 29.1,
          "y": 6.5,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 32.3,
          "y": 6.9,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 29.1,
          "y": 7.7,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 19.15,
          "y": 8.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 26.8,
          "y": 8.5,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 32.45,
          "y": 8.6,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 27.15,
          "y": 8.85,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 32.3,
          "y": 10.2,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 16.05,
          "y": 10.45,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14,
          "y": 10.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.4,
          "y": 10.6,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 24.85,
          "y": 10.65,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 23.2,
          "y": 10.7,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 31.45,
          "y": 11.3,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 11.9,
          "y": 11.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.75,
          "y": 11.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 33.6,
          "y": 12.05,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 13.65,
          "y": 12.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.4,
          "y": 12.2,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 25.2,
          "y": 12.7,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 26.8,
          "y": 12.7,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 28.25,
          "y": 13.55,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 12.7,
          "y": 13.75,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.2,
          "y": 13.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 9.8,
          "y": 13.9,
          "flags": [
            true,
            false,
            false
          ]
        },
        {
          "x": 32.4,
          "y": 14.35,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 28.95,
          "y": 14.75,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 30.15,
          "y": 15.05,
          "flags": [
            false,
            true,
            true
          ]
        },
        {
          "x": 10.6,
          "y": 15.15,
          "flags": [
            true,
            false,
            false
          ]
        },
        {
          "x": 16.4,
          "y": 15.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 12.6,
          "y": 16,
          "flags": [
            true,
            false,
            false
          ]
        },
        {
          "x": 12.25,
          "y": 16.85,
          "flags": [
            true,
            false,
            false
          ]
        },
        {
          "x": 16.8,
          "y": 17.4,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/l1f1/l1f1.01.jpg"
    },
    "180": {
      "id": 350,
      "name": "外地ラノシア",
      "insCount": 1,
      "type": 0,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 2967,
          "name": "チェルノボーグ",
          "rank": "S"
        },
        {
          "id": 2950,
          "name": "コンヌ",
          "rank": "A"
        },
        {
          "id": 2933,
          "name": "ヴオコー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 27,
          "y": 5.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.5,
          "y": 6.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.45,
          "y": 6.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 27.4,
          "y": 7.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.55,
          "y": 7.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.75,
          "y": 8.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23.65,
          "y": 9.25,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.8,
          "y": 9.5,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.9,
          "y": 10.3,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.6,
          "y": 10.35,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.4,
          "y": 12.65,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23,
          "y": 13.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.1,
          "y": 14.05,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 21.35,
          "y": 14.6,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.25,
          "y": 14.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 19,
          "y": 15.1,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 22.9,
          "y": 15.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 24.6,
          "y": 16.15,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 13.55,
          "y": 16.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 23,
          "y": 16.2,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 14.7,
          "y": 16.85,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 16.45,
          "y": 17.8,
          "flags": [
            true,
            true,
            true
          ]
        },
        {
          "x": 15.1,
          "y": 18.05,
          "flags": [
            true,
            true,
            true
          ]
        }
      ],
      "url": "/m/s1f6/s1f6.00.jpg"
    },
    "397": {
      "id": 2200,
      "key": "Coerthas Western Highlands",
      "name": "クルザス西部高地",
      "insCount": 1,
      "filter": true,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4374,
          "name": "カイザーベヒーモス",
          "rank": "S"
        },
        {
          "id": 4362,
          "name": "ミルカ",
          "rank": "A"
        },
        {
          "id": 4363,
          "name": "リューバ",
          "rank": "A"
        },
        {
          "id": 4350,
          "name": "アルティック",
          "rank": "B"
        },
        {
          "id": 4351,
          "name": "クルーゼ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 28,
          "y": 7.85,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 35.6,
          "y": 9.6,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 26.1,
          "y": 11.6,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.1,
          "y": 12.1,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 6.65,
          "y": 12.45,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 36.25,
          "y": 12.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 29.35,
          "y": 13,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18,
          "y": 13.1,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 10,
          "y": 13.2,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.5,
          "y": 15.9,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.6,
          "y": 17.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 32.5,
          "y": 17.6,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 21.95,
          "y": 17.65,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.1,
          "y": 18.95,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 22.1,
          "y": 20.7,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 34.05,
          "y": 20.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 28.15,
          "y": 21.5,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 33.8,
          "y": 22.5,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 17.3,
          "y": 25.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.95,
          "y": 26.75,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 23.5,
          "y": 28.1,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 16.7,
          "y": 29.65,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.7,
          "y": 31.2,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.95,
          "y": 32.4,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        }
      ],
      "url": "/m/r2f1/r2f1.00.jpg"
    },
    "398": {
      "id": 2000,
      "name": "高地ドラヴァニア",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4375,
          "name": "セーンムルウ",
          "rank": "S"
        },
        {
          "id": 4364,
          "name": "パイルラスタ",
          "rank": "A"
        },
        {
          "id": 4365,
          "name": "ワイバーンロード",
          "rank": "A"
        },
        {
          "id": 4352,
          "name": "グナース・コメットドローン",
          "rank": "B"
        },
        {
          "id": 4353,
          "name": "テクスタ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 26.4,
          "y": 7.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 33.9,
          "y": 8.55,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.9,
          "y": 11.3,
          "flags": [
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "x": 34.85,
          "y": 13.55,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 13.6,
          "y": 15.05,
          "flags": [
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "x": 32.5,
          "y": 18.25,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 21.4,
          "y": 19.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 28.9,
          "y": 21.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.7,
          "y": 24.85,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 38.6,
          "y": 25.6,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 12.35,
          "y": 27.6,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 34.6,
          "y": 28.75,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 20.05,
          "y": 30.2,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.75,
          "y": 30.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.3,
          "y": 31.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.9,
          "y": 32.4,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 21.15,
          "y": 33.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 10.25,
          "y": 35.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 17,
          "y": 35.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.4,
          "y": 37.25,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 17.95,
          "y": 38.75,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/d2f1/d2f1.00.jpg"
    },
    "399": {
      "id": 2001,
      "name": "低地ドラヴァニア",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4376,
          "name": "ペイルライダー",
          "rank": "S"
        },
        {
          "id": 4366,
          "name": "機兵のスリップキンクス",
          "rank": "A"
        },
        {
          "id": 4367,
          "name": "ストラス",
          "rank": "A"
        },
        {
          "id": 4354,
          "name": "プテリゴトゥス",
          "rank": "B"
        },
        {
          "id": 4355,
          "name": "ブラクキ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 13.1,
          "y": 16.45,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 26.65,
          "y": 16.6,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 26.85,
          "y": 20.05,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 31.8,
          "y": 20.15,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 9.35,
          "y": 21.35,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 15.05,
          "y": 21.6,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 35.95,
          "y": 21.85,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 5.4,
          "y": 22.15,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 24,
          "y": 23.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 33.95,
          "y": 24.1,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.1,
          "y": 25.45,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.8,
          "y": 25.45,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 34.2,
          "y": 26.85,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 8.6,
          "y": 28.1,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 38,
          "y": 28.4,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 12.6,
          "y": 29.25,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.6,
          "y": 29.4,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.5,
          "y": 32.05,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 8.45,
          "y": 34,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.5,
          "y": 35.65,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.25,
          "y": 36.9,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.15,
          "y": 37.75,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/d2f2/d2f2.00.jpg"
    },
    "400": {
      "id": 2002,
      "key": "The Churning Mists",
      "name": "ドラヴァニア雲海",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4377,
          "name": "ガンダルヴァ",
          "rank": "S"
        },
        {
          "id": 4368,
          "name": "ブネ",
          "rank": "A"
        },
        {
          "id": 4369,
          "name": "アガトス",
          "rank": "A"
        },
        {
          "id": 4356,
          "name": "スキタリス",
          "rank": "B"
        },
        {
          "id": 4357,
          "name": "スケアクロウ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 25.85,
          "y": 7.95,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 9.5,
          "y": 8.5,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 28.25,
          "y": 10.6,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 7.4,
          "y": 11.7,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.2,
          "y": 14.5,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 7.9,
          "y": 15.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 6.85,
          "y": 20.25,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.9,
          "y": 20.3,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 28.5,
          "y": 20.35,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.9,
          "y": 20.5,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 33.5,
          "y": 20.85,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 14,
          "y": 23.55,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 18.2,
          "y": 24.35,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 37.2,
          "y": 26.2,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.4,
          "y": 27.6,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 16.9,
          "y": 28,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 36.05,
          "y": 29.05,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 15.8,
          "y": 30.25,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 22.45,
          "y": 31.1,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 31.95,
          "y": 32.65,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 6.45,
          "y": 35.65,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 10.05,
          "y": 38.7,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        }
      ],
      "url": "/m/d2f3/d2f3.00.jpg"
    },
    "401": {
      "id": 2100,
      "key": "The Sea of Clouds",
      "name": "アバラシア雲海",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4378,
          "name": "極楽鳥",
          "rank": "S"
        },
        {
          "id": 4370,
          "name": "エンケドラス",
          "rank": "A"
        },
        {
          "id": 4371,
          "name": "シシウトゥル",
          "rank": "A"
        },
        {
          "id": 4358,
          "name": "スクオンク",
          "rank": "B"
        },
        {
          "id": 4359,
          "name": "舞手のサヌバリ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 29.35,
          "y": 6.55,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.55,
          "y": 7.5,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 21.75,
          "y": 7.65,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 7.5,
          "y": 8.35,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 36.9,
          "y": 8.65,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 19.25,
          "y": 9.45,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 23.25,
          "y": 10,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.05,
          "y": 13.1,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.4,
          "y": 14.6,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 37.4,
          "y": 14.65,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 21.55,
          "y": 16.05,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 9.05,
          "y": 16.65,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 31.45,
          "y": 19.05,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 6.5,
          "y": 19.3,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 36.5,
          "y": 21.15,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 20.85,
          "y": 21.5,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.55,
          "y": 23.5,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.45,
          "y": 25.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.1,
          "y": 29.1,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 13.75,
          "y": 29.15,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 17.9,
          "y": 29.85,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 34.05,
          "y": 31.55,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.3,
          "y": 31.65,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 26.6,
          "y": 33.7,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 31.65,
          "y": 36.1,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 36.2,
          "y": 38.5,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/a2f1/a2f1.00.jpg"
    },
    "402": {
      "id": 2101,
      "key": "Azys Lla",
      "name": "アジス・ラー",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 44.1,
        "ymax": 44.1,
        "offset": 1125
      },
      "mobs": [
        {
          "id": 4380,
          "name": "レウクロッタ",
          "rank": "S"
        },
        {
          "id": 4372,
          "name": "キャムパクティ",
          "rank": "A"
        },
        {
          "id": 4373,
          "name": "センチブロッサム",
          "rank": "A"
        },
        {
          "id": 4360,
          "name": "リュキダス",
          "rank": "B"
        },
        {
          "id": 4361,
          "name": "オムニ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 32.7,
          "y": 5.75,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 37.7,
          "y": 7.1,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 17.3,
          "y": 8.55,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.65,
          "y": 11.15,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 33.8,
          "y": 12.85,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18.5,
          "y": 13.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.4,
          "y": 15.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 13.9,
          "y": 16.9,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 9.45,
          "y": 26.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 34.35,
          "y": 26.65,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 38.95,
          "y": 27.6,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.85,
          "y": 28.75,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 16.1,
          "y": 29.4,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.3,
          "y": 30.35,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 35.9,
          "y": 30.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 8.25,
          "y": 34,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 36.25,
          "y": 34.15,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.65,
          "y": 35.05,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 36.35,
          "y": 37.15,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 12.85,
          "y": 38.2,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        }
      ],
      "url": "/m/a2f2/a2f2.00.jpg"
    },
    "612": {
      "id": 2406,
      "key": "The Fringes",
      "name": "ギラバニア辺境地帯",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5987,
          "name": "ウドンゲ",
          "rank": "S"
        },
        {
          "id": 5990,
          "name": "オルクス",
          "rank": "A"
        },
        {
          "id": 5991,
          "name": "アール",
          "rank": "A"
        },
        {
          "id": 6008,
          "name": "宵闇のヤミニ",
          "rank": "B"
        },
        {
          "id": 6009,
          "name": "オゼルム",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 18.25,
          "y": 8.45,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 21.2,
          "y": 10.55,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 25.35,
          "y": 11.75,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 14.35,
          "y": 12.4,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 17.8,
          "y": 12.75,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 10.45,
          "y": 14.55,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 34.65,
          "y": 17.5,
          "flags": [
            false,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 12.25,
          "y": 18,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 24.1,
          "y": 18.15,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 33.75,
          "y": 20.9,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 17.5,
          "y": 21.75,
          "flags": [
            false,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 27.75,
          "y": 23.5,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 16.65,
          "y": 24.3,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 8.7,
          "y": 25.25,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.35,
          "y": 26.25,
          "flags": [
            false,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 25.2,
          "y": 28.4,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 8.3,
          "y": 30.55,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 28.95,
          "y": 30.8,
          "flags": [
            true,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 25.85,
          "y": 31.9,
          "flags": [
            false,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 33.3,
          "y": 33.35,
          "flags": [
            false,
            true,
            false,
            true,
            false
          ]
        }
      ],
      "url": "/m/g3f1/g3f1.00.jpg"
    },
    "613": {
      "id": 2409,
      "key": "The Ruby Sea",
      "name": "紅玉海",
      "insCount": 1,
      "filter": true,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5984,
          "name": "オキナ",
          "rank": "S"
        },
        {
          "id": 5996,
          "name": "船幽霊",
          "rank": "A"
        },
        {
          "id": 5997,
          "name": "オニユメミ",
          "rank": "A"
        },
        {
          "id": 6002,
          "name": "剣豪ガウキ",
          "rank": "B"
        },
        {
          "id": 6003,
          "name": "姑獲鳥",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 7.5,
          "y": 5.9,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 25.95,
          "y": 7.05,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18.85,
          "y": 8.65,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.55,
          "y": 10.6,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 14.45,
          "y": 13.9,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 36.5,
          "y": 17.95,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 34.95,
          "y": 21.15,
          "flags": [
            true,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 5.05,
          "y": 22.95,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 32.05,
          "y": 24.3,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.3,
          "y": 26.2,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 6.9,
          "y": 29.8,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.25,
          "y": 31.6,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 23.95,
          "y": 33.2,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 31.05,
          "y": 38.75,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/e3f1/e3f1.00.jpg"
    },
    "614": {
      "id": 2410,
      "key": "Yanxia",
      "name": "ヤンサ",
      "insCount": 1,
      "filter": true,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5985,
          "name": "ガンマ",
          "rank": "S"
        },
        {
          "id": 5998,
          "name": "ガジャースラ",
          "rank": "A"
        },
        {
          "id": 5999,
          "name": "アンガダ",
          "rank": "A"
        },
        {
          "id": 6004,
          "name": "デイダラ",
          "rank": "B"
        },
        {
          "id": 6005,
          "name": "雷撃のギョライ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 21.6,
          "y": 9.45,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 27.1,
          "y": 10.4,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18.35,
          "y": 10.5,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 28.7,
          "y": 11.35,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 23.65,
          "y": 11.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.9,
          "y": 13.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18.25,
          "y": 16.15,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 32.35,
          "y": 18.5,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 24.6,
          "y": 21.7,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 34.15,
          "y": 26.6,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 23.6,
          "y": 27.25,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 12.3,
          "y": 30.6,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 17.65,
          "y": 34.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.85,
          "y": 35.3,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        }
      ],
      "url": "/m/e3f2/e3f2.00.jpg"
    },
    "620": {
      "id": 2407,
      "key": "The Peaks",
      "name": "ギラバニア山岳地帯",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5988,
          "name": "ボーンクローラー",
          "rank": "S"
        },
        {
          "id": 5992,
          "name": "バックスタイン",
          "rank": "A"
        },
        {
          "id": 5993,
          "name": "アクラブアメル",
          "rank": "A"
        },
        {
          "id": 6010,
          "name": "グアス・ア・ニードル",
          "rank": "B"
        },
        {
          "id": 6011,
          "name": "ブッカブー",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 26.95,
          "y": 7.95,
          "flags": [
            false,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 11.2,
          "y": 8.2,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 32.05,
          "y": 8.3,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 26.25,
          "y": 12,
          "flags": [
            false,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 8.7,
          "y": 12.25,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 36.35,
          "y": 12.45,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 5.65,
          "y": 14.75,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 23.35,
          "y": 14.95,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.35,
          "y": 20.15,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.65,
          "y": 23.1,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 23.75,
          "y": 24.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 7.8,
          "y": 25.85,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.1,
          "y": 26.7,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 12.6,
          "y": 28.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.65,
          "y": 29.85,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 11.75,
          "y": 32.85,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 5.85,
          "y": 34.8,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 23.65,
          "y": 36.6,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/g3f2/g3f2.00.jpg"
    },
    "621": {
      "id": 2408,
      "key": "The Lochs",
      "name": "ギラバニア湖畔地帯",
      "insCount": 1,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5989,
          "name": "ソルト・アンド・ライト",
          "rank": "S"
        },
        {
          "id": 5994,
          "name": "マヒシャ",
          "rank": "A"
        },
        {
          "id": 5995,
          "name": "ルミナーレ",
          "rank": "A"
        },
        {
          "id": 6012,
          "name": "マネス",
          "rank": "B"
        },
        {
          "id": 6013,
          "name": "キワ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 18.3,
          "y": 7.5,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 28.95,
          "y": 7.85,
          "flags": [
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "x": 6.45,
          "y": 8.25,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 22.5,
          "y": 10.35,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 34.95,
          "y": 11.2,
          "flags": [
            false,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 7.7,
          "y": 14.1,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 25.05,
          "y": 16.5,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 13.95,
          "y": 20.55,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 18.8,
          "y": 25.6,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 23.45,
          "y": 25.85,
          "flags": [
            false,
            false,
            false,
            false,
            true
          ]
        },
        {
          "x": 7.4,
          "y": 26.3,
          "flags": [
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "x": 4.6,
          "y": 29.3,
          "flags": [
            false,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 6.95,
          "y": 31.1,
          "flags": [
            false,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 18.95,
          "y": 31.75,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 24.5,
          "y": 32.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 10.45,
          "y": 33.7,
          "flags": [
            true,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 26.4,
          "y": 34.45,
          "flags": [
            true,
            true,
            false,
            true,
            false
          ]
        },
        {
          "x": 3.1,
          "y": 34.95,
          "flags": [
            true,
            false,
            true,
            false,
            false
          ]
        },
        {
          "x": 30.1,
          "y": 36.35,
          "flags": [
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "url": "/m/g3f3/g3f3.00.jpg"
    },
    "622": {
      "id": 2411,
      "key": "The Azim Steppe",
      "name": "アジムステップ",
      "insCount": 1,
      "filter": true,
      "type": 1,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 5986,
          "name": "オルガナ",
          "rank": "S"
        },
        {
          "id": 6000,
          "name": "ギリメカラ",
          "rank": "A"
        },
        {
          "id": 6001,
          "name": "ソム",
          "rank": "A"
        },
        {
          "id": 6006,
          "name": "クールマ",
          "rank": "B"
        },
        {
          "id": 6007,
          "name": "アスワング",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 27.35,
          "y": 9,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 19.35,
          "y": 10.25,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 13.5,
          "y": 10.35,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 34.65,
          "y": 15.05,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 22.35,
          "y": 15.95,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 12.45,
          "y": 17.25,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 27.9,
          "y": 18.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 17.4,
          "y": 18.9,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 9.65,
          "y": 22.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.95,
          "y": 25.5,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.9,
          "y": 25.7,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 9.75,
          "y": 25.9,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 11.4,
          "y": 28.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 15.6,
          "y": 30.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.25,
          "y": 30.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 21.85,
          "y": 34.2,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.7,
          "y": 34.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 17.45,
          "y": 34.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "url": "/m/e3f3/e3f3.00.jpg"
    },
    "813": {
      "id": 2953,
      "key": "Lakeland",
      "name": "レイクランド",
      "insCount": 1,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8905,
          "name": "ティガー",
          "rank": "S"
        },
        {
          "id": 8906,
          "name": "ナックラヴィー",
          "rank": "A"
        },
        {
          "id": 8907,
          "name": "ナリーポン",
          "rank": "A"
        },
        {
          "id": 8908,
          "name": "ラ・ヴェリュ",
          "rank": "B"
        },
        {
          "id": 8909,
          "name": "イツパパロツル",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 19.76,
          "y": 9.51,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 36.47,
          "y": 12.2,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 22.88,
          "y": 12.46,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 11.74,
          "y": 12.73,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.34,
          "y": 15.5,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 35.34,
          "y": 16.06,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.54,
          "y": 17.49,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.6,
          "y": 19.27,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 30.74,
          "y": 22.26,
          "flags": [
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 8,
          "y": 23.11,
          "flags": [
            false,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.57,
          "y": 23.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 25.67,
          "y": 23.73,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 13.89,
          "y": 24.85,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 35.82,
          "y": 26.92,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 23.15,
          "y": 29.59,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 27.82,
          "y": 30.87,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 35.24,
          "y": 32.19,
          "flags": [
            false,
            false,
            true,
            false,
            true
          ]
        },
        {
          "x": 27.01,
          "y": 37.14,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 23.4,
          "y": 22.1,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 12.68,
          "y": 10.6,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 33.48,
          "y": 12.24,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 10.85,
          "y": 25.13,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 30.11,
          "y": 36.35,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f1/n4f1.00.jpg"
    },
    "814": {
      "id": 2954,
      "key": "Kholusia",
      "name": "コルシア島",
      "insCount": 1,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8910,
          "name": "フォーギヴン・ペダントリー",
          "rank": "S"
        },
        {
          "id": 8911,
          "name": "リルマーダー",
          "rank": "A"
        },
        {
          "id": 8912,
          "name": "フラカン",
          "rank": "A"
        },
        {
          "id": 8913,
          "name": "コクシグルー",
          "rank": "B"
        },
        {
          "id": 8914,
          "name": "インドミタブル",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 16.93,
          "y": 7.32,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 19.65,
          "y": 10.84,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.81,
          "y": 11.58,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 21.96,
          "y": 14.16,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.98,
          "y": 15.87,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 22.89,
          "y": 17.52,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 11.5,
          "y": 18.61,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 26.96,
          "y": 19.27,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 31.27,
          "y": 19.98,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 21.44,
          "y": 22.74,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 15.26,
          "y": 24.27,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 26.7,
          "y": 24.37,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 34.48,
          "y": 24.59,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 9.26,
          "y": 25.48,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 29.87,
          "y": 29.77,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 24.67,
          "y": 30.39,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 20.72,
          "y": 31.35,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 34.63,
          "y": 10.51,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 12.31,
          "y": 14.97,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 23.94,
          "y": 15.29,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 8.71,
          "y": 28.8,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 33.54,
          "y": 33.02,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f2/n4f2.00.jpg"
    },
    "815": {
      "id": 2955,
      "key": "Amh Araeng",
      "name": "アム・アレーン",
      "insCount": 1,
      "filter": true,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8900,
          "name": "タルキア",
          "rank": "S"
        },
        {
          "id": 8901,
          "name": "マリクテンダー",
          "rank": "A"
        },
        {
          "id": 8902,
          "name": "シュガール",
          "rank": "A"
        },
        {
          "id": 8903,
          "name": "ウェルウォーム",
          "rank": "B"
        },
        {
          "id": 8904,
          "name": "ジャグラー・ヘカトゥーム",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 22.48,
          "y": 10.37,
          "flags": [
            false,
            false,
            false,
            true,
            false
          ]
        },
        {
          "x": 16.7,
          "y": 10.43,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 10.31,
          "y": 12,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 28.7,
          "y": 12.77,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 30.91,
          "y": 14.24,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 19.26,
          "y": 16.1,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 11.74,
          "y": 19.52,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 28.7,
          "y": 20.27,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 33.42,
          "y": 21.47,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 16.54,
          "y": 24.04,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 19.14,
          "y": 24.77,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 28.43,
          "y": 26.24,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 19.83,
          "y": 28.87,
          "flags": [
            false,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 23.29,
          "y": 29.94,
          "flags": [
            false,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 17.2,
          "y": 31.68,
          "flags": [
            true,
            false,
            true,
            true,
            false
          ]
        },
        {
          "x": 32.8,
          "y": 33.93,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 30.51,
          "y": 35.14,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 20.01,
          "y": 36.53,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 27.4,
          "y": 35.73,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 30.43,
          "y": 10.47,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 13.6,
          "y": 12.1,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 30.3,
          "y": 24.7,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 14.2,
          "y": 32.5,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f3/n4f3.00.jpg"
    },
    "816": {
      "id": 2956,
      "key": "Il Mheg",
      "name": "イル・メグ",
      "insCount": 1,
      "filter": true,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8653,
          "name": "アグラオペ",
          "rank": "S"
        },
        {
          "id": 8654,
          "name": "泥人",
          "rank": "A"
        },
        {
          "id": 8655,
          "name": "ポールディア",
          "rank": "A"
        },
        {
          "id": 8656,
          "name": "ドモヴォーイ",
          "rank": "B"
        },
        {
          "id": 8657,
          "name": "ヴルパングエ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 29.27,
          "y": 5.37,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.64,
          "y": 7.22,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 34.06,
          "y": 7.31,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 20.11,
          "y": 8.54,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 31.56,
          "y": 13.71,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.02,
          "y": 16.21,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 27.18,
          "y": 18.79,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 10.22,
          "y": 20.03,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 7.62,
          "y": 22.89,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 8.23,
          "y": 27.04,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 19.41,
          "y": 27.53,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 22.96,
          "y": 28.56,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 9.95,
          "y": 30.76,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.48,
          "y": 33.08,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 13.65,
          "y": 34.08,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 19.58,
          "y": 34.81,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 24.85,
          "y": 37.42,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 13.6,
          "y": 23.13,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 32.51,
          "y": 11.32,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 24.96,
          "y": 22.14,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 5.9,
          "y": 29.74,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 23.51,
          "y": 35.78,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f4/n4f4.00.jpg"
    },
    "817": {
      "id": 2957,
      "key": "The Rak'tika Greatwood",
      "name": "ラケティカ大森林",
      "insCount": 1,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8890,
          "name": "イシュタム",
          "rank": "S"
        },
        {
          "id": 8891,
          "name": "スペイ",
          "rank": "A"
        },
        {
          "id": 8892,
          "name": "グラスマン",
          "rank": "A"
        },
        {
          "id": 8893,
          "name": "マインドメーカー",
          "rank": "B"
        },
        {
          "id": 8894,
          "name": "パチャママ",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 22.56,
          "y": 10.95,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 22.24,
          "y": 13.58,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 26.3,
          "y": 15.29,
          "flags": [
            true,
            true,
            false,
            false,
            true
          ]
        },
        {
          "x": 9.45,
          "y": 18.72,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 14.38,
          "y": 22.42,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 33.23,
          "y": 23.02,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 26.09,
          "y": 24.27,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 9.86,
          "y": 24.31,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 16.97,
          "y": 24.35,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 29.42,
          "y": 26.04,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.04,
          "y": 30.3,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 25.1,
          "y": 30.5,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 8.65,
          "y": 34.92,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 17.93,
          "y": 34.97,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 12.12,
          "y": 36.02,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 24.4,
          "y": 37.33,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 29.9,
          "y": 13.06,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 7.42,
          "y": 21.46,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 18.9,
          "y": 22.53,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 14.63,
          "y": 36.69,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f5/n4f5.00.jpg"
    },
    "818": {
      "id": 2958,
      "key": "The Tempest",
      "name": "テンペスト",
      "insCount": 1,
      "type": 2,
      "scale": {
        "xmin": 1,
        "ymin": 1,
        "xmax": 41.9,
        "ymax": 41.9,
        "offset": 1075
      },
      "mobs": [
        {
          "id": 8895,
          "name": "グニット",
          "rank": "S"
        },
        {
          "id": 8896,
          "name": "ルサルカ",
          "rank": "A"
        },
        {
          "id": 8897,
          "name": "バール",
          "rank": "A"
        },
        {
          "id": 8898,
          "name": "手掴のギウスィー・アース",
          "rank": "B"
        },
        {
          "id": 8899,
          "name": "ディーコン",
          "rank": "B"
        }
      ],
      "mobLocations": [
        {
          "x": 30.96,
          "y": 4.32,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 11.18,
          "y": 5.12,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 21.22,
          "y": 7.65,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 8.91,
          "y": 8.61,
          "flags": [
            false,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 28.76,
          "y": 8.68,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.65,
          "y": 10.7,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 30.77,
          "y": 11.02,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 36.62,
          "y": 11.55,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 25.29,
          "y": 12.7,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 18.43,
          "y": 13.27,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 37.56,
          "y": 16.73,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 13.53,
          "y": 17.43,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 36.03,
          "y": 19.8,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 15.51,
          "y": 20.25,
          "flags": [
            true,
            true,
            true,
            true,
            false
          ]
        },
        {
          "x": 33.77,
          "y": 21.84,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 28.92,
          "y": 23.1,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        },
        {
          "x": 24.77,
          "y": 25.23,
          "flags": [
            true,
            true,
            true,
            false,
            true
          ]
        }
      ],
      "mobs2": [
        {
          "id": 8915,
          "name": "フォーギヴン・リベリオン",
          "rank": "S"
        },
        {
          "id": 8916,
          "name": "フォーギヴン・ゴシップ",
          "rank": "S"
        }
      ],
      "mobLocations2": [
        {
          "x": 13,
          "y": 22.14,
          "flags": [
            true,
            false
          ]
        },
        {
          "x": 8.37,
          "y": 7,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 25.68,
          "y": 9.57,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 38.08,
          "y": 14.06,
          "flags": [
            false,
            true
          ]
        },
        {
          "x": 33.78,
          "y": 30.2,
          "flags": [
            false,
            true
          ]
        }
      ],
      "url": "/m/n4f6/n4f6.00.jpg"
    }
  };

const regions = {
    "ShB": {
      "name": "漆黒エリア",
      "name_du": "ShB Region",
      "class": "grey darken-2 white--text",
      "zoneIds": [
        2953,
        2954,
        2955,
        2956,
        2957,
        2958
      ]
    },
    "SB": {
      "name": "紅蓮エリア",
      "class": "red darken-2 white--text",
      "zoneIds": [
        2406,
        2407,
        2408,
        2409,
        2410,
        2411
      ]
    },
    "HW": {
      "name": "蒼天エリア",
      "class": "indigo darken-2 white--text",
      "zoneIds": [
        2200,
        2100,
        2002,
        2000,
        2001,
        2101
      ]
    },
    "LaNoscea": {
      "name": "ラノシア",
      "class": "red lighten-2 black--text",
      "zoneIds": [
        30,
        31,
        32,
        33,
        34,
        350
      ]
    },
    "Gridania": {
      "name": "グリダニア",
      "class": "yellow lighten-2 black--text",
      "zoneIds": [
        54,
        55,
        56,
        57
      ]
    },
    "Thanalan": {
      "name": "ザナラーン",
      "class": "brown lighten-2 black--text",
      "zoneIds": [
        42,
        43,
        44,
        45,
        46
      ]
    },
    "Frontier": {
      "name": "辺境エリア",
      "class": "brown lighten-4 black--text",
      "zoneIds": [
        67,
        63
      ]
    }
  };

const messages = {
    "ja": {
      "mob": {
        "2919": "ホワイトジョーカー",
        "2920": "スティンギング・ソフィー",
        "2921": "モナーク・オーガフライ",
        "2922": "フェクダ",
        "2923": "スェアーシロップ",
        "2924": "アヴゼン",
        "2925": "ガトリングス",
        "2926": "死灰のアルビン",
        "2927": "不滅のフェランド闘軍曹",
        "2928": "スコッグ・フリュー",
        "2929": "バーバステル",
        "2930": "ブラッディ・マリー",
        "2931": "ダークヘルメット",
        "2932": "ミラドロッシュ",
        "2933": "ヴオコー",
        "2934": "ナウル",
        "2935": "リーチキング",
        "2936": "ファルネウス",
        "2937": "メルティゼリー",
        "2938": "ゲーデ",
        "2939": "ギルタブ",
        "2940": "アレクトリオン",
        "2941": "サボテンダー・バイラリーナ",
        "2942": "マヘス",
        "2943": "ザニゴ",
        "2944": "ファイナルフレイム",
        "2945": "醜男のヴォガージャ",
        "2946": "ウンクテヒ",
        "2947": "魔導ヘルズクロー",
        "2948": "ナン",
        "2949": "マーベリー",
        "2950": "コンヌ",
        "2951": "マラク",
        "2952": "クーレア",
        "2953": "レドロネット",
        "2954": "ウルガル",
        "2955": "マインドフレア",
        "2956": "サウザンドキャスト・セダ",
        "2957": "ゾーナ・シーカー",
        "2958": "ブロンテス",
        "2959": "バルウール",
        "2960": "ヌニュヌウィ",
        "2961": "ミニョーカオン",
        "2962": "クロック・ミテーヌ",
        "2963": "ケロゲロス",
        "2964": "ガーロック",
        "2965": "ボナコン",
        "2966": "ナンディ",
        "2967": "チェルノボーグ",
        "2968": "サファト",
        "2969": "アグリッパ",
        "4350": "アルティック",
        "4351": "クルーゼ",
        "4352": "グナース・コメットドローン",
        "4353": "テクスタ",
        "4354": "プテリゴトゥス",
        "4355": "ブラクキ",
        "4356": "スキタリス",
        "4357": "スケアクロウ",
        "4358": "スクオンク",
        "4359": "舞手のサヌバリ",
        "4360": "リュキダス",
        "4361": "オムニ",
        "4362": "ミルカ",
        "4363": "リューバ",
        "4364": "パイルラスタ",
        "4365": "ワイバーンロード",
        "4366": "機兵のスリップキンクス",
        "4367": "ストラス",
        "4368": "ブネ",
        "4369": "アガトス",
        "4370": "エンケドラス",
        "4371": "シシウトゥル",
        "4372": "キャムパクティ",
        "4373": "センチブロッサム",
        "4374": "カイザーベヒーモス",
        "4375": "セーンムルウ",
        "4376": "ペイルライダー",
        "4377": "ガンダルヴァ",
        "4378": "極楽鳥",
        "4380": "レウクロッタ",
        "5984": "オキナ",
        "5985": "ガンマ",
        "5986": "オルガナ",
        "5987": "ウドンゲ",
        "5988": "ボーンクローラー",
        "5989": "ソルト・アンド・ライト",
        "5990": "オルクス",
        "5991": "アール",
        "5992": "バックスタイン",
        "5993": "アクラブアメル",
        "5994": "マヒシャ",
        "5995": "ルミナーレ",
        "5996": "船幽霊",
        "5997": "オニユメミ",
        "5998": "ガジャースラ",
        "5999": "アンガダ",
        "6000": "ギリメカラ",
        "6001": "ソム",
        "6002": "剣豪ガウキ",
        "6003": "姑獲鳥",
        "6004": "デイダラ",
        "6005": "雷撃のギョライ",
        "6006": "クールマ",
        "6007": "アスワング",
        "6008": "宵闇のヤミニ",
        "6009": "オゼルム",
        "6010": "グアス・ア・ニードル",
        "6011": "ブッカブー",
        "6012": "マネス",
        "6013": "キワ",
        "8653": "アグラオペ",
        "8654": "泥人",
        "8655": "ポールディア",
        "8656": "ドモヴォーイ",
        "8657": "ヴルパングエ",
        "8890": "イシュタム",
        "8891": "スペイ",
        "8892": "グラスマン",
        "8893": "マインドメーカー",
        "8894": "パチャママ",
        "8895": "グニット",
        "8896": "ルサルカ",
        "8897": "バール",
        "8898": "手掴のギウスィー・アース",
        "8899": "ディーコン",
        "8900": "タルキア",
        "8901": "マリクテンダー",
        "8902": "シュガール",
        "8903": "ウェルウォーム",
        "8904": "ジャグラー・ヘカトゥーム",
        "8905": "ティガー",
        "8906": "ナックラヴィー",
        "8907": "ナリーポン",
        "8908": "ラ・ヴェリュ",
        "8909": "イツパパロツル",
        "8910": "フォーギヴン・ペダントリー",
        "8911": "リルマーダー",
        "8912": "フラカン",
        "8913": "コクシグルー",
        "8914": "インドミタブル",
        "8915": "フォーギヴン・リベリオン",
        "8916": "フォーギヴン・ゴシップ"
      },
      "zone": {
        "134": "中央ラノシア",
        "135": "低地ラノシア",
        "137": "東ラノシア",
        "138": "西ラノシア",
        "139": "高地ラノシア",
        "140": "西ザナラーン",
        "141": "中央ザナラーン",
        "145": "東ザナラーン",
        "146": "南ザナラーン",
        "147": "北ザナラーン",
        "148": "黒衣森：中央森林",
        "152": "黒衣森：東部森林",
        "153": "黒衣森：南部森林",
        "154": "黒衣森：北部森林",
        "155": "クルザス中央高地",
        "156": "モードゥナ",
        "180": "外地ラノシア",
        "397": "クルザス西部高地",
        "398": "高地ドラヴァニア",
        "399": "低地ドラヴァニア",
        "400": "ドラヴァニア雲海",
        "401": "アバラシア雲海",
        "402": "アジス・ラー",
        "612": "ギラバニア辺境地帯",
        "613": "紅玉海",
        "614": "ヤンサ",
        "620": "ギラバニア山岳地帯",
        "621": "ギラバニア湖畔地帯",
        "622": "アジムステップ",
        "813": "レイクランド",
        "814": "コルシア島",
        "815": "アム・アレーン",
        "816": "イル・メグ",
        "817": "ラケティカ大森林",
        "818": "テンペスト"
      },
      "region": {
        "ShB": "漆黒エリア",
        "SB": "紅蓮エリア",
        "HW": "蒼天エリア",
        "LaNoscea": "ラノシア",
        "Gridania": "グリダニア",
        "Thanalan": "ザナラーン",
        "Frontier": "辺境エリア"
      }
    },
    "en": {
      "mob": {
        "2919": "White Joker",
        "2920": "Stinging Sophie",
        "2921": "Monarch Ogrefly",
        "2922": "Phecda",
        "2923": "Sewer Syrup",
        "2924": "Ovjang",
        "2925": "Gatling",
        "2926": "Albin the Ashen",
        "2927": "Flame Sergeant Dalvag",
        "2928": "Skogs Fru",
        "2929": "Barbastelle",
        "2930": "Bloody Mary",
        "2931": "Dark Helmet",
        "2932": "Myradrosh",
        "2933": "Vuokho",
        "2934": "Naul",
        "2935": "Leech King",
        "2936": "Forneus",
        "2937": "Melt",
        "2938": "Ghede Ti Malice",
        "2939": "Girtab",
        "2940": "Alectryon",
        "2941": "Sabotender Bailarina",
        "2942": "Maahes",
        "2943": "Zanig'oh",
        "2944": "Dalvag's Final Flame",
        "2945": "Vogaal Ja",
        "2946": "Unktehi",
        "2947": "Hellsclaw",
        "2948": "Nahn",
        "2949": "Marberry",
        "2950": "Cornu",
        "2951": "Marraco",
        "2952": "Kurrea",
        "2953": "Laideronnette",
        "2954": "Wulgaru",
        "2955": "mindflayer",
        "2956": "Thousand-cast Theda",
        "2957": "Zona Seeker",
        "2958": "Brontes",
        "2959": "Lampalagua",
        "2960": "Nunyunuwi",
        "2961": "Minhocao",
        "2962": "Croque-mitaine",
        "2963": "Croakadile",
        "2964": "the Garlok",
        "2965": "Bonnacon",
        "2966": "Nandi",
        "2967": "Chernobog",
        "2968": "Safat",
        "2969": "Agrippa the Mighty",
        "4350": "Alteci",
        "4351": "Kreutzet",
        "4352": "Gnath cometdrone",
        "4353": "Thextera",
        "4354": "Pterygotus",
        "4355": "false gigantopithecus",
        "4356": "Scitalis",
        "4357": "the Scarecrow",
        "4358": "Squonk",
        "4359": "Sanu Vali of Dancing Wings",
        "4360": "Lycidas",
        "4361": "Omni",
        "4362": "Mirka",
        "4363": "Lyuba",
        "4364": "Pylraster",
        "4365": "Lord of the Wyverns",
        "4366": "Slipkinx Steeljoints",
        "4367": "Stolas",
        "4368": "Bune",
        "4369": "Agathos",
        "4370": "Enkelados",
        "4371": "Sisiutl",
        "4372": "Campacti",
        "4373": "stench blossom",
        "4374": "kaiser behemoth",
        "4375": "Senmurv",
        "4376": "the Pale Rider",
        "4377": "Gandarewa",
        "4378": "Bird of Paradise",
        "4380": "Leucrotta",
        "5984": "Okina",
        "5985": "Gamma",
        "5986": "Orghana",
        "5987": "Udumbara",
        "5988": "Bone Crawler",
        "5989": "Salt and Light",
        "5990": "Orcus",
        "5991": "Erle",
        "5992": "Vochstein",
        "5993": "Aqrabuamelu",
        "5994": "Mahisha",
        "5995": "Luminare",
        "5996": "Funa Yurei",
        "5997": "Oni Yumemi",
        "5998": "Gajasura",
        "5999": "Angada",
        "6000": "Girimekhala",
        "6001": "Sum",
        "6002": "Gauki Strongblade",
        "6003": "Guhuo Niao",
        "6004": "Deidar",
        "6005": "Gyorai Quickstrike",
        "6006": "Kurma",
        "6007": "Aswang",
        "6008": "Shadow-dweller Yamini",
        "6009": "Ouzelum",
        "6010": "Gwas-y-neidr",
        "6011": "Buccaboo",
        "6012": "Manes",
        "6013": "Kiwa",
        "8653": "Aglaope",
        "8654": "the mudman",
        "8655": "O Poorest Pauldia",
        "8656": "Domovoi",
        "8657": "Vulpangue",
        "8890": "Ixtab",
        "8891": "Supay",
        "8892": "Grassman",
        "8893": "Mindmaker",
        "8894": "Pachamama",
        "8895": "Gunitt",
        "8896": "Rusalka",
        "8897": "Baal",
        "8898": "Gilshs Aath Swiftclaw",
        "8899": "Deacon",
        "8900": "Tarchia",
        "8901": "Maliktender",
        "8902": "Sugaar",
        "8903": "Worm of the Well",
        "8904": "Juggler Hecatomb",
        "8905": "Tyger",
        "8906": "Nuckelavee",
        "8907": "Nariphon",
        "8908": "La Velue",
        "8909": "Itzpapalotl",
        "8910": "forgiven pedantry",
        "8911": "Li'l Murderer",
        "8912": "Huracan",
        "8913": "Coquecigrue",
        "8914": "Indomitable",
        "8915": "forgiven rebellion",
        "8916": "forgiven gossip"
      },
      "zone": {
        "134": "Middle La Noscea",
        "135": "Lower La Noscea",
        "137": "Eastern La Noscea",
        "138": "Western La Noscea",
        "139": "Upper La Noscea",
        "140": "Western Thanalan",
        "141": "Central Thanalan",
        "145": "Eastern Thanalan",
        "146": "Southern Thanalan",
        "147": "Northern Thanalan",
        "148": "Central Shroud",
        "152": "East Shroud",
        "153": "South Shroud",
        "154": "North Shroud",
        "155": "Coerthas Central Highlands",
        "156": "Mor Dhona",
        "180": "Outer La Noscea",
        "397": "Coerthas Western Highlands",
        "398": "The Dravanian Forelands",
        "399": "The Dravanian Hinterlands",
        "400": "The Churning Mists",
        "401": "The Sea of Clouds",
        "402": "Azys Lla",
        "612": "The Fringes",
        "613": "The Ruby Sea",
        "614": "Yanxia",
        "620": "The Peaks",
        "621": "The Lochs",
        "622": "The Azim Steppe",
        "813": "Lakeland",
        "814": "Kholusia",
        "815": "Amh Araeng",
        "816": "Il Mheg",
        "817": "The Rak'tika Greatwood",
        "818": "The Tempest"
      },
      "region": {
        "ShB": "ShB Region",
        "SB": "SB Region",
        "HW": "HW Region",
        "LaNoscea": "La Noscea",
        "Gridania": "Gridania",
        "Thanalan": "Thanalan",
        "Frontier": "Frontier"
      }
    },
    "fr": {
      "mob": {
        "2919": "joker blanc",
        "2920": "Sophie la dardante",
        "2921": "agrion ogre monarque",
        "2922": "Phecda",
        "2923": "Syrop d'égout",
        "2924": "Ovjang",
        "2925": "Acanthor",
        "2926": "Albin le blafard",
        "2927": "sergent-major Dalvag",
        "2928": "Skogs Fru",
        "2929": "Barbastelle",
        "2930": "Mary la sanglante",
        "2931": "Casque noir",
        "2932": "Myradrosh",
        "2933": "Vuokho",
        "2934": "Naul",
        "2935": "roi des sangsues",
        "2936": "Forneus",
        "2937": "Fondu",
        "2938": "Guédé Ti-Malice",
        "2939": "Girtab",
        "2940": "Alectryon",
        "2941": "pampa ballerine",
        "2942": "Maahes",
        "2943": "Zanig'oh",
        "2944": "dernière flamme de Dalvag",
        "2945": "Vogaal Ja",
        "2946": "Unktehi",
        "2947": "griffe des enfers magitek",
        "2948": "Nahn",
        "2949": "marberry",
        "2950": "Cornu",
        "2951": "Marraco",
        "2952": "Kurrea",
        "2953": "Laideronnette",
        "2954": "Wulgaru",
        "2955": "flagelleur mental",
        "2956": "Theda la tripoteuse",
        "2957": "Zona Seeker",
        "2958": "Brontes",
        "2959": "Balaur",
        "2960": "Nunyunuwi",
        "2961": "Minhocao",
        "2962": "Croque-mitaine",
        "2963": "Croabéros",
        "2964": "Garlok",
        "2965": "Bonnacon",
        "2966": "Nandi",
        "2967": "Czernobog",
        "2968": "Safat",
        "2969": "Agrippa",
        "4350": "Altek",
        "4351": "Kreutzet",
        "4352": "Gnathe myrmicomète",
        "4353": "Texta",
        "4354": "Pterygotus",
        "4355": "gigantopithèque",
        "4356": "Scitalis",
        "4357": "dracosaure primus",
        "4358": "Squonk",
        "4359": "Sanu Vali",
        "4360": "Lycidas",
        "4361": "Omni",
        "4362": "Mirka",
        "4363": "Lyuba",
        "4364": "Pirlasta",
        "4365": "seigneur des wyvernes",
        "4366": "Slipkinx Joints-d'acier",
        "4367": "Stolas",
        "4368": "Bune",
        "4369": "Agathos",
        "4370": "Enkélados",
        "4371": "Sisiutl",
        "4372": "Campacti",
        "4373": "fleur nauséabonde",
        "4374": "béhémoth empereur",
        "4375": "Sênmurw",
        "4376": "Cavalier pâle",
        "4377": "Gandharva",
        "4378": "oiseau de Paradis",
        "4380": "leucrotta",
        "5984": "Okina",
        "5985": "Gamma",
        "5986": "Orghana",
        "5987": "Udumbara",
        "5988": "Mangeur d'os",
        "5989": "Salaclux",
        "5990": "Orcus",
        "5991": "Erle",
        "5992": "Vochstein",
        "5993": "Aqrabuamelu",
        "5994": "Mahisha",
        "5995": "Luminare",
        "5996": "Funa Yurei",
        "5997": "Oni Yumemi",
        "5998": "Gajasura",
        "5999": "Angada",
        "6000": "Girimekhala",
        "6001": "Sum",
        "6002": "Gauki la Lame forte",
        "6003": "Guhuo Niao",
        "6004": "Deidar",
        "6005": "Gyorai le Vif",
        "6006": "Kurma",
        "6007": "Aswang",
        "6008": "Yamini la Nocturne",
        "6009": "Ouzelum",
        "6010": "Gwas-y-neidr",
        "6011": "Bucca-boo",
        "6012": "Manes",
        "6013": "Kiwa",
        "8653": "Aglaope",
        "8654": "tas de boue",
        "8655": "Pauldia",
        "8656": "Domovoï",
        "8657": "Vulpangue",
        "8890": "Ixtab",
        "8891": "Supay",
        "8892": "Sasquatch arboricole",
        "8893": "Maître-penseur",
        "8894": "Pachamama",
        "8895": "Gunitt",
        "8896": "Roussalka",
        "8897": "Baal",
        "8898": "Gilshs Aath l'étrangleur",
        "8899": "Diacre",
        "8900": "Tarchia",
        "8901": "Malikpampa",
        "8902": "Sugaar",
        "8903": "Verpuy",
        "8904": "Jongleur hécatombe",
        "8905": "Tygre",
        "8906": "Nuckelavee",
        "8907": "Nariphon",
        "8908": "Velue",
        "8909": "Itzpapalotl",
        "8910": "pédanterie pardonnée",
        "8911": "Traître",
        "8912": "Huracan",
        "8913": "Coquecigrue",
        "8914": "Indomptable",
        "8915": "rébellion pardonnée",
        "8916": "médisance pardonnée"
      },
      "zone": {
        "134": "Noscea centrale",
        "135": "Basse-Noscea",
        "137": "Noscea orientale",
        "138": "Noscea occidentale",
        "139": "Haute-Noscea",
        "140": "Thanalan occidental",
        "141": "Thanalan central",
        "145": "Thanalan oriental",
        "146": "Thanalan méridional",
        "147": "Thanalan septentrional",
        "148": "Forêt centrale",
        "152": "Forêt de l'est",
        "153": "Forêt du sud",
        "154": "Forêt du nord",
        "155": "Hautes terres du Coerthas central",
        "156": "Mor Dhona",
        "180": "Noscea extérieure",
        "397": "Hautes terres du Coerthas occidental",
        "398": "Avant-pays dravanien",
        "399": "Arrière-pays dravanien",
        "400": "L'Écume des cieux de Dravania",
        "401": "L'Écume des cieux d'Abalathia",
        "402": "Azys Lla",
        "612": "Les Marges",
        "613": "Mer de Rubis",
        "614": "Yanxia",
        "620": "Les Pics",
        "621": "Les Lacs",
        "622": "Steppe d'Azim",
        "813": "Grand-Lac",
        "814": "Kholusia",
        "815": "Amh Araeng",
        "816": "Il Mheg",
        "817": "Rak'tika",
        "818": "La Tempête"
      },
      "region": {
        "ShB": "ShB Region",
        "SB": "SB Region",
        "HW": "HW Region",
        "LaNoscea": "Noscea",
        "Gridania": "Gridania",
        "Thanalan": "Thanalan",
        "Frontier": "Frontière"
      }
    },
    "de": {
      "mob": {
        "2919": "Weiß[a] Joker",
        "2920": "Stinkig[a] Sophie",
        "2921": "Monarch Ogerlibelle",
        "2922": "Phecda",
        "2923": "Abwasser-Sirup",
        "2924": "Ovjang",
        "2925": "Gatling",
        "2926": "Albin Aschfahl",
        "2927": "Dalvag",
        "2928": "Skogs Fru",
        "2929": "Barbastelle",
        "2930": "Bloody Mary",
        "2931": "Dunkelhelm",
        "2932": "Myradrosh",
        "2933": "Vuokho",
        "2934": "Naul",
        "2935": "Egelkönig",
        "2936": "Forneus",
        "2937": "Schmelze",
        "2938": "Ghede Titus Häme",
        "2939": "Girtab",
        "2940": "Alectryon",
        "2941": "Sabotender Bailarina",
        "2942": "Maahes",
        "2943": "Zanig'oh",
        "2944": "Letzt[a] Flamme[p] Dalvags",
        "2945": "Vogaal Ja",
        "2946": "Unktehi",
        "2947": "Höllenklaue",
        "2948": "Nahn",
        "2949": "Marberry",
        "2950": "Cornu",
        "2951": "Marraco",
        "2952": "Kurrea",
        "2953": "Laideronette",
        "2954": "Wulgaru",
        "2955": "Seelenbrenner",
        "2956": "Tausendzahn Theda",
        "2957": "Zona Sucher",
        "2958": "Brontes",
        "2959": "Balaur",
        "2960": "Nunyunuwi",
        "2961": "Minhocao",
        "2962": "Croque Mitaine",
        "2963": "Quakquak",
        "2964": "Garlok",
        "2965": "Bonnacon",
        "2966": "Nandi",
        "2967": "Czernobog",
        "2968": "Safat",
        "2969": "Agrippa",
        "4350": "Artic",
        "4351": "Kreutzet",
        "4352": "Gnath-Kometdrohne",
        "4353": "Dexter",
        "4354": "Pterygotus",
        "4355": "Gigantopithecus",
        "4356": "Scitalis",
        "4357": "Tyranno",
        "4358": "Squonk",
        "4359": "Sanu Vali [t] Tanzend[a] Schwinge",
        "4360": "Lykidas",
        "4361": "Omni",
        "4362": "Mirka",
        "4363": "Lyuba",
        "4364": "Xhauron",
        "4365": "Wyvern-Lord",
        "4366": "Rutschfix Stahlscharnier",
        "4367": "Stolas",
        "4368": "Bune",
        "4369": "Agathos",
        "4370": "Engedoras",
        "4371": "Sisiutl",
        "4372": "Campacti",
        "4373": "Pestwurz",
        "4374": "Kaiser-Behemoth",
        "4375": "Simurgh",
        "4376": "Bleich[a] Reiter",
        "4377": "Gandalva",
        "4378": "Paradiesvogel",
        "4380": "Leucrotta",
        "5984": "Okina",
        "5985": "Gamma",
        "5986": "Orghana",
        "5987": "Udumbara",
        "5988": "Knochenkriecher",
        "5989": "Salzlicht",
        "5990": "Orcus",
        "5991": "Erle",
        "5992": "Vochstein",
        "5993": "Aqrabuamelu",
        "5994": "Mahisha",
        "5995": "Luminare",
        "5996": "Funa Yurei",
        "5997": "Oni Yumemi",
        "5998": "Gajasura",
        "5999": "Angada",
        "6000": "Girimekhala",
        "6001": "Sum",
        "6002": "Gauki Starkklinge",
        "6003": "Guhuo Niao",
        "6004": "Deidar",
        "6005": "Gyorai Schnellschlag",
        "6006": "Kurma",
        "6007": "Aswang",
        "6008": "Schattenkauer-Yamini",
        "6009": "Ouzelum",
        "6010": "Gwas-y-neidr",
        "6011": "Buccaboo",
        "6012": "Manes",
        "6013": "Kiwa",
        "8653": "Aglaope",
        "8654": "Matschklops",
        "8655": "gepeinigt[a] Pauldia",
        "8656": "Domovoi",
        "8657": "Vulpangue",
        "8890": "Ixtab",
        "8891": "Supay",
        "8892": "Grasmann",
        "8893": "Freigeist",
        "8894": "Pachamama",
        "8895": "Gunitt",
        "8896": "Rusalka",
        "8897": "Baal",
        "8898": "Gilshs Aath",
        "8899": "Diakon",
        "8900": "Tarchia",
        "8901": "Malikkaktor",
        "8902": "Sugaar",
        "8903": "Wurm[p] des Brunnens",
        "8904": "Gaukler[p] Hecatomb",
        "8905": "Tyger",
        "8906": "Nuckelavee",
        "8907": "Nariphon",
        "8908": "La Velue",
        "8909": "Itzpapalotl",
        "8910": "geläutert[a] Pedanterie",
        "8911": "Klein[a] Mörder",
        "8912": "Huracan",
        "8913": "Coquecigrue",
        "8914": "Unbezähmbar",
        "8915": "geläutert[a] Rebellion",
        "8916": "geläutert[a] Lästerei"
      },
      "zone": {
        "134": "Zentrales La Noscea",
        "135": "Unteres La Noscea",
        "137": "Östliches La Noscea",
        "138": "Westliches La Noscea",
        "139": "Oberes La Noscea",
        "140": "Westliches Thanalan",
        "141": "Zentrales Thanalan",
        "145": "Östliches Thanalan",
        "146": "Südliches Thanalan",
        "147": "Nördliches Thanalan",
        "148": "Tiefer Wald",
        "152": "Ostwald",
        "153": "Südwald",
        "154": "Nordwald",
        "155": "Zentrales Hochland von Coerthas",
        "156": "Mor Dhona",
        "180": "Äußeres La Noscea",
        "397": "Westliches Hochland von Coerthas",
        "398": "Dravanisches Vorland",
        "399": "Dravanisches Hinterland",
        "400": "Wallende Nebel",
        "401": "Abalathisches Wolkenmeer",
        "402": "Azys Lla",
        "612": "Abanisches Grenzland",
        "613": "Rubinsee",
        "614": "Yanxia",
        "620": "Die Zinnen",
        "621": "Das Fenn",
        "622": "Azim-Steppe",
        "813": "Seenland",
        "814": "Kholusia",
        "815": "Amh Araeng",
        "816": "Il Mheg",
        "817": "Der Große Wald Rak'tika",
        "818": "Tempest"
      },
      "region": {
        "ShB": "ShB Region",
        "SB": "SB Region",
        "HW": "HW Region",
        "LaNoscea": "Noscea",
        "Gridania": "Gridania",
        "Thanalan": "Thanalan",
        "Frontier": "Frontière"
      }
    }
  };

