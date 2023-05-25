// import './styles.css';

const appID = 'YOYr3lMRRi289YuVJOhS';
const urlForLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;
const urlForComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`;

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

  // get Comments from the Involvement API
  const urlForGettingComments = urlForComments + '?item_id=';
  foodByChina.forEach( async (food) => {
    const url = urlForGettingComments + food.id;
    const comments = await fetch(url).then((response) => response.json()).then((data) => data);
    food.comments = comments;
  });
  return foodByChina;
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

// comments Render
const commentsObjectRender = (commentsArray) => {
    const popupComments = document.createElement('div');
    popupComments.classList.add('popup-comments');
    const comments = commentsArray.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('individual-comment');
        commentElement.innerText = comment.comment;
        popupComments.appendChild(commentElement);
    });
    return popupComments.innerHTML;
};

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
        <input type="text" name="name" id="name" placeholder="Your Name" />
        <textArea type="text" name="comment" id="comment" placeholder="Your Insights"></textArea>
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

//   createCommentsPopups(foodByChina);

  // Send Comments request to the Involvment Api
//   const date = new Date();
//   foodByChina.forEach( async (food) => {
//     const commentPost = await addComment(date, food.id, 'Enobong', 'testing comments');
//   });

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
            const foodTitleElement = commentsButton.previousElementSibling.previousElementSibling.previousElementSibling;
            const foodTitle = foodTitleElement.innerText;
            const foodArrayIndex = foodByChina.findIndex((food) => food.name === foodTitle);
            // create popup
            popupContainer(foodByChina[foodArrayIndex]);
        });
    };
    

});

export { appRender, renderFoodGridCards, popupContainer, commentsObjectRender };