import React from 'react';

const Article2 = () => {
    return (
        <>
        <button className="buttonBack" onClick={() => window.location.href = '/article'}>Wróć</button>
        <div className="container">
            <div>
                <h2 className="title">Jak nie podjadać siedząc w domu?</h2>
                <p className="content">
                    Do tej pory w dni robocze najczęściej mieliśmy jakiś rytm dnia, w który należało wkomponować posiłki. 
                    To w weekend trudniej było zachować regularność jedzenia. #zostańwdomu to dla wielu niekończący się 
                    weekend w temacie jedzenia. Dodatkowo zapasy jedzenia, mocno ograniczona ilość zajęć dodatkowych 
                    doprowadza do nadmiernego jedzenia. Czy kwarantanna musi zakończyć się dodatkowymi kilogramami? 
                    Absolutnie nie! Im szybciej wdrożysz zmiany, tym lepiej dla Ciebie.
                </p>
                <h3 className="title">1. Schemat posiłków</h3>
                <ul>
                    <li className="liStyle">
                        Postaraj się wprowadzić plan posiłków w ciągu dnia. Najlepiej niech będzie ich 4-5. Pamiętaj, żeby przerwy między nimi nie były dłuższe niż 4-4,5 godziny. Idealnie będzie jeśli zaplanujesz, co konkretnie zjesz na każdy z posiłków.
                    </li>
                    <li className="liStyle">
                        Plan pozwoli Ci uniknąć napadów głodu, podczas których nie działamy racjonalnie, szukamy wtedy słodkich i tłustych rzeczy (instynkt przetrwania).
                    </li>
                    <li className="liStyle">
                        Pamiętaj również, że gdy już jesz, skup się tylko na tym. Nie pracuj, nie przeglądaj mejli. Najlepiej usiądź z dala od komputera. W pracy też masz przecież przerwę na posiłek.
                    </li>
                </ul>
                <h3 className="title">2. Słodycze i przekąski</h3>
                <ul>
                    <li className="liStyle">
                        Podczas kolejnych zakupów nie dokupuj kolejnych zapasów słodyczy i przekąsek. Duża paczka wcale nie wystarczy na dłużej.
                    </li>
                    <li className="liStyle">
                        Nie wystawiaj słodyczy i przekąsek na widoku. Nasz mózg wychwytuje to, co ma w polu widzenia, dlatego jeśli masz je w domu schowaj do szafki. Wyeksponuj natomiast owoce.
                    </li>
                    <li className="liStyle">
                        Owoce zamiast słodyczy. W wielu przypadkach „ochotę na słodkie” zaspokoi owoc.
                    </li>
                    <li className="liStyle">
                        Nie musisz całkowicie eliminować słodyczy, pamiętaj tylko, żeby nie zastępowały one jednego z posiłków. 
                        Jeśli masz ochotę na coś słodkiego lepiej zrobić deser samemu, takie działanie ma dodatkową wartość, 
                        bo wkładasz w nie wysiłek. Odpakowanie gotowej paczki ciastek jest bardziej bezrefleksyjne, 
                        może dostarczyć mniej przyjemnych doznań, a przez to zjesz więcej.
                    </li>
                </ul>
                <h3 className="title">3. Aktywność (nawet w domu)</h3>
                <ul>
                    <li className="liStyle">
                        Pomaga zapanować nad głodem.
                    </li>
                    <li className="liStyle">
                        Pomaga odstresować się, a dla wielu osób nagromadzenie silnych emocji jest jednym z powodów nadmiernego jedzenia.
                    </li>
                </ul>
                <h3 className="title">4. Gęstość energetyczna</h3>
                <ul>
                    <li className="liStyle">
                        Produkty mają różną gęstość energetyczną np. warzywa mają niską, bo w dużej ilości (cała spora papryka) 
                        znajduje się mało kalorii, jest natomiast dużo błonnika, który pęcznieje w żołądku i daje uczucie sytości. 
                        Wysoką gęstość mają np. orzechy, które w małej ilości produktu dostarczają dużo kalorii.
                    </li>
                    <li className="liStyle">
                        Zadbaj o różnorodność, bo wtedy organizm ma dostęp do wszystkich składników odżywczych.
                    </li>
                    <li className="liStyle">
                        Szukaj okazji do jedzenia warzyw, bo one pomogą utrzymać uczucie sytości.
                    </li>
                </ul>
                <h3 className="title">5. A co ze świętami?</h3>
                <ul>
                    <li className="liStyle">
                        Staraj się zachować odstępy między posiłkami. Unikaj sytuacji, że siedzisz od rana do wieczora 
                        przy zastawionym stole i posiłki zlewają się w jedną całość. Zjedz posiłek, wynieś talerze i jedzenie do kuchni, zajmij się czymś innym.
                    </li>
                    <li className="liStyle">
                        Jeśli masz ochotę zjeść coś słodkiego niech to będą domowe wypieki, zrezygnuj z kupnych cukierków, które są dostępne w każdym innym momencie w roku.
                    </li>
                    <li className="liStyle">
                        Staraj się zjadać podobne ilości potraw, jakie zjadasz zwykle.
                    </li>
                    <li className="liStyle">
                        Nie zapominaj o warzywach.
                    </li>
                    <li className="liStyle">
                        Pamiętaj o piciu wody.
                    </li>
                    <li className="liStyle">
                        Zaplanuj zajęcia, które pomogą zabić nudę. Z nudów często podjadamy. #zostańwdomu i graj w planszówki, 
                        układaj puzzle, oglądaj zdjęcia z wakacji, graj w kalambury. Niech jedyną rozrywką w święta nie będzie 
                        tylko oglądanie tv i siedzenie przy stole.
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Article2;