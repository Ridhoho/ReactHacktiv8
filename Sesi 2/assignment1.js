const result = document.getElementById("result");
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const ac = document.getElementById("ac");
const ce = document.getElementById("ce");

dot.addEventListener('click', () => {
    result.innerText += dot.textContent
})

zero.addEventListener('click', () => {
    result.innerText += parseInt(zero.textContent)
})

one.addEventListener('click', () => {
    result.innerText += parseInt(one.textContent)
})

two.addEventListener('click', () => {
    result.innerText += parseInt(two.textContent)
})

three.addEventListener('click', () => {
    result.innerText += parseInt(three.textContent)
})

four.addEventListener('click', () => {
    result.innerText += parseInt(four.textContent)
})

five.addEventListener('click', () => {
    result.innerText += parseInt(five.textContent)
})

six.addEventListener('click', () => {
    result.innerText += parseInt(six.textContent)
})

seven.addEventListener('click', () => {
    result.innerText += parseInt(seven.textContent)
})

eight.addEventListener('click', () => {
    result.innerText += parseInt(eight.textContent)
})

nine.addEventListener('click', () => {
    result.innerText += parseInt(nine.textContent)
})

divide.addEventListener('click', () => {
    result.innerText += divide.textContent
})

multiply.addEventListener('click', () => {
    result.innerText += multiply.textContent
})

minus.addEventListener('click', () => {
    result.innerText += minus.textContent
})

plus.addEventListener('click', () => {
    result.innerText += plus.textContent
})

equal.addEventListener('click', () => {
    result.innerText = Function(`"use strict"; return(${result.textContent})`) ()
})

ac.addEventListener('click', () => {
    result.innerText = "";
})

ce.addEventListener('click', () => {
    result.innerText = result.innerText.slice(0, -1);
})