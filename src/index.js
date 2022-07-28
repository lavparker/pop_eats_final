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

    //get modal element 
    let modal = document.getElementById("simpleModal");
    let modalBtn = document.getElementById("modalBtn")[0];
    let closeBtn = document.getElementsByClassName('closeBtn');

    modalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', outsideClick)

    function openModal() {
        console.log(123);

        modal.style.display = 'block';
    }

    function closeModal() {
        console.log(123);

        modal.style.display = 'none';
    }

    function outsideClick(e){
        if(e.target === modal){
            modal.style.display = 'none';
        }
    }

//     // Get the modal


//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on the button, open the modal
//     var modalBtn = document.getElementsByClassName("buttons")
//     modalBtn.onclick = function () {
//         // modal.style.display = "block";
//         console.log(123);
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function () {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// })

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