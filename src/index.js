import './styles.css';

const appID = 'YOYr3lMRRi289YuVJOhS';
const urlForLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;
const urlForComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`;

function appRender() {
  const capstoneContainer = document.getElementsByClassName('capstone-container')[0];
  capstoneContainer.innerHTML = `<!-- Header of the Api Based Web App -->
    <header class="header-container">
      <!-- Logo of the Api Based Web App -->
      <div class="logo">
        <p>The Meals DB</p>
      </div>
      <!-- Navbar of The Api based web app -->
      <nav>
        <ul>
          <li><a href="#">Chinese</a></li>
          <li><a href="#">American</a></li>
          <li><a href="#">Kenyan</a></li>
        </ul>
      </nav>
    </header>
    <!-- Main Content of the Api Based Web App -->
    <main>
      <!-- Section of the Api Based Web App -->
      
    </main>
    <!-- Footer of the Api Based Web App -->
    <footer class="footer-container">
      <p>© Microverseinc Created by
      <a href="https://github.com/Abdulwhbhussain">Abdul Wahab |</a>
      <a href="https://github.com/Enoisong/">Enobong Isong</a>
      under MIT License</p>
    </footer>`;
}

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
  return foodByChina;
};

// Render Food Grid Cards
const renderFoodGridCards = (foodList) => {
  const foodGrid = document.querySelectorAll('main')[0];
  foodList.forEach((food) => {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    foodCard.innerHTML = `
            <div class="food-card-image">
                <img src="${food.image}" alt="${food.name}">
            </div>
            <div class="food-card-title">
                <h3>${food.name}</h3> 
            </div>
            <!-- Food Card Heart Icon -->
            <div class="food-card-heart">
            <div class="heart"></div>
                
            </div>
            <!-- Food Card Like Count -->
            <div class="food-card-like-count"><p>${food.likes} Likes</p></div>
            <!-- Food card Comments Button -->
            
                <button class="food-card-comments">Comments</button>
            
        `;
    foodGrid.appendChild(foodCard);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  appRender();

  const foodByChina = await foodByChinaList();

  console.log(foodByChina);

  // Show items count on homepage Header
    const foodCount = document.querySelector('nav > ul > li > a');
    foodCount.innerHTML = `Chinese(${foodByChina.length})`;

  renderFoodGridCards(foodByChina);

  // Likes Buttons Event Listener
    const likesButtons = document.querySelectorAll('.food-card-heart');
    for (let likesButton of likesButtons) {

      likesButton.addEventListener('click', async () => {
            
            const foodCard = likesButton.parentElement;
            const foodTitleElement = likesButton.previousElementSibling;
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
        });
    };
    

});