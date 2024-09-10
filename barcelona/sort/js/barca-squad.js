const players = [
  {
    name: "Marc-André ter Stegen",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/d780158f-0256-43ab-b2c7-b8445feccd69/mini_01-MARC-ANDRE_TER_STEGEN.png?width=670&height=790",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Iñaki Peña",
    img: "https://www.fcbarcelona.com/photo-resources/2023/09/29/329da5c8-7969-46c7-b9ad-ef64d6e49072/mini_26-INAKI_PENA.png?width=670&height=790",
    opts: {
      position: [ "goalkeeper" ]
      }
  },
    {
    name: "Pau Cubarsí",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/a307b5b8-5d58-42ee-9d38-ef760289978a/Jugador-Pau_Cubarsi_1.png?width=300&height=354",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Alejandro Balde",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/03/5716ae2e-ec0e-42b7-858b-cb932945efb1/mini_202209_Fitxes_App_1920x1080_01_ALEJANDRO-BALDE.png?width=670&height=790",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Ronald Araujo",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/03/2d83fca2-672d-4f0a-9eae-a7f431955cc7/mini_04-RONALD_ARAUJO.png?width=670&height=790",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Iñigo Martínez",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/8b0401dd-cefd-45d5-9c67-4961339c5c46/mini-i-igo-martinez-silueta-png.png?width=670&height=790",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Andreas Christensen",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/94c041ca-f03a-468b-9331-0e9b72478eb2/mini_15-ANDREAS_CHRISTENSEN.png?width=670&height=790",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Jules Kounde",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/03/ee46d3b6-addc-4329-a8e7-42f19c5fe308/mini_23-JULES_KOUNDE.png?width=670&height=790",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Eric García",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/296c53eb-6077-475c-b474-51350e9b92fa/ERIC-GARCIA.png?width=300&height=354",
    opts: {
      position: [ "defender" ]
      }
  },
    {
    name: "Gavi",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/d78dbb69-390a-4540-9d0b-be36b46534f3/mini_30-GAVI.png?width=670&height=790",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Pedri",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/157fb14b-3f65-403c-b107-597bbaa994c0/mini_08-PEDRI.png?width=670&height=790",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Pablo Torre",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/3213be83-b6ca-443b-9e77-9ca642fb220b/PABLO-TORRE.png?width=300&height=354",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Fermín López",
    img: "https://www.fcbarcelona.com/photo-resources/2024/02/01/66e3bd94-b5ad-458b-84b0-556e50f57630/mini_16-FERMIN.png?width=670&height=790",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Marc Casadó",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/631f4a70-1c35-4bd6-a731-04bee20c3ba8/06-Casado-tr.png?width=300&height=354",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Dani Olmo",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/a8e345ac-f8db-4123-b91e-71895bde7669/Fitxa-Olmo1.png?width=300&height=354",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Frenkie de Jong",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/c1286695-61ba-4d55-9539-5d2458c955ca/mini_21-FRENKIE_DE_JONG.png?width=670&height=790",
    opts: {
      position: [ "midfielder" ]
      }
  },
    {
    name: "Ferran Torres",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/77ea4a0e-c5ba-474e-9ced-3739157b63d8/mini_11-FERRAN_TORRES.png?width=670&height=790",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Robert Lewandowski",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/04/22dd0d30-d58f-448c-a51e-47d44c894d16/mini_09-ROBERT_LEWANDOWSKI.png?width=300&height=354",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Ansu Fati",
    img: "https://www.fcbarcelona.com/photo-resources/2024/08/21/584cc187-530a-4a40-b420-d1191988c0f3/Fitxax-Ansu1.png?width=300&height=354",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Raphinha",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/03/1dbf5797-bef9-46c8-9dbf-bb6bdba89b2a/mini_22-RAPHINHA.png?width=300&height=354",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Pau Víctor",
    img: "https://www.fcbarcelona.com/photo-resources/2023/10/10/c96a418a-abec-4e99-9481-cea468101497/19-Victor.png?width=300&height=354",
    opts: {
      position: [ "forward" ]
      }
  },
    {
    name: "Lamine Yamal",
    img: "https://www.fcbarcelona.com/photo-resources/2024/07/11/e8f2f800-2d6c-4055-86fd-08e456ed8da8/Jugador-Lamine_Yamal_2.png?width=300&height=354",
    opts: {
      position: [ "forward" ]
      }
  }
]; // 2024-09-10