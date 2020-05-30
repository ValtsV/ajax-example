const loadUser = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const user = JSON.parse(this.responseText);

      let output = "";

      output += `<ul>
      <li>${user.id}</li>
      <li>${user.name}</li>
      <li>${user.email}</li>
      </ul?`;

      document.getElementById("user").innerHTML = output;
    }
  };

  xhr.send();
};

const loadUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);
      let output = "";

      users.forEach((user) => {
        output += `<ul>
        <li>${user.id}</li>
        <li>${user.name}</li>
        <li>${user.email}</li>
        </ul?`;
      });
      document.getElementById("users").innerHTML = output;
    }
  };
  xhr.send();
};

document.getElementById("button").addEventListener("click", loadUser);
document.getElementById("buttonOther").addEventListener("click", loadUsers);
