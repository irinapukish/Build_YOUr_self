import React from 'react';

const Article5 = () => {
    return (
        <div className="container">
            <div>
                <h2 className="title">Dlaczego “dieta” 1000 kcal to zły pomysł</h2>
                <p className="content">
                    Schemat najczęściej się powtarza: bardzo restrykcyjna dieta cud np. 1000 kcal, kilka miesięcy wyrzeczeń i 
                    głodówki, utrata kilogramów, radość i… efekt jojo, kilogramy wracają z nawiązką. I tak w kółko. Waga skacze, 
                    raz w górę, raz w dół, a Ty powtarzasz, że te diety to głupie są, bo chodzisz głodna i zła, a schudnąć na 
                    stałe nie potrafisz. Znasz to? Nie wiesz dlaczego tak się dzieje? W takim razie czytaj dalej.
                </p>
                <p className="content">
                    Na początek trochę podstawowej wiedzy. Organizm codziennie potrzebuje pewnej dawki energii (kalorii), 
                    żeby funkcjonować. Każdy musi oddychać, a serce i płuca pracować. To, ile tej energii potrzebuje 
                    organizm zależy od wieku, płci, aktualnej wagi, a nawet temperatury otoczenia.
                </p>
                <p className="content">
                    Podstawowa Przemiana Materii (PPM), bo o niej mówimy to ta ilość kalorii, którą codziennie musisz zjeść, żeby Twój organizm mógł normalnie funkcjonować.
                </p>
                <p className="content">
                    W moim przypadku PPM to 1350 kcal. Jeśli zjem mniej to organizmowi po prostu na coś zabraknie energii. 
                    Oczywiście w pierwszej kolejności zadba o zabezpieczenie najważniejszych organów, ale przecież nie musi mi 
                    być ciepło, albo nie muszę się za bardzo koncentrować prawda? Ważne, żeby przeżyć.
                </p>
                <p className="content">
                    Oczywiście nasze życia nie ogranicza się do tego, że leżymy i pachniemy. Codziennie trzeba wstać, iść do pracy, 
                    posprzątać, zrobić zakupy itd. Na wszystko to również potrzebna jest energia, którą musimy dostarczyć z jedzeniem.
                </p>
                <p className="content">
                    W ten sposób określamy jakie jest nasze zapotrzebowanie kaloryczne: to PPM plus codzienna aktywność. 
                    W ten sposób obliczamy Całkowitą Przemianę Materii CMP 
                </p>
                <img src="./images/ppm.jpg" style={imgPPm}></img>
                <h3 className="title">Co w takim razie dzieje się z organizmem podczas bardzo restrykcyjnej diety?</h3>
                <p className="content">
                    Pierwsze co powinno zwrócić Twoją uwagę, że “diety cud” w większości przypadków są niższe od PPM większości osób! 
                    To głodówka, stan, który organizm traktuje jako zagrożenie, bo nie ma paliwa do działania.
                </p>
                <p className="content">
                    Organizm początkowo próbuje sobie jakoś radzić i żywi się zapasami, które ma, czyli np. tłuszczem. 
                    Dlatego na początku efekty “diety cud” są szybkie i dość spektakularne, bo waga spada, tak jak tego oczekujesz. 
                    Ale organizm nie jest głupi i nie pozwoli się głodzić, dlatego zwalnia metabolizm.
                </p>
                <p className="content">
                    Efekt jojo jest właściwie wpisany w scenariusz diety głodówkowej. Dlaczego tak się dzieje? 
                    Ustalmy, możesz wytrzymać nawet na najgłupszej diecie jakiś czas. W przypadku diety 1000 kcal 
                    Twój organizm cały czas jest w stanie głodu. Kiedy kończy się “akcja dieta”, bo efekt został osiągnięty, 
                    waga spadła, mieścisz się w spodnie w mniejszym rozmiarze, wtedy najczęściej wracasz do dotychczasowych 
                    nawyków i zwiększasz ilość jedzenia (czyli również kalorii). Nawet jeśli poprawisz nawyki i ograniczysz 
                    niezdrowe i kaloryczne produkty, to z pewnością zjesz więcej niż 1000 kcal. Jak wtedy zachowa się organizm? 
                    Skoro jakoś przyzwyczaił się do funkcjonowania przy 1000 kcal, to wszystko co dostanie ponad to zmagazynuje 
                    (w postaci tkanki tłuszczowej) na czarną godzinę! Witajcie kilogramy!
                </p>
                <h3 className="title">Efekt jojo to nie jedyny problem diet głodówkowych. Jakie są inne wady?</h3>
                <ul>
                    <li className="liStyle">
                        Niedobory witamin i składników odżywczych: początkowo to może być tylko niedobór magnezu, który objawi się 
                        drgającą powieką lub skurczem. Później mogą pojawić się niedobory żelaza i anemia, a z powodu niedoboru witaminy A
                        zaczyna pogarszać się wzrok.
                    </li>
                    <li className="liStyle">
                        Pogarsza się stan skóry, pojawiają się pryszcze, cera robi się szara, matowa. Również włosy i paznokcie robią się słabsze.
                    </li>
                    <li className="liStyle">
                        Zwalnia metabolizm, dlatego w przyszłości będzie Ci trudniej zrzucić kilogramy.
                    </li>
                    <li className="liStyle">
                        Brak energii: Twój organizm nie dostaje wystarczającej ilości energii, aby funkcjonować, brakuje mu na podstawowe potrzeby więc o energii w pracy nie ma już mowy.
                    </li>
                </ul>
                <p className="content">
                    Mam nadzieję, że kolejny raz, kiedy zobaczysz reklamę diety cud, której kaloryczność wynosi 1000 kcal zastanowisz się, jakie są konsekwencje.
                </p>
            </div>
        </div>
    );
}
const imgPPm = {
    height: '800px',
    maxWidth: '700px'
}

export default Article5;