function renderSeminar() {
    let cardSeminar = document.querySelector("#card-seminar");
    for (let seminar of dataSeminar) {
        let img = document.createElement('img');
        img.setAttribute('src', seminar.gambar);
        img.setAttribute('alt', 'seminar');

        let p = document.createElement('p');
        p.innerText = seminar.judul;

        let judul = document.createElement('div');
        judul.setAttribute('class', 'judul');
        judul.appendChild(p);

        let gambar = document.createElement('div');
        gambar.setAttribute('class', 'gambar')
        gambar.appendChild(img);

        let cardInner = document.createElement('div');
        cardInner.setAttribute('class', 'card-inner');
        cardInner.appendChild(gambar);
        cardInner.appendChild(judul);

        let a = document.createElement('a');
        a.setAttribute('href', seminar.link);
        a.setAttribute('target', '_blank');
        a.appendChild(cardInner);

        let card = document.createElement('div')
        card.setAttribute('class', 'card');
        card.appendChild(a);

        cardSeminar.appendChild(card);
    }
}



function renderLomba() {
    let cardLomba = document.querySelector("#card-lomba");
    for (let lomba of dataLomba) {
        let img = document.createElement('img');
        img.setAttribute('src', lomba.gambar);
        img.setAttribute('alt', 'lomba & event');

        let p = document.createElement('p');
        p.innerText = lomba.judul;

        let judul = document.createElement('div');
        judul.setAttribute('class', 'judul');
        judul.appendChild(p);

        let gambar = document.createElement('div');
        gambar.setAttribute('class', 'gambar')
        gambar.appendChild(img);

        let cardInner = document.createElement('div');
        cardInner.setAttribute('class', 'card-inner');
        cardInner.appendChild(gambar);
        cardInner.appendChild(judul);

        let a = document.createElement('a');
        a.setAttribute('href', lomba.link);
        a.setAttribute('target', '_blank');
        a.appendChild(cardInner);

        let card = document.createElement('div')
        card.setAttribute('class', 'card');
        card.appendChild(a);

        cardLomba.appendChild(card);
    }
}



function renderPelatihan() {
    let cardPelatihan = document.querySelector("#card-pelatihan");
    for (let pelatihan of dataPelatihan) {
        let img = document.createElement('img');
        img.setAttribute('src', pelatihan.gambar);
        img.setAttribute('alt', 'pelatihan');

        let p = document.createElement('p');
        p.innerText = pelatihan.judul;

        let judul = document.createElement('div');
        judul.setAttribute('class', 'judul');
        judul.appendChild(p);

        let gambar = document.createElement('div');
        gambar.setAttribute('class', 'gambar')
        gambar.appendChild(img);

        let cardInner = document.createElement('div');
        cardInner.setAttribute('class', 'card-inner');
        cardInner.appendChild(gambar);
        cardInner.appendChild(judul);

        let a = document.createElement('a');
        a.setAttribute('href', pelatihan.link);
        a.setAttribute('target', '_blank');
        a.appendChild(cardInner);

        let card = document.createElement('div')
        card.setAttribute('class', 'card');
        card.appendChild(a);

        cardPelatihan.appendChild(card);
    }
}


renderSeminar();  
renderLomba();
renderPelatihan();
