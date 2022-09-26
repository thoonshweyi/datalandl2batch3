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

const getbtn = document.querySelector('.btn');

let currentidx = 0;
var score = 0;

startquestion();
function startquestion(){
    removeselects();

    const currentqes = database[currentidx];

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;

}

function getsingleanswer(){
    let answer;
    // console.log(getansers);
    getansers.forEach(function(getanswer){
        if(getanswer.checked){
            answer = getanswer.id;
        }
    });
    // console.log(answer);
    return answer;
}

getbtn.addEventListener('click',function(){
    const answer = getsingleanswer();

    if(answer){
        // console.log(answer);
        if(answer === database[currentidx].correctanswer){
            score++;
        }

        currentidx++;
        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);
            getcontainer.innerHTML = `
                <h3>Total Score : ${score*25}</h3>
                <h4>You answer correctly at ${score} / ${database.length} questions.</h4>
                <!-- <button type="button" class="btn" ondblclick="location.reload();">Double Click To Reload</button> -->
                <button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>
            
                `
        }
    }else{
        window.alert("Choose One Answer")
    }
});

function removeselects(){
    getansers.forEach(function(getanswer){
        return getanswer.checked = false;
    });
}

let clicktimes = 0;
function doubleclick(){
    // console.log('hay i am working');

    console.log(clicktimes);
    if(clicktimes === 0){
        clicktimes = new Date().getTime();
        // clicktimes = new Date().now();
    }else{
        if(new Date().getTime() - clicktimes < 800){
            // console.log('hello');
            location.reload();

            clicktimes = 0;
        }else{
            clicktimes = new Date().getTime();
        }
    }
}