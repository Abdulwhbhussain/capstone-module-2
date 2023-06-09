import './styles.css';
import appRender from './modules/appRender';
import renderFoodGridCards from './modules/renderFoodGridCards';
import commentsObjectRender from './modules/commentsObjectRender';

const appID = 'YOYr3lMRRi289YuVJOhS';
const urlForLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;
const urlForComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`;

const foodByChinaList = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese');
  const data = await response.json();
  const chineseFoods = data.meals;

  const foodByChina = [];
  chineseFoods.forEach((food) => {
    const objFood = {
      count: foodByChina.length + 1,
      name: food.strMeal,
      image: food.strMealThumb,
      id: food.idMeal,
    };
    foodByChina.push(objFood);
  });
  // get Likes from the Involvement API
  const likesData = await fetch(urlForLikes).then((response) => response.json()).then((data) => data);

  likesData.forEach((like) => {
    const food = foodByChina.find((food) => food.id === like.item_id);
    if(food) {
      food.likes = like.likes;
    }
  });

  // get Comments from the Involvement API
  const urlForGettingComments = urlForComments + '?item_id=';
  foodByChina.forEach( async (food) => {
    const url = urlForGettingComments + food.id;
    const comments = await fetch(url).then((response) => response.json()).then((data) => data);
    food.comments = comments;
  });
  return foodByChina;
};

const foodByAmericaList = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
  const data = await response.json();
  const americanFoods = data.meals;

  const foodByAmerica = [];
  americanFoods.forEach((food) => {
    const objFood = {
      count: foodByAmerica.length + 1,
      name: food.strMeal,
      image: food.strMealThumb,
      id: food.idMeal,
    };
    foodByAmerica.push(objFood);
  });
  // get Likes from the Involvement API
  const likesData = await fetch(urlForLikes).then((response) => response.json()).then((data) => data);
  console.log(likesData, 'likesData for America');

  likesData.forEach((like) => {
    const food = foodByAmerica.find((food) => food.id === like.item_id);
    if(food) {
      food.likes = like.likes;
    }
  });

  // get Comments from the Involvement API
  const urlForGettingComments = urlForComments + '?item_id=';
  foodByAmerica.forEach( async (food) => {
    const url = urlForGettingComments + food.id;
    const comments = await fetch(url).then((response) => response.json()).then((data) => data);
    food.comments = comments;
  });
  return foodByAmerica;
};

const foodByRussiaList = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian');
  const data = await response.json();
  const russianFoods = data.meals;

  const foodByRussia = [];
  russianFoods.forEach((food) => {
    const objFood = {
      count: foodByRussia.length + 1,
      name: food.strMeal,
      image: food.strMealThumb,
      id: food.idMeal,
    };
    foodByRussia.push(objFood);
  });
  // get Likes from the Involvement API
  const likesData = await fetch(urlForLikes).then((response) => response.json()).then((data) => data);

  console.log(likesData, 'likesData for Russia');
   
  likesData.forEach((like) => {
    const food = foodByRussia.find((food) => food.id === like.item_id);
    if(food) {
      food.likes = like.likes;
    }
  });

  // get Comments from the Involvement API
  const urlForGettingComments = urlForComments + '?item_id=';
  foodByRussia.forEach( async (food) => {
    const url = urlForGettingComments + food.id;
    const comments = await fetch(url).then((response) => response.json()).then((data) => data);
    food.comments = comments;
  });
  return foodByRussia;
};

// Post Comments Functions 
const addComment = async (date, id, name, comment) => {
    const requestToResponse = await fetch(urlForComments, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: id,
            username: name,
            comment: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${name}: ${comment}`,
        }),
    });
    const data = await requestToResponse.text();
    if (data === 'Created') {
    return data;
    }
}

// Create Comments popup
const popupContainer = (foodObject) => {
    // Background blur
    const popupContainerBackground = document.createElement('div');
    popupContainerBackground.classList.add('popup-container-background');

    // popup Food Contents Container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popupContainer.innerHTML = `
    <!-- Close Times Icon -->
    <button data-close-button class="close-button">&times;</button>
    <!-- Food Image -->
    <div class="popup-image-container">
        <img class="popup-image" src=${foodObject.image} alt=${foodObject.name} draggable="false" />
    </div>
    <!-- Food Name -->
    <div class="popup-name-container"><h2>${foodObject.name}</h2></div>
    <!-- Food Details -->
    <div class="popup-details-container">
    <div class="popup-details-upper"><span>Count: ${foodObject.count}</span><span>ID: ${foodObject.id}</span></div>
    <div class="popup-details-lower"><span>Likes: ${foodObject.likes}</span><span>Delicious: Yes</span></div>
    </div>
    <!-- Comments and comment Details -->
    <div class="popup-comments-container">
    <h2>Comments (${foodObject.comments.length})</h2>
    <div class="popup-comments">${commentsObjectRender(foodObject.comments)}</div>
    <!-- Add a Comment -->
    <div class="add-comment">
        <h2>Add a Comment</h2>
        <form class="add-comment-form">
        <input type="text" name="name" id="name" placeholder="Your Name" required/>
        <textArea type="text" name="comment" id="comment" placeholder="Your Insights" cols=50 maxLength=500 required></textArea>
        <button type="submit" class="add-comment-button">Comment</button>
        </form>
    </div>
    </div>
    `;

    popupContainerBackground.appendChild(popupContainer);
    document.body.appendChild(popupContainerBackground);
    document.querySelector('.close-button').addEventListener('click', () => {
        popupContainerBackground.remove();
    });
    document.querySelector('.add-comment-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const date = new Date();
        const name = document.querySelector('#name').value;
        const comment = document.querySelector('#comment').value;
        const resp = await addComment(date, foodObject.id, name, comment);
        if (resp === 'Created') {
            const commentElement = document.createElement('div');
            commentElement.classList.add('individual-comment');
            commentElement.innerText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${name}: ${comment}`;
            document.querySelector('.popup-comments').appendChild(commentElement);
            foodObject.comments.push({
                comment: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${name}: ${comment}`,
                creation_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                username: name,
            });
            document.querySelector('.popup-comments-container h2').innerText = `Comments (${foodObject.comments.length})`;
        };
        document.querySelector('#name').value = '';
        document.querySelector('#comment').value = '';
    });
};

const appExe = document.addEventListener('DOMContentLoaded', async () => {
  appRender();

  const foodByChina = await foodByChinaList();
  // const foodByAmerica = await foodByAmericaList();
  // const foodByRussia = await foodByRussiaList();

  // Auto Liking using Fetch API
  // foodByAmerica.forEach( async (food) => {
  //   const url = urlForLikes;
  //   const response = await fetch(urlForLikes, {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         item_id: food.id,
  //     }),
  // });
  // const data = await response.text();
  // if (data === 'Created') {
  //   console.log('Liked');
  // }
  // });

    // Likes Count Random Auto
  // foodByAmerica.forEach((food) => {
  //   const randomLikes = Math.floor(Math.random() * 100);
  //   food.likes = randomLikes;
  // });

  

  console.log(foodByChina);
  // console.log(foodByAmerica);
  // console.log(foodByRussia);

  // Show items count on homepage Header
    const foodCountChinese = document.querySelector('nav > ul > li > .chinese');
    foodCountChinese.innerHTML = `Chinese(${foodByChina.length})`;

  renderFoodGridCards(foodByChina);

  // Show items count on homepage Header
//   const foodCountAmerican = document.querySelector('nav > ul > li > .american');
//   foodCountAmerican.innerHTML = `American(${foodByAmerica.length})`;

// renderFoodGridCards(foodByAmerica);

// When Clicked American There should be A Message
const foodCountAmerican = document.querySelector('nav > ul > li > .american');
foodCountAmerican.addEventListener('click', () => {
    alert('Hi Pal! Sorry for Inconvenience. We are working on it.');
});


// Show items count on homepage Header
const foodCountRussian = document.querySelector('nav > ul > li > .russian');
foodCountRussian.addEventListener('click', () => {
  alert('Hi Pal! Sorry for Inconvenience. We are working on it.');
});

// renderFoodGridCards(foodByRussia);

// console.log(document.querySelectorAll('.food-card-heart'));



    // Likes Buttons Event Listener
    const likesButtons = document.querySelectorAll('.food-card-heart');
    for (let likesButton of likesButtons) {

      likesButton.addEventListener('click', async () => {
            
            likesButton.style.color = '#fc2e5a';
            const foodTitleElement = likesButton.parentElement.previousElementSibling.firstElementChild;
            const foodTitle = foodTitleElement.innerText;
            const foodCardLikeCount = likesButton.nextElementSibling;
            const foodTitleId = foodByChina.find((food) => food.name === foodTitle).id;
            const foodArrayIndex = foodByChina.findIndex((food) => food.name === foodTitle);
            // Like Post Request to The Involvement API
            const response = await fetch(urlForLikes, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item_id: foodTitleId,
                }),
            });
            const data = await response.text();
            if (data === 'Created') {
                foodByChina[foodArrayIndex].likes += 1;
                console.log(foodByChina[foodArrayIndex].likes);
                console.log(foodCardLikeCount)
                foodCardLikeCount.innerHTML = `<p>${foodByChina[foodArrayIndex].likes} Likes</p>`;
            }
        });

    };

    // comments Buttons Event Listener
    const commentsButtons = document.querySelectorAll('.food-card-comments');
    for (let commentsButton of commentsButtons) {
        commentsButton.addEventListener('click', () => {
            console.log('comments button clicked', commentsButton);
            const foodTitleElement = commentsButton.previousElementSibling.firstElementChild.firstElementChild;
            const foodTitle = foodTitleElement.innerText;
            const foodArrayIndex = foodByChina.findIndex((food) => food.name === foodTitle);
            // create popup
            popupContainer(foodByChina[foodArrayIndex]);
        });
    };
});

appExe();

export default appExe;