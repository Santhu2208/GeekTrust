function myFunction() {
  var x = document.getElementById("checklist");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  }
}
function myFunction1() {
    var x = document.getElementById("checklist1");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    }
  }
  function getOption() {
    selectElement = document.querySelector('#select');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('#heading').textContent = output + " " + "Market Checklist";
}

// for global checklist 
myQuestions = [
    {
      question: "Alignment of layout &amp;    design with briefing",
      answers: {
        Radio1:"Yes",
        Radio2:"No"
      }
    },
    {
      question: "Padding spaces is aligned    as per the standard",
      answers: {
        Radio1:"Yes",
        Radio2:"No"
      }
    },
    {
      question: "Content check against        brief",
      answers: {
        Radio1:"Yes",
        Radio2:"No"
      }
    }
    ];
    
    
    (function(){
      const questionContainer = document.getElementById('questions');
        const submitButton = document.getElementById('submit');
    
        multiplechoice();
        //submitButton.addEventListener('click', showResults);
    
        function multiplechoice(){
          const output = [];
          myQuestions.forEach(
            (cQuestion, qNumber) => {
              const answers = [];
              for(options in cQuestion.answers){
                answers.push(
                  `<label>
                    <input type="radio" name="question${qNumber}" value="${options}">
                    ${cQuestion.answers[options]}
                  </label>`
                );
              }
              output.push(
                `<div class="question"> ${cQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );
            }
          );
          questionContainer.innerHTML = output.join('');
        }
    })();

    //<-------------- for market checklist---------> 


    myQuestions1 = [
        {
          question1: "Alignment of layout &amp;    design with briefing",
          answers: {
            Radio1:"Yes",
            Radio2:"No"
          }
        },
        {
          question1: "Padding spaces is aligned    as per the standard",
          answers: {
            Radio1:"Yes",
            Radio2:"No"
          }
        },
        {
          question1: "Content check against        brief",
          answers: {
            Radio1:"Yes",
            Radio2:"No"
          }
        }
        ];
        
        
        (function(){
          const questionContainer1= document.getElementById('questions1');
            const submitButton1= document.getElementById('submit');
        
            multiplechoice1();
            //submitButton.addEventListener('click', showResults);
        
            function multiplechoice1(){
              const output = [];
              myQuestions1.forEach(
                (cQuestion1, qNumber1) => {
                  const answers = [];
                  for(options in cQuestion1.answers){
                    answers.push(
                      `<label>
                        <input type="radio" name="question1${qNumber1}" value="${options}">
                        ${cQuestion1.answers[options]}
                      </label>`
                    );
                  }
                  output.push(
                    `<div class="question1"> ${cQuestion1.question1} </div>
                    <div class="answers1"> ${answers.join('')} </div>`
                  );
                }
              );
              questionContainer1.innerHTML = output.join('');
            }
        })();