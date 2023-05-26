const renderFoodGridCards = (foodList) => {
  const foodGrid = document.querySelectorAll('main')[0];
  foodList.forEach((food) => {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    foodCard.innerHTML = `
            <div class="food-card-image">
                <img src="${food.image}" alt="${food.name}">
            </div>
            <div class="title-icon-likes">
            <div class="food-card-title">
                <h3>${food.name}</h3> 
            </div>
            <div class="icon-likes">
            <!-- Food Card Heart Icon -->
            <svg class="food-card-heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                
            
            <!-- Food Card Like Count -->
            <div class="food-card-like-count"><p>${food.likes} Likes</p></div>
            </div>
            
            </div>
            
            <!-- Food card Comments Button -->
            
                <button class="food-card-comments">Comments</button>            
        `;
    foodGrid.appendChild(foodCard);
  });
};

export default renderFoodGridCards;