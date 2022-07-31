"use strict";

import { country } from "./helpers.js";


console.log(country);
let elem = document.getElementById('root');





elem.innerHTML += `

<form action="/"  method="get">
<label for="num1">first : </label>
<input type="number" name="num1" id="num1" placeholder="enter your number">
<label for="num2">second : </label>
<input type="number" name="num2" id="num2" placeholder="enter your number">
<label for="num3">third : </label>
<input type="number" name="num3" id="num3" placeholder="enter your number">
<button id="my-btn">click me</button>
</form>`;
let firstInt = document.getElementById('num1');
let secInt = document.getElementById('num2');
let thirdInt = document.getElementById('num3');

elem.innerHTML += `
<label for="contry"> Select your country</label>
<select name="country">
	<option> ${country}</option>

</select>
`

