const players = [
    {
    name: "Guglielmo Vicario",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/b/9/b/b/7/6/b9bb76f16c6a0367c0a80a7db836e845674689c1.png",
  },
  {
    name: "Sergio Reguilón",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/8/f/5/c/7/f/8f5c7f898af03e45f4a8eeaca6949389fab061f2.png",
  },
    {
    name: "Radu Drăgușin",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/1/a/2/7/e/c/1a27ecd03c10a432e9781ef2e736f0bfae46a1b3.png",
  },
    {
    name: "Radu Drăgușin",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/d/a/e/5/6/8/dae568e8555cc2ef7fecfc384c3a49efe8494ccd.png",
  },
    {
    name: "Heung-Min Son",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/0/3/d/3/f/2/03d3f2d7d361c9b586119f70b2b16ee817381b2b.png",
  },
    {
    name: "Yves Bissouma",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/8/8/3/4/4/7/883447afcc8c971c84b4e5c4b4dfaf4cac4e4c98.png",
  },
    {
    name: "Richarlison",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/3/4/4/6/7/d/34467df413a4f39ed8befa5881decf88ddbe4769.png",
  },
    {
    name: "James Maddison",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/2/b/5/b/0/c/2b5b0c2692a5baa8c25c61a17efcc138374c4e2b.png",
  },
    {
    name: "Destiny Udogie",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/9/8/0/f/9/3/980f93b1464360c57d8050d4b2a9c0bc9412e685.png",
  },
    {
    name: "Archie Gray",
    img: "https://cdne-totv8-prod-southeastasia.azureedge.net/media/q1kdhr1h/firstteam_profiles_archiegray_202425_1.png?anchor=center&mode=crop&quality=90&width=500",
  },
    {
    name: "Lucas Bergvall",
    img: "https://cdne-totv8-prod-southeastasia.azureedge.net/media/arshgblc/firstteam_profiles_lucasbergvall_202425_1.png?anchor=center&mode=crop&quality=90&width=500",
  },
    {
    name: "Timo Werner",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/9/f/a/2/d/1/9fa2d1da40e32d198d157c25dcbebed85f1b454b.png",
  },
    {
    name: "Cristian Romero",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/d/8/3/b/d/d/d83bdd6b66a2837a41fa02ef559a6b1c4f0cabf0.png",
  },
    {
    name: "Dominic Solanke",
    img: "https://cdne-totv8-prod-southeastasia.azureedge.net/media/1hqdasof/firstteam_profiles_dominicsolanke_202425_1.png?anchor=center&mode=crop&quality=90&width=500",
  },
    {
    name: "Fraser Forster",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/3/1/b/2/8/f/31b28f6cdaaf18b5dc54c1e1c31a38665351fbf1.png",
  },
    {
    name: "Dejan Kulusevski",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/f/4/0/5/9/c/f4059cb2ab8221208d1d5cb8048d61f4b80f12b0.png",
  },
    {
    name: "Brennan Johnson",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/0/1/d/6/f/4/01d6f4ffb35cfd17deb6f6d70bb6a12e5c17bb50.png",
  },
    {
    name: "Pedro Porro",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/9/8/a/1/c/6/98a1c6839b3f0d19c9ae5ef5ffbf6611078dbc47.png",
  },
    {
    name: "Djed Spence",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/1/b/6/c/b/e/1b6cbe5f05c9d231cdbb74ceb4b3e3e1a636bd36.png",
  },
    {
    name: "Wilson Odobert",
    img: "https://cdne-totv8-prod-southeastasia.azureedge.net/media/urkbvqn1/firstteam_profiles_wilsonodobert_202425_1.png?anchor=center&mode=crop&quality=90&width=500",
  },
    {
    name: "Pape Matar Sarr",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/6/4/e/7/3/9/64e73926221c98aea4e2141d8f9d3254be4de884.png",
  },
    {
    name: "Rodrigo Bentancur",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/0/e/b/d/8/0/0ebd8067e3ca259de3ade897aaa1726d14222975.png",
  },
    {
    name: "Ben Davies",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/1/6/8/6/2/9/168629abacde6fc3bfa666fb0a27ad676c04738d.png",
  },
  //    {
  //   name: "Ashley Phillips",
  //   img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/4/e/f/7/f/8/4ef7f85c9ff887b8c0467c99276bfc80f6067a0d.png",
  // },
  //   {
  //   name: "Alejo Veliz",
  //   img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/4/8/c/c/e/0/48cce0c2758c7cf2006c7e06679c566bd132957d.png",
  // },
    {
    name: "Micky van de Ven",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/e/5/a/6/6/e/e5a66e62415d774fb76bdb17d15632bdc9953343.png",
  },
    {
    name: "Brandon Austin",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/e/6/a/7/0/e/e6a70ea97cad5d8fe9cee89041f345c8b1051f92.png",
  },
    {
    name: "Alfie Whiteman",
    img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/1/5/8/e/2/6/158e265b7b6823cc9168158b889834377955a68f.png",
  }
  //   {
  //   name: "Dane Scarlett",
  //   img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/3/9/4/f/0/8/394f087530057cc0c457ab25d44910e24c1dae7d.png",
  // },
  //   {
  //   name: "Alfie Devine",
  //   img: "https://sttotv8prodmedia.blob.core.windows.net/mediacache/8/b/5/d/b/7/8b5db724a8ad3c7497e8d132fefe0cfc04cef115.png",
  // }
]; // 2024-09-10