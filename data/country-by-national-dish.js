

const natlFoods = [
{"country" : "Afghanistan", "dish" : "Kabuli Palaw"},
{"country" : "Albania", "dish" : "Tavë kosi"},
{"country" : "Algeria", "dish" : "Couscous "},
{"country" : "Angola", "dish" : "Moamba de galinha "},
{"country" : "Antigua and Barbuda", "dish" : "Pepperpot, Fungee"},
{"country" : "Argentina", "dish" : "Asado"},
{"country" : "Armenia", "dish" : "Harissa, Dolma, Khorovats"},
{"country" : "Aruba", "dish" : "Keshi yena"},
{"country" : "Australia", "dish" : "Meat pie,Roast lamb "},
{"country" : "Austria", "dish" : "Wiener schnitzel, Tafelspitz"},
{"country" : "Azerbaijan", "dish" : "Dolma"},
{"country" : "Bahamas", "dish" : "Crack conch with peas and rice "},
{"country" : "Bahrain", "dish" : "Machboos"},
{"country" : "Bangladesh", "dish" : "Rice, Fish, Chicken Korma"},
{"country" : "Barbados", "dish" : "Cou-Cou and Flying Fish "},
{"country" : "Belarus", "dish" : "Draniki"},
{"country" : "Belgium", "dish" : "Moules-frites"},
{"country" : "Belize", "dish" : "Boil up"},
{"country" : "Bermuda", "dish" : "Bermuda fish chowder"},
{"country" : "Bhutan", "dish" : "Ema datshi"},
{"country" : "Bolivia", "dish" : "Salteñas"},
{"country" : "Bosnia and Herzegovina", "dish" : "Bosnian pot"},
{"country" : "Botswana", "dish" : "Seswaa"},
{"country" : "Brazil", "dish" : "Feijoada"},
{"country" : "Brunei", "dish" : "Ambuyat"},
{"country" : "Bulgaria", "dish" : "Banitsa, Bob chorba"},
{"country" : "Burma", "dish" : "Mohinga"},
{"country" : "Cambodia", "dish" : "Amok trey"},
{"country" : "Cameroon", "dish" : "Ndolé"},
{"country" : "Canada", "dish" : "Kraft Dinner"},
{"country" : "Cape Verde", "dish" : "Cachupa"},
{"country" : "Chile", "dish" : "Empanada"},
{"country" : "China", "dish" : "Peking Duck"},
{"country" : "Hong Kong", "dish" : "Char siu"},
{"country" : "Macau", "dish" : "Minchee "},
{"country" : "Colombia", "dish" : "Ajiaco, Bandeja paisa"},
{"country" : "Costa Rica", "dish" : "Gallo pinto"},
{"country" : "Ivory Coast", "dish" : "Fufu, Kedjenou"},
{"country" : "Croatia", "dish" : "Istrian stew"},
{"country" : "Cuba", "dish" : "Ropa vieja, Moros y cristianos"},
{"country" : "Cyprus", "dish" : "Fasolada"},
{"country" : "Czech Republic", "dish" : "roast pork with dumplings and sauerkraut"},
{"country" : "Democratic Republic of the Congo", "dish" : "Poulet à la Moambé"},
{"country" : "Denmark", "dish" : "fried pork and potato-based dish"},
{"country" : "Greenland", "dish" : "Kiviak"},
{"country" : "Dominica", "dish" : "Mountain chicken, Fish broth"},
{"country" : "Dominican Republic", "dish" : "rice, red beans, and meat"},
{"country" : "Ecuador", "dish" : "Encebollado, Fritada,Guatitas,"},
{"country" : "Egypt", "dish" : "Ful medames, kushari,"},
{"country" : "El Salvador", "dish" : "Pupusa"},
{"country" : "Eritrea", "dish" : "Zigini with injera, Gored gored, raw meat"},
{"country" : "Estonia", "dish" : "sauerkraut stew"},
{"country" : "Ethiopia", "dish" : "Wat with injera, Fit-fit"},
{"country" : "Finland", "dish" : "Karjalanpaisti,Mämmi, Sautéed reindeer"},
{"country" : "France", "dish" : "Crêpe, Pot-au-feu,Macaron, Bisque"},
{"country" : "Gabon", "dish" : "Poulet Nyembwe"},
{"country" : "Georgia", "dish" : "Khachapuri, khinkali"},
{"country" : "Germany", "dish" : "Currywurst, Sauerbraten, Bratwurst"},
{"country" : "Ghana", "dish" : "Fufu"},
{"country" : "Greece", "dish" : "Fasolada,Moussaka, Souvlaki"},
{"country" : "Grenada", "dish" : "Oil Down"},
{"country" : "Guatemala", "dish" : "Fiambre, Pepian (hearty meat stew)"},
{"country" : "Guyana", "dish" : "Pepperpot"},
{"country" : "Haiti", "dish" : "Red beans and rice "},
{"country" : "Honduras", "dish" : "Baleada, Carne asada, Sopa de Caracol (Conch Soup)"},
{"country" : "Hungary", "dish" : "Gulyás,"},
{"country" : "Iceland", "dish" : "Hákarl, Þorramatur"},
{"country" : "India", "dish" : "No officially anointed national dish"},
{"country" : "Indonesia", "dish" : "Tumpeng Sate,Soto,Nasi goreng"},
{"country" : "Iran", "dish" : "Chelo kabab, Ghormeh sabzi"},
{"country" : "Iraq", "dish" : "Samak masgouf,Kleicha"},
{"country" : "Ireland", "dish" : "Colcannon,Irish stew "},
{"country" : "Israel", "dish" : "Hummus, falafel, Meorav Yerushalmi"},
{"country" : "Italy", "dish" : "Pasta,Polenta,Pizza, Risotto"},
{"country" : "Jamaica", "dish" : "Ackee and Saltfish, Jamaican patty"},
{"country" : "Japan", "dish" : "Sushi, Japanese curry,Ramen "},
{"country" : "Jordan", "dish" : "Mansaf"},
{"country" : "Kazakhstan", "dish" : "Beshbarmak, Shalgam"},
{"country" : "Kenya", "dish" : "Ugali, Sukuma wiki, Nyama choma"},
{"country" : "Kuwait", "dish" : "Machboos"},
{"country" : "Kyrgyzstan", "dish" : "Beshbarmak, Laghman, Kuurdak"},
{"country" : "Laos", "dish" : "Tum Mak Hoong (Som Tum, its Thai name)"},
{"country" : "Latvia", "dish" : "Latke"},
{"country" : "Lebanon", "dish" : "Kibbeh"},
{"country" : "Libya", "dish" : "Bazeen, Usban"},
{"country" : "Lithuania", "dish" : "Cepelinai"},
{"country" : "Luxembourg", "dish" : "Judd mat Gaardebounen, Bouneschlupp"},
{"country" : "Macedonia", "dish" : "Tavče Gravče"},
{"country" : "Madagascar", "dish" : "Romazava "},
{"country" : "Malaysia", "dish" : "Nasi lemak,Satay, Laksa, Roti canai"},
{"country" : "Malta", "dish" : "Pastizzi, Rabbit Stew (Fenkata)"},
{"country" : "Mauritania", "dish" : "Thieboudienne, Couscous"},
{"country" : "Mexico", "dish" : "Tacos, Mole poblano,Chiles en nogada"},
{"country" : "Moldova", "dish" : "Mămăligă, Sarmale, Răcituri"},
{"country" : "Mongolia", "dish" : "Buuz"},
{"country" : "Montenegro", "dish" : "Kačamak, Raštan"},
{"country" : "Morocco", "dish" : "Couscous, Tagine"},
{"country" : "Nicaragua", "dish" : "Gallo pinto "},
{"country" : "Nigeria", "dish" : "Jollof rice"},
{"country" : "Nepal", "dish" : "Dal bhat "},
{"country" : "Netherlands", "dish" : "Stamppot, hutspot"},
{"country" : "New Zealand", "dish" : "Bacon and egg pie, lamb, pavlova"},
{"country" : "North Korea", "dish" : "Galbi, Kimchi"},
{"country" : "Norway", "dish" : "Fårikål"},
{"country" : "Pakistan", "dish" : "Biryani, Nihari"},
{"country" : "Panama", "dish" : "Sancocho de gallina"},
{"country" : "Palestine", "dish" : "Arab salad, Falafel, Mujaddara, Musakhan, Hummus with tahini"},
{"country" : "Paraguay", "dish" : "Sopa paraguaya"},
{"country" : "Peru", "dish" : "Ceviche"},
{"country" : "Philippines", "dish" : "Adobo,Lechon (both unofficial)"},
{"country" : "Poland", "dish" : "Bigos, Pierogi,Kotlet schabowy, Żurek"},
{"country" : "Portugal", "dish" : "Bacalhau"},
{"country" : "Puerto Rico", "dish" : "Arroz con gandules, Mofongo"},
{"country" : "Republic of the Congo", "dish" : "Poulet Moambé "},
{"country" : "Romania", "dish" : "Mămăligă, Sarmale, Mici"},
{"country" : "Russia", "dish" : "Pelmeni, Shchi, Kasha,Pirogi, Pirozhki"},
{"country" : "Republic of Tatarstan", "dish" : "Öçpoçmaq"},
{"country" : "Tula, Russia", "dish" : "Tula gingerbread"},
{"country" : "San Marino", "dish" : "Torta Tre Monti"},
{"country" : "Saudi Arabia", "dish" : "Kabsa"},
{"country" : "Senegal", "dish" : "Thieboudienne"},
{"country" : "Serbia", "dish" : "Ćevapčići, Pljeskavica, Ražnjići, Proja, Kajmak"},
{"country" : "Slovakia", "dish" : "Bryndzové halušky"},
{"country" : "Slovenia", "dish" : "Ajdovi žganci, Belokranjska povitica, Obara"},
{"country" : "Singapore", "dish" : "Chilli crab,Hainanese Chicken Rice"},
{"country" : "Somalia", "dish" : "Canjeero with goat stew"},
{"country" : "South Africa", "dish" : "Bobotie"},
{"country" : "South Korea", "dish" : "Kimchi, bulgogi"},
{"country" : "Spain", "dish" : "Tortilla española "},
{"country" : "Andalusia", "dish" : "Gazpacho"},
{"country" : "Asturias", "dish" : "Fabada asturiana"},
{"country" : "Basque Country", "dish" : "Marmitako, Chistorras"},
{"country" : "Canary Islands", "dish" : "Ropa vieja, Papas arrugadas"},
{"country" : "Galicia", "dish" : "Empanada, Polbo á feira"},
{"country" : "Valencian Community", "dish" : "Paella"},
{"country" : "Sri Lanka", "dish" : "Rice and curry"},
{"country" : "Sudan", "dish" : "Ful medames"},
{"country" : "Sweden", "dish" : "Köttbullar, Kräftskiva,Surströmming,Ostkaka"},
{"country" : "Switzerland", "dish" : "Cervelat,Fondue, Rösti"},
{"country" : "Syria", "dish" : "Kibbeh"},
{"country" : "Tajikistan", "dish" : "O'sh (pilaf)"},
{"country" : "Taiwan", "dish" : "Beef noodle soup"},
{"country" : "Tanzania", "dish" : "Ugali"},
{"country" : "Thailand", "dish" : "Pad Thai, Tom Yum Goong"},
{"country" : "Trinidad and Tobago", "dish" : "Callaloo,Doubles"},
{"country" : "Turkey", "dish" : "Döner kebab, Kuru fasulye with pilav"},
{"country" : "Tunisia", "dish" : "Couscous, Kabkabou"},
{"country" : "Turkmenistan", "dish" : "Palaw"},
{"country" : "Uganda", "dish" : "Matoke"},
{"country" : "Ukraine", "dish" : "Borscht, Varenyky "},
{"country" : "United Kingdom", "dish" : "Fish and chips,Chicken tikka masala (Indian-British curry)"},
{"country" : "England", "dish" : "Beef,(especially roast beef/corned beef),Pudding "},
{"country" : "Cornwall", "dish" : "Cornish pasty"},
{"country" : "Northern Ireland", "dish" : "Ulster fry"},
{"country" : "Isle of Man", "dish" : "Skeddan jiarg"},
{"country" : "Scotland", "dish" : "Haggis"},
{"country" : "Wales", "dish" : "Cawl"},
{"country" : "United States", "dish" : "Hamburger, Hot dog, Fried chicken, Buffalo wings, Apple pie"},
{"country" : "United States Virgin Islands", "dish" : "Fish and Fungi"},
{"country" : "Uruguay", "dish" : "Asado, Chivito"},
{"country" : "Uzbekistan", "dish" : "O'sh"},
{"country" : "Vanuatu", "dish" : "Lap lap"},
{"country" : "Venezuela", "dish" : "Pabellón criollo"},
{"country" : "Vietnam", "dish" : "Phở, Bún bò Huế"},
{"country" : "Yemen", "dish" : "Saltah"},
{"country" : "Zimbabwe", "dish" : "Sadza"}
]

export default natlFoods