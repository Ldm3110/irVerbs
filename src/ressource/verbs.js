const VERBS = [
    {
        "base": "be",
        "pSimple": "was/were",
        "pParticiple": "been",
        "-ing form": "being",
        "frequency": 2398724162,
        "French": "être"
    },
    {
        "base": "have",
        "pSimple": "had",
        "pParticiple": "had",
        "-ing form": "having",
        "frequency": 1564202750,
        "French": "avoir"
    },
    {
        "base": "do",
        "pSimple": "did",
        "pParticiple": "done",
        "-ing form": "doing",
        "frequency": 950751722,
        "French": "faire"
    },
    {
        "base": "see",
        "pSimple": "saw",
        "pParticiple": "seen",
        "-ing form": "seeing",
        "frequency": 681410380,
        "French": "voir"
    },
    {
        "base": "get",
        "pSimple": "got",
        "pParticiple": "got",
        "-ing form": "getting",
        "frequency": 605984508,
        "French": "obtenir"
    },
    {
        "base": "find",
        "pSimple": "found",
        "pParticiple": "found",
        "-ing form": "finding",
        "frequency": 502043038,
        "French": "trouver"
    },
    {
        "base": "go",
        "pSimple": "went",
        "pParticiple": "gone",
        "-ing form": "going",
        "frequency": 421086358,
        "French": "aller"
    },
    {
        "base": "buy",
        "pSimple": "bought",
        "pParticiple": "bought",
        "-ing form": "buying",
        "frequency": 410780176,
        "French": "acheter"
    },
    {
        "base": "make",
        "pSimple": "made",
        "pParticiple": "made",
        "-ing form": "making",
        "frequency": 405084642,
        "French": "fabriquer"
    },
    {
        "base": "read",
        "pSimple": "read",
        "pParticiple": "read",
        "-ing form": "reading",
        "frequency": 322331766,
        "French": "lire"
    },
    {
        "base": "set",
        "pSimple": "set",
        "pParticiple": "set",
        "-ing form": "setting",
        "frequency": 313469591,
        "French": "fixer"
    },
    {
        "base": "know",
        "pSimple": "knew",
        "pParticiple": "known",
        "-ing form": "knowing",
        "frequency": 306100813,
        "French": "savoir"
    },
    {
        "base": "send",
        "pSimple": "sent",
        "pParticiple": "sent",
        "-ing form": "sending",
        "frequency": 274103587,
        "French": "envoyer"
    },
    {
        "base": "take",
        "pSimple": "took",
        "pParticiple": "taken",
        "-ing form": "taking",
        "frequency": 264349801,
        "French": "prendre"
    },
    {
        "base": "show",
        "pSimple": "showed",
        "pParticiple": "shown",
        "-ing form": "showing",
        "frequency": 247541986,
        "French": "montrer"
    },
    {
        "base": "think",
        "pSimple": "thought",
        "pParticiple": "thought",
        "-ing form": "thinking",
        "frequency": 217856550,
        "French": "penser"
    },
    {
        "base": "learn",
        "pSimple": "learnt",
        "pParticiple": "learnt",
        "-ing form": "learning",
        "frequency": 179428286,
        "French": "apprendre"
    },
    {
        "base": "cost",
        "pSimple": "cost",
        "pParticiple": "cost",
        "-ing form": "costing",
        "frequency": 158887256,
        "French": "coûter"
    },
    {
        "base": "say",
        "pSimple": "said",
        "pParticiple": "said",
        "-ing form": "saying",
        "frequency": 156845267,
        "French": "dire"
    },
    {
        "base": "come",
        "pSimple": "came",
        "pParticiple": "come",
        "-ing form": "coming",
        "frequency": 154326119,
        "French": "venir"
    },
    {
        "base": "let",
        "pSimple": "let",
        "pParticiple": "let",
        "-ing form": "letting",
        "frequency": 143062438,
        "French": "laisser"
    },
    {
        "base": "give",
        "pSimple": "gave",
        "pParticiple": "given",
        "-ing form": "giving",
        "frequency": 140688602,
        "French": "donner"
    },
    {
        "base": "sell",
        "pSimple": "sold",
        "pParticiple": "sold",
        "-ing form": "selling",
        "frequency": 137696613,
        "French": "vendre"
    },
    {
        "base": "pay",
        "pSimple": "paid",
        "pParticiple": "paid",
        "-ing form": "paying",
        "frequency": 129198530,
        "French": "payer"
    },
    {
        "base": "light",
        "pSimple": "lit",
        "pParticiple": "lit",
        "-ing form": "lighting",
        "frequency": 126699632,
        "French": "éclairer"
    },
    {
        "base": "write",
        "pSimple": "wrote",
        "pParticiple": "written",
        "-ing form": "writing",
        "frequency": 126645151,
        "French": "écrire"
    },
    {
        "base": "become",
        "pSimple": "became",
        "pParticiple": "become",
        "-ing form": "becoming",
        "frequency": 120495036,
        "French": "devenir"
    },
    {
        "base": "keep",
        "pSimple": "kept",
        "pParticiple": "kept",
        "-ing form": "keeping",
        "frequency": 119602514,
        "French": "garder"
    },
    {
        "base": "run",
        "pSimple": "ran",
        "pParticiple": "run",
        "-ing form": "running",
        "frequency": 117213565,
        "French": "courir"
    },
    {
        "base": "put",
        "pSimple": "put",
        "pParticiple": "put",
        "-ing form": "putting",
        "frequency": 115205090,
        "French": "mettre"
    },
    {
        "base": "tell",
        "pSimple": "told",
        "pParticiple": "told",
        "-ing form": "telling",
        "frequency": 109553730,
        "French": "raconter"
    },
    {
        "base": "drive",
        "pSimple": "drove",
        "pParticiple": "driven",
        "-ing form": "driving",
        "frequency": 107799371,
        "French": "conduire"
    },
    {
        "base": "meet",
        "pSimple": "met",
        "pParticiple": "met",
        "-ing form": "meeting",
        "frequency": 93275872,
        "French": "rencontrer"
    },
    {
        "base": "feel",
        "pSimple": "felt",
        "pParticiple": "felt",
        "-ing form": "feeling",
        "frequency": 91924001,
        "French": "sentir"
    },
    {
        "base": "choose",
        "pSimple": "chose",
        "pParticiple": "chosen",
        "-ing form": "choosing",
        "frequency": 90010174,
        "French": "choisir"
    },
    {
        "base": "speed",
        "pSimple": "sped",
        "pParticiple": "sped",
        "-ing form": "speeding",
        "frequency": 83135749,
        "French": "accélérer"
    },
    {
        "base": "mean",
        "pSimple": "meant",
        "pParticiple": "meant",
        "-ing form": "meaning",
        "frequency": 80312172,
        "French": "signifier"
    },
    {
        "base": "build",
        "pSimple": "built",
        "pParticiple": "built",
        "-ing form": "building",
        "frequency": 77203075,
        "French": "construire"
    },
    {
        "base": "leave",
        "pSimple": "left",
        "pParticiple": "left",
        "-ing form": "leaving",
        "frequency": 70957750,
        "French": "laisser"
    },
    {
        "base": "bid",
        "pSimple": "bade",
        "pParticiple": "bidden",
        "-ing form": "bidding",
        "frequency": 70427114,
        "French": "faire une offre"
    },
    {
        "base": "lead",
        "pSimple": "led",
        "pParticiple": "led",
        "-ing form": "leading",
        "frequency": 68325439,
        "French": "mener"
    },
    {
        "base": "wed",
        "pSimple": "wed",
        "pParticiple": "wed",
        "-ing form": "wedding",
        "frequency": 66796198,
        "French": "se marier"
    },
    {
        "base": "fall",
        "pSimple": "fell",
        "pParticiple": "fallen",
        "-ing form": "falling",
        "frequency": 65501110,
        "French": "tomber"
    },
    {
        "base": "win",
        "pSimple": "won",
        "pParticiple": "won",
        "-ing form": "winning",
        "frequency": 65264239,
        "French": "gagner"
    },
    {
        "base": "spring",
        "pSimple": "sprang",
        "pParticiple": "sprung",
        "-ing form": "springing",
        "frequency": 64814116,
        "French": "surgir"
    },
    {
        "base": "deal",
        "pSimple": "dealt",
        "pParticiple": "dealt",
        "-ing form": "dealing",
        "frequency": 63828244,
        "French": "négocier"
    },
    {
        "base": "hold",
        "pSimple": "held",
        "pParticiple": "held",
        "-ing form": "holding",
        "frequency": 63777575,
        "French": "tenir"
    },
    {
        "base": "feed",
        "pSimple": "fed",
        "pParticiple": "fed",
        "-ing form": "feeding",
        "frequency": 62663785,
        "French": "nourrir"
    },
    {
        "base": "understand",
        "pSimple": "understood",
        "pParticiple": "understood",
        "-ing form": "understanding",
        "frequency": 61719969,
        "French": "comprendre"
    },
    {
        "base": "cut",
        "pSimple": "cut",
        "pParticiple": "cut",
        "-ing form": "cutting",
        "frequency": 61337417,
        "French": "couper"
    },
    {
        "base": "bring",
        "pSimple": "brought",
        "pParticiple": "brought",
        "-ing form": "bringing",
        "frequency": 57608074,
        "French": "apporter"
    },
    {
        "base": "ring",
        "pSimple": "rang",
        "pParticiple": "rung",
        "-ing form": "ringing",
        "frequency": 54342432,
        "French": "sonner"
    },
    {
        "base": "hit",
        "pSimple": "hit",
        "pParticiple": "hit",
        "-ing form": "hitting",
        "frequency": 53171478,
        "French": "frapper"
    },
    {
        "base": "string",
        "pSimple": "strung",
        "pParticiple": "strung",
        "-ing form": "stringing",
        "frequency": 52681344,
        "French": "mettre des cordes"
    },
    {
        "base": "break",
        "pSimple": "broke",
        "pParticiple": "broken",
        "-ing form": "breaking",
        "frequency": 51242970,
        "French": "casser"
    },
    {
        "base": "saw",
        "pSimple": "sawed",
        "pParticiple": "sawn",
        "-ing form": "sawing",
        "frequency": 48544776,
        "French": "scier"
    },
    {
        "base": "hear",
        "pSimple": "heard",
        "pParticiple": "heard",
        "-ing form": "hearing",
        "frequency": 47426506,
        "French": "entendre"
    },
    {
        "base": "stand",
        "pSimple": "stood",
        "pParticiple": "stood",
        "-ing form": "standing",
        "frequency": 46292709,
        "French": "se tenir debout"
    },
    {
        "base": "begin",
        "pSimple": "began",
        "pParticiple": "begun",
        "-ing form": "beginning",
        "frequency": 45434902,
        "French": "commencer"
    },
    {
        "base": "wind",
        "pSimple": "wound",
        "pParticiple": "wound",
        "-ing form": "winding",
        "frequency": 42974876,
        "French": "enrouler"
    },
    {
        "base": "fit",
        "pSimple": "fit",
        "pParticiple": "fit",
        "-ing form": "fitting",
        "frequency": 42342802,
        "French": "s'adapter"
    },
    {
        "base": "dream",
        "pSimple": "dreamt",
        "pParticiple": "dreamt",
        "-ing form": "dreaming",
        "frequency": 33518573,
        "French": "rêver"
    },
    {
        "base": "cast",
        "pSimple": "cast",
        "pParticiple": "cast",
        "-ing form": "casting",
        "frequency": 33395024,
        "French": "jeter"
    },
    {
        "base": "bear",
        "pSimple": "bore",
        "pParticiple": "borne",
        "-ing form": "bearing",
        "frequency": 31981362,
        "French": "supporter"
    },
    {
        "base": "blow",
        "pSimple": "blew",
        "pParticiple": "blown",
        "-ing form": "blowing",
        "frequency": 31344495,
        "French": "souffler"
    },
    {
        "base": "speak",
        "pSimple": "spoke",
        "pParticiple": "spoken",
        "-ing form": "speaking",
        "frequency": 31324712,
        "French": "parler"
    },
    {
        "base": "fight",
        "pSimple": "fought",
        "pParticiple": "fought",
        "-ing form": "fighting",
        "frequency": 30784313,
        "French": "combattre"
    },
    {
        "base": "wear",
        "pSimple": "wore",
        "pParticiple": "worn",
        "-ing form": "wearing",
        "frequency": 29846762,
        "French": "porter"
    },
    {
        "base": "rise",
        "pSimple": "rose",
        "pParticiple": "risen",
        "-ing form": "rising",
        "frequency": 29535295,
        "French": "s'élever"
    },
    {
        "base": "sleep",
        "pSimple": "slept",
        "pParticiple": "slept",
        "-ing form": "sleeping",
        "frequency": 29491537,
        "French": "dormir"
    },
    {
        "base": "drink",
        "pSimple": "drank",
        "pParticiple": "drunk",
        "-ing form": "drinking",
        "frequency": 29254937,
        "French": "boire"
    },
    {
        "base": "eat",
        "pSimple": "ate",
        "pParticiple": "eaten",
        "-ing form": "eating",
        "frequency": 29237400,
        "French": "manger"
    },
    {
        "base": "fly",
        "pSimple": "flew",
        "pParticiple": "flown",
        "-ing form": "flying",
        "frequency": 28279478,
        "French": "voler"
    },
    {
        "base": "beat",
        "pSimple": "beat",
        "pParticiple": "beaten",
        "-ing form": "beating",
        "frequency": 27616668,
        "French": "battre"
    },
    {
        "base": "hide",
        "pSimple": "hid",
        "pParticiple": "hidden",
        "-ing form": "hiding",
        "frequency": 27157035,
        "French": "cacher"
    },
    {
        "base": "spend",
        "pSimple": "spent",
        "pParticiple": "spent",
        "-ing form": "spending",
        "frequency": 26713310,
        "French": "dépenser"
    },
    {
        "base": "grow",
        "pSimple": "grew",
        "pParticiple": "grown",
        "-ing form": "growing",
        "frequency": 26701492,
        "French": "grandir"
    },
    {
        "base": "ride",
        "pSimple": "rode",
        "pParticiple": "ridden",
        "-ing form": "riding",
        "frequency": 26153004,
        "French": "chevaucher"
    },
    {
        "base": "forget",
        "pSimple": "forgot",
        "pParticiple": "forgotten",
        "-ing form": "forgetting",
        "frequency": 25162411,
        "French": "oublier"
    },
    {
        "base": "spread",
        "pSimple": "spread",
        "pParticiple": "spread",
        "-ing form": "spreading",
        "frequency": 24520573,
        "French": "se propager"
    },
    {
        "base": "lose",
        "pSimple": "lost",
        "pParticiple": "lost",
        "-ing form": "losing",
        "frequency": 24136984,
        "French": "perdre"
    },
    {
        "base": "seek",
        "pSimple": "sought",
        "pParticiple": "sought",
        "-ing form": "seeking",
        "frequency": 24135344,
        "French": "rechercher"
    },
    {
        "base": "wet",
        "pSimple": "wet",
        "pParticiple": "wet",
        "-ing form": "wetting",
        "frequency": 23918294,
        "French": "mouiller"
    },
    {
        "base": "draw",
        "pSimple": "drew",
        "pParticiple": "drawn",
        "-ing form": "drawing",
        "frequency": 22705371,
        "French": "dessiner"
    },
    {
        "base": "stick",
        "pSimple": "stick",
        "pParticiple": "stuck",
        "-ing form": "sticking",
        "frequency": 22399126,
        "French": "coller"
    },
    {
        "base": "slide",
        "pSimple": "slid",
        "pParticiple": "slid",
        "-ing form": "sliding",
        "frequency": 22339084,
        "French": "glisser"
    },
    {
        "base": "catch",
        "pSimple": "caught",
        "pParticiple": "caught",
        "-ing form": "catching",
        "frequency": 20400979,
        "French": "attraper"
    },
    {
        "base": "split",
        "pSimple": "split",
        "pParticiple": "split",
        "-ing form": "splitting",
        "frequency": 19998411,
        "French": "séparer"
    },
    {
        "base": "sit",
        "pSimple": "sat",
        "pParticiple": "sat",
        "-ing form": "sitting",
        "frequency": 19797379,
        "French": "s'asseoir"
    },
    {
        "base": "teach",
        "pSimple": "taught",
        "pParticiple": "taught",
        "-ing form": "teaching",
        "frequency": 19079783,
        "French": "enseigner"
    },
    {
        "base": "strip",
        "pSimple": "stripped",
        "pParticiple": "stripped",
        "-ing form": "stripping",
        "frequency": 18711440,
        "French": "déshabiller"
    },
    {
        "base": "strike",
        "pSimple": "struck",
        "pParticiple": "struck",
        "-ing form": "striking",
        "frequency": 18621050,
        "French": "frapper"
    },
    {
        "base": "shoe",
        "pSimple": "shod",
        "pParticiple": "shod",
        "-ing form": "shoeing",
        "frequency": 16342426,
        "French": "chausser"
    },
    {
        "base": "lay",
        "pSimple": "laid",
        "pParticiple": "laid",
        "-ing form": "laying",
        "frequency": 16122690,
        "French": "poser"
    },
    {
        "base": "prove",
        "pSimple": "proved",
        "pParticiple": "proven",
        "-ing form": "proving",
        "frequency": 16046788,
        "French": "prouver"
    },
    {
        "base": "bet",
        "pSimple": "bet",
        "pParticiple": "bet",
        "-ing form": "betting",
        "frequency": 15943118,
        "French": "parier"
    },
    {
        "base": "throw",
        "pSimple": "threw",
        "pParticiple": "thrown",
        "-ing form": "throwing",
        "frequency": 15751985,
        "French": "lancer"
    },
    {
        "base": "wake",
        "pSimple": "woke",
        "pParticiple": "woken",
        "-ing form": "waking",
        "frequency": 14120141,
        "French": "se réveiller"
    },
    {
        "base": "burn",
        "pSimple": "burnt",
        "pParticiple": "burnt",
        "-ing form": "burning",
        "frequency": 13602754,
        "French": "brûler"
    },
    {
        "base": "lie down",
        "pSimple": "lay down",
        "pParticiple": "lain down",
        "-ing form": "lying",
        "frequency": 13533542,
        "French": "s'allonger"
    },
    {
        "base": "lie",
        "pSimple": "lied",
        "pParticiple": "lied",
        "-ing form": "lying",
        "frequency": 13533542,
        "French": "mentir"
    },
    {
        "base": "hurt",
        "pSimple": "hurt",
        "pParticiple": "hurt",
        "-ing form": "hurting",
        "frequency": 12936269,
        "French": "blesser"
    },
    {
        "base": "swing",
        "pSimple": "swung",
        "pParticiple": "swung",
        "-ing form": "swinging",
        "frequency": 12734467,
        "French": "se balancer"
    },
    {
        "base": "shoot",
        "pSimple": "shot",
        "pParticiple": "shot",
        "-ing form": "shooting",
        "frequency": 12695618,
        "French": "tirer"
    },
    {
        "base": "spin",
        "pSimple": "span",
        "pParticiple": "spun",
        "-ing form": "spinning",
        "frequency": 12671696,
        "French": "tourner"
    },
    {
        "base": "shut",
        "pSimple": "shut",
        "pParticiple": "shut",
        "-ing form": "shutting",
        "frequency": 11689186,
        "French": "fermer / éteindre"
    },
    {
        "base": "sing",
        "pSimple": "sang",
        "pParticiple": "sung",
        "-ing form": "singing",
        "frequency": 11114001,
        "French": "chanter"
    },
    {
        "base": "hang",
        "pSimple": "hung",
        "pParticiple": "hung",
        "-ing form": "hanging",
        "frequency": 11077672,
        "French": "pendre"
    },
    {
        "base": "mistake",
        "pSimple": "mistook",
        "pParticiple": "mistaken",
        "-ing form": "mistaking",
        "frequency": 10841486,
        "French": "se méprendre"
    },
    {
        "base": "quit",
        "pSimple": "quit",
        "pParticiple": "quit",
        "-ing form": "quitting",
        "frequency": 10324803,
        "French": "arrêter"
    },
    {
        "base": "bend",
        "pSimple": "bent",
        "pParticiple": "bent",
        "-ing form": "bending",
        "frequency": 9342191,
        "French": "plier"
    },
    {
        "base": "swim",
        "pSimple": "swam",
        "pParticiple": "swum",
        "-ing form": "swimming",
        "frequency": 8739102,
        "French": "nager"
    },
    {
        "base": "spell",
        "pSimple": "spelt",
        "pParticiple": "spelt",
        "-ing form": "spelling",
        "frequency": 8506049,
        "French": "épeler"
    },
    {
        "base": "arise",
        "pSimple": "arose",
        "pParticiple": "arisen",
        "-ing form": "arising",
        "frequency": 8337093,
        "French": "survenir"
    },
    {
        "base": "dive",
        "pSimple": "dived",
        "pParticiple": "dived",
        "-ing form": "diving",
        "frequency": 8254655,
        "French": "plonger"
    },
    {
        "base": "sink",
        "pSimple": "sank",
        "pParticiple": "sunk",
        "-ing form": "sinking",
        "frequency": 8120590,
        "French": "couler"
    },
    {
        "base": "rid",
        "pSimple": "rid",
        "pParticiple": "rid",
        "-ing form": "ridding",
        "frequency": 7877480,
        "French": "débarrasser"
    },
    {
        "base": "breed",
        "pSimple": "bred",
        "pParticiple": "bred",
        "-ing form": "breeding",
        "frequency": 7716901,
        "French": "se reproduire"
    },
    {
        "base": "dig",
        "pSimple": "dug",
        "pParticiple": "dug",
        "-ing form": "digging",
        "frequency": 7292787,
        "French": "creuser"
    },
    {
        "base": "shake",
        "pSimple": "shook",
        "pParticiple": "shaken",
        "-ing form": "shaking",
        "frequency": 6839319,
        "French": "secouer"
    },
    {
        "base": "shed",
        "pSimple": "shed",
        "pParticiple": "shed",
        "-ing form": "shedding",
        "frequency": 6720397,
        "French": "verser"
    },
    {
        "base": "bind",
        "pSimple": "bind",
        "pParticiple": "bound",
        "-ing form": "binding",
        "frequency": 6677053,
        "French": "lier"
    },
    {
        "base": "smell",
        "pSimple": "smelt",
        "pParticiple": "smelt",
        "-ing form": "smelling",
        "frequency": 6642666,
        "French": "sentir (une odeur)"
    },
    {
        "base": "lean",
        "pSimple": "leant",
        "pParticiple": "leant",
        "-ing form": "leaning",
        "frequency": 6431362,
        "French": "pencher"
    },
    {
        "base": "steal",
        "pSimple": "stole",
        "pParticiple": "stolen",
        "-ing form": "stealing",
        "frequency": 6257493,
        "French": "dérober"
    },
    {
        "base": "bite",
        "pSimple": "bit",
        "pParticiple": "bitten",
        "-ing form": "biting",
        "frequency": 6058201,
        "French": "mordre"
    },
    {
        "base": "shine",
        "pSimple": "shone",
        "pParticiple": "shone",
        "-ing form": "shining",
        "frequency": 5881862,
        "French": "briller"
    },
    {
        "base": "zinc",
        "pSimple": "zincked",
        "pParticiple": "zincked",
        "-ing form": "zincking",
        "frequency": 5671140,
        "French": "zinguer"
    },
    {
        "base": "undertake",
        "pSimple": "undertook",
        "pParticiple": "undertaken",
        "-ing form": "undertaking",
        "frequency": 5613443,
        "French": "entreprendre"
    },
    {
        "base": "tear",
        "pSimple": "tore",
        "pParticiple": "torn",
        "-ing form": "tearing",
        "frequency": 5605530,
        "French": "pleurer"
    },
    {
        "base": "upset",
        "pSimple": "upset",
        "pParticiple": "upset",
        "-ing form": "upsetting",
        "frequency": 5544484,
        "French": "bouleverser"
    },
    {
        "base": "freeze",
        "pSimple": "froze",
        "pParticiple": "frozen",
        "-ing form": "freezing",
        "frequency": 5526731,
        "French": "geler"
    },
    {
        "base": "burst",
        "pSimple": "burst",
        "pParticiple": "burst",
        "-ing form": "bursting",
        "frequency": 5147573,
        "French": "éclater"
    },
    {
        "base": "knit",
        "pSimple": "knit",
        "pParticiple": "knit",
        "-ing form": "knitting",
        "frequency": 5113070,
        "French": "tricoter"
    },
    {
        "base": "leap",
        "pSimple": "leapt",
        "pParticiple": "leapt",
        "-ing form": "leaping",
        "frequency": 4767538,
        "French": "bondir"
    },
    {
        "base": "withdraw",
        "pSimple": "withdrew",
        "pParticiple": "withdrawn",
        "-ing form": "withdrawing",
        "frequency": 4652948,
        "French": "se rétracter"
    },
    {
        "base": "sweat",
        "pSimple": "sweat",
        "pParticiple": "sweat",
        "-ing form": "sweating",
        "frequency": 4551615,
        "French": "suer"
    },
    {
        "base": "bust",
        "pSimple": "bust",
        "pParticiple": "bust",
        "-ing form": "busting",
        "frequency": 4547742,
        "French": "bousiller"
    },
    {
        "base": "strive",
        "pSimple": "strove",
        "pParticiple": "striven",
        "-ing form": "striving",
        "frequency": 4152261,
        "French": "s'efforcer"
    },
    {
        "base": "spill",
        "pSimple": "spilt",
        "pParticiple": "spilt",
        "-ing form": "spilling",
        "frequency": 3890646,
        "French": "renverser"
    },
    {
        "base": "abide",
        "pSimple": "abided",
        "pParticiple": "abided",
        "-ing form": "abiding",
        "frequency": 3722809,
        "French": "demeurer"
    },
    {
        "base": "sweep",
        "pSimple": "swept",
        "pParticiple": "swept",
        "-ing form": "sweeping",
        "frequency": 3623863,
        "French": "balayer"
    },
    {
        "base": "thrust",
        "pSimple": "thrust",
        "pParticiple": "thrust",
        "-ing form": "thrusting",
        "frequency": 3500671,
        "French": "pousser"
    },
    {
        "base": "forgive",
        "pSimple": "forgave",
        "pParticiple": "forgiven",
        "-ing form": "forgiving",
        "frequency": 3379266,
        "French": "pardonner"
    },
    {
        "base": "shrink",
        "pSimple": "shrank",
        "pParticiple": "shrunk",
        "-ing form": "shrinking",
        "frequency": 3261118,
        "French": "rétrécir"
    },
    {
        "base": "awake",
        "pSimple": "awoke",
        "pParticiple": "awoken",
        "-ing form": "awaking",
        "frequency": 3230337,
        "French": "se réveiller"
    },
    {
        "base": "melt",
        "pSimple": "melted",
        "pParticiple": "molten",
        "-ing form": "melting",
        "frequency": 3153948,
        "French": "fondre"
    },
    {
        "base": "swear",
        "pSimple": "swore",
        "pParticiple": "sworn",
        "-ing form": "swearing",
        "frequency": 3082372,
        "French": "jurer"
    },
    {
        "base": "lend",
        "pSimple": "lent",
        "pParticiple": "lent",
        "-ing form": "lending",
        "frequency": 2926360,
        "French": "prêter"
    },
    {
        "base": "shear",
        "pSimple": "shore",
        "pParticiple": "shorn",
        "-ing form": "shearing",
        "frequency": 2886210,
        "French": "tondre"
    },
    {
        "base": "behold",
        "pSimple": "beheld",
        "pParticiple": "beheld",
        "-ing form": "beholding",
        "frequency": 2847118,
        "French": "contempler"
    },
    {
        "base": "sting",
        "pSimple": "stung",
        "pParticiple": "stung",
        "-ing form": "stinging",
        "frequency": 2773263,
        "French": "piquer"
    },
    {
        "base": "undergo",
        "pSimple": "underwent",
        "pParticiple": "undergone",
        "-ing form": "undergoing",
        "frequency": 2620082,
        "French": "subir"
    },
    {
        "base": "shave",
        "pSimple": "shaved",
        "pParticiple": "shaven",
        "-ing form": "shaving",
        "frequency": 2580057,
        "French": "se raser"
    },
    {
        "base": "grind",
        "pSimple": "ground",
        "pParticiple": "ground",
        "-ing form": "grinding",
        "frequency": 2482307,
        "French": "broyer"
    },
    {
        "base": "sneak",
        "pSimple": "snuck",
        "pParticiple": "snuck",
        "-ing form": "sneaking",
        "frequency": 2280877,
        "French": "se faufiler"
    },
    {
        "base": "swell",
        "pSimple": "swelled",
        "pParticiple": "swollen",
        "-ing form": "swelling",
        "frequency": 2213445,
        "French": "gonfler"
    },
    {
        "base": "spit",
        "pSimple": "spat",
        "pParticiple": "spat",
        "-ing form": "spitting",
        "frequency": 2069895,
        "French": "cracher"
    },
    {
        "base": "dwell",
        "pSimple": "dwelt",
        "pParticiple": "dwelt",
        "-ing form": "dwelling",
        "frequency": 2014411,
        "French": "habiter"
    },
    {
        "base": "bleed",
        "pSimple": "bled",
        "pParticiple": "bled",
        "-ing form": "bleeding",
        "frequency": 1989071,
        "French": "saigner"
    },
    {
        "base": "weave",
        "pSimple": "wove",
        "pParticiple": "woven",
        "-ing form": "weaving",
        "frequency": 1965230,
        "French": "tisser"
    },
    {
        "base": "thrive",
        "pSimple": "throve",
        "pParticiple": "thriven",
        "-ing form": "thriving",
        "frequency": 1822797,
        "French": "prospérer"
    },
    {
        "base": "creep",
        "pSimple": "crept",
        "pParticiple": "crept",
        "-ing form": "creeping",
        "frequency": 1811981,
        "French": "ramper"
    },
    {
        "base": "sew",
        "pSimple": "sewed",
        "pParticiple": "sewn",
        "-ing form": "sewing",
        "frequency": 1756454,
        "French": "coudre"
    },
    {
        "base": "withstand",
        "pSimple": "withstood",
        "pParticiple": "withstood",
        "-ing form": "withstanding",
        "frequency": 1730101,
        "French": "résister à"
    },
    {
        "base": "flee",
        "pSimple": "fled",
        "pParticiple": "fled",
        "-ing form": "fleeing",
        "frequency": 1724638,
        "French": "fuire"
    },
    {
        "base": "sling",
        "pSimple": "slung",
        "pParticiple": "slung",
        "-ing form": "slinging",
        "frequency": 1688770,
        "French": "lancer"
    },
    {
        "base": "tread",
        "pSimple": "trod",
        "pParticiple": "trodden",
        "-ing form": "treading",
        "frequency": 1672572,
        "French": "marcher / fouler"
    },
    {
        "base": "preset",
        "pSimple": "preset",
        "pParticiple": "preset",
        "-ing form": "presetting",
        "frequency": 1656205,
        "French": "prérégler"
    },
    {
        "base": "stride",
        "pSimple": "strode",
        "pParticiple": "stridden",
        "-ing form": "striding",
        "frequency": 1546387,
        "French": "marcher à grand pas"
    },
    {
        "base": "slit",
        "pSimple": "slit",
        "pParticiple": "slit",
        "-ing form": "slitting",
        "frequency": 1424036,
        "French": "fendre"
    },
    {
        "base": "spoil",
        "pSimple": "spoilt",
        "pParticiple": "spoilt",
        "-ing form": "spoiling",
        "frequency": 1419320,
        "French": "gâcher"
    },
    {
        "base": "sow",
        "pSimple": "sowed",
        "pParticiple": "sown",
        "-ing form": "sowing",
        "frequency": 1282086,
        "French": "semer"
    },
    {
        "base": "withhold",
        "pSimple": "withheld",
        "pParticiple": "withheld",
        "-ing form": "withholding",
        "frequency": 1201289,
        "French": "refuser"
    },
    {
        "base": "forbid",
        "pSimple": "forbade",
        "pParticiple": "forbidden",
        "-ing form": "forbidding",
        "frequency": 1184790,
        "French": "interdire"
    },
    {
        "base": "weep",
        "pSimple": "wept",
        "pParticiple": "wept",
        "-ing form": "weeping",
        "frequency": 1038608,
        "French": "pleurer"
    },
    {
        "base": "inlay",
        "pSimple": "inlaid",
        "pParticiple": "inlaid",
        "-ing form": "inlaying",
        "frequency": 965778,
        "French": "incuster"
    },
    {
        "base": "cling",
        "pSimple": "clung",
        "pParticiple": "clung",
        "-ing form": "clinging",
        "frequency": 946281,
        "French": "s'accrocher"
    },
    {
        "base": "stink",
        "pSimple": "stank",
        "pParticiple": "stunk",
        "-ing form": "stinking",
        "frequency": 872742,
        "French": "puer"
    },
    {
        "base": "slay",
        "pSimple": "slew",
        "pParticiple": "slain",
        "-ing form": "slaying",
        "frequency": 702325,
        "French": "tuer"
    },
    {
        "base": "fling",
        "pSimple": "flung",
        "pParticiple": "flung",
        "-ing form": "flinging",
        "frequency": 682999,
        "French": "lancer"
    },
    {
        "base": "mislead",
        "pSimple": "misled",
        "pParticiple": "tomisled",
        "-ing form": "misleading",
        "frequency": 643671,
        "French": "induire en erreur"
    },
    {
        "base": "foresee",
        "pSimple": "foresaw",
        "pParticiple": "foreseen",
        "-ing form": "foreseeing",
        "frequency": 615358,
        "French": "prévoir"
    },
    {
        "base": "mow",
        "pSimple": "mowed",
        "pParticiple": "mown",
        "-ing form": "mowing",
        "frequency": 517690,
        "French": "tondre"
    },
    {
        "base": "overtake",
        "pSimple": "overtook",
        "pParticiple": "overtaken",
        "-ing form": "overtaking",
        "frequency": 498189,
        "French": "dépasser"
    },
    {
        "base": "sunburn",
        "pSimple": "sunburnt",
        "pParticiple": "sunburnt",
        "-ing form": "sunburning",
        "frequency": 474135,
        "French": "prendre un coup de soleil"
    },
    {
        "base": "sublet",
        "pSimple": "sublet",
        "pParticiple": "sublet",
        "-ing form": "subletting",
        "frequency": 436128,
        "French": "sous-louer"
    },
    {
        "base": "kneel",
        "pSimple": "knelt",
        "pParticiple": "knelt",
        "-ing form": "kneeling",
        "frequency": 417602,
        "French": "s'agenouiller"
    },
    {
        "base": "rive",
        "pSimple": "rived",
        "pParticiple": "riven",
        "-ing form": "riving",
        "frequency": 386682,
        "French": "déchirer"
    },
    {
        "base": "forsake",
        "pSimple": "forsook",
        "pParticiple": "forsaken",
        "-ing form": "forsaking",
        "frequency": 359114,
        "French": "abandonner"
    },
    {
        "base": "misunderstand",
        "pSimple": "misunderstood",
        "pParticiple": "misunderstood",
        "-ing form": "misunderstanding",
        "frequency": 313613,
        "French": "mal comprendre"
    },
    {
        "base": "clothe",
        "pSimple": "clad",
        "pParticiple": "clad",
        "-ing form": "clothing",
        "frequency": 308351,
        "French": "habiller, vêtir"
    },
    {
        "base": "vex",
        "pSimple": "vexed",
        "pParticiple": "vexed",
        "-ing form": "vexing",
        "frequency": 287473,
        "French": "contrarier"
    },
    {
        "base": "frostbite",
        "pSimple": "frostbit",
        "pParticiple": "frostbitten",
        "-ing form": "frostbiting",
        "frequency": 277548,
        "French": "avoir des engelures"
    },
    {
        "base": "alight",
        "pSimple": "alit",
        "pParticiple": "alighted",
        "-ing form": "alighting",
        "frequency": 261720,
        "French": "descendre"
    },
    {
        "base": "slink",
        "pSimple": "slunk",
        "pParticiple": "slunk",
        "-ing form": "slinking",
        "frequency": 196197,
        "French": "se faufiler"
    },
    {
        "base": "wring",
        "pSimple": "wrung",
        "pParticiple": "wrung",
        "-ing form": "wringing",
        "frequency": 188579,
        "French": "tordre"
    },
    {
        "base": "wend",
        "pSimple": "went",
        "pParticiple": "went",
        "-ing form": "wending",
        "frequency": 120037,
        "French": "se rendre"
    },
    {
        "base": "overhear",
        "pSimple": "overheard",
        "pParticiple": "overheard",
        "-ing form": "overhearing",
        "frequency": 97704,
        "French": "surprendre"
    },
    {
        "base": "overdraw",
        "pSimple": "overdrew",
        "pParticiple": "overdrawn",
        "-ing form": "overdrawing",
        "frequency": 23187,
        "French": "mettre à découvert"
    },
    {
        "base": "handwrite",
        "pSimple": "handwrote",
        "pParticiple": "handwritten",
        "-ing form": "handwriting",
        "frequency": 21641,
        "French": "écrire à la main"
    }
]

export default VERBS