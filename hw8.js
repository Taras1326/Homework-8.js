

// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. 
// Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

// 👉 Спочатку через for

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let result = "";

for (let i = 0; i < friends.length; i+= 1) {
  result += friends[i];

  if (i < friends.length - 1) {
    result += ", "; 
  }
}

console.log(result); 


// 👉 Потім через join()

const friendss = ["Mango", "Poly", "Kiwi", "Ajax"];

const resultt = friends.join(", "); 
console.log(resultt); 


// 2. Працюємо з колекцією карток в trello. 
// Метод splice() (можна використати інші методи)


const cards = [

    'Карточка-1',

    'Карточка-2',

    'Карточка-3',

    'Карточка-4',

    'Карточка-5',

];

// 3. Видалити

// видалення по індексу використовуючи indexOf()

const cardToRemove =  "Карточка-3";

  
const index = cards.indexOf(cardToRemove);


if (index !== -1) {
  cards.splice(index, 1);
}

console.log(cards);


// 4. Додати

// додавання по індексу 

// перший спосіб

const cardToInsert = "Карточка-6";

const insertIndex = 2;

cards.splice(insertIndex, 0, cardToInsert);

console.log(cards);

// другий спосіб

const cardToInsertt = "Карточка-6";
cards.splice(4, 0, cardToInsertt);
console.log(cards);


// 5. Оновити

// оновлення (по індексу)

// перший спосіб

const cardToUpdate = "Карточка-4";

const updatedCard = "Оновлена-картка";


const indexx = cards.indexOf(cardToUpdate);

if (indexx !== -1) {
  cards.splice(index, 1, updatedCard);
}

console.log(cards);

// другий спосіб

const cardToUpdatet = "Карточка-4";
const meinCards = "Оновлена-картка-4"
cards.splice(2, 1, meinCards);
console.log(cards);






  