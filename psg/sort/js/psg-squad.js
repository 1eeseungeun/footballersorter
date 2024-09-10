const players = [
    {
    name: "Gianluigi Donnarumma",
    img: "https://www.psg.fr/media/207154/joueurs-24-25_0001_donarumma.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Matvey Safonov",
    img: "https://www.psg.fr/media/270647/joueurs-24-25_safonov.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
  {
    name: "Arnau Tenas",
    img: "https://www.psg.fr/media/253243/joueurs-24-25_0000_tenas.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Achraf Hakimi",
    img: "https://www.psg.fr/media/207376/joueurs-24-25_0010_hakimi.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Presnel Kimpembe",
    img: "https://www.psg.fr/media/27044/joueurs-24-25_0011_kimpembe.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Marquinhos",
    img: "https://www.psg.fr/media/27046/joueurs-24-25_0023_marquinhos.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Lucas Hernandez",
    img: "https://www.psg.fr/media/249249/joueurs-24-25_hernandez.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Nuno Mendes",
    img: "https://www.psg.fr/media/210082/joueurs-24-25_0014_mendes.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Lucas Beraldo",
    img: "https://www.psg.fr/media/260482/joueurs-24-25_0006_beraldo.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Milan Škriniar",
    img: "https://www.psg.fr/media/249240/joueurs-24-25_0017_skriniar.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Yoram Zague",
    img: "https://www.psg.fr/media/269728/joueurs-24-25_0022_zague.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Willian Pacho",
    img: "https://www.psg.fr/media/272135/joueurs-24-25_pacho.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Fabian Ruiz",
    img: "https://www.psg.fr/media/230562/joueurs-24-25_0016_ruiz.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Vitinha",
    img: "https://www.psg.fr/media/227375/joueurs-24-25_0021_vitinha.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Lee Kang-in",
    img: "https://www.psg.fr/media/249236/joueurs-24-25_0012_lee.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Senny Mayulu",
    img: "https://www.psg.fr/media/261179/joueurs-24-25_0009_mayulu.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Warren Zaire-Emery",
    img: "https://www.psg.fr/media/229097/joueurs-24-25_0019_zaire.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "João Neves",
    img: "https://www.psg.fr/media/271687/joueurs-2425-neves.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Gonçalo Ramos",
    img: "https://www.psg.fr/media/251025/joueurs-24-25_0013_ramos.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Ousmane Dembélé",
    img: "https://www.psg.fr/media/251515/joueurs-24-25_0008_dembele.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Marco Asensio",
    img: "https://www.psg.fr/media/249241/joueurs-24-25_0004_asensio.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Désiré Doué",
    img: "https://www.psg.fr/media/272747/card-24-25_doue.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Randal Kolo Muani",
    img: "https://www.psg.fr/media/252969/joueurs-24-25_0003_kolo-muani.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Bradley Barcola",
    img: "https://www.psg.fr/media/252850/joueurs-24-25_0005_barcola.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Ibrahim Mbaye",
    img: "https://www.psg.fr/media/273969/joueurs-24-25_mbaye.png?anchor=center&mode=crop&width=400&height=600&quality=75",
    opts: {
      position: [ "forward" ]
      }
  }
]; // 2024-09-10