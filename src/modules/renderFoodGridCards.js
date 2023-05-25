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

export default renderFoodGridCards;