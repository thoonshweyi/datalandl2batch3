const database = [
    {
        question : "Choose Traffic Light ?",
        a : "./img/traffic.jpg",
        b : "./img/mountain.jpg",
        c : "./img/ambulance.jpg",
        d : "./img/airport.jpg",
        correctanswer : "a"
    },
    {
        question : "Choose Moutain ?",
        a : "./img/ambulance.jpg",
        b : "./img/mountain.jpg",
        c : "./img/traffic.jpg",
        d : "./img/airport.jpg",
        correctanswer : "b"
    },
    {
        question : "Choose Ampulance Truck ?",
        a : "./img/ambulance.jpg",
        b : "./img/airport.jpg",
        c : "./img/traffic.jpg",
        d : "./img/mountain.jpg",
        correctanswer : "a"
    },
    {
        question : "Choose Airport ?",
        a : "./img/traffic.jpg",
        b : "./img/mountain.jpg",
        c : "./img/ambulance.jpg",
        d : "./img/airport.jpg",
        correctanswer : "d"
    },
    
];
// console.log(database);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getansers = document.querySelectorAll('.answer');
// console.log(getansers);
const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');
// console.log(geta_img);

startquestion();
function startquestion(){
    getquestion.textContent = database[0].question;
    geta_img.src = database[0].a;
    getb_img.src = database[0].b;
    getc_img.src = database[0].c;
    getd_img.src = database[0].d;

}