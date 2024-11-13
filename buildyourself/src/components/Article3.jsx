import React from 'react';

const Article3 = () => {
    return (
        <>
        <button className="buttonBack" onClick={() => window.location.href = '/article'}>Wróć</button>
        <div className="container">
            <div>
                <h2 className="title">Jak ograniczyć cukier w diecie? 3 produkty, które szybko zamienisz na zdrowszy odpowiednik</h2>
                <p className="content">
                    Nadmiar cukru w diecie to krótka droga do różnych chorób: otyłości, cukrzycy, insulinooporności. 
                    Niestety nie mamy świadomości ile cukru jest w produktach, które na co dzień kupujemy oraz jaka 
                    jest dzienna norma dla dorosłego człowieka. Niestety nie wystarczy nie słodzić kawy i herbaty, 
                    żeby nie przekraczać dozwolonej ilości cukru w diecie. Oto 3 produkty, które warto zastąpić 
                    zdrowszym odpowiednikiem i ograniczyć ilość zjadanego codziennie cukru.
                </p>
                <p className="content">
                    Z danych GUS wynika, że z roku na rok zjadamy coraz więcej cukru. W 2005 roku było to 40,1 kg cukru na osobę na rok. 
                    W 2016 – 42,3 kg, w 2017 – 44,5, natomiast w 2018 już ponad 50 kg ( 51,1 kg). To ogromne ilości, które bardzo realnie 
                    przekładają się na naszą wagę, a co za tym idzie, również na zdrowie.
                    Jaka jest dzienna dopuszczalna norma cukru w diecie? 10% dziennego zapotrzebowania kalorycznego, 
                    czyli np. przy założeniu, że zjadamy 2000 kcal dziennie to 200 kcal może pochodzić z cukru, 
                    to 10 łyżeczek cukru. Oczywiście dla dzieci i młodzieży ta wartość jest odpowiednio niższa.
                </p>
                <h2 className="title">Jak ograniczyć cukier w diecie? Kilka prostych sposobów, które można szybko wprowadzić w życie.</h2>
                <h3 className="title">1. Napoje gazowane</h3>
                <p className="content">
                    Według danych WHO 20-40% nastolatków w Polsce codziennie wypija napój gazowany. 
                    W 0,5 l butelce napoju jest średnio 40-45 g cukru, czyli 8-9 łyżeczek cukru.
                    Napoje gazowane najlepiej odstawić całkowicie, można to zrobić stopniowo, zmniejszając 
                    codziennie wypijaną ilość. W to miejsce powinna pojawiać się woda. Może być z dodatkiem owoców lub mięty.
                </p>
                <h3 className="title">2. Owocowe jogurty, desery mleczne</h3>
                <p className="content">
                    Jeden kubeczek jogurtu to przeciętnie 4-5 łyżeczek cukru. Alternatywa jest dość prosta, wystarczy do 
                    jogurtu naturalnego dorzucić dowolny owoc świeży lub mrożony.
                    Dużą pułapką są tutaj produkty dedykowane dzieciom, które wcale nie mają mniej cukru… 
                    Rodzice w dobrej wierze podają takie jogurciki i serki maluchom myśląc, że to dobre źródło wapnia.
                </p>
                <h3 className="title">3. Płatki śniadaniowe, gotowe mieszanki musli</h3>
                <p className="content">
                    Dla niektórych to podstawa śniadania, bo szybko, bo z dodatkiem witamin (przecież taki napis jest na opakowaniu). 
                    Niestety wszystkie „kolorowe”, smakowe płatki śniadaniowe mają sporo dodanego cukru. Na 100 g płatków to średnio 5-7 łyżeczek cukru.
                    Sporym zdziwieniem może być również ilość cukru w gotowych mieszankach musli. Można oczywiście znaleźć na rynku coś fajnego, ale w większości „gotowców” jest sporo dodanego cukru.
                    Etapem przejściowym w rezygnowaniu z takiego produktu mogą być zwykłe płatki kukurydziane, chociaż niestety to taki „zapychacz”, dość szybko robimy się po nim głodni. 
                    A docelowo najlepiej wybrać płatki owsiane lub żytnie, samemu dodać owoce i orzechy.
                    Oczywiście cukier jest również w wielu innych produktach, w słodyczach czy słodkim pieczywie, ale tam spodziewamy się tego cukru, natomiast produkty, 
                    które wymieniłam wyżej to często nasza codzienność – śniadanie lub jedna z przekąsek. Możemy nawet nie zdawać sobie sprawy z tego, ile cukru jest w porannej miseczce płatków. 
                    Warto wprowadzać zmiany stopniowo, ograniczenie cukru, do którego organizm już się przyzwyczaił będzie łatwiejsze.
                </p>
            </div>
        </div>
        </>
    );
}

export default Article3;