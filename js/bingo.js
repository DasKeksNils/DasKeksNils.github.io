
const quotes = [
    "Beef",
    'jemand sagt "Personality"',
    "Es muss zensiert werden",
    "Heidi hat kein Foto für jemanden",
    'Heidi sagt "nur eine kann GNTM werden"',
    'Heidi sagt "meiene Mädchen/Models"',
    "jemand hat Angst vorm Shooting/Walk",
    "jemand schleimt sich bei Heidi ein",
    "jemand weint",
    "jemand sagt etwas mit Selbstbewusstsein",
    "jemand fällt oder knickt um",
    "etwas wird unnötig auf Englisch gesagt",
    "Schleichwerbung oder unnötiges Product Placement",
    "schlechter Witz",
    "Übertriebene Reaktion der Girls (Freuen, etc)",
    "es wird extrem auf Arsch/Boobs gefilmt",
    "Komplimente über Boobs/Ass",
    "Models lästern übereinander",
    'jemand sagt "sexy"',
    "jemand gibt sinnlosen Ratschlag",
    "jemand versteht kein Englisch",
    "jemand beschwert sich über das Outfit",
    'jemand sagt "crazy 🤪✌"'

]


function buttonname(quotesdel){
    const random = Math.floor(Math.random() * quotesdel.length)
    const quote = quotesdel[random]
    quotesdel.splice(random, 1)
    console.log(quotesdel)
    return quote
}


function buttonclick(id){
    var bu = document.getElementById(id);
    if (bu.className != "pressed") {
        bu.className = "pressed"
    } else {
        bu.className = "notpressed"
    }
    
}

function init() {
    console.log(quotes)
    var quotesdel = quotes.slice()
    console.log(quotesdel)
    let i = 1; 
    while(i <= 16) {
        var bu = document.getElementById(i);
        bu.innerHTML = buttonname(quotesdel)
        bu.className = "notpressed"
        i++
    }
}