import './styles.css';

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
          <li><a href="#">Chinese(12)</a></li>
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
  return foodByChina;
};

// const foodByAmericaList = async () => {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
//   const data = await response.json();
//   const americanFoods = data.meals;

//   const foodByAmerica = [];
//   americanFoods.forEach((food) => {
//     const objFood = {
//       count: foodByAmerica.length + 1,
//       name: food.strMeal,
//       image: food.strMealThumb,
//       id: food.idMeal,
//     };
//     foodByAmerica.push(objFood);
//   });
//   return foodByAmerica;
// };

// const foodByKenyaList = async () => {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Kenyan');
//   const data = await response.json();
//   const kenyanFoods = data.meals;

//   const foodByKenya = [];
//   kenyanFoods.forEach((food) => {
//     const objFood = {
//       count: foodByKenya.length + 1,
//       name: food.strMeal,
//       image: food.strMealThumb,
//       id: food.idMeal,
//     };
//     foodByKenya.push(objFood);
//   });
//   return foodByKenya;
// };

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
        `;
    foodGrid.appendChild(foodCard);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  appRender();

  const foodByChina = await foodByChinaList();
  //   const foodByAmerica = await foodByAmericaList();
  //   const foodByKenya = await foodByKenyaList();

  renderFoodGridCards(foodByChina);
});