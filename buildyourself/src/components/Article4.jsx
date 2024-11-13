import React from 'react';

const Article4 = () => {
    return (
        <>
        <button className="buttonBack" onClick={() => window.location.href = '/article'}>Wróć</button>
        <div className="container">
            <div>
                <h2 className="title">Jaka dieta jest dla mnie najlepsza?</h2>
                <p className="content">
                    Nie sądziłam, że to pytanie usłyszę tak często. Wydawało mi się, że odpowiedź jest prosta: dopasowana do 
                    Twoich potrzeb i możliwości. Okazuje się, że najczęściej niepotrzebnie kombinujemy i próbujemy się dopasować do jakiejś modnej właśnie diety.
                </p>
                <h2 className="title">Niedopasowanie, czyli dieta z internetu</h2>
                <p className="content">
                    Sytuacja 1: Koleżanka z pracy przeszła na dietę. Znalazła ją w internecie na kobiecym forum. 
                    Pije tylko soki, wykluczyła pieczywo, nabiał, mięso i pewnie coś jeszcze. 
                    Chudnie w oczach, wszystkie jej zazdroszczą. Ty też próbujesz, po dwóch dniach jest Ci 
                    niedobrze na widok soku, marzysz o kanapce.
                </p>
                <p className="content">
                    Sytuacja 2: Ciocia przeszła na dietę kopenhaską, chce schudnąć do urlopu więc bardzo mocno się stara. 
                    Nie jest łatwo, bo dieta kopenhaska do łatwych nie należy. Po tygodniu ciocia odpuszcza, nie dała rady, 
                    jest głodna i zła. Na urlop jedzie w góry zamiast nad morze.
                </p>
                <p className="content">
                    Takich sytuacji można wymieniać wiele. Czy wiesz, co było powodem niepowodzenia każdej z nich? Niedopasowanie. 
                    Dieta (czyli model odżywiania) nie była dostosowana do tej konkretnej osoby, tylko ona próbowała dopasować się do diety. 
                    Oprócz tego jeszcze brak przygotowania, brak wiedzy żywieniowej, nierealne oczekiwania i jeszcze kilka innych powodów.
                </p>
                <p className="content">
                    Nie musisz za wszelką cenę dopasować się do jakiejś modnej właśnie diety, albo próbować dostosować swojego rytmu dnia 
                    do diety koleżanki. Takie podejście zakłada tylko chwilową zmianę, która będzie kosztować Cię bardzo dużo energii, 
                    a na dłuższą metę nie przyniesie efektów, bo ile można tak wytrzymać?
                </p>
                <h2 className="title">Jakie są cechy diety dla Ciebie?</h2>
                <h3 className="title">1. Zaspokaja Twoje potrzeby</h3>
                <p className="content">
                    Dokładniej – uwzględnia potrzeby Twojego organizmu: na energię (kalorie), witaminy, składniki odżywcze. 
                    Te potrzeby są różne w zależności od wieku, płci, wykonywanej pracy oraz ilości aktywności fizycznej.
                </p>
                <p className="content">
                    To bardzo ważny punkt, jeśli dieta będzie niedoborowa (nie zaspokoi potrzeb Twojego organizmu), 
                    to prędzej czy później odbije się to na Twoim zdrowiu. Im mniej kalorii oraz więcej produktów, 
                    które wykluczysz z diety, tym większe ryzyko pogorszenia zdrowia.
                </p>
                <img src="./images/jaka_dieta_dla_mnie.jpg" style={imgFormula}></img>
                <h3 className="title">2. Zapewnia sytość</h3>
                <p className="content">
                    Najczęstsza obawa przed rozpoczęciem jakiejkolwiek diety, to strach przed głodem. 
                    Wizja liścia sałaty na talerzu skutecznie zniechęca. Zapewniam Cię, że można wprowadzić 
                    zmiany w odżywianiu tak, żeby głodu – tego fizycznego – nie było. Nad emocjonalnym można pracować.
                </p>
                <h3 className="title">3. Smakuje Ci</h3>
                <p className="content">
                    Dla wielu osób dieta oznacza jedzenie dziwnych i nieznanych rzeczy. 
                    Spokojnie, nie musisz jeść szpinaku, jarmużu lub tofu jeśli nie lubisz.
                    Można zmienić sposób odżywiania i nadal jeść smacznie, to tylko kwestia dopasowania potraw do gustu.
                </p>
                <h3 className="title">4. Uwzględnia Twój tryb życia</h3>
                <p className="content">
                    Posiłki co 3 godziny, o konkretnych wyznaczonych godzinach. Potrawy, których nie można zapakować w pudełko i zabrać do pracy,
                    albo długie i skomplikowane przepisy dań. A przecież Ty pracujesz na zmiany i masz tylko jedną przerwę w pracy. 
                    Czy w takim wypadku nic nie da się zrobić? Da się. Oczywiście, że nic samo się nie zrobi i jeśli nie wykażesz chęci
                    i nie znajdziesz chwili na przygotowanie posiłków, to nic z tego. Ale przy odrobinie dobrej woli wprowadzisz nowe zwyczaje.
                    Najlepiej zrobić to małymi krokami i wprowadzać zmiany stopniowo. Posiłki szybkie w przygotowaniu, a przy tym smaczne i 
                    zdrowe to nie jest kosmiczny wynalazek, tylko coś zupełnie prawdziwego, co można wprowadzić w życie.
                </p>
                <img src="./images/jaka_dieta_dla_mnie_02.jpg" style={imgFormula2}></img>
                <h3 className="title">5. Zapewni długotrwałe efekty</h3>
                <p className="content">
                    Redukcja wagi to najczęściej główny powód, dla którego rozpoczynamy jakąś dietę. Im szybciej kilogramy spadają, 
                    tym większa radość. Jeśli sięgniesz po pierwszą z brzegu dietę z internetu, to najprawdopodobniej nie uwzględni 
                    ona twojej Podstawowej Przemiany Materii i efektem ubocznym będą problemy ze zdrowiem. Szybki i gwałtowny spadek 
                    wagi to bardzo duże ryzyko efektu jojo, czyli tego, że Twoja waga wróci do stanu wyjściowego, a nawet jeszcze się zwiększy. 
                    Dieta dopasowana do Ciebie też pomoże Ci schudnąć, ale stanie się to wolniej. Po to, aby organizm przyzwyczaił się do nowości.
                </p>
                <h2 className="title">O czym warto pamiętać?</h2>
                <p className="content">
                    Odpowiedz sobie na pytanie, czy każdego 1 stycznia, przed urlopem i po wakacjach chcesz znowu przechodzić na dietę? 
                    Do wyboru jest zawsze cała paleta modnych diet, pomęczysz się jakiś czas, a później znowu kilogramy wrócą. 
                    A może jednak wolisz stopniowo wprowadzać zmiany, nauczyć się jak zdrowo i smacznie jeść, wypracujesz sobie rytm dnia, 
                    w którym jest czas na posiłki? Zrzucisz przy tym kilogramy i utrzymasz wagę, bo będziesz wiedzieć, co dzieje się z 
                    Twoim organizmem. Którą wersję wybierasz?
                </p>
            </div>
        </div>
        </>
    );
}

const imgFormula = {
    maxWidth: '600px'
}

const imgFormula2 = {
    maxWidth: '700px'
}
export default Article4;