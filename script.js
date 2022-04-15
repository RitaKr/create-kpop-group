
const game = document.getElementById('game');

let gameArr = [
    {
        roundName: 'Ваше агенство',
        roundId: 1,
        aviable: true,
        cards: [
            '<img src="images/1/yg.jpg" class="background-img" width="100%"><span class="cilent-table">YG Entertainment</span>',
            '<img src="images/1/cube.png" class="background-img" width="100%"><span class="cilent-table">Cube Entertainment</span>',
            '<img src="images/1/hybe.jpg" class="background-img"><span class="cilent-table">HYBE Labels</span>',
            '<img src="images/1/jyp.jpg" class="background-img" width="100%"><span class="cilent-table">JYP Entertainment</span>',
            '<img src="images/1/sm.jpg" class="background-img" width="100%"><span class="cilent-table">SM Entertainment</span>',
            '<img src="images/1/pnation.jpg" class="background-img"><span class="cilent-table">P-Nation</span>',
            '<img src="images/1/woollim.jpg" class="background-img"><span class="cilent-table">Woollim Entertainment</span>',
            '<img src="images/1/fnc.jpg" class="background-img"><span class="cilent-table">FNC Entertainment</span>',
            '<img src="images/1/kq.jpg" class="background-img"><span class="cilent-table">KQ Entertainment</span>'
        ]
    },
    {
        roundName: 'Количество мемберов',
        roundId: 2,
        aviable: true,
        cards: [
            '4 мембера',
            '5 мемберов',
            '6 мемберов',
            '7 мемберов',
            '8 мемберов',
            '9 мемберов',
            '10 мемберов',
            '12 мемберов',
            '11 мемберов',
            '13 мемберов'
            ]
    },
    {
        roundName: 'Дебютный концепт',
        roundId: 3,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/3/dark-concept.jpg" title="дерзкий"><span class="answer-title">дерзкий</span>',
            '<img class="background-img" src="images/3/cute-concept.jpg" title="милый и яркий"><span class="answer-title">милый и яркий</span>',
            '<img class="background-img" src="images/3/sad-concept.jpg" title="драматический"><span class="answer-title">драматический</span>',
            '<img class="background-img" src="images/3/fantasy-concept.jpg" title="фантастический"><span class="answer-title">фантастический</span>',
            '<img class="background-img" src="images/3/school-concept.png" title="школьный"><span class="answer-title">школьный</span>',
            '<img class="background-img" src="images/3/aesthetic-concept.jpg" title="эстетичный"><span class="answer-title">эстетичный</span>',
            '<img class="background-img" src="images/3/korea.jpg" title="корейский етнический"><span class="answer-title">корейский етнический</span>',
            '<img class="background-img" src="images/3/sport.jpg" title="спортивный"><span class="answer-title">спортивный</span>',
            '<img class="background-img" src="images/3/soft.jpg" title="уютный"><span class="answer-title">уютный</span>',
            '<img class="background-img" src="images/3/sci-fi.png" title="футуристический"><span class="answer-title">футуристический</span>',
            '<img class="background-img" src="images/3/summer.jpg" title="летний"><span class="answer-title">летний</span>',
            '<img class="background-img" src="images/3/vampire.jpg" title="вампирский"><span class="answer-title">вампирский</span>'
            ]
    },
    {
        roundName: 'Лидер группы',
        roundId: 4,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/4/rm.jpg" title="BTS"><span class="answer-title">RM</span>',
            '<img class="background-img" src="images/4/bang-chan.jpg" title="Stray Kids"><span class="answer-title">Бан Чан</span>',
            '<img class="background-img" src="images/4/gdragon.jpg" title="BigBang"><span class="answer-title">G-Dragon</span>',
            '<img class="background-img" src="images/4/suho.jpg" title="EXO"><span class="answer-title">Сухо</span>',
            '<img class="background-img" src="images/4/shownu.jpg" title="Monsta X"><span class="answer-title">Шону</span>',
            '<img class="background-img" src="images/4/jb.jpg" title="ex Got7"><span class="answer-title">JB</span>',
            '<img class="background-img" src="images/4/taeyoung.jpg" title="NCT"><span class="answer-title">Тэён</span>',
            '<img class="background-img" src="images/4/jungwon.jpg" title="ENHYPEN"><span class="answer-title">Чонвон</span>',
            '<img class="background-img" src="images/4/soobin.jpg" title="TXT"><span class="answer-title">Субин</span>'
            ]
    },
    {
        roundName: 'Главный рэпер',
        roundId: 5,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/5/suga.jpg" title="BTS"><span class="answer-title">Suga</span>',
            '<img class="background-img" src="images/5/changbin.jpg" title="Stray Kids"><span class="answer-title">Чанбин</span>',
            '<img class="background-img" src="images/5/top.png" title="BigBang"><span class="answer-title">T.O.P</span>',
            '<img class="background-img" src="images/5/zico.jpg" title="Block B"><span class="answer-title">Zico</span>',
            '<img class="background-img" src="images/5/jooheon.jpg" title="Monsta X"><span class="answer-title">Джухон</span>',
            '<img class="background-img" src="images/5/mark.jpg" title="NCT, SuperM"><span class="answer-title">Марк</span>',
            '<img class="background-img" src="images/5/chanyeol.jpg" title="EXO"><span class="answer-title">Чанёль</span>',
            '<img class="background-img" src="images/5/bobby.jpg" title="IKON"><span class="answer-title">Бобби</span>',
            '<img class="background-img" src="images/5/hongjoong.jpg" title="ATEEZ"><span class="answer-title">Хонджун</span>',
            '<img class="background-img" src="images/5/mino.jpg" title="WINNER"><span class="answer-title">Мино</span>',
            ]
    },
    {
        roundName: 'Ведущий рэпер',
        roundId: 6,
        aviable: true,
        cards: [
            
            '<img class="background-img" src="images/6/yeonjun.jpg" title="TXT"><span class="answer-title">Ёнджун</span>',
            '<img class="background-img" src="images/6/han.png" title="Stray Kids"><span class="answer-title">Хан</span>',
            '<img class="background-img" src="images/6/jackson.jpg" title="ex Got7"><span class="answer-title">Джексон</span>',
            '<img class="background-img" src="images/6/mingi.jpg" title="ATEEZ"><span class="answer-title">Минги</span>',
            '<img class="background-img" src="images/6/sehun.jpg" title="EXO"><span class="answer-title">Сехун</span>',
            '<img class="background-img" src="images/6/vernon.jpg" title="SEVENTEEN"><span class="answer-title">Вернон</span>',
            '<img class="background-img" src="images/6/wooseok.jpg" title="Pentagon"><span class="answer-title">Усок</span>',
            '<img class="background-img" src="images/6/hyunsuk.jpg" title="Treasure"><span class="answer-title">Хёнсок</span>',
            '<img class="background-img" src="images/6/sonwoo.jpg" title="The Boyz"><span class="answer-title">Сону</span>'
            ]
    },
    {
        roundName: 'Главный вокалист',
        roundId: 7,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/7/doyong.jpg" title="NCT 127, NCT U"><span class="answer-title">Доён</span>',
            '<img class="background-img" src="images/7/baekhyun.jpg" title="EXO, SuperM"><span class="answer-title">Бэкхён</span>',
            '<img class="background-img" src="images/7/kihyun.jpg" title="Monsta X"><span class="answer-title">Кихён</span>',
            '<img class="background-img" src="images/7/seungmin.jpg" title="Stray Kids"><span class="answer-title">Сынмин</span>',
            '<img class="background-img" src="images/7/taeyang.jpg" title="BigBang"><span class="answer-title">Тэян</span>',
            '<img class="background-img" src="images/7/jongho.png" title="ATEEZ"><span class="answer-title">Чонхо</span>',
            '<img class="background-img" src="images/7/jungkook.jpg" title="BTS"><span class="answer-title">Чонгук</span>',
            '<img class="background-img" src="images/7/heeseung.jpg" title="ENHYPEN"><span class="answer-title">Хисын</span>',
            '<img class="background-img" src="images/7/dk.jpg" title="SEVENTEEN"><span class="answer-title">DK</span>',
            '<img class="background-img" src="images/7/seoho.jpg" title="Oneus"><span class="answer-title">Сохо</span>',
            ]
    },
    {
        roundName: 'Ведущий вокалист',
        roundId: 8,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/8/jaehyun.jpg" title="NCT"><span class="answer-title">Джэхён</span>',
            '<img class="background-img" src="images/8/chen.jpg" title="EXO"><span class="answer-title">Чен</span>',
            '<img class="background-img" src="images/8/jimin.jpg" title="BTS"><span class="answer-title">Чимин</span>',
            '<img class="background-img" src="images/8/taehyun.jpg" title="TXT"><span class="answer-title">Тэхён</span>',
            '<img class="background-img" src="images/8/hui.jpg" title="Pentagon"><span class="answer-title">Хуи</span>',
            '<img class="background-img" src="images/8/jae.jpg" title="ex Day6"><span class="answer-title">Джэ</span>',
            '<img class="background-img" src="images/8/youngjae.jpg" title="ex Got7"><span class="answer-title">Ёнджэ</span>',
            '<img class="background-img" src="images/8/yedam.jpg" title="Treasure"><span class="answer-title">Йедам</span>',
            '<img class="background-img" src="images/8/woozi.jpg" title="SEVENTEEN"><span class="answer-title">Woozi</span>',
            '<img class="background-img" src="images/8/san.jpg" title="ATEEZ"><span class="answer-title">Сан</span>'
            ]
    },
    {
        roundName: 'Главный танцор',
        roundId: 9,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/9/jhope.jpg" title="BTS"><span class="answer-title">J-hope</span>',
            '<img class="background-img" src="images/9/taemin.jpg" title="SHINEe, SuperM"><span class="answer-title">Тэмин</span>',
            '<img class="background-img" src="images/9/leeknow.jpg" title="Stray Kids"><span class="answer-title">Lee know</span>',
            '<img class="background-img" src="images/9/kai.jpg" title="EXO, SuperM"><span class="answer-title">Кай</span>',
            '<img class="background-img" src="images/9/hoshi.jpg" title="SEVENTEEN"><span class="answer-title">Хоши</span>',
            '<img class="background-img" src="images/9/bambam.jpg" title="ex Got7"><span class="answer-title">Бэм-бэм</span>',
            '<img class="background-img" src="images/9/niki.jpg" title="ENHYPEN"><span class="answer-title">Ники</span>',
            '<img class="background-img" src="images/9/ten.jpg" title="NCT, WayV, SuperM"><span class="answer-title">Тэн</span>',
            '<img class="background-img" src="images/9/q.jpg" title="The Boyz"><span class="answer-title">Q</span>'
            ]
    },
    {
        roundName: 'Вижуал',
        roundId: 10,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/10/hyunjin.jpg" title="Stray Kids"><span class="answer-title">Хёнджин</span>',
            '<img class="background-img" src="images/10/jin.jpg" title="BTS"><span class="answer-title">Джин</span>',
            '<img class="background-img" src="images/10/eunwoo.jpg" title="Astro"><span class="answer-title">Ыну</span>',
            '<img class="background-img" src="images/10/lucas.jpg" title="NCT, WayV, SuperM"><span class="answer-title">Лукас</span>',
            '<img class="background-img" src="images/10/jinyoung.jpg" title="ex Got7"><span class="answer-title">Джинён</span>',
            '<img class="background-img" src="images/10/jinwoo.jpg" title="Winner"><span class="answer-title">Джину</span>',
            '<img class="background-img" src="images/10/bomgyu.jpg" title="TXT"><span class="answer-title">Бомгю</span>',
            '<img class="background-img" src="images/10/sunghoon.jpg" title="ENHYPEN"><span class="answer-title">Сонхун</span>',
            '<img class="background-img" src="images/10/hyunjae.jpg" title="The Boyz"><span class="answer-title">Хёнджэ</span>'
            ]
    },
    {
        roundName: 'Макнэ',
        roundId: 11,
        aviable: true,
        cards: [
            
            '<img class="background-img" src="images/11/junghwan.jpg" title="Treasure" width="100%"><span class="answer-title">Джонхван</span>',
            '<img class="background-img" src="images/11/jisung.jpg" title="NCT Dream"><span class="answer-title">Джисон</span>',
            '<img class="background-img" src="images/11/in.jpg" title="Stray Kids"><span class="answer-title">I.N</span>',
            '<img class="background-img" src="images/11/kyuhyun.jpg" title="Super Junior"><span class="answer-title">Кюхён</span>',
            '<img class="background-img" src="images/11/yugyeom.jpg" title="ex Got7"><span class="answer-title">Югём</span>',
            '<img class="background-img" src="images/11/eric.jpg" title="The Boyz"><span class="answer-title">Эрик</span>',
            '<img class="background-img" src="images/11/im.jpg" title="Monsta X"><span class="answer-title">I.M</span>',
            '<img class="background-img" src="images/11/dino.jpg" title="SEVENTEEN"><span class="answer-title">Дино</span>'
            ]
    },
    {
        roundName: 'Иностранный участник',
        roundId: 12,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/12/yuto.jpg" title="Юто (Pentagon)"><span class="answer-title">Японец</span>',
            '<img class="background-img" src="images/12/lay.jpg" title="Лэй (EXO)"><span class="answer-title">Китаец</span>',
            '<img class="background-img" src="images/12/ten.jpg" title="Тэн (NCT U, WayV, SuperM)"><span class="answer-title">Таец</span>',
            '<img class="background-img" src="images/12/jay.jpg" title="Джей (ENHYPEN)"><span class="answer-title">Американец</span>',
            '<img class="background-img" src="images/12/felix.jpg" title="Феликс (Stray Kids)"><span class="answer-title">Австралиец</span>',
            'Нет иностранных участников',
            '<img class="background-img" src="images/12/kevin.jpg" title="Кевин (The Boyz)"><span class="answer-title">Канадец</span>',
            '<img class="background-img" src="images/12/alex.jpg" title="Алекс (Drippin)"><span class="answer-title">Немец</span>'
            ]
    },
    {
        roundName: 'Дата дебюта',
        roundId: 13,
        aviable: true,
        cards: [
            '12 февраля',
            '1 декабря',
            '27 июня',
            '30 сентября',
            '21 августа',
            '8 апреля',
            '4 марта',
            '20 ноября',
            '16 мая'
            ]
    },
    {
        roundName: 'Длительность контракта',
        roundId: 14,
        aviable: true,
        cards: [
            '1 год',
            '1.5 года',
            '2 года',
            '3 года',
            '5 лет',
            '7 лет',
            '10 лет'
            ]
    },
    {
        roundName: 'Дебютное выступление состоялось на шоу',
        roundId: 15,
        aviable: true,
        cards: [
            '<img class="background-img" src="images/15/theshow.jpg" width="100%" ><span class="cilent-table">The Show</span>',
            '<img class="background-img" src="images/15/mcountdown.jpg" ><span class="cilent-table">M Countdown</span>',
            '<img class="background-img" src="images/15/inkigayo.jpg" ><span class="cilent-table">Inkigayo</span>',
            '<img class="background-img" src="images/15/k-chart.jpg" width="100%" ><span class="cilent-table">K-chart</span>',
            '<img class="background-img" src="images/15/show-champion.jpg" width="100%" ><span class="cilent-table">Show Champion</span>',
            '<img class="background-img" src="images/15/umt.jpg" title="УКРАЇНА МАЄ ТАЛАНТ)0)))"><span class="cilent-table">УКРАЇНА МАЄ ТАЛАНТ)0)))</span>',
            '<img class="background-img" src="images/15/music-bank.jpg" heigh="100%" ><span class="cilent-table">Music Bank</span>',
            '<img class="background-img" src="images/15/show-music-core.jpg" width="100%" ><span class="cilent-table">Show! Music Core</span>'
            
            ]
    },
    {
        roundName: 'Название группы',
        roundId: 16,
        aviable: true,
        cards: [
            'BBOY',
            'ON-m',
            'Runaway',
            '1N4U',
            'MLK',
            'Unstopable',
            'FutuRe',
            '4EVER',
            'Kross',
            'NXT'
            
            ]
    },
    {
        roundName: 'Дебютная песня',
        roundId: 17,
        aviable: true,
        cards: [
            'Oneus - Valkyrie',
            'NCT Dream - Chewing Gum',
            'Wanna One - Energetic',
            'Pentagon - Gorilla',
            'NU`EST - Face',
            'KNK - Knock',
            'ENHYPEN - Given-Taken',
            'Shinee - Replay',
            'TXT - Crown',
            'ATEEZ - Treasure',
            'Stray Kids - District 9',
            'Monsta X - Trespass'
            ]
    }

]



function arrangeCards(){
    gameArr.forEach(round => {
        let roundDiv = document.createElement('div');
        let cardsSpace = document.createElement('div');
        let roundH2 = document.createElement('h2');
        roundH2.innerText = round.roundName;
        roundDiv.classList.add(`round-div`);
        cardsSpace.classList.add(`cards-space`);
        roundDiv.classList.add(`round${round.roundId}`);
        roundDiv.appendChild(roundH2);
        roundDiv.appendChild(cardsSpace);
        round.cards = arrangeRandomCardObj(round);
        round.cards.forEach(card => {
            let cardDiv = document.createElement('div');
            let resSpan = document.createElement('span');
            let numSpan = document.createElement('span');
            cardDiv.classList.add('card');
            cardDiv.id = `c${round.roundId}_${card.id}`
            resSpan.classList.add(`cilent`);
            resSpan.innerHTML = card.answer;
            numSpan.classList.add('card-number');
            numSpan.classList.add('visible');
            numSpan.innerHTML = card.id;
            cardDiv.appendChild(resSpan);
            cardDiv.appendChild(numSpan);
            cardsSpace.appendChild(cardDiv);
            
        })
        game.appendChild(roundDiv); 
    });

   
    function arrangeRandomCardObj(round){
        let cardArr = round.cards;
        let newCardArr =[];
        for (i=1; i<=6; i++) {
            item = {};
            item.id = i;
            let random = Math.floor(Math.random()*(cardArr.length));
            item.answer = cardArr[random];
            cardArr.splice(random, 1);
            newCardArr.push(item);
        }      
        return newCardArr;
    }  
}
arrangeCards();
let resultObj = {};
function gameMoves () {
    
    gameArr.forEach(round => { 
        round.cards.forEach(card => {
            document.querySelector(`#c${round.roundId}_${card.id}`).addEventListener('click', () => 
            {
                if (round.aviable) {
                    openCard(`#c${round.roundId}_${card.id}`, `.round${round.roundId}`);
                    resultObj[round.roundName] = card.answer;
                }; 
                round.aviable = false;
                arrangeResTable()
            }, {once: true});
        });
        
    });
    console.log(resultObj);
    return resultObj;
}

function openCard(card, roundDiv){
    
        document.querySelector(card).classList.add('chosen');
        document.querySelectorAll(`${roundDiv} .card`).forEach(item => {
            item.classList.add('unaviable');
        });
        document.querySelector(card).classList.remove('unaviable');
        document.querySelectorAll(`${roundDiv} .cilent`).forEach(item => {
            item.classList.remove('cilent');
            item.classList.add('visible');
        });
        document.querySelectorAll(`${roundDiv} .card-number`).forEach(span => {
           span.classList.remove('visible');
            span.classList.add('cilent');
           
        }); 
   
   
}

let resultSpace = document.getElementById('result-space');
let getResBtn = document.getElementById('get-res');
gameMoves ();

//getResBtn.addEventListener('click', ()=>{arrangeResTable()})
function arrangeResTable(){
    
    let keys = Object.keys(resultObj);
    let values = Object.values(resultObj);
    console.log(keys, values);
    let table = document.createElement('table');
    table.classList.add('res-table');
    let result = document.createElement('p');
    result.classList.add('res-p');
    result.innerHTML = 'Ьы рады представить вам новую мужскую кпоп группу! Вот что нам известно о ней: '
    keys.forEach((item, i) => {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');
        th.innerHTML = item;
        td.innerHTML = values[i];
        result.innerHTML = `${result.innerText}${item} ${values[i]}; `;
        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    });

    resultSpace.innerHTML = '';
    resultSpace.appendChild(table);
       
}


