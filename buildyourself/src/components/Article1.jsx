import React from 'react';

const Article1 = () => {
    return (
        <div className="container">
            <div>
                <h2 className="title">Dlaczego regularne jedzenie jest ważne?</h2>
                <p className="content">
                    Łatwiej wprowadzić nowe nawyki w życie jeśli wiemy dlaczego coś robimy. Warto zrozumieć jakie korzyści dla organizmu przyniosą regularne posiłki. Zacznijmy od tego, że organizm jest jak kominek, w którym trzeba rozpalić, żeby było ciepło, a później pilnować, żeby nie wygasło.
                    Odnosząc to do jedzenia: rano wstajemy i rozpalamy w kominku – śniadanie. Konkretne, wartościowe, bo tak jak kilkoma patyczkami nie rozpalimy ognia na dłuższy czas, tak kawa na śniadanie to za mało. Później trzeba dbać o to, żeby w kominku nie wygasło, czyli po kilku godzinach dorzucamy kolejną porcję drewna. Nie ma potrzeby dorzucać co chwilę – przecież się pali. To oznacza, że nie ma potrzeby podjadać co kwadrans. Ale lepiej też nie doprowadzać do tego, żeby ogień zgasł, a tak się stanie po kilku godzinach.
                    Jeśli w kominku wygaśnie to znów trzeba rozpalić, czyli znowu trzeba wrzucić dużo opału. Porównując do jedzenia: po wielu godzinach bez posiłku, kiedy już zasiadamy do stołu, to posiłek jest dużo za duży, zjadamy go zbyt szybko, zbyt łapczywie. Często kończy się to bólem brzucha, a czasami sennością.
                </p>
                <h2 className="title">Nieregularność = magazynowanie</h2>
                <p className="content">
                    Poza tym organizm nie jest traktowany fair – nie zaspokajamy przecież podstawowej potrzeby jak dostarczenie paliwa do działania. Taki organizm ma tendencję do magazynowania tkanki tłuszczowej, bo kiedy już dostanie posiłek woli coś zostawić na „gorsze czasy”.
                    Regularne posiłki to dla organizmu poczucie bezpieczeństwa, dostawy paliwa są wtedy, kiedy ciało ich potrzebuje. A to oznacza, że nie trzeba robić zapasów na wypadek głodu.
                </p>
                <h2 className="title">Jak długie powinny być przerwy między posiłkami?</h2>
                <img src="./images/zegar.jpg" style={imgZeg}></img>
                <p className="content">
                    Najczęściej słyszymy, że 3 godziny to najlepszy odstęp między posiłkami. 
                    Faktycznie przerwa od jednego posiłku do kolejnego powinna wynosić minimum 2 godziny, 
                    ale nie więcej niż 4. Jeśli chce nam się jeść po godzinie od zjedzenia, to znaczy, 
                    że coś z tym posiłkiem było nie tak. Dobrze skomponowany posiłek to paliwo na kilka godzin.
                </p>
                <ul>
                    <li className="liStyle">
                        Jeśli decydujemy się na 5 posiłków dziennie, to przerwy między nimi będą pewnie wynosiły około 3 godzin.
                    </li>
                    <li className="liStyle">
                        Jeśli decydujemy się na 4 posiłki, to wtedy przerwy wydłużą się, a co za tym idzie te posiłki muszą być konkretniejsze.
                    </li>
                </ul>
                <h2 className="title">Dopasuj ilość posiłków do swoich potrzeb i możliwości</h2>
                <p className="content">Najważniejsze to dopasować ilość posiłków do swoich możliwości, rytmu dnia, przerw w pracy. 
                    Jeśli do tej pory ktoś jadł 2 razy dziennie, to pewnie ciężko będzie mu od razu zmienić to na 5 posiłków, 
                    ale jeśli najpierw doda jeden posiłek, a później kolejny, to krok po kroku osiągnie oczekiwany rezultat.
                    Natomiast jeśli ktoś do tej pory podjadał co chwilę, to raczej problemem będzie wytrzymać 4 godziny do 
                    kolejnego posiłku i taka osoba najpierw będzie próbowała wytrzymać 2,5 godziny i stopniowo zwiększy ten czas.
                </p>
                <h2 className="title">Podsumowując</h2>
                <p className="content">
                    Regularne posiłki to dla naszego organizmu poczucie bezpieczeństwa, stała dostawa paliwa, które jest potrzebne do funkcjonowania. 
                    A organizm bezpieczny, nakarmiony chętniej podejmie współpracę jeśli zechcemy zredukować wagę, czyli pozbyć się zapasów tkanki tłuszczowej.
                </p>
            </div>
        </div>
  );
}
const imgZeg = {
    maxWidth: '700px'
}

export default Article1;