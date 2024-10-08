const players = [
    {
    name: "David Raya",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Raya.png?h=5b7d5ca2&auto=webp&itok=ukYkqDAn",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Norberto Neto",
    img: "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/neto-headshot.png?auto=webp&itok=woWkEJAu",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "William Saliba",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Saliba_10.jpg?h=74c28fda&auto=webp&itok=WhuBfNWC",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Kieran Tierney",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MicrosoftTeams-image%20%2830%29_0.png?auto=webp&itok=--9BLn7K",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Ben White",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/White_5.jpg?h=74c28fda&auto=webp&itok=ZFHKplG-",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Gabriel",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Gabriel_5.jpg?h=74c28fda&auto=webp&itok=DRwYp5MV",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Jurrien Timber",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Timber_0.png?h=74c28fda&auto=webp&itok=4XbbyMal",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Jakub Kiwior",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Kiwior.jpg?h=74c28fda&auto=webp&itok=Y_n_jvHO",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Oleksandr Zinchenko",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Zinchenko_1.jpg?h=74c28fda&auto=webp&itok=LSgorHY9",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Takehiro Tomiyasu",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Tomiyasu_0.png?h=74c28fda&auto=webp&itok=o5idlc_6",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Riccardo Calafiori",
    img: "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/Calafiori_web.png?auto=webp&itok=Iq2KFnKW",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Thomas Partey",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Partey_8.jpg?h=74c28fda&auto=webp&itok=cHTYxdtS",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Martin Odegaard",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Odegaard-New.jpg?h=74c28fda&auto=webp&itok=jNDebJPQ",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Jorginho",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Jorgihno.jpg?h=74c28fda&auto=webp&itok=RWpASIMN",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Mikel Merino",
    img: "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/merino-headshot.png?auto=webp&itok=tFTBEpnf",
    opts: {
      position: [ "midfielder" ]
      }
  },
     {
    name: "Kai Havertz",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Havertz-New.jpg?h=74c28fda&auto=webp&itok=OBX0EvhX",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Declan Rice",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Rice_0.jpg?h=74c28fda&auto=webp&itok=AzSBGqu1",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Bukayo Saka",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Saka_46.jpg?h=74c28fda&auto=webp&itok=LovYzw79",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Gabriel Jesus",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Jesus_0.jpg?h=74c28fda&auto=webp&itok=ekNVssAb",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Gabriel Martinelli",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Martinelli_0.png?h=74c28fda&auto=webp&itok=Bn9LNzX2",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Leandro Trossard",
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Trossard_2.jpg?h=74c28fda&auto=webp&itok=TOM1k7dg",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Raheem Sterling",
    img: "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/sterling-headshot.png?auto=webp&itok=hOyF5-fP",
    opts: {
      position: [ "forward" ]
      }
  }
]; // 2024-09-10