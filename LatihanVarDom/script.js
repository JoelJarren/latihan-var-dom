const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const mergeBtn = document.getElementById("mergeBtn");
const result = document.getElementById("result");

mergeBtn.addEventListener("click", function () {
    const value1 = input1.value;
    const value2 = input2.value;

    result.textContent = value1 + " " + value2;
});