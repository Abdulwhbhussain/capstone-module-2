import './styles.css';

function appRender() {
    const capstoneContainer = document.getElementsByClassName('capstone-container')[0];
    console.log(capstoneContainer);
    capstoneContainer.innerHTML = `<!-- Header of the Api Based Web App -->
    <header class="header-container">
      <!-- Logo of the Api Based Web App -->
      <div class="logo">
        <p>The Meals DB</p>
      </div>
      <!-- Navbar of The Api based web app -->
      <nav>
        <ul>
          <li><a href="#">American(6)</a></li>
          <li><a href="#">Chinese</a></li>
          <li><a href="#">Kenyan</a></li>
        </ul>
      </nav>
    </header>
    <!-- Main Content of the Api Based Web App -->
    <main>
      <!-- Section of the Api Based Web App -->
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
      <h5>dummy</h5>
    </main>
    <!-- Footer of the Api Based Web App -->
    <footer class="footer-container">
      <p>© Created by Microverse under CC license</p>
    </footer>`;
}

const getFoodByAreaList = async () => {
    const response = await fetch('www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    console.log(data);
    return data;
}

document.addEventListener('DOMContentLoaded', () => {
    appRender();

    let foodByAreaList = ["American","Chinese","Kenyan"];

    fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${foodByAreaList[0]}`).then(response =>
        response.text()).then(function(html) {
            // Initialize the DOM parser
            var parser = new DOMParser();
    
            // Parse the text
            var doc = parser.parseFromString(html, "text/html");
    
            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;
    
            console.log(doc);
        });


    console.log(foodByAreaList);
    console.log('After Data');

});