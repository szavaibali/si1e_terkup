/*
* File: app.js
* Author: Szávai Balázs
* Copyright: 2023/01/31 Szávai Balázs
* Group: Szoft I/1/E
* Date: 2023/01/31
* Github: https://github.com/szavaibali/
* Licenc: GNU GPL
*/
const radiusElem = document.querySelector('#radius');
const heightElem = document.querySelector('#height');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click', () => {
    let radius = Number(radiusElem.value);
    let height = Number(heightElem.value);
    let area = calcArea(radius, height);
    console.log(area);
    areaElem.value = area;
    //éertékek kiszedése
});

function calcArea(radius, height) {
    let area = (1.0/3.0)*Math.pow(radius, 2) *
    Math.PI * height;
    return area;
}
