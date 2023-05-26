function appRender() {
  const capstoneContainer = document.getElementsByClassName('capstone-container')[0];
  capstoneContainer.innerHTML = `<!-- Header of the Api Based Web App -->
    <header class="header-container">
      <!-- Logo of the Api Based Web App -->
      <div class="logo">
        <p>Meals</p>
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

export default appRender;