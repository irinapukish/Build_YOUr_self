  const meals = [
    {
        id: 1,
        name: "Wrap z łososiem i burratą",
        imgSrc: "images/foto_przepisy/sniadanie/wrap_z_lososiem_i_burrata.png",
        ingridients: [ 
            {
                name:"sztuka tortilli",
                count:1,
                mass:60
            },
            {
                name:"łyżka serka śmietanowego",
                count:1,
                mass:25
            },
            {
                name:"rukola",
                count:0,
                mass:10
            },
            {
                name:"łosoś wędzony",
                count:0,
                mass:50
            },
            {
                name:"sztuki ogórka",
                count:0.5,
                mass:75
            },
            {
                name:"opakowania burraty",
                count:0.5,
                mass:60
            },
        ],
        preparation_method:[
            "Tortillę smarujemy serkiem, nakładamy rukolę.",
            "Na tortillę nakładamy porwanego na kawałki łososia, pokrojonego ogórka i kawałki burraty, zawijamy.",
        ],
        kcal: {
            calories_per_100g: 496,
            protein_per_100g: 23,
            fat_per_100g: 30,
            carbohydrates_per_100g: 33,
          },
    },
    {
        id: 2,
        name: "Stek wołowy z kaszą",
        imgSrc: "images/foto_przepisy/obiad/stek_wolowy_z_kasza.png",
        ingridients: [ 
            {
                name:"kaszy pęczak",
                count:0,
                mass:100
            },
            {
                name:"wołowiny rostbef",
                count:0,
                mass:200
            },
            {
                name:"sztuka pomidora",
                count:1,
                mass:160
            },
            {
                name:"sztuki ogórka",
                count:1,
                mass:150
            },
            {
                name:"sztuka cebuli czerwonej",
                count:1,
                mass:110
            },
            {
                name:"łyżeczki natki pietruszki",
                count:2,
                mass:10
            },
            {
                name:"łyżeczki rozmarynu suszonego",
                count:0.5,
                mass:1.5
            },
            {
                name:"łyżki cytryny",
                count:2,
                mass:12
            },
            {
                name:"łyżeczki miodu",
                count:0.5,
                mass:6
            },
            {
                name:"łyżeczki musztardy",
                count:0.5,
                mass:5
            },
            {
                name:"szklanki ciepłej wody",
                count:0.1,
                mass:30
            },
        ],
        preparation_method:[
            "Kaszę gotujemy według instrukcji na opakowaniu.",
            "Wołowinę oprószamy solą i pieprzem i smażymy na dobrze rozgrzanej patelni po 3 minuty z każdej strony lub do ulubionego poziomu wysmażenia. Usmażone mięso odstawiamy na 4 minuty, następnie kroimy w plastry.",
            "Pomidora, ogórka oraz cebulę kroimy w drobną kostkę, natkę pietruszki siekamy. Warzywa dodajemy do kaszy i posypujemy rozmarynem.",
            "Łączymy ze sobą składniki sosu: sok z cytryny, miód, musztardę i wodę.",
            "Sos mieszamy z sałatką. Na sałatce układamy plastry wołowiny. Smacznego!",
        ],
        kcal: {
            calories_per_100g:777,
            protein_per_100g:56,
            fat_per_100g:18,
            carbohydrates_per_100g:100,
        },

    },
    {
        id: 3,
        name:"Chłodnik truskawkowy",
        imgSrc: "images/foto_przepisy/kolacja/chlodnik_truskawkowy.png",
        ingridients: [ 
            {
                name:"truskawki",
                count:0,
                mass:250
            },
            {
                name:"szklanki wody",
                count:0.5,
                mass:100
            },
            {
                name:"opakowanie jogurtu skyr",
                count:1,
                mass:150
            },
            {
                name:"łyżeczki miodu",
                count:2,
                mass:24
            },
            {
                name:"łyżka soku z cytryny",
                count:1,
                mass:6
            },
            {
                name:"garści mięty",
                count:0.5,
                mass:5
            },
            {
                name:"płatków migdałów",
                count:0,
                mass:20
            },
            {
                name:"kromka chleba żytniego razowego",
                count:1,
                mass:30
            },
        ],
        preparation_method:[
            "Owoce przekładamy do garnka, dodajemy wodę, miód i sok z cytryny. Całość zagotowujemy i miksujemy. Jeśli chcemy pozbyć się pestek, przecieramy mus przez sitko.",
            "Mus owocowy studzimy i dokładnie mieszamy z jogurtem. W razie potrzeby dolewamy więcej wody, aby uzyskać preferowaną konsystencję.",
            "Pieczywo kroimy na małe kawałki i podsmażamy na suchej, dobrze rozgrzanej patelni do zarumienienia.",
            "Gotowy chłodnik przelewamy do miseczki. Na wierzchu układamy płatki migdałów oraz grzanki. Danie dekorujemy listkami mięty.",
        ],
        kcal: {
        calories_per_100g: 439,
        protein_per_100g: 26,
        fat_per_100g: 12,
        carbohydrates_per_100g: 65,
        },
    },
    {
        id: 4,
        name:"Kanapki z serem i jajkiem sadzonym",
        imgSrc: "images/foto_przepisy/sniadanie/kanapki_z_serem_i_jajkiem_sadzonym.png",
        ingridients: [ 
            {
                name:"kromki chleba żytniego razowego",
                count:4,
                mass:120
            },
            {
                name:"łyżki serka śmietankowego",
                count:2,
                mass:50
            },
            {
                name:"rukola",
                count:0,
                mass:20
            },
            {
                name:"plastry sera gouda",
                count:2,
                mass:30
            },
            {
                name:"sztuki jajka",
                count:2,
                mass:112
            },
            {
                name:"łyżeczka oliwy",
                count:1,
                mass:5
            },
            {
                name:"sztuka ogórka kiszonego",
                count:1,
                mass:50
            },
            {
                name:"sztuka pomidora",
                count:1,
                mass:150
            },
        ],
        preparation_method:[
            "Na patelni rozgrzewamy oliwę. Wbijamy jajka i smażymy pod przykryciem.",
            "Każdą kromkę chleba smarujemy serkiem, nakładamy rukolę.",
            "Na 2 kromki chleba nakładamy plastry sera, pokrojonego ogórka i pomidora (jeśli warzywa nie mieszczą się na kanapkach, kładziemy je obok na talerzyku).",
            "Na pozostałe 2 kromki nakładamy jajka sadzone.",
        ],
        kcal: {
            calories_per_100g: 732,
            protein_per_100g: 35,
            fat_per_100g: 37,
            carbohydrates_per_100g: 72,
        }
    },
    {
        id: 5,
        name:"Łosoś z marchewką i ziemniakami",
        imgSrc: "images/foto_przepisy/obiad/losos_z_marchewka_i_ziemniakami.png",
        ingridients: [ 
            {
                name:"losoś",
                count:0,
                mass:125
            },
            {
                name:"sztuki ziemniaków",
                count:2,
                mass:140
            },
            {
                name:"sztuki marchewki",
                count:2,
                mass:160
            },
            {
                name:"łyżki soku z cytryny",
                count:2,
                mass:12
            },
            {
                name:"łyżeczki ziół prowansalskich",
                count:0.5,
                mass:1.5
            },
            {
                name:"łyżeczka oliwy z oliwek",
                count:1,
                mass:5
            },
            {
                name:"łyżeczka natki pietruszki",
                count:1,
                mass:5
            },
        ],
        preparation_method:[
            "Piekarnik nagrzewamy do 200 stopni, tryb góra-dół.",
            "Ziemniaki i marchew myjemy, obieramy i kroimy na cienkie talarki.",
            "Rybę nacieramy sokiem z cytryny i przyprawami. Następnie razem z pokrojonymi warzywami przekładamy do rękawa do pieczenia. Rękaw umieszczamy na blaszce i pieczemy przez ok. 30-35 minut.",
            "Gotowe danie przekładamy na talerz i polewamy oliwą. Na koniec posypujemy posiekaną natką pietruszki.",
        ],
        kcal:{
            calories_per_100g: 472,
            protein_per_100g: 30,
            fat_per_100g: 23,
            carbohydrates_per_100g: 41,
        }
    },
    {
        id: 6,
        name:"Klasyczne pancakes",
        imgSrc: "images/foto_przepisy/kolacja/klasyczne_pancakes.png",
        ingridients: [ 
            {
                name:"szklanki maślanki",
                count:0.5,
                mass:75
            },
            {
                name:"sztuki jajka",
                count:0.5,
                mass:28
            },
            {
                name:"łyżek mąki ryżowej",
                count:5,
                mass:50
            },
            {
                name:"łyżeczki oleju rzepakowego",
                count:3,
                mass:15
            },
            {
                name:"łyżeczki proszku do pieczenia",
                count:0.5,
                mass:1
            },
            {
                name:"łyżeczki erytrolu",
                count:3,
                mass:15
            },
        ],
        preparation_method:[
            "Do miski wlewamy maślankę, dodajemy mąkę, proszek do pieczenia.",
            "Wbijamy jajko, dodajemy erytrol. Miksujemy na gładką masę.",
            "Na patelni rozgrzewamy olej.",
            "Za pomocą chochelki wylewamy masę na środek patelni. Smażymy po 2 minuty na każdej stronie.",
            "Można dodać swoje ulubione dodatki. Smacznego!",
        ],
        kcal:{
            calories_per_100g: 192,
            protein_per_100g: 5,
            fat_per_100g: 10,
            carbohydrates_per_100g: 22,
        }
    },
    {
        id: 7,
        name:"Kanapki z focacci z prosciutto i mozzarellą",
        imgSrc: "images/foto_przepisy/sniadanie/kanapki_z_focacci_z_prosciutto_i_mozzarella.png",
        ingridients: [ 
            {
                name:"focaccia",
                count:0,
                mass:200
            },
            {
                name:"plastrów szynki parmeńskiej",
                count:5,
                mass:75
            },
            {
                name:"sztuki sera mozzarella",
                count:0.5,
                mass:60
            },
            {
                name:"rukola",
                count:0,
                mass:25
            },
            {
                name:"sztuki pomidora",
                count:0.5,
                mass:80
            },
        ],
        preparation_method:[
            "Kawałek focacci dzielimy na parzystą ilość części.",
            "Na połowie ilości kawałków foccaci układamy rukolę, plasterki sera, szynkę i kawałki pomidora. Składamy kanapki.",
        ],
        kcal:{
            calories_per_100g: 406,
            protein_per_100g: 22,
            fat_per_100g: 16,
            carbohydrates_per_100g: 42,
        }
    },
    {
        id: 8,
        name:"Pinsa z szynką i rukolą",
        imgSrc: "images/foto_przepisy/obiad/pinsa_z_szynka_i_rukola.png",
        ingridients: [ 
            {
                name:"sztuki pinsy",
                count:0.5,
                mass:110
            },
            {
                name:"opakowania pomidorów z puszki",
                count:0.1,
                mass:50
            },
            {
                name:"plaster tartej mozzarelli żółtej",
                count:1,
                mass:15
            },
            {
                name:"rukola",
                count:0,
                mass:25
            },
            {
                name:"sztuki mozzarelli",
                count:0.5,
                mass:60
            },
            {
                name:"plaster szynki z indyka",
                count:1,
                mass:15
            },
            {
                name:"sztuki pomidorków koktajlowych",
                count:4,
                mass:80
            },
        ],
        preparation_method:[
            "Nagrzewamy piekarnik według instrukcji zawartych na opakowaniu.",
            "Pinsę smarujemy pomidorami z puszki, nakładamy tartą mozzarellę. Pieczemy tyle czasu, ile podaje producent na opakowaniu.",
            "Na upieczoną pinsę nakładamy rukolę, plasterki mozzarelli, porwaną na kawałki szynkę i pomidorki pokrojone na połówki.",
        ],
        kcal:{
            calories_per_100g: 262,
            protein_per_100g: 15,
            fat_per_100g: 9,
            carbohydrates_per_100g: 29,
        }
    },
    {
        id: 9,
        name:"Koktajl bananowy",
        imgSrc: "images/foto_przepisy/kolacja/koktajl_bananowy.png",
        ingridients: [ 
            {
                name:"sztuka bananów",
                count:1,
                mass:120
            },
            {
                name:"łyżki odżywki białkowej",
                count:2,
                mass:20
            },
            {
                name:"szklanka mleka",
                count:1,
                mass:250
            },
            {
                name:"łyżki płatków owsianych",
                count:2,
                mass:20
            },
            {
                name:"płatków migdałów",
                count:0,
                mass:20
            },
        ],
        preparation_method:[
            "Wszystkie składniki koktajlu blendujemy na gładką masę. W razie potrzeby dolewamy wody, aby uzyskać preferowaną konsystencję.",
        ],
        kcal:{
            calories_per_100g: 505,
            protein_per_100g: 31,
            fat_per_100g: 18,
            carbohydrates_per_100g: 60,
        }
    },
    {
        id: 10,
        name:"Francuskie paluchy z pesto",
        imgSrc: "images/foto_przepisy/sniadanie/francuskie_paluchy_z_pesto.png",
        ingridients: [ 
            {
                name:"1 opakowanie ciasta francuskiego",
                mass:275
            },
            {
                name:"32 łyżeczki pesto zielonego",
                mass:160
            },
            {
                name:"1 sztuka jaja kurzego",
                mass:56
            },
        ],
        preparation_method:[
            "Piekarnik rozgrzewamy do 220 stopni, tryb góra-dół.",
            "Blat możemy delikatnie oprószyć mąką. Rozkładamy ciasto francuskie i delikatnie rozwałkowujemy",
            "Na rozwałkowanym cieście rozsmarowujemy pesto, następnie dzielimy ciasto na cienkie paski, zaczynając krojenie od węższego boku. Przygotowane paski skręcamy w delikatną spiralę.",
            "Na blaszce wykładamy papier do pieczenia i układamy gotowe paluchy. Blaszkę wkładamy do piekarnika i pieczemy całość przez ok. 15-20 minut do zezłocenia ciasta",
            "W małej miseczce rozkłócamy jajko i smarujemy nim paluchy.",
            "Blaszkę wkładamy do rozgrzanego piekarnika i pieczemy całość przez ok. 15-20 minut do zezłocenia ciasta",
        ],
        kcal:{
            calories_per_100g: 428,
            protein_per_100g: 7,
            fat_per_100g: 32,
            carbohydrates_per_100g: 26,
        }
    },
    {
        id: 11,
        name:"Makaron z pesto pietruszkowym",
        imgSrc: "images/foto_przepisy/obiad/makaron_z_pesto_pietruszkowym.png",
        ingridients: [ 
            {
                name:"mięsa z piersi kurczaka",
                count:0,
                mass:150
            },
            {
                name:"łyżeczka oliwy z oliwek",
                count:1,
                mass:5
            },
            {
                name:"łyżeczki ziół prowansalskich",
                count:0.5,
                mass:1.5
            },
            {
                name:"makaronu pełnoziarnistego",
                count:0,
                mass:50
            },
            {
                name:"łyżki pesto pietruszkowego",
                count:2,
                mass:40
            },
        ],
        preparation_method:[
            "Makaron gotujemy według instrukcji na opakowaniu. Ugotowany makaron odcedzamy, zachowując przy tym ok. 1/2 szklanki wody z gotowania makaronu.",
            "Na patelni rozgrzewamy oliwę. Mięso posypujemy przyprawami i smażymy, aż będzie gotowe (ok. 15 minut). Po tym czasie nacinamy mięso w najgrubszym miejscu i sprawdzamy, czy nie jest widoczny różowy kolor. W razie potrzeby przedłużamy czas smażenia. Gotowe mięso zdejmujemy z patelni i kroimy na kawałki.",
            "Na patelnię, na której smażyliśmy mięso, wykładamy makaron, dodajemy pesto i podsmażamy przez 1-2 minuty do połączenia składników. W przypadku zbyt gęstego sosu dodajemy wodę z gotowania makaronu, aby uzyskać preferowaną konsystencję.",
            "Gotowy makaron przekładamy na talerz i podajemy z kawałkami mięsa.",
        ],
        kcal:{
            calories_per_100g: 474,
            protein_per_100g: 42,
            fat_per_100g: 16,
            carbohydrates_per_100g: 39,
        }
    },
    {
        id: 12,
        name:"Koktajl czekoladowy",
        imgSrc: "images/foto_przepisy/kolacja/koktajl_czekoladowy.png",
        ingridients: [ 
            {
                name:"sztuka bananów",
                count:1,
                mass:120
            },
            {
                name:"łyżki odżywki białkowej",
                count:2,
                mass:20
            },
            {
                name:"łyżka kakao",
                count:1,
                mass:10
            },
            {
                name:"łyżeczki masła orzechowego",
                count:2,
                mass:20
            },
            {
                name:"szklanka mleka roślinnego",
                count:1,
                mass:250
            },
            {
                name:"łyżki płatków owsianych górskich",
                count:2,
                mass:20
            },
        ],
        preparation_method:[
            "Wszystkie składniki koktajlu blendujemy na gładką masę. W razie potrzeby dolewamy wody, aby uzyskać preferowaną konsystencję.",
        ],
        kcal:{
            calories_per_100g: 551,
            protein_per_100g: 26,
            fat_per_100g: 18,
            carbohydrates_per_100g: 76,
        }
    },
    {
        id: 13,
        name:"Tosty a la pizza",
        imgSrc: "images/foto_przepisy/sniadanie/tosty_a_la_pizza.png",
        ingridients: [ 
            {
                name:"kromki chleba żytniego",
                count:3,
                mass:90
            },
            {
                name:"opakowania passaty",
                count:0.1,
                mass:60
            },
            {
                name:"opakowania sera mozarelli",
                count:0.4,
                mass:45
            },
            {
                name:"plastry salami",
                count:3,
                mass:45
            },
            {
                name:"sztuki papryki",
                count:0.5,
                mass:85
            },
        ],
        preparation_method:[
            "Jajka gotujemy na twardo w lekko osolonej wodzie przez 7-8 minut (czas liczymy od zagotowania wody).",
            "Układamy salami i pokrojoną, odciśniętą w ręcznik papierowy mozzarellę.",
            "Kładziemy na zimną patelnię, przykrywamy pokrywką i podgrzewamy na średnim ogniu, aż ser się rozpuści. Możemy wstawić do piekarnika nagrzanego do 180 stopni (tryb góra-dół) i podpiekać aż ser się rozpuści.",
            "Podajemy z pokrojonymi warzywami.",
        ],
        kcal:{
            calories_per_100g: 566,
            protein_per_100g: 27,
            fat_per_100g: 28,
            carbohydrates_per_100g: 56,
        }
    },
    {
        id: 14,
        name:"Makaron z sosem bolońskim z tofu",
        imgSrc: "images/foto_przepisy/obiad/makaron_z_sosem_bolonskim_z_tofu.png",
        ingridients: [ 
            {
                name:"makaronu spaghetti",
                count:0,
                mass:50
            },
            {
                name:"opakowania passaty pomidorowej",
                count:0.3,
                mass:175
            },
            {
                name:"szklanki wody",
                count:0.3,
                mass:65
            },
            {
                name:"opakowania tofu naturalnego",
                count:0.8,
                mass:135
            },
            {
                name:"łyżeczki bazylii",
                count:0.3,
                mass:1
            },
            {
                name:"łyżeczka erytrolu",
                count:1,
                mass:5
            },
            {
                name:"łyżeczki oliwy z oliwek",
                count:2,
                mass:10
            },
        ],
        preparation_method:[
            "Makaron przygotowujemy według wskazówek na opakowaniu.",
            "W garnuszku lub głębokiej patelni umieszczamy passatę i wodę.",
            "Dodajemy erytrol oraz pozostałe przyprawy.",
            "Tofu rozgniatamy widelcem na drobne kawałki, następnie dodajemy do sosu, gdy ten już będzie zagotowany.",
            "Całość razem gotujemy jeszcze przez ok. 5-10 minut. Wyłączamy palnik i mieszamy z oliwą.",
            "Makaron podajemy z sosem i tofu.",
        ],
        kcal:{
            calories_per_100g: 248,
            protein_per_100g: 13,
            fat_per_100g: 11,
            carbohydrates_per_100g: 24,
        }
    },
    {
        id: 15,
        name:"Owsianka z Inką",
        imgSrc: "images/foto_przepisy/kolacja/owsianka_z_inka.png",
        ingridients: [ 
            {
                name:"łyżki płatków owsianych",
                count:3,
                mass:30
            },
            {
                name:"szklanki mleka",
                count:0.5,
                mass:100
            },
            {
                name:"łyżeczki kawy zbożowej Inka",
                count:0.5,
                mass:1.5
            },
            {
                name:"opakowania jogurtu skyr",
                count:0.5,
                mass:75
            },
            {
                name:"łyżeczki miodu",
                count:0.5,
                mass:6
            },
            {
                name:"mieszanki orzechów",
                count:0,
                mass:15
            },
            {
                name:"malin",
                count:0,
                mass:50
            },
            {
                name:"jeżyn",
                count:0,
                mass:25
            },
        ],
        preparation_method:[
            "Płatki gotujemy w mleku do miękkości. Płatki możemy również zalać gorącym mlekiem i pozostawić, aż zmiękną.",
            "Dodajemy Inkę, skyr i miód. Mieszamy.",
            "Owsiankę podajemy z owocami i orzechami.",
        ],
        kcal:{
            calories_per_100g: 171,
            protein_per_100g: 10,
            fat_per_100g: 6,
            carbohydrates_per_100g: 22,
        }
    },
    {
        id: 16,
        name:"Jajecznica na parze",
        imgSrc: "images/foto_przepisy/sniadanie/jajecznica _na_parze.png",
        ingridients: [ 
            {
                name:"sztuki jaja kurzego",
                count:2,
                mass:112
            },
            {
                name:"kromki chleba pszennego",
                count:2,
                mass:60
            },
            {
                name:"łyżeczki oleju rzepakowego",
                count:2,
                mass:10
            },
            {
                name:"plastry szynki z indyka",
                count:4,
                mass:60
            },
            {
                name:"sztuki ogórka",
                count:1,
                mass:150
            },
        ],
        preparation_method:[
            "W większym garnku zagotowujemy wodę (rozmiar garnka dopasowujemy do patelni, na której będziemy gotować jajecznicę na parze). Na patelnię wylewamy jajka. Dodajemy sól. Następnie cały czas mieszamy i gotujemy jajka na parze do równomiernego ścięcia masy. Można również skorzystać z parowaru.",
            "Pieczywo smarujemy olejem i układamy na nim wędlinę.",
            "Ogórka myjemy, obieramy, pozbywamy się gniazd nasiennych i kroimy na kawałki.",
            "Jajecznicę podajemy z kanapkami i ogórkiem.",
        ],
        kcal:{
            calories_per_100g: 472,
            protein_per_100g: 30,
            fat_per_100g: 23,
            carbohydrates_per_100g: 38,
        }
    },
    {
        id: 17,
        name:"Pinsa z szynką z kurczaka i suszonymi pomidorami",
        imgSrc: "images/foto_przepisy/obiad/pinsa_z_szynka_z_kurczaka_i_suszonymi_pomidorami.png",
        ingridients: [ 
            {
                name:"sztuki pinsy",
                count:0.5,
                mass:110
            },
            {
                name:"opakowania pomidorów z puszki",
                count:0.1,
                mass:50
            },
            {
                name:"plaster tartej mozzarelli żółtej",
                count:1,
                mass:15
            },
            {
                name:"rukola",
                count:0,
                mass:25
            },
            {
                name:"sztuki mozzarelli",
                count:0.5,
                mass:60
            },
            {
                name:"sztuk pomidorków koktajlowych",
                count:5,
                mass:100
            },
            {
                name:"plastry szynki z kurczaka",
                count:2,
                mass:20
            },
            {
                name:"sztuka pomidorów suszonych",
                count:1,
                mass:25
            },
            {
                name:"łyżki sera grana padano",
                count:0.5,
                mass:5
            },
        ],
        preparation_method:[
            "Nagrzewamy piekarnik według instrukcji zawartych na opakowaniu.",
            "Pinsę smarujemy pomidorami z puszki, nakładamy tartą mozzarellę. Pieczemy tyle czasu, ile podaje producent na opakowaniu.",
            "Na ciepłą pinsę nakładamy rukolę, pokrojoną w plasterki mozzarellę, pokrojone na pół pomidorki, porwaną na kawałki szynkę, pokrojone suszone pomidory i starty ser grana padano.",
        ],
        kcal:{
            calories_per_100g: 298,
            protein_per_100g: 17,
            fat_per_100g: 11,
            carbohydrates_per_100g: 32,
        }
    },
    {
        id: 18,
        name:"Ryżowe placuszki z owocami",
        imgSrc: "images/foto_przepisy/kolacja/ryzowe_placuszki_z_owocami.png",
        ingridients: [ 
            {
                name:"łyżek mąki ryżowej",
                count:10,
                mass:100
            },
            {
                name:"sztuki jajek",
                count:0.5,
                mass:28
            },
            {
                name:"szklanki mleka",
                count:0.5,
                mass:100
            },
            {
                name:"łyżeczki proszku do pieczenia",
                count:0.5,
                mass:2
            },
            {
                name:"łyżeczka oleju rzepakowego",
                count:1,
                mass:5
            },
            {
                name:"łyżeczki erytrolu",
                count:0.5,
                mass:2.5
            },
            {
                name:"borówek",
                count:0,
                mass:75
            },
        ],
        preparation_method:[
            "Wszystkie składniki ciasta miksujemy na gładką masę.",
            "Na dobrze rozgrzaną patelnię nakładamy za pomocą łyżki niewielkie porcje ciasta. Zmniejszamy moc palnika, smażymy do całkowitego ścięcia smażonej strony. Przy pomocy płaskiej łopatki obracamy placuszki i ponownie smażymy do ścięcia smażonej strony.",
            "Podajemy z owocami.",
        ],
        kcal:{
            calories_per_100g: 261,
            protein_per_100g: 8,
            fat_per_100g: 5,
            carbohydrates_per_100g: 48,
        }
    },
    {
        id: 19,
        name:"Kanapki z jajkiem na twardo i warzywami",
        imgSrc: "images/foto_przepisy/sniadanie/kanapki_z_jajkiem_na_twardo_i_warzywami.png",
        ingridients: [ 
            {
                name:"kromki chleba pszennego",
                count:3,
                mass:90
            },
            {
                name:"łyżki serka śmietankowego",
                count:2,
                mass:50
            },
            {
                name:"sztuki jaja kurzego",
                count:2,
                mass:112
            },
            {
                name:"sztuka pomidora",
                count:1,
                mass:160
            },
            {
                name:"szczypta soli",
                count:1,
                mass:0.25
            },
        ],
        preparation_method:[
            "Jajka gotujemy na twardo w lekko osolonej wodzie przez 7-8 minut (czas liczymy od zagotowania wody).",
            "Pomidora obieramy ze skórki i kroimy na plastry.",
            "Pieczywo smarujemy serkiem, układamy pomidora i pokrojone jajko. Całość posypujemy solą i pieprzem do smaku.",
        ],
        kcal:{
            calories_per_100g: 542,
            protein_per_100g: 26,
            fat_per_100g: 24,
            carbohydrates_per_100g: 58,
        }
    },
    {
        id: 20,
        name:"Dorsz gotowany na parze z kuskusem",
        imgSrc: "images/foto_przepisy/obiad/dorsz_gotowany_na_parze_z_kuskusem.png",
        ingridients: [ 
            {
                name:"dorsz",
                count:0,
                mass:100
            },
            {
                name:"łyżeczki ziół prowansalskich",
                count:0.3,
                mass:0.8
            },
            {
                name:"sztuki marchewki",
                count:0.5,
                mass:40
            },
            {
                name:"sztuki selera",
                count:0.5,
                mass:100
            },
            {
                name:"łyżeczki masła",
                count:3,
                mass:15
            },
            {
                name:"kaszy kuskus",
                count:0,
                mass:50
            },
        ],
        preparation_method:[
            "Rybę doprawiamy ziołami i solą. Gotujemy na parze ok 15 – 20 minut.",
            "Warzywa obieramy, kroimy na małe kawałki. Gotujemy do miękkości w wodzie lub na parze, dokładając do ryby. Miękkie warzywa blendujemy na puree z dodatkiem masła. Doprawiamy solą do smaku.",
            "Kaszę kuskus przygotowujemy wg przepisu na opakowaniu.",
            "Rybę podajemy z kaszą i puree warzywnym.",
        ],
        kcal:{
            calories_per_100g: 212,
            protein_per_100g: 13,
            fat_per_100g: 7,
            carbohydrates_per_100g: 24,
        }
    },
    {
        id: 21,
        name:"Sałatka z serem brie, winogronami, orzechami i grzankami",
        imgSrc: "images/foto_przepisy/kolacja/salatka_z_serem_brie_winogronami_orzechami_i_grzankami.png",
        ingridients: [ 
            {
                name:"miksu sałat",
                count:0,
                mass:50
            },
            {
                name:"kromka pieczywa na grzanki",
                count:1,
                mass:30
            },
            {
                name:"plastry sera brie",
                count:2,
                mass:60
            },
            {
                name:"winogron",
                count:0,
                mass:100
            },
            {
                name:"orzechów włoskich",
                count:0,
                mass:15
            },
            {
                name:"łyżki octu",
                count:0.5,
                mass:3
            },
            {
                name:"łyżeczka musztardy",
                count:1,
                mass:10
            },
            {
                name:"łyżki miodu",
                count:0.5,
                mass:6
            },
        ],
        preparation_method:[
            "Kroimy ser brie na kawałki, winogrona na pół, orzechy włoskie siekamy.",
            "Przygotowujemy grzanki. Pieczywo kroimy w kostkę i pieczemy w piekarniku przez około 8-10 minut w piekarniku nagrzanym na 180*C, aż będą rumiane.",
            "Przygotowujemy sos z miodu, octu i musztardy.",
            "Na talerz nakładamy miks sałat, pokrojony ser i winogrona. Całość posypujemy posiekanymi orzechami i grzankami, polewamy sosem miodowo musztardowym.Smacznego!",
        ],
        kcal:{
            calories_per_100g: 247,
            protein_per_100g: 9,
            fat_per_100g: 14,
            carbohydrates_per_100g: 22,
        }
    },
];

export default meals;