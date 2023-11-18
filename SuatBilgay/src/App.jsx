import "./App.css";
import React from "react";
import { useState } from "react";
function Arama({aramaMetni,onSearch}) {
    
  return (
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text"  onChange={onSearch} value={aramaMetni} />
    <p>
      
    </p>
    </div>
  )
  }
function Yazi ({id,url,baslik,yazar,yorum_sayisi,puan}) {
  return (
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>,
              </span>
              <span>
                <b>Yazar:</b> {yazar},{" "}
              </span>
              <span>
                <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
              </span>
              <span>
                <b>Puan:</b> {puan}
              </span>
            </li>

  )
}
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi) {
        return (
          <Yazi key={yazi.id}{...yazi}></Yazi>
        )
      })}
      </ul>

  )

}

function App() {
  const [aramaMetni,setAramaMetni] = React.useState(localStorage.getItem("aranan")||"React");

  const yaziListesi = [
    {
      baslik: "React Lessons",
      url: "www.sdu.edu.pk",
      yazar: "Hüseyin Buğra AKSAR",
      yorum_sayisi: 31,
      puan: 68,
      id: 0,
    },
    {
      baslik: "Bootsrap",
      url: "wwww.google.com.tr",
      yazar: "Bilgisayar Kavramları",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "SAP Introduction",
      url: "wwww.google.com.in",
      yazar: "Cem Kağan ÇAKIR",
      yorum_sayisi: 18,
      puan: 15,
      id: 2,
    },

    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.us",
      yazar: "Asim Sinan",
      yorum_sayisi: 14,
      puan: 21,
      id: 3,
    },

    {
      baslik: "Veri Yapıları",
      url: "wwww.google.com.pl",
      yazar: "Suat Bilgay",
      yorum_sayisi: 24,
      puan: 19,
      id: 5,
    },
  ];

  const arananYazilar = yaziListesi.filter(function(yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
           yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem("aranaa", aramaMetni);
  }, [aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
export default App;