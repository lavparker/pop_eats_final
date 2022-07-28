var national_foods = require('../data/country_food_data.json');


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
            .text(d => `${d.id}: ${d.properties.name}`);

            svg.on("click", (d) => {
                let selected_country = getCountryNameFromTarget(d.target)

                if (national_foods[selected_country]) {
                    document.getElementById("food_displayer").innerHTML = "Last country selected: " + selected_country + ", favorite food: " + national_foods[selected_country].dish
                }
            })
       
    });
})

function getCountryNameFromTarget(target) {
    if (!target) {
        return ""
    }

    let element = target.querySelector("title")

    if (!element) {
        return ""
    }

    let country_id_and_name = element.innerHTML
    let split_index = country_id_and_name.indexOf(': ') + 2

    let country_name = country_id_and_name.slice(split_index)

    return country_name
}