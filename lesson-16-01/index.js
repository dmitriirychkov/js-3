const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.querySelector("#data-container");

const createUserElement = (text) => {
    const userElement = document.createElement("li");
    const userAnchorElement = document.createElement("a");
    userAnchorElement.href = "#";
    userAnchorElement.innerText = text;
    userElement.append(userAnchorElement);

    return userElement;
};

const toggleLoader = () => {
    const loaderHTML = document.querySelector("#loader");
    const isHidden = loaderHTML.getAttribute("hidden") !== null;
    if (isHidden) {
        loaderHTML.removeAttribute("hidden");
    } else {
        loaderHTML.setAttribute("hidden", "");
    }
};

const getAllUsers = () => {
    toggleLoader();
    fetch(USERS_URL)
        .then((response) => response.json())
        .then((users) => {
            const usersArray = Array.isArray(users) ? users : Object.values(users);
            usersArray.forEach((user) => {
                const todoHTMLElement = createUserElement(user.name);
                usersContainer.append(todoHTMLElement);
            });
        })
        .catch((error) => {
            console.error("error", error);
        })
        .finally(() => {
            toggleLoader();
        });
};

getAllUsers();
