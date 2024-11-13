import React from 'react';

const Article6 = () => {
    return (
        <>
        <button className="buttonBack" onClick={() => window.location.href = '/article'}>Wróć</button>
        <div className="container">
            <div>
                <h2 className="title">Białka, tłuszcze, węglowodany, co to jest i czy muszę się na tym znać?</h2>
                <p className="content">
                    BTW to potoczny skrót na białka, tłuszcze i węglowodany, czyli makroskładniki, których dostarczamy z pożywieniem. 
                    Każdy z nas to robi, bo każdy codziennie je. Jeśli chcesz bardziej świadomie podejść do tematu zdrowego odżywiania 
                    dobrze jest wiedzieć coś więcej. Spokojnie, postaram się, żeby było prosto i konkretnie.
                </p>
                <p className="content">
                    Makroskładniki są nam potrzebne do codziennego, zdrowego funkcjonowania. Dzięki nim chodzimy, myślimy, 
                    pracują nasze narządy itd. Za co konkretnie są odpowiedzialne białka, a za co tłuszcze? Gdzie znajdują się węglowodany? 
                    Już tłumaczę.
                </p>
                <img src="./images/bialka.jpg" style={imgg}></img>
                <h3 className="title">Białko</h3>
                <h4 className="title">Znaczenie dla organizmu</h4>
                <p className="content">
                    Uważane jest za materiał budulcowy organizmu, dzięki niemu regenerują się tkanki i powstają nowe.
                </p>
                <h4 className="title">W jakich produktach jest białko?</h4>
                <p className="content">
                    M.in. w jajkach, soczewicy, ciecierzycy, wołowinie, cielęcinie, nasionach roślin strączkowych, twarogu, rybach, kaszy gryczanej.
                </p>
                <p className="content">
                    Często jako główne źródło białka wymienia się jedynie mięso, nie jest to prawda, w roślinach strączkowych jest go 
                    równie dużo i z powodzeniem może zastąpić mięso w diecie. Wegetarianie właśnie w taki sposób planują swoją dietę, 
                    aby było w niej dużo strączków i innych produktów roślinnych, w których jest sporo białka.
                </p>
                <h4 className="title">Ile białka potrzebuję?</h4>
                <p className="content">
                    W dużej mierze zależy to od Twojego stylu życia. Jeśli masz siedzącą pracę i właściwie nie ruszasz się za wiele, 
                    to wystarczy Ci ok. 1 g białka/kg masy ciała. Osoby, które są aktywne fizycznie i regularnie trenują mogą jeść więcej białka, 
                    czyli ok. 1,5-2 g białka/kg masy ciała. Inne zapotrzebowanie będą miały też kobiety w ciąży i dzieci.
                </p>
                <p className="content">
                    Pamiętajmy też, że białko ma wysoki indeks sytości. Co to znaczy? Zjadając posiłek bez białka będziemy szybciej głodni. 
                    Np. jeśli zjemy sałatkę składającą się z samych warzyw, to głód pojawi się dość szybko. Natomiast jeśli wzbogacimy 
                    sałatkę o kawałki mięsa lub sera, to posiłek pozwoli zachować sytość (czyli łatwiej będzie nie podjadać) na dłużej.
                </p>
                <img src="./images/tluszcze.jpg" style={imgg}></img>
                <h4 className="title">Tłuszcze</h4>
                <p className="content">
                    Tłuszcze nie cieszą się dobrą sławą, niestety. Nadal pokutuje opinia, że od tłuszczu się tyje. To nie jest prawda.
                    Tu kilka słów wyjaśnienia:
                    1 g białka dostarcza organizmowi 4 kcal,
                    1 g węglowodanów dostarcza organizmowi 4 kcal,
                    1 g tłuszczu dostarcza organizmowi 8 kcal,
                </p>
                <p className="content">
                    Ktoś sobie wymyślił, że wykluczając lub ograniczając tłuszcze w diecie będzie można jeść więcej jedzenia (wagowo), 
                    w końcu te tłuszcze takie kaloryczne… Dlatego jeszcze parę lat temu tak modne były odtłuszczone produkty light. 
                    W ostatnim czasie, dla odmiany, popularność zyskują diety tłuszczowe (diety ketogeniczne), gdzie zwiększa się ilość 
                    tłuszczów kosztem ilości zjadanych węglowodanów.
                </p>
                <h4 className="title">W jakich produktach są tłuszcze?</h4>
                <p className="content">
                    Tłuszcze są bardzo ważne i potrzebne naszemu organizmowi. Jednak warto zwrócić uwagę jakie ilości tłuszczu zwierzęcego i 
                    roślinnego zjadamy, a dokładniej – których jest więcej. Niestety, często w naszej diecie przeważa tłuszcz pochodzenia 
                    zwierzęcego, niestety w wydaniu tłustych wędlin i innych wyrobów mięsnych. Warto to zmienić i wprowadzić więcej chudego mięsa, 
                    ryb, nabiału, a zrezygnować z regularnego jedzenia kiełbas, kabanosów i pasztetów. Pamiętajmy też o tłuszczach roślinnych, 
                    które są ważne dla układu krążenia oraz dla mózgu, stanowią też źródło energii. Tłuszcze roślinne znajdziemy w oliwie z oliwek 
                    i olejach roślinnych (lniany, z pestek dyni), w awokado, orzechach, migdałach, pestkach dyni, nasionach słonecznika.
                </p>
                <p className="content">
                    Unikajmy też tłuszczów pochodzących z fast foodów, słodkich batoników, chipsów – ten tłuszcz zdecydowanie nie służy organizmowi.
                </p>
                <h4 className="title">Ile tłuszczu powinniśmy jeść?</h4>
                <p className="content">
                    Według zaleceń 15-30% kalorii, które codziennie zjadamy powinno pochodzić z tłuszczów.
                </p>
                <img src="./images/weglowodany.jpg" style={imgg}></img>
                <h3 className="title">Węglowodany</h3>
                <h4 className="title">Rola w organizmie</h4>
                <p className="content">
                    Węglowodany są głównym źródłem energii dla naszego organizmu, to nasze paliwo. Możemy je podzielić na węglowodany 
                    proste i złożone. W naszej diecie więcej powinno być tych złożonych, bo one „rozkładają się” dłużej, 
                    a dzięki temu dłuższy czas dostarczają naszemu organizmowi energię. W praktyce oznacza to uczucie sytości. 
                    Węglowodany proste „rozkładają się” szybciej, bardziej intensywnie, przez co energii starcza na krócej, szybciej robimy się głodni.
                </p>
                <h4 className="title">W jakich produktach znajdują się węglowodany proste?</h4>
                <p className="content">
                    Głównie w tych słodkich: słodkich napojach, przetworach mlecznych (owocowe jogurty i serki), słodyczach. 
                    Również w białym ryżu, jasnym pieczywie i makaronie. Do tej grupy zaliczymy też owoce, ale ze względu na 
                    zawartość błonnika i witamin nie ma potrzeby, żeby wykluczać owoce z diety.
                </p>
                <h4 className="title">Jakie są źródła węglowodanów złożonych?</h4>
                <p className="content">
                    Znajdziemy je w razowym i żytnim pieczywie, razowych makaronach, kaszach, brązowym ryżu, otrębach, mące razowej, 
                    żytniej, ale również w warzywach strączkowych i korzeniowych.
                </p>
                <h4 className="title">Ile należy jeść węglowodanów?</h4>
                <p className="content">
                    Tutaj znowu ilość zależy od naszego trybu życia. Według zaleceń to ok. 50% dziennego zapotrzebowania na kalorie. 
                    Jeśli pracujesz przy biurku, a Twoja aktywność fizyczna jest niewielka, to ilość zjadanych węglowodanów powinna być
                    mniejsza, jeśli trenujesz – większa.
                </p>
                <h4 className="title">I jeszcze na koniec</h4>
                <p className="content">
                    Skąd masz wiedzieć, że dostarczasz odpowiedniej ilości makroskładników? Wystarczy jeść różnorodnie, nie wykluczać bez 
                    powodu jakiejś grupy produktów. Jeśli posiłki nie są monotonne, jesz dużo warzyw, sięgasz po kasze, rośliny strączkowe, 
                    ryby, oleje, to najprawdopodobniej nie masz powodów do obaw.
                    Dobrym wyznacznikiem będzie też pojawianie się głodu po posiłku. Zaobserwuj jak szybko robisz się głodny po zjedzeniu posiłku. 
                    Jeśli jest to godzina, to znaczy, że posiłek mógł być niewystarczający, mógł mieć np. za mało białka i błonnika. 
                    Jeśli głód pojawia się po 3-4 godzinach, to najprawdopodobniej posiłek był dobrze skomponowany.
                </p>
            </div>
        </div>
        </>
    );
}
const imgg = {
    maxWidth: '700px'
}

export default Article6;