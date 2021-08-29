const radiusOfcircle=document.querySelector("#radius");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(e) {
  e.preventDefault();
  const RadiusOfcircle= Number(radiusOfcircle.value);
  if (
    RadiusOfcircle>0
  ) {
    const result =Math.round(22/7 * RadiusOfcircle * RadiusOfcircle);
    output.innerText = `Area of Circle is ${result} sq units`;
  } else {
    output.innerText = "Enter a valid radius";
  }
}
calculate.addEventListener("submit", calculateArea);