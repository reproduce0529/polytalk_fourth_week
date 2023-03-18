function changBox(x) {
  console.log("d");
  let section01_1to1_inputBox_select_textBox = document.querySelector(
    ".section01_1to1_inputBox_select_textBox"
  );
  let section01_select_radio = document.querySelectorAll(
    ".section01_select_radio"
  );

  section01_1to1_inputBox_select_textBox.innerHTML =
    section01_select_radio[x].value;
  let section01_1to1_inputBox_select_ul = document.querySelector(
    ".section01_1to1_inputBox_select_ul"
  );
  section01_1to1_inputBox_select_ul.style.display = "none";
}

function select_open() {
  let section01_1to1_inputBox_select_ul = document.querySelector(
    ".section01_1to1_inputBox_select_ul"
  );
  section01_1to1_inputBox_select_ul.style.display = "block";
}
