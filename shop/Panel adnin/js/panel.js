function togglePanel() {
  let panel = document.querySelector("#panel");
  if (panel.className == "panel") {
    panel.classList.replace("panel", "panel-min");
    active_user_name(0);
    activeTextMenuBtn(0);
    activeUserDetails(0);
  } else {
    panel.classList.replace("panel-min", "panel");
    active_user_name(1);
    activeTextMenuBtn(1);
    activeUserDetails(1);
  }
}
function activeTextMenuBtn(flag) {
  let btn_menu_items = document.querySelectorAll(".menu .menu-btns .menu-btn .item");
  let item_texts = document.querySelectorAll(".menu .menu-btns .menu-btn .item span");
  if (flag) {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "flex-start";
      ele.style.paddingRight = "30px";
      ele.style.fontSize = "1em"
    });
    item_texts.forEach((ele) => {
      ele.style.display = "block";
    });
  } else {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "center";
      ele.style.paddingRight = "0px";
      ele.style.fontSize = "1.2em"
    });
    item_texts.forEach((ele) => {
      ele.style.display = "none";
    });
  }
}

function toggleUserDetails() {
  let userDetails = document.querySelector(".menu .user-info .details");
  let arrow = document.querySelector(".menu .user-info .imge-name .name-butn i");
  if (userDetails.style.display != "none") {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  } else {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  }
}

function activeUserDetails(flag) {
  let userDetails = document.querySelector(".menu .user-info .details");
  let arrow = document.querySelector(".menu .user-info .imge-name .name-butn i");
  if (flag) {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  } else {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  }
}

function active_user_name(flag) {
  let imgNameBox = document.querySelector(".menu .user-info .imge-name");
  let name = document.querySelector(".menu .user-info .imge-name .name-butn");
  if (flag) {
    name.style.display = "block";
    imgNameBox.style.justifyContent = "space-between";
  } else {
    name.style.display = "none";
    imgNameBox.style.justifyContent = "center";
  }
}

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["هندزفری", "هدفون", "کیف هندزفری", "محافظ", "شارژر "],
    datasets: [
      {
        label: "",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {},
  },
});
