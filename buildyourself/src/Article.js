import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Article = () => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Dlaczego regularne jedzenie jest ważne?</h2>
        <p className="date">Styczeń 5, 2025</p>
        <p className="content">
          Regularne jedzenie to ważny, ale często trudny do wprowadzenia w życie nawyk.
          Często skupiamy się na tym, że koniecznie trzeba jeść co trzy godziny.
          Patrzymy na zegarek, dostosowujemy całe życie do posiłków, a nie zastanawiamy się po co to robimy.
          Czy to pomaga w czymkolwiek? Jak to wpłynie na redukcję masy ciała?
          Dlaczego najczęściej mówi się o 3 godzinach przerwy między posiłkami?
          <Link to="/1" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
      <div>
        <h2 className="title">Jak nie podjadać siedząc w domu?</h2>
        <p className="date">Styczeń 12, 2025</p>
        <p className="content">
        Do tej pory w dni robocze najczęściej mieliśmy jakiś rytm dnia, w który należało wkomponować posiłki. 
        To w weekend trudniej było zachować regularność jedzenia. 
        #zostańwdomu to dla wielu niekończący się weekend w temacie jedzenia. 
        Dodatkowo zapasy jedzenia, mocno ograniczona ilość zajęć dodatkowych doprowadza do nadmiernego jedzenia. 
        Czy kwarantanna musi zakończyć się dodatkowymi kilogramami? Absolutnie nie! Im szybciej wdrożysz zmiany, 
        tym lepiej dla Ciebie.
        <Link to="/2" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
      <div>
      <h2 className="title">Jak ograniczyć cukier w diecie? 3 produkty, które szybko zamienisz na zdrowszy odpowiednik</h2>
        <p className="date">Styczeń 19, 2025</p>
        <p className="content">
        Nadmiar cukru w diecie to krótka droga do różnych chorób: otyłości, cukrzycy, insulinooporności. 
        Niestety nie mamy świadomości ile cukru jest w produktach, które na co dzień kupujemy oraz jaka jest dzienna norma dla dorosłego człowieka.
        Niestety nie wystarczy nie słodzić kawy i herbaty, żeby nie przekraczać dozwolonej ilości cukru w diecie.
        Oto 3 produkty, które warto zastąpić zdrowszym odpowiednikiem i ograniczyć ilość zjadanego codziennie cukru.
        <Link to="/3" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
      <div>
        <h2 className="title">Jaka dieta jest dla mnie najlepsza?</h2>
        <p className="date">Styczeń 26, 2025</p>
        <p className="content">
        Nie sądziłam, że to pytanie usłyszę tak często. 
        Wydawało mi się, że odpowiedź jest prosta: dopasowana do Twoich potrzeb i możliwości.
        Okazuje się, że najczęściej niepotrzebnie kombinujemy i próbujemy się dopasować do jakiejś modnej właśnie diety.
        <Link to="/4" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
      <div>
        <h2 className="title">Dlaczego “dieta” 1000 kcal to zły pomysł</h2>
        <p className="date">Luty 2, 2025</p>
        <p className="content">
        Schemat najczęściej się powtarza: bardzo restrykcyjna dieta cud np. 1000 kcal, kilka miesięcy wyrzeczeń i głodówki, 
        utrata kilogramów, radość i… efekt jojo, kilogramy wracają z nawiązką.
        I tak w kółko. Waga skacze, raz w górę, raz w dół, a Ty powtarzasz, że te diety to głupie są, bo chodzisz głodna i zła, a schudnąć na stałe nie potrafisz.
        Znasz to? Nie wiesz dlaczego tak się dzieje? W takim razie czytaj dalej.
        <Link to="/5" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
      <div>
      <h2 className="title">Białka, tłuszcze, węglowodany, co to jest i czy muszę się na tym znać?</h2>
        <p className="date">Luty 9, 2025</p>
        <p className="content">
        BTW to potoczny skrót na białka, tłuszcze i węglowodany, czyli makroskładniki, których dostarczamy z pożywieniem.
        Każdy z nas to robi, bo każdy codziennie je.
        Jeśli chcesz bardziej świadomie podejść do tematu zdrowego odżywiania dobrze jest wiedzieć coś więcej. 
        Spokojnie, postaram się, żeby było prosto i konkretnie.
        <Link to="/6" className="read-more"> Czytaj więcej</Link>
        </p>
      </div>
<div>

</div>
    </div>
  );
}

export default Article;
