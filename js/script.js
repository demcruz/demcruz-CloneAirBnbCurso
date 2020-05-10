const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const random = document.querySelector('.random');

async function getRandom() {
    const response = await fetch(API_URL);
    const json = await response.json();


    for (i in json) {

        const classCard = document.createElement('div');
        classCard.setAttribute('class', 'col-md-4 vasco');

        const card = document.createElement('div');
        card.setAttribute('class', 'card mb-4 shadow-sm');


        const imagens = document.createElement('img');
        imagens.setAttribute("class", "bd-placeholder-img card-img-top")
        imagens.src = json[i].photo;
        card.appendChild(imagens);

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        card.appendChild(cardBody);

        const cardPropertyType = document.createElement('p');
        cardPropertyType.setAttribute("class", "card-text font-weight-bolde");
        var newText = document.createTextNode(json[i].property_type);
        cardPropertyType.appendChild(newText);
        cardBody.appendChild(cardPropertyType);

        const cardName = document.createElement('p');
        cardName.setAttribute("class", "card-text font-weight-bolde");
        var newText = document.createTextNode(json[i].name);
        cardName.appendChild(newText);
        cardBody.appendChild(cardName);

        const cardPrice = document.createElement('p');
        cardPrice.setAttribute("class", " card-title pricing-card-title font-weight-bold");
        var newText = document.createTextNode("R$ " + json[i].price + ",00 ");
        cardPrice.appendChild(newText);
        cardBody.appendChild(cardPrice);

        classCard.appendChild(card);

        random.appendChild(classCard);
    }


}



getRandom();

