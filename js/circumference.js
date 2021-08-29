const radiusOfcircle=document.querySelector("#radius");
const calculate = document.querySelector("#calculate-circumference");
const output = document.querySelector("#output");

function calculateCircumference(e) {
  e.preventDefault();
  const RadiusOfcircle= Number(radiusOfcircle.value);
  if (
    RadiusOfcircle>0
  ) {
    const result =Math.round( 2*22/7*RadiusOfcircle);
    output.innerText = `Circumference of Circle is ${result}  units`;
  } else {
    output.innerText = "Enter a valid radius";
  }
}
calculate.addEventListener("submit", calculateCircumference);