// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

   imgAuthor.src = data.authorPhoto;
   headline.textContent = data.headline;
   authorName.textContent = data.authorName;

   card.appendChild(headline);
   card.appendChild(author);

   author.appendChild(imgContainer);
   author.appendChild(authorName);
   imgContainer.appendChild(imgAuthor);

   const cardsContainer = document.querySelector('.cards-container');
   cardsContainer.append(card);

   return card;

}

axios.get('https://lambda-times-backend.herokuapp.com/articles') 
    .then((res) => { 
        console.log(res);
        res.data.articles.javascript.forEach(article => createCard(article));
        res.data.articles.bootstrap.forEach(article => createCard(article));
        res.data.articles.jquery.forEach(article => createCard(article));
        res.data.articles.node.forEach(article => createCard(article));
        res.data.articles.technology.forEach(article => createCard(article));
    })
    .catch((error) => { 
        console.log(error) 
    })