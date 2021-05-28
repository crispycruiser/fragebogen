let allQuestions;
let lastQuestions = [];

let btn1 = document.getElementById("HIER_KOMMT_FRAGE_SWITCHER_1");
let btn2 = document.getElementById("HIER_KOMMT_FRAGE_SWITCHER_2");
let btn3 = document.getElementById("HIER_KOMMT_FRAGE_SWITCHER_3");
let btn4 = document.getElementById("HIER_KOMMT_FRAGE_SWITCHER_4");
let btn5 = document.getElementById("HIER_KOMMT_FRAGE_SWITCHER_5");

// json file wird reingeladen und html gerecht gemacht

fetch("/Entwurf_3/fragen.json")
.then(response => response.json())
.then(result => {
    allQuestions = result;
    display_random_question_for_scene(1); //in jeder szene wird mal eine random frage angezeigt
    display_random_question_for_scene(2);
    // display_random_question_for_scene(3);
    // display_random_question_for_scene(4);
    // display_random_question_for_scene(5);    
})
.catch(error => {
    console.error('Error while loading questions: ', error);
});

//wenn button klickt wird, wird random question angezeigt

btn1.addEventListener("click", () => {
    display_random_question_for_scene(1);
});

btn2.addEventListener("click", () => {
    display_random_question_for_scene(2);
});

btn3.addEventListener("click", () => {
    display_random_question_for_scene(3);
});

btn4.addEventListener("click", () => {
    display_random_question_for_scene(4);
});

btn5.addEventListener("click", () => {
    display_random_question_for_scene(5);
});

// funktion um random frage zu generieren

function display_random_question_for_scene (scene){
    try {
        let questions = allQuestions.filter((question) => {
            return question.szene == scene;
        });
        let randomQuestion;
        do {
            randomQuestion = questions[Math.floor(Math.random() * questions.length)]; // durch random zahl wird random position in array ausgewählt
        } while (lastQuestions[scene] == randomQuestion.frage); // solange position gleiche wie vorherige = wird neue random zahl generiert
        lastQuestions[scene] = randomQuestion.frage;

        // holt container aus html um frage einzufügen
        let frageContainer = document.getElementById("containerFrage" + scene);
        //container wird geleert damit nächste frage eingefügt werden kann
        frageContainer.innerHTML = "";

        // html elemente erstellen wo dann daten aus json eingefügt werden
        let fragebogen = document.createElement("div");
        fragebogen.classList.add("fragebogen");
        fragebogen.innerText = randomQuestion.fragebogen;
        
        let nr = document.createElement("div");
        nr.classList.add("nr");
        nr.innerText = randomQuestion.nummer;

        let frage = document.createElement("div");
        frage.classList.add("frage");
        frage.innerText = randomQuestion.frage;

        // html elemente werden in container eingefügt
        frageContainer.appendChild(fragebogen);
        frageContainer.appendChild(nr);
        frageContainer.appendChild(frage);

        console.log(lastQuestions);    
    } catch (error) {
        console.error(error);
    }
}