let links = ["https://images.unsplash.com/photo-1573878416776-932ce6911da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", "https://nypost.com/wp-content/uploads/sites/2/2022/09/obesity-brain-disorder-03.jpg?quality=75&strip=all&w=1488", "https://i.dailymail.co.uk/1s/2021/08/27/15/47174195-0-image-a-3_1630073657541.jpg", "https://media1.faz.net/ppmedia/aktuell/2110912947/1.5252497/article_multimedia_overview/essen-gegen-stress-wie-stark.jpg", "https://asc-images.forward-publishing.io/2021/5/9/93052f94-f970-46ee-859e-030ae911071e.jpeg?w=1024&auto=format", "https://cdn.prod.www.spiegel.de/images/e3ac49db-ef03-4afe-b4e1-55603a309096_w948_r1.778_fpx29.93_fpy54.99.jpg"]

const firstIns = document.querySelector("#fatOne");
const secondIns = document.querySelector("#fatTwo");
const thirdIns = document.querySelector("#fatThree");
const noB = document.querySelector("#n");
const yesB = document.querySelector("#y");
const workoutList = document.querySelector("#workouts");
const iTellYou = document.querySelector("#iTellYou");

let numRan = Math.floor(Math.random() * 2);
firstIns.src = links[numRan];
numRan = Math.floor(Math.random() * 2) + 2;
secondIns.src = links[numRan];
numRan = Math.floor(Math.random() * 2) + 4;
thirdIns.src = links[numRan];

noB.addEventListener("click", () => {
    iTellYou.innerHTML = 'the right decision! Here are some workout ideas:'
    workoutList.style.display = "block";


})
yesB.addEventListener("click", () => {
    iTellYou.innerHTML = "Obesity leads to sooner dead and higher risks of strokes, diabetes or heart diseases."

})


