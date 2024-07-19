const players = [
  {
    name: "Courtois",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--4d060cc8-4595-465f-9c45-c065f0f2565b/_50x650_COURTOIS_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Lunin",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a0aea463-c70f-4a0a-9df6-8294752fd2f5/_50x650_LUNIN_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Carvajal",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2635f417-1ec2-477c-88a5-8f9721794b08/_50x650_CARVAJAL_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "E. Militão",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--39e4ad3c-8601-4964-8c99-0aac35797250/_50x650_MILITAO_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Alaba",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/david-alaba/assets/550x650_ALABA_15.png",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Lucas V.",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--f8645870-8343-4cf3-bfc0-dc867a910e1a/_50x650_LUCAS_V_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Vallejo",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5fab0f9e-e2cd-4dce-9392-705ee40e4d69/_50x650_VALLEJO_1.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Fran García",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0fe3b17d-9e08-48da-887a-6d7cce1d783a/_50x650_FRAN_GARCIA_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Rüdiger",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--961f0234-37af-438c-b524-008012aab980/_50x650_RUDIGER_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "F. Mendy",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--8b98cd96-8326-47da-9893-60a614bb458f/_50x650_MENDY_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Bellingham",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/jude-bellingham/assets/550x650_BELLINGHAM_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Camavinga",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/eduardo-camavinga/assets/550x650_CAMAVINGA_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Valverde",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/federico-santiago-valverde-dipetta/assets/550x650_VALVERDE_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Modrić",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/luka-modric/assets/550x650_MODRIC_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Tchouaméni",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--cd8eecfe-6570-4f9d-b585-a428af727c04/_50x650_TCHOUAMENI_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Arda Güler",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/arda-guler/assets/550x650_ARDA_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
     {
    name: "D. Ceballos",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/daniel-ceballos-fernandez/assets/550x650_CEBALLOS_15.png",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Vini Jr.",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--dbf4dae7-7277-474e-a55e-b43cb1ac2299/_50x650_VINI_15.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Mbappé",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/mbappe/550x650_MBAPPE%20(1).png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Rodrygo",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/rodrygo-goes/assets/550x650_RODRYGO_15.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Brahim",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/brahim-diaz/assets/550x650_BRAHIIM_15.png",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Endrick",
    img: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fe19499e-5b72-4ac3-a456-437068a47165/_50x650_ENDRICK_1.app.png?preferwebp=true&width=420",
    opts: {
      position: [ "forward" ]
      }
  }
]; // 2024-07-16