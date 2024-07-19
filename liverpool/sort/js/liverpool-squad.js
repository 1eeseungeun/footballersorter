const players = [
  {
    name: "Alisson Becker",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/alisson-becker-profile-body-shot-202425.webp?itok=doCteiOW",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Marcelo Pitaluga",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-09/marcelo-pitaluga-2023-body-image.webp?itok=qM1d66-f",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Caoimhin Kelleher",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/caoimhin-kelleher-profile-body-shot-202425.webp?itok=5uS-ECdY",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Joe Gomez",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/joe-gomez-profile-body-shot-202425.webp?itok=15V12fQD",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Virgil van Dijk",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/virgil-van-dijk-profile-body-shot-202425.webp?itok=iZiRktAS",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Ibrahima Konate",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/ibrahima-konate-body-shot-202425.webp?itok=DQEtwPY7",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Kostas Tsimikas",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/kostas-tsimikas-body-shot-202425.webp?itok=jtXkPAZi",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Andy Robertson",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/andy-robertson-body-shot-202425.webp?itok=C5hBQCiq",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Rhys Williams",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-07/pp-23-24-mens-home-body-williams.webp?itok=g8gHz_Xo",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Nathaniel Phillips",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-01/nathaniel-phillips-04012023-body-image.webp?itok=loe7cYyy",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Trent Alexander-Arnold",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/trent-alexander-arnold-profile-body-shot-202425.webp?itok=OT4PALBE",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Sepp van den Berg",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-02/van-den-berg-body.webp?itok=rhxALMk_",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Jarell Quansah",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/jarell-quansah-profile-body-shot-202425.webp?itok=BIvpV-HF",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Conor Bradley",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/conor-bradley-profile-body-shot-202425.webp?itok=IaH-2LMr",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Wataru Endo",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/wataru-endo-profile-body-shot-202425.webp?itok=7D10HPGp",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Dominik Szoboszlai",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/dominik-szoboszlai-profile-body-shot-202425.webp?itok=UWQj6pUB",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Alexis Mac Allister",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/alexis-mac-allister-profile-body-shot-202425.webp?itok=2APwFrTy",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Curtis Jones",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/curtis-jones-profile-body-shot-202425.webp?itok=pJxmk9b_",
    opts: {
      position: [ "midfielder" ]
      }
  },
     {
    name: "Harvey Elliott",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/harvey-elliott-profile-body-shot-202425.webp?itok=XRjrfIuv",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Ryan Gravenberch",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/ryan-gravenberch-profile-body-shot-202425.webp?itok=ewMCRYRD",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Stefan Bajcetic",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/stefan-bajcetic-profile-body-shot-202425.webp?itok=5RPsyccE",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Luis Diaz",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/luis-diaz-profile-body-shot-202425.webp?itok=nw0mZfU8",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Darwin Nunez",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/darwin-nunez-profile-body-shot-202425.webp?itok=HYMXK6QQ",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Mohamed Salah",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/mohamed-salah-profile-body-shot-202425.webp?itok=mU8NLTDg",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Cody Gakpo",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/cody-gakpo-profile-body-shot-202425.webp?itok=rmv59Yvf",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Diogo Jota",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-06/diogo-jota-profile-body-shot-202425.webp?itok=8D2sg1HJ",
    opts: {
      position: [ "forward" ]
      }
  },
     {
    name: "Fabio Carvalho",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-02/carvalho-body.webp?itok=U-0hknPY",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Ben Doak",
    img: "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2023-09/ben-doak-body-image-v2-24092023.webp?itok=jaFVipn6",
    opts: {
      position: [ "forward" ]
      }
  }
];