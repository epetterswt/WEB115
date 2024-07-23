document.getElementById("myBtn").addEventListener('click', myWindow)

function myWindow () {
    username = document.getElementById('username').value
    email = document.getElementById('email').value
    goal = document.getElementById('goal').value

    monbreakfast = document.getElementById('monbft').value
    monsnack1 = document.getElementById('monsna1').value
    monlunch = document.getElementById('monlun').value
    monsnack2 = document.getElementById('monsna2').value
    mondinner = document.getElementById('mondin').value

    tuebreakfast = document.getElementById('tuebft').value
    tuesnack1 = document.getElementById('tuesna1').value
    tuelunch = document.getElementById('tuelun').value
    tuesnack2 = document.getElementById('tuesna2').value
    tuedinner = document.getElementById('tuedin').value

    wedbreakfast = document.getElementById('wedbft').value
    wedsnack1 = document.getElementById('wedsna1').value
    wedlunch = document.getElementById('wedlun').value
    wedsnack2 = document.getElementById('wedsna2').value
    weddinner = document.getElementById('weddin').value

    thubreakfast = document.getElementById('thubft').value
    thusnack1 = document.getElementById('thusna1').value
    thulunch = document.getElementById('thulun').value
    thusnack2 = document.getElementById('thusna2').value
    thudinner = document.getElementById('thudin').value

    fribreakfast = document.getElementById('fribft').value
    frisnack1 = document.getElementById('frisna1').value
    frilunch = document.getElementById('frilun').value
    frisnack2 = document.getElementById('frisna2').value
    fridinner = document.getElementById('fridin').value

    satbreakfast = document.getElementById('satbft').value
    satsnack1 = document.getElementById('satsna1').value
    satlunch = document.getElementById('satlun').value
    satsnack2 = document.getElementById('satsna2').value
    satdinner = document.getElementById('satdin').value

    sunbreakfast = document.getElementById('sunbft').value
    sunsnack1 = document.getElementById('sunsna1').value
    sunlunch = document.getElementById('sunlun').value
    sunsnack2 = document.getElementById('sunsna2').value
    sundinner = document.getElementById('sundin').value

    if (email == "") {
        alert("Email is required")
        return false;
    }

    myText = ("<h3>Hello, " + username + "!</h3> <br>" + email +
        "<br> <h2>To achieve your goal of " + goal + ", your meal plan is:</h2> <br> <h4>Monday</h4> <br>"
        + monbreakfast + " for breakfast <br>" + monsnack1 + " for your first snack <br>"
        + monlunch + " for lunch <br>" + monsnack2 + " for your second snack <br>"
        + mondinner + " for dinner <br> <h4>Tuesday</h4>" +
    
        tuebreakfast + " for breakfast <br>" + tuesnack1 + " for your first snack <br>"
        + tuelunch + " for lunch <br>" + tuesnack2 + " for your second snack <br>"
        + tuedinner + " for dinner <br> <h4>Wednesday</h4>" +

        wedbreakfast + " for breakfast <br>" + wedsnack1 + " for your first snack <br>"
        + wedlunch + " for lunch <br>" + wedsnack2 + " for your second snack <br>"
        + weddinner + " for dinner <br> <h4>Thursday</h4>" +
    
        thubreakfast + " for breakfast <br>" + thusnack1 + " for your first snack <br>"
        + thulunch + " for lunch <br>" + thusnack2 + " for your second snack <br>"
        + thudinner + " for dinner <br> <h4>Friday</h4>" +
    
        fribreakfast + " for breakfast <br>" + frisnack1 + " for your first snack <br>"
        + frilunch + " for lunch <br>" + frisnack2 + " for your second snack <br>"
        + fridinner + " for dinner <br> <h4>Saturday</h4>" +
    
        satbreakfast + " for breakfast <br>" + satsnack1 + " for your first snack <br>"
        + satlunch + " for lunch <br>" + satsnack2 + " for your second snack <br>"
        + satdinner + " for dinner <br> <h4>Sunday</h4>" +
    
        sunbreakfast + " for breakfast <br>" + sunsnack1 + " for your first snack <br>"
        + sunlunch + " for lunch <br>" + sunsnack2 + " for your second snack <br>"
        + sundinner + " for dinner <br>" +
    
        "<button onclick='window.print()'>Print</button>" +
    
        "<style> body {background-color: burlywood; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif}  </style>" +
    
        "<a href='about:blank' download><button>Download</button></a>")

    windowPop = window.open('about:blank', 'width=400','height=200', 'left=200', 'top=200')
    windowPop.document.write(myText)
}

let clearBtn = document.getElementById("clear")
let inputs = document.querySelectorAll("input")

clearBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
})