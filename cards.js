const kolloActivities = [
  {
    img: 'https://www.synsholmen.se/images/kul-pa-kollo/matlagning-3.jpg',
    imgAlt: 'Barn som lagar mat tillsammans',
    link: "https://www.google.se",
    title: 'Matlagning',
    text: 'Vi lagar mat och har roligt tillsammans'
  },
  {
    img: 'https://jfst.se/media/2544/_dsc3271.jpg',
    imgAlt: 'Barn som badar på kollo',
    link: "https://www.google.se",
    title: 'Lekar',
    text: 'Roliga lekar både ute och inomhus'
  },
  {
    img: 'https://osbyskolan.se/wp-content/uploads/2018/03/IMG_4441.jpg',
    imgAlt: 'Barn som slöjdar',
    link: "https://www.google.se",
    title: 'Slöjd',
    text: 'Träslöjd och syslöjd i fina nya lokaler'
  },
  {
    img: 'https://stockholmskallan.stockholm.se/skblobs/f1/f14b92b7-8647-4552-af7f-112d1c7bf11c.jpg',
    imgAlt: 'Barn som idrottar på kollo',
    link: "https://www.google.se",
    title: 'Idrott',
    text: 'Testa på olika nya idrotter och sporter'
  },
]

const createCard = (obj) => {
  return `
    <div class="kollo-cards__card">
      <div class="kollo-cards__card__image">
        <img src="${obj.img}" alt="${obj.imgAlt}" />
      </div>
      <div class="kollo-cards__card__content">
        <a href="${obj.link}">
          <h4>${obj.title}</h4>
        </a>
        <p>${obj.text}</p>
      </div>
    </div>
  `;
}

const createCards = () => {
  const cards = kolloActivities.map(createCard);
  document.getElementById('kolloActivities').innerHTML = cards.join('');
}