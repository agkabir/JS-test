// exercise: 1

dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
//  Solution Q 1.1
console.log("Solution for part 1.1");
for (dish of dishes) {
  console.log(dish);
}
// solution Q 1.2
console.log("Solution for part 1.2");
console.log(dishes[Math.floor(Math.random() * dishes.length)]);

// exercise 2
// Solution Q 2
const addButtonDiv = document.getElementById("addButton");
const createdButton = document.createElement("BUTTON");
createdButton.innerHTML = "Click Me";
addButtonDiv.appendChild(createdButton);

const inserH1TagAndChangeBackgroundColor = () => {
  const h1Tag = document.createElement("h1");
  h1Tag.innerHTML = "Javascript test";
  addButtonDiv.appendChild(h1Tag);
  document.body.style.background = "#abcdff";
};

createdButton.addEventListener("click", inserH1TagAndChangeBackgroundColor);

// exercise 3
// solution Q.3
// function to create and save screenshot
const BASE_URL = "https://reqres.in/api/users";
const apiCall = async (event) => {
  try {
    const response = await fetch(BASE_URL);
    if (response.status !== 200) {
      return `something went wrong ${response.status.toString()}!`;
    }
    const responseData = await response.json();
    for (let i = 0; i < 3; i++) {
      console.log(responseData.data[i].first_name);
    }
  } catch (error) {
    return error.message;
  }
};
apiCall();

// exercise 4
// solution 4
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  // Method
  sayHello() {
    console.log(`Hello my name is ${this.firstName}`);
  }
}

const peter = new Person("peter");
peter.sayHello();
