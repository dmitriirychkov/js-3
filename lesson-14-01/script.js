// 1-й способ
document.body.innerHTML = `
       <form class="create-user-form">
       <label>
           Имя
           <input type="text" name="userName" placeholder="Введите ваше имя" />
       </label>
       <label>
           Пароль
           <input type="password" name="password" placeholder="Придумайте Пароль" />
       </label>
       <button type="submit">
           Подтвердить
       </button>
   </form>
`;

/* 2-й способ
const createInputWithLabel = (label, inputType, inputName, placeholder) => {
  const labelContainer = document.createElement("label");
  labelContainer.innerText = label;

  const inputElement = document.createElement("input");
  inputElement.type = inputType;
  inputElement.name = inputName;
  inputElement.placeholder = placeholder;

  labelContainer.append(inputElement);

  return labelContainer;
};

const formContainer = document.createElement("form");
formContainer.className = "create-user-form";
const userNameLabel = createInputWithLabel(
  "Имя",
  "text",
  "userName",
  "Введите ваше имя"
);
const passwordLabel = createInputWithLabel(
  "Пароль",
  "password",
  "password",
  "Придумайте Пароль"
);
const confirmButton = document.createElement("button");
confirmButton.type = "submit";
confirmButton.innerText = "Подтвердить";

formContainer.append(userNameLabel, passwordLabel, confirmButton);
document.body.prepend(formContainer);
*/