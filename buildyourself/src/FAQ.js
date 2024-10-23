import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className="faq-container">
            <h2>Najczęściej poszukiwane pytania</h2>

            <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAnswer(0)}>
                <h3>Czy w czasie wakacji można zrobić sobie „wakacje” od zdrowego odżywiania?</h3>
                <p>
                    Jest to prawie niemożliwe. Zdrowy styl życia to ciągły proces. Jednak zdrowa dieta nie wyklucza pewnej miary satysfakcji. Wręcz przeciwnie, jedzenie powinno dobrze smakować. Musisz tylko zachować równowagę. Ludzie muszą również zmienić swoje gusta i preferencje, aby większość spożywanej przez nich żywności była zdrowa.
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAnswer(1)}>
                <h3>Co to jest dieta zbilansowana i na czym polega?</h3>
                <p>
                    Pod pojęciem dieta zbilansowana należy rozumieć taki sposób żywienia, który pokrywa zapotrzebowanie organizmu na wszystkie składniki odżywcze bez wykluczania poszczególnych rodzajów żywności. Jednocześnie taka dieta powinna uwzględniać równowagę między ilością przyjętych w pożywieniu kalorii a codzienną aktywnością ruchową. Jest konieczne do utrzymania prawidłowego bilansu energetycznego. W okresie dojrzewania i dorastania należy szczególnie dbać o prawidłowe odżywianie, ponieważ w tym czasie następuje intensywny wzrost organizmu.
                    Główne zasady zbilansowanej diety to:
                    <ul>
                        <li className='li-faq'>
                            Spożywanie 4–5 posiłków w ciągu dnia z zachowaniem przerw nie dłuższych niż 4 godziny.
                        </li>
                        <li className='li-faq'>
                            Spożywanie produktów żywnościowych zgodnie z Piramidą Zdrowego Żywienia i Aktywności Fizycznej, a więc uwzględnieniem proporcji pomiędzy poszczególnymi składnikami żywności, które powinny znajdować się w diecie.
                        </li>
                        <li className='li-faq'>
                            Zjadanie co najmniej pięć porcji różnych warzyw i owoców dziennie.
                        </li>
                        <li className='li-faq'>
                            Zjadanie przynajmniej dwóch porcji ryb tygodniowo.
                        </li>
                        <li className='li-faq'>
                            Wypijanie co najmniej 1,5 litra wody w ciągu dnia unikając słodzonych napojów.
                        </li>
                        <li className='li-faq'>
                            Ograniczenie soli, szczególnie zwrócenie uwagi na niedosalanie potraw, zamiast tego stosowanie różnych przypraw ziołowych.
                        </li>
                        <li className='li-faq'>
                            Ograniczenie cukru oraz niezdrowych przekąsek (słodycze, chipsy), które można zastąpić naturalnymi odpowiednikami: ziarnami słonecznika, orzechami, warzywami.
                        </li>
                    </ul>
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAnswer(2)}>
                <h3>Ile posiłków w ciągu dnia należy spożyć?</h3>
                <p>
                    Należy spożywać 3 główne posiłki dziennie (śniadanie, obiad, kolacja) oraz dwie przekąski (drugie śniadanie i podwieczorek). Przerwy pomiędzy posiłkami nie powinny być dłuższe niż trzy - cztery godziny. Nie chodzi o to, aby skrupulatnie pilnować wyznaczonych godzin i jeść z zegarkiem w ręku. Jeśli spóźnimy się z posiłkiem 15 minut lub zjemy go przed wyznaczonym czasem, nic się nie stanie. Regularnie spożyte posiłki chronią przed gwałtownymi spadkami poziomu cukru we krwi, a tym samym przed uczuciem głodu, zmęczenia i złym humorem. 6 Pierwsze śniadanie powinno zostać zjedzone przed wyjściem do szkoły (do godziny od przebudzenia), ostatni posiłek natomiast na około 3 godziny przed zaśnięciem.
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAnswer(3)}>
                <h3>Ile porcji produktów z różnych grup powinniśmy codziennie zjeść?</h3>
                <p>
                    Jeżeli już wiemy jaka jest miara porcji warto pamiętać, że w naszym codziennym jadłospisie powinny się znaleźć:
                    <ul>
                        <li className='li-faq'>
                            3 lub więcej porcji różnorodnych warzyw,
                        </li>
                        <li className='li-faq'>
                            2 lub więcej porcji różnych owoców,
                        </li>
                        <li className='li-faq'>
                            6-7 porcji zdrowych węglowodanów (pełnoziarniste pieczywo, makarony, kasze),
                        </li>
                        <li className='li-faq'>
                            3 porcje chudego nabiału (mleko, jogurt naturalny, ser),
                        </li>
                        <li className='li-faq'>
                            2 porcje: mięso lub ryby, jaja.
                        </li>
                    </ul>
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAnswer(4)}>
                <h3>Dlaczego nie należy robić zbyt długich przerw między posiłkami?</h3>
                <p>
                    Przerwy pomiędzy posiłkami nie powinny być dłuższe niż 3,5 – 4 godziny. Jedzenie 5 razy w ciągu dnia mniejszych posiłków powoduje, że nie doprowadzamy naszego organizmu do stanu tak zwanego wilczego głodu, gdyż towarzyszy mu spadek glukozy we krwi. Zbyt rzadkie spożywanie posiłków powoduje jednorazowe przyjęcie nadmiernej ilości pokarmów, często w większej ilości niż sumaryczna z kilku mniejszych posiłków. W efekcie następuje przeciążanie żołądka i jego nadmierne rozciągnięcie. Osoby z rozciągniętym żołądkiem muszą zjeść więcej, by odczuć sytość. W efekcie dochodzi więc do magazynowania niewykorzystanej energii z przyjętych pokarmów, które sprzyja otyłości.
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleAnswer(5)}>
                <h3>Czy warto pojadać między posiłkami?</h3>
                <p>
                    Lepiej nie. Ale są sytuacje, w których dopada nas głód. Pamiętać trzeba, aby wtedy posiłkować się zdrowymi przekąskami jak np. orzechy (niesolone), pokrojone w słupki warzywa (np. marchewki, papryka), owoce (np. jabłka) lub owoce suszone (ostrożnie z rodzynkami – zawierają dużo cukru).
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleAnswer(6)}>
                <h3>Warzywa i owoce jedz jak najczęściej i w jak największej ilości?</h3>
                <p>
                    <p>
                        Warzywa i owoce powinny być ważnym składnikiem codziennej diety dzieci i młodzieży. Produkty te stanowią główne źródło witamin (przede wszystkim witaminy C, beta-karotenu, folianów), składników mineralnych, błonnika oraz naturalnych przeciwutleniaczy, tzw. antyoksydantów, które usuwają szkodliwe dla organizmu wolne rodniki tlenowe.
                    </p>
                    <p>
                        Regularne jedzenie warzyw i owoców zmniejsza ryzyko rozwoju wielu chorób, w tym cukrzycy typu 2, otyłości, nadciśnienia, niedokrwiennej choroby serca, niektórych nowotworów. Najkorzystniej jest spożywać je na surowo lub minimalnie przetworzone, ponieważ w takiej formie produkty te zachowują najwyższą wartość odżywczą. Warzywa i owoce powinny być spożywane kilka razy dziennie, w ramach posiłków i przekąsek.
                    </p>
                    <p>
                        Warzywa i owoce różnią się między sobą składem i wartością odżywczą. Barwa warzyw i owoców wiąże się z zawartością określonych substancji, które mają wpływ na ich właściwości zdrowotne. Dlatego, aby dostarczyć organizmowi wszystkich składników pokarmowych, należy spożywać różnobarwne warzywa i owoce. Warto przy tym pamiętać, że należy spożywać więcej warzyw niż owoców.
                    </p>
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleAnswer(7)}>
                <h3>Czy aby schudnąć wystarczy sama dieta?</h3>
                <p>
                    Niestety, sama dieta nie wystarczy. Organizm bardzo szybko przystosowuje się do obniżonej kaloryczności posiłków, spowalnia metabolizm i zmniejsza zapotrzebowanie na energię. Jedynym sposobem na uniknięcie takiej sytuacji jest regularna aktywność fizyczna. Nie musi to być od razu duży wysiłek fizyczny. Można zacząć od 30 minutowych marszów (szybkich spacerów) i powoli zwiększać ich długość. Wysiłek fizyczny sprzyja utracie tkanki tłuszczowej przy jednoczesnej ochronie zasobów białkowych organizmu.
                </p>
            </div>

            <div className={`faq-item ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleAnswer(8)}>
                <h3>Dlaczego warto zdrowo się odżywiać?</h3>
                <p>
                    Od dawna wiadomo, że dbałość o właściwe, zdrowe odżywianie jest ważna dla prawidłowego wzrastania oraz utrzymania dobrego stanu zdrowia. Pozwala uniknąć wielu chorób, które rozwijają się niekiedy przez wiele lat jako skutek spożywania nadmiernej lub zbyt małej ilości określonych składników pokarmowych. Do najczęściej występujących chorób tego typu należą:
                    <ul>
                        <li className='li-faq'>
                            choroby układu sercowo-naczyniowego
                        </li>
                        <li className='li-faq'>
                            nadciśnienie tętnicze
                        </li>
                        <li className='li-faq'>
                            cukrzyca typu 2
                        </li>
                        <li className='li-faq'>
                            otyłość
                        </li>
                        <li className='li-faq'>
                            kamica żółciowa
                        </li>
                        <li className='li-faq'>
                            niedokrwistość z niedoboru żelaza
                        </li>
                        <li className='li-faq'>
                            osteoporoza
                        </li>
                        <li className='li-faq'>
                            oraz niektóre choroby nowotworowe (żołądka, jelita grubego, piersi).
                        </li>
                    </ul>
                    Niewłaściwy sposób odżywiania może prowadzić także do bardziej prozaicznych problemów, takich jak: 
                    <ul>
                        <li className='li-faq'>
                            ograniczenie możliwości przyswajania wiedzy, 
                        </li>
                        <li className='li-faq'>
                            przewlekłe zmęczenie oraz osłabienie koncentracji uwagi.
                        </li>
                    </ul>
                    Odpowiednie, zdrowe żywienie jest często podstawową metodą leczenia wielu chorób, zalecaną również wówczas, gdy konieczne jest już stosowanie leków. 
                    W dzisiejszych czasach w Polsce duży problem stanowią otyłość i nadwaga, które wynikają z zaburzeń odżywiania oraz nieadekwatnej aktywności fizycznej i spowodowanego nimi dodatniego bilansu energetycznego. 
                    Konsekwencją tych chorób są także inne zaburzenia metaboliczne, takie jak zwiększone stężenie glukozy i lipidów w surowicy krwi, zespół metaboliczny, nadciśnienie tętnicze, niealkoholowa stłuszczeniowa choroba wątroby itp. 
                    Nie mniej niebezpieczne dla zdrowia może być niedożywienie, polegające nie tylko na niedoborze spożywanych kalorii, ale też na niepełnowartościowym żywieniu, prowadzącym do niedoborów pokarmowych. 
                    W pełnych pośpiechu czasach nie zapominajmy, że sposób w jaki się odżywiamy wpływa na nasze zdrowie.
                </p>
            </div>
        </div>
    );
}
export default FAQ;