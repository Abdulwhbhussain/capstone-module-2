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

 export default likesButtons;