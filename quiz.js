var myQuestions = [

    {
        "question": "What is the scientific name of a butterfly?",
        "answers": [
            "Apis",
            "Coleoptera",
            "Formicidae",
            "Rhopalocera"
        ],
        "correctIndex": 3
    },
    {
        "question": "How hot is the surface of the sun?",
        "answers": [
            "1,233 K",
            "5,778 K",
            "12,130 K",
            "101,300 K"
        ],
        "correctIndex": 1
    },
    {
        "question": "Who are the actors in The Internship?",
        "answers": [
            "Ben Stiller, Jonah Hill",
            "Courteney Cox, Matt LeBlanc",
            "Kaley Cuoco, Jim Parsons",
            "Vince Vaughn, Owen Wilson"
        ],
        "correctIndex": 3
    },
    {
        "question": "What is the capital of Spain?",
        "answers": [
            "Berlin",
            "Buenos Aires",
            "Madrid",
            "San Juan"
        ],
        "correctIndex": 2
    },
    {
        "question": "What are the school colors of the University of Texas at Austin?",
        "answers": [
            "Black, Red",
            "Blue, Orange",
            "White, Burnt Orange",
            "White, Old gold, Gold"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "answers": [
            "18.8889",
            "20",
            "21.1111",
            "158"
        ],
        "correctIndex": 2
    },
    {
        "question": "When was Mahatma Gandhi born?",
        "answers": [
            "October 2, 1869",
            "December 15, 1872",
            "July 18, 1918",
            "January 15, 1929"
        ],
        "correctIndex": 0
    },
    {
        "question": "How far is the moon from Earth?",
        "answers": [
            "7,918 miles (12,742 km)",
            "86,881 miles (139,822 km)",
            "238,400 miles (384,400 km)",
            "35,980,000 miles (57,910,000 km)"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is 65 times 52?",
        "answers": [
            "117",
            "3120",
            "3380",
            "3520"
        ],
        "correctIndex": 2
    },
    {
        "question": "How tall is Mount Everest?",
        "answers": [
            "6,683 ft (2,037 m)",
            "7,918 ft (2,413 m)",
            "19,341 ft (5,895 m)",
            "29,029 ft (8,847 m)"
        ],
        "correctIndex": 3
    },
    {
        "question": "When did The Avengers come out?",
        "answers": [
            "May 2, 2008",
            "May 4, 2012",
            "May 3, 2013",
            "April 4, 2014"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is 48,879 in hexidecimal?",
        "answers": [
            "0x18C1",
            "0xBEEF",
            "0xDEAD",
            "0x12D591"
        ],
        "correctIndex": 1
    }
]

const submitBotton = document.getElementById('submit')
const quizCOntainer = document.getElementById('quiz')


//Generat quiz    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function generateQuiz() {
    //----------------------function to show questions 
    function showquestions() {

        


        let html = '<ul class="qzbox">'

        for (let i = 0; i < myQuestions.length; i++) {
            let correctans = myQuestions[i].correctIndex
            console.log(correctans)


            html += `<li class="qbox text-secondary  "> Question- ${i+1}-${myQuestions[i].question } 
            `
            // console.log(myQuestions[i].answers.length)
            html += '<ol class="abox">'
            for (let an = 0; an < myQuestions[i].answers.length; an++) {
              
              
                html += `<li  class=" li-${i} answer text-bg-light h6 p-2"> <label><input type="radio" name="question-${i}" id="question_${i}_${an+1}" value="${correctans}" class="qs-${i}"> ${myQuestions[i].answers[an]  }'</label> `
            }





            html += '</li></ol></li>'
            quizCOntainer.innerHTML += html

            // console.log(i)
        }
        html += '</ul>'
        quizCOntainer.innerHTML = html


        



    }

    //----------------------function to show results 
    function showresults() {
        


    }

    //End Generat quiz+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    showquestions()
  


}




function buildCorrectAnswersArry(){
    let arryCorrectAnswers =[]

    
    for (let i = 0; i < myQuestions.length; i++) {

        
        arryCorrectAnswers.push(myQuestions[i].correctIndex)

    }
    console.log(arryCorrectAnswers)





}

// function buildSelectedanswerArry(){

//     for (let i = 0; i < myQuestions.length; i++) {

//        let d= 'question-'+i+''
       

//        const theAnswer =document.querySelectorAll('input[name="d"]')
//        for (answer in myQuestions[i].answers){

//         if (theAnswer.checked= false){
//             console.log('ccceee')
//         }
       

//        }
//     }
       
   
// }
generateQuiz()
buildCorrectAnswersArry()




submitBotton.onclick = function (e) {
   
        e.preventDefault();
        let result = 0
   


    for (let i = 0; i < myQuestions.length; i++){
        
        
        
        const radioButtons = document.querySelectorAll('input[name="question-'+i+'"]');
        // console.log(radioButtons)

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                let correctAnswer = radioButton.value;
                console.log(radioButton.id)
                console.log(correctAnswer)
                let yourAnswer = radioButton.id
                console.log(typeof(radioButton.id))
                let lastChar = yourAnswer.charAt(yourAnswer.length - 1)
                console.log(lastChar)
                console.log (typeof(lastChar))
                if(lastChar == radioButton.value){
                    console.log('answer is correct ')
                    result +=1
                    
                    
                    
                }
                else{
                    console.log("answer is worng")
                    result +=0
                }

                // question_${i}_${an}
                
                
            }

            
        }
      
        
        for (let an = 0; an < myQuestions[i].answers.length; an++) {
            const ansOne = document.getElementById('question_'+i+'_'+an+'')
            const relatedLi = document.querySelectorAll('.li-'+i+'')
            

           
            
                
            
            //     //Male radio button is checked
            //   }else  {
            //     //Female radio button is checked
            //   }
            // // console.log(ansOne)

            // let theCorrectAnswer=ansOne.value
           
           
          


        }
        
    

      

    }
    console.log(result)
    const $result =document.getElementById("result")

        $result.textContent="Your Result is = "+result +"/ "+myQuestions.length


    
}

    