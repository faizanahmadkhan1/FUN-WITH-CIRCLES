const outerradiusOfcircle=document.querySelector("#radius1");
const innerradiusOfcircle=document.querySelector("#radius2");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateAreaoftrack(e) {
  e.preventDefault();
  const OuterRadiusOfcircle= Number(outerradiusOfcircle.value);
  const InnerRadiusOfcircle= Number(innerradiusOfcircle.value);
  console.log(OuterRadiusOfcircle);
  console.log(InnerRadiusOfcircle);
  if (
    InnerRadiusOfcircle >0 &&
    OuterRadiusOfcircle>0 &&
    OuterRadiusOfcircle>InnerRadiusOfcircle
  ) {
    const result =Math.round(22/7*((OuterRadiusOfcircle*OuterRadiusOfcircle)-(InnerRadiusOfcircle*InnerRadiusOfcircle)));
    output.innerText = `Area of Circular Track is ${result} sq units`;
  } else {
    output.innerText = "Enter a valid radii";
  }
}
calculate.addEventListener("submit", calculateAreaoftrack);


