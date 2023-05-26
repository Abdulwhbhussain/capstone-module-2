// Testing Counters, Components and Methods
// Need Mocks and Mutation of DOM Elements and Side Effects

import { appRender, renderFoodGridCards, popupContainer, commentsObjectRender } from "../__mocks__/index.js";
import '../../jest.config.js';

describe('Testing Items Counter', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="capstone-container">    
    </div>`;
    appRender();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('should render the Correct Items counter on HomePage', () => {
    const objectFoods = [
      {
          "count": 1,
          "name": "Beef Lo Mein",
          "image": "https://www.themealdb.com/images/media/meals/1529444830.jpg",
          "id": "52952",
          "likes": 11,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Asjad Poing: Ramo kaka ramo kaka kum kum kum kitne hue the hum tang tang tang ramoooo\n",
                  "creation_date": "2023-05-25",
                  "username": "Asjad Poing"
              }
          ]
      },
      {
          "count": 2,
          "name": "Chicken Congee",
          "image": "https://www.themealdb.com/images/media/meals/1529446352.jpg",
          "id": "52956",
          "likes": 8,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 3,
          "name": "Egg Drop Soup",
          "image": "https://www.themealdb.com/images/media/meals/1529446137.jpg",
          "id": "52955",
          "likes": 3,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              }
          ]
      },
      {
          "count": 4,
          "name": "General Tso's Chicken",
          "image": "https://www.themealdb.com/images/media/meals/1529444113.jpg",
          "id": "52951",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Wahab: 👍",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      },
      {
          "count": 5,
          "name": "Hot and Sour Soup",
          "image": "https://www.themealdb.com/images/media/meals/1529445893.jpg",
          "id": "52954",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: it is gift from God",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 6,
          "name": "Kung Pao Chicken",
          "image": "https://www.themealdb.com/images/media/meals/1525872624.jpg",
          "id": "52945",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 7,
          "name": "Kung Po Prawns",
          "image": "https://www.themealdb.com/images/media/meals/1525873040.jpg",
          "id": "52946",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 8,
          "name": "Ma Po Tofu",
          "image": "https://www.themealdb.com/images/media/meals/1525874812.jpg",
          "id": "52947",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Waheed: it is delicious!",
                  "creation_date": "2023-05-25",
                  "username": "Waheed"
              }
          ]
      },
      {
          "count": 9,
          "name": "Shrimp Chow Fun",
          "image": "https://www.themealdb.com/images/media/meals/1529445434.jpg",
          "id": "52953",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 10,
          "name": "Sweet and Sour Pork",
          "image": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
          "id": "52949",
          "likes": 9,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Wahab: It was great building it.",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      },
      {
          "count": 11,
          "name": "Szechuan Beef",
          "image": "https://www.themealdb.com/images/media/meals/1529443236.jpg",
          "id": "52950",
          "likes": 13,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 wahab: lovely!",
                  "creation_date": "2023-05-24",
                  "username": "wahab"
              },
              {
                  "comment": "5/25/2023 Mahraj: Bhale jo bhi ho baat dil me rahe gi",
                  "creation_date": "2023-05-25",
                  "username": "Mahraj"
              }
          ]
      },
      {
          "count": 12,
          "name": "Wontons",
          "image": "https://www.themealdb.com/images/media/meals/1525876468.jpg",
          "id": "52948",
          "likes": 10,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Wahab: it was great building this App",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      }
  ];

  const foodCount = document.querySelector('nav > ul > li > a');
    foodCount.innerHTML = `Chinese(${objectFoods.length})`;

    renderFoodGridCards(objectFoods);
    expect(foodCount.innerHTML).toBe(`Chinese(${objectFoods.length})`);
  });
});

describe('Testing Comments Counter', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="capstone-container">    
    </div>`;
    appRender();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('should render the Correct Comments counter', () => {
    const objectFoods = [
      {
          "count": 1,
          "name": "Beef Lo Mein",
          "image": "https://www.themealdb.com/images/media/meals/1529444830.jpg",
          "id": "52952",
          "likes": 11,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Asjad Poing: Ramo kaka ramo kaka kum kum kum kitne hue the hum tang tang tang ramoooo\n",
                  "creation_date": "2023-05-25",
                  "username": "Asjad Poing"
              }
          ]
      },
      {
          "count": 2,
          "name": "Chicken Congee",
          "image": "https://www.themealdb.com/images/media/meals/1529446352.jpg",
          "id": "52956",
          "likes": 8,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 3,
          "name": "Egg Drop Soup",
          "image": "https://www.themealdb.com/images/media/meals/1529446137.jpg",
          "id": "52955",
          "likes": 3,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              },
              {
                  "comment": "5/24/2023 : ",
                  "creation_date": "2023-05-25",
                  "username": ""
              }
          ]
      },
      {
          "count": 4,
          "name": "General Tso's Chicken",
          "image": "https://www.themealdb.com/images/media/meals/1529444113.jpg",
          "id": "52951",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Wahab: 👍",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      },
      {
          "count": 5,
          "name": "Hot and Sour Soup",
          "image": "https://www.themealdb.com/images/media/meals/1529445893.jpg",
          "id": "52954",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: it is gift from God",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 6,
          "name": "Kung Pao Chicken",
          "image": "https://www.themealdb.com/images/media/meals/1525872624.jpg",
          "id": "52945",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 7,
          "name": "Kung Po Prawns",
          "image": "https://www.themealdb.com/images/media/meals/1525873040.jpg",
          "id": "52946",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 8,
          "name": "Ma Po Tofu",
          "image": "https://www.themealdb.com/images/media/meals/1525874812.jpg",
          "id": "52947",
          "likes": 6,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Waheed: it is delicious!",
                  "creation_date": "2023-05-25",
                  "username": "Waheed"
              }
          ]
      },
      {
          "count": 9,
          "name": "Shrimp Chow Fun",
          "image": "https://www.themealdb.com/images/media/meals/1529445434.jpg",
          "id": "52953",
          "likes": 5,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              }
          ]
      },
      {
          "count": 10,
          "name": "Sweet and Sour Pork",
          "image": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
          "id": "52949",
          "likes": 9,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/25/2023 Wahab: It was great building it.",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      },
      {
          "count": 11,
          "name": "Szechuan Beef",
          "image": "https://www.themealdb.com/images/media/meals/1529443236.jpg",
          "id": "52950",
          "likes": 13,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 wahab: lovely!",
                  "creation_date": "2023-05-24",
                  "username": "wahab"
              },
              {
                  "comment": "5/25/2023 Mahraj: Bhale jo bhi ho baat dil me rahe gi",
                  "creation_date": "2023-05-25",
                  "username": "Mahraj"
              }
          ]
      },
      {
          "count": 12,
          "name": "Wontons",
          "image": "https://www.themealdb.com/images/media/meals/1525876468.jpg",
          "id": "52948",
          "likes": 10,
          "comments": [
              {
                  "comment": "5/24/2023 Enobong: testing comments",
                  "creation_date": "2023-05-24",
                  "username": "Enobong"
              },
              {
                  "comment": "5/24/2023 Wahab: it was great building this App",
                  "creation_date": "2023-05-24",
                  "username": "Wahab"
              }
          ]
      }
  ];

  

    popupContainer(objectFoods[objectFoods.length - 1]);
    const headerComments = document.querySelector('.popup-comments-container > h2');
    expect(headerComments.innerHTML).toBe(`Comments (${objectFoods[objectFoods.length - 1].comments.length})`);

    
  });
});