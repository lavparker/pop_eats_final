import natlFoods from "../data/country-by-national-dish";

console.log(natlFoods)
console.log("webpack is working")

// let countries;
document.addEventListener("DOMContentLoaded", () => {

    const width = 900;
    const height = 600;

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);


    const projection = d3.geoMercator().scale(140).translate([width / 2, height / 1.4]);
    //set up the path generator 
    const path = d3.geoPath(projection);
    //added changes on line 188 
    let food = svg.append('g');
    const g = svg.append('g');


    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(data => {

        const countries = topojson.feature(data, data.objects.countries);
        g.selectAll('path')
            .data(countries.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', path)
            .append('title')
            .text(d => d.properties.name);

            //trying to drill into 
        // document.querySelector("object")
        //     .contentDocument.querySelectorAll("path[path-id='3379']")[0].getAttribute("d")

        // let map = _groups[0].forEach(ele =>{
        //     let countriesss = ele.properties.name
        //     console.log(countriesss);
        // })
        const worldMap = document.getElementsByClassName("")[0];
        const countriesElement = g.selectAll('.country');
        console.log(countriesElement);

        for (let i = 0; i < natlFoods.length; i++) {
            let cty = natlFoods[i].country;
            let food = natlFoods[i].dish;

            console.log(cty, food);
        }

       
    });
    // added data on line 214-231
    // nationalDishes =
    //     d3.json('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-national-dish.json').then(data =>{
    //         food.selectAll('path')
    //             .data(nationalDishes.features)
    //             .enter()
    //             .append('path')
    //             .attr('fill', '#900')
    //             .attr('stroke', '#999')
    //             .attr('d', path);
    //             .on('click', d => {
    //                 if(d.properties.name === nationalDishes.country){
    //                     d3.select('#label').text(nationalDishes.dish)
    //             };
    //             .on('mouseover', handleMouseOver)
    //             .on('mouseout', handleMouseOut);
    //             });

    //     });



})



// usMap.addEventListener("mouseover", e => {
//     const name = e.target.__data__.properties.NAME;
//     const fullMessage = name.concat(": ", Number(currentYearDataset[name.concat(" : all fuels (utility-scale)")]).toLocaleString(), " gigawatthours (GWh)");
//     const domEle = document.getElementById("hover-tooltip");
//     domEle.innerHTML = fullMessage;
//     domEle.style.opacity = 1;
// });

//linking json data to svg map 
// document.getElementById('');
// const obj = JSON.parse(natlFood);
// const newLocal = natlFood.forEach(el => {
//     if (el.country === countries.geometries.properties.name);
// });


// //click svg map
// document.addEventListener('click', funcition()){
//     if()
// }

// function clicked()