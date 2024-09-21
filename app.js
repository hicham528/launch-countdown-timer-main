let days = document.querySelector(".days");
let hourse = document.querySelector(".hourse");
let minutes = document.querySelector(".minutes");
let secondes = document.querySelector(".secondes");

const start_timer = () => {
  let soonDate = new Date("31 Dec 2024 00:00:00");
  let nowDate = new Date();

  let result_date = soonDate - nowDate;

  let days_value = Math.floor(result_date / (1000 * 60 * 60 * 24));
  let hourse_value = Math.floor(
    (result_date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes_value = Math.floor(
    (result_date % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondes_value = Math.floor((result_date % (1000 * 60)) / 1000);


  days_value = days_value < 10 ? "0" + days_value : days_value;
  hourse_value = hourse_value < 10 ? "0" + hourse_value : hourse_value;
  minutes_value = minutes_value < 10 ? "0" + minutes_value : minutes_value;
  secondes_value = secondes_value < 10 ? "0" + secondes_value : secondes_value;
  days.textContent = days_value;
  hourse.textContent = hourse_value;
  minutes.textContent = minutes_value;
  secondes.textContent = secondes_value;
};
start_timer();

setInterval(start_timer,1000)
