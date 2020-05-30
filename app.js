const loadText = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "sample.txt", true);

  xhr.onprogress = () => {
    console.log("Ready state:", xhr.readyState);
  };

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById("text").innerText = this.responseText;
    } else if ((this.status = 404)) {
      document.getElementById("text").textContent = "Not found";
    }
  };

  xhr.onerror = () => {
    console.log("Dis da error");
  };
  //   xhr.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.send();
};
document.getElementById("button").addEventListener("click", loadText);
