import './styles.css';

function appRender() {
    const capstoneContainer = document.getElementsByClassName('capstone-container')[0];
    console.log(capstoneContainer);
    capstoneContainer.innerHTML = `<!-- Header of the Api Based Web App -->
    <header class="header-container">
      <!-- Logo of the Api Based Web App -->
      <div class="logo">
        <p>Logo Here!</p>
      </div>
      <!-- Navbar of The Api based web app -->
      <nav>
        <ul>
          <li><a href="#">Spaceships(6)</a></li>
          <li><a href="#">Planets</a></li>
          <li><a href="#">Races</a></li>
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

document.addEventListener('DOMContentLoaded', appRender());