const players = [
  {
    name: "Manuel Neuer",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1719763484/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/manuel_neuer.png",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Daniel Peretz",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1692987763/cms/public/images/fcbayern-com/players/spielerportraits/teaser/daniel-peretz.png",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Dayot Upamecano",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656614772/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/dayot_upamecano.png",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Minjae Kim",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1689695039/cms/public/images/fcbayern-com/players/spielerportraits/teaser/minjae-kim.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "De Ligt",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1659953193/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/matthijs-de-ligt.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Eric Dier",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1704991485/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/eric-dier.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Alphonso Davies",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656615722/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/alphonso_davies.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Hiroki Ito",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1718361788/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/hiroki-ito.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Raphaël Guerreiro",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1687514017/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/raphael-guerreiro.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Sacha Boey",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1706387443/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/sacha-boey.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Tarek Buchmann",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1687856498/cms/public/images/fcbayern-com/players/spielerportraits/teaser/Tarek-Buchmann.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Noussair Mazraoui",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1653464477/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/noussair_mazraoui.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Josip Stanišić",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656614128/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/josip_stanisic.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Joshua Kimmich",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656614911/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joshua_kimmich.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Leon Goretzka",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1660123320/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/leon_goretzka.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "João Palhinha",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1720623926/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joao-palhinha.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
     {
    name: "Arijon Ibrahimović",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1719928700/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/arijon-ibrahimovic.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Konrad Laimer",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1686144311/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/konrad-laimer.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Jamal Musiala",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1627304019/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/jamal_musiala.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Aleksandar Pavlović",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1698928615/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/aleksandar-pavlovic.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Gabriel Vidović",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1688127176/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/gabriel_vidovic.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Serge Gnabry",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656615030/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/serge_gnabry.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Harry Kane",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1691827799/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/harry-kane.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Leroy Sané",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1656615390/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/leroy_sane.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Kingsley Coman",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1627303340/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/kingsley_coman.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Bryan Zaragoza",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1706780847/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/bryan-zaragoza.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Thomas Müller",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1629460365/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/thomas_mueller.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Mathys Tel",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1658820607/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/mathys-tel.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Michael Olise",
    img: "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_840%2Cc_fill/q_auto/v1720376199/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/michael-olise.png",
    opts: {
      position: [ "forward" ]
      }
  }
]; // 2024-07-19