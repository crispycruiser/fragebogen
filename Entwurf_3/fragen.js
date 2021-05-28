async function getFrage() {
    const response = await fetch("/Entwurf_3/fragen.json");
    const data = await response.json();
    const {frage} = data;

    document.getElementById('frage_test').textContent = frage;
    console.log(data.length);
    console.log(data[0].frage);
    console.log(data[0].nummer);
    return data;
}
let data = getFrage();




function display_random_question (){
    console.log(data.length);
}

document.getElementById("HIER_KOMMT_FRAGE_SWITCHER").addEventListener("click", function () {
    // document.getElementById('frage_test').textContent = frage;
    display_random_question();
    console.log("Mini mam macht geili lasagne");
  });


//   fetch('https://example.com/test.json’)
//   .then(response => response.json())
//   .then(result => {
//     console.log('Success:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
  
