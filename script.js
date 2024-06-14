//Constant & Variable Declaration
var quizData = [];
var questionDetails = {};

// load the Local JSON Data
function loadData( ) {
    
}

document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM is fully loaded and ready
    console.log('Document is ready');
    // Initial Set Up
    initialSetUp();
    // You can now safely manipulate the DOM or perform other tasks
});


function initialSetUp() {   
    questionDetails = '';
    const container = document.getElementById("sec3");
    //const submit = document.getElementById("submit-btn");
    container.style.display = 'none';
    //submit.style.display = 'none';
    document.getElementById("Sports").addEventListener('click', onSportsClick);
    document.getElementById("Politics").addEventListener('click', onPoliticsClick);
    document.getElementById("Cinema").addEventListener('click', onCinemaClick);
    document.getElementById("Fun").addEventListener('click', onFunClick);
    document.getElementById("submit-btn").addEventListener('click', onSubmit);

}

function onSubmit(params) {
    debugger;
    // Get the Option Selected and compare it with answer
    const radios = document.getElementsByName('dynamicRadio');
    let selectedValue;
    let selectedOption = false;

    for( var i = 0;i<radios.length;i++){
        if (radios[i].checked) {
            selectedValue = i;
            selectedOption = true;
            break;
        }
    }
    // for (const radio of radios) {
    //     if (radio.checked) {
    //         selectedValue = radio.value;
    //         break;
    //     }
    // }

    if(selectedOption){
        if ( questionDetails.options[selectedValue] === questionDetails.answer )
        {
            alert("You are right");
        }
        else{
            alert("Sorry , you are wrong!")
        }

    }

}


function onSportsClick(params) {
    debugger;
    alert('sports clicked');
    //Read the Sports Data from the Quiz Data
    var sportsData = quizData.sports;

    // Generate a random number for posting questions

    // Read the question from the Sports Data
    questionDetails = sportsData[0];
    var question = sportsData[0].question
    var options = sportsData[0].options;


    
    const textContainer = document.getElementById('question');
    textContainer.innerText = question;

// Add the options
const radioContainer = document.getElementById('options');

    for( var i = 0;i<options.length;i++ ) {    
    // Create a new radio button element
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'dynamicRadio';

    // Create a label for the radio button
    const radioLabel = document.createElement('label');
    radioLabel.htmlFor = 'dynamicRadio';
    radioLabel.innerText = options[i];
    var optSelected = options[i];

    // Append the radio button and label to the container
    radioContainer.appendChild(radioButton);
    radioContainer.appendChild(radioLabel);

    // Add an event listener to the radio button
    radioButton.addEventListener('change', function(optSelected) {
        alert(optSelected);
    });

}


    // make the sec3 DIV visible with white background and aligned to the middle of the page
    const container = document.getElementById("sec3");
    container.style.display = 'block';
    // container.style.backgroundColor = 'white';
    container.style.paddingTop = '20%';
}

function onPoliticsClick(params) {
    alert('politics clicked');
}

function onCinemaClick(params) {
    alert('cinema clicked');
}

function onFunClick(params) {
    alert('fun clicked');
}



        // Function to make an AJAX request to the local JSON file
        function readLocalJSONFile(file, callback) {
            const xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open('GET', file, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(xhr.responseText);
                }
            };
            xhr.send(null);
        }

        // Function to display JSON content
        function displayJSONContent(jsonString) {
            console.log(jsonString);
            quizData = JSON.parse(jsonString);
            //loadData();
            // const jsonContentElement = document.getElementById('json-content');
            // jsonContentElement.textContent = jsonString;
        }


        // Read the local JSON file and display its content
        readLocalJSONFile('data.json', displayJSONContent);