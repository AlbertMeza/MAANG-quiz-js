/*first usage of Document Object Model(DOM)
    The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.
    It defines the logical structure of documents and the way a document is accessed and manipulated.
    ^^from google not my words, I wish I was this elegant at speaking
 */
const questionDisplay = document.querySelector('#questions')
const answersDisplay = document.querySelector('#answers')

const questions = [
    {
        id: 0,
        text: "Pick a city to live in:",
        answers: [
            {
                text: "San Francisco",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg/600px-San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg",
                alt: "Photo of San Francisco",
                credit: "Wikipedia"
            },
            {
                text: "Seattle",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Downtown_Seattle_skyline_from_Kerry_Park_-_October_2019.jpg/1920px-Downtown_Seattle_skyline_from_Kerry_Park_-_October_2019.jpg",
                alt: "Photo of Seattle",
                credit: "Wikipedia"
            },
            {
                text: "Austin",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg/536px-Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg",
                alt: "Photo of Austin",
                credit: "Wikipedia"
            },
            {
                text: "New York City",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/536px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
                alt: "Photo of New York City",
                credit: "Wikipedia"
            }
        ]
    },
    {
        id: 1,
        text: "Pick your an animal from below:",
        answers: [
            {
                text: "Butterfly",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Morpho_didius_Male_Dos_MHNT.jpg/483px-Morpho_didius_Male_Dos_MHNT.jpg",
                alt: "Blue",
                credit: "Wikipedia"
            },
            {
                text: "Beluga Whale",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Delphinapterus_leucas_2.jpg/242px-Delphinapterus_leucas_2.jpg",
                alt: "White",
                credit: "Wikipedia"
            },
            {
                text: "Red Fox",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg/440px-Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg",
                alt: "Red",
                credit: "Wikipedia"
            },
            {
                text: "Parrot",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Yellow-naped_Amazon.jpg/562px-Yellow-naped_Amazon.jpg",
                alt: "Green",
                credit: "Wikipedia"
            }
        ]
    },
    {
        id: 2,
        text: "What new phone do you like best?",
        answers: [
            {
                text: "Galaxy Z",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Galaxy_Z.jpg/1920px-Galaxy_Z.jpg",
                alt: "Galaxy phone",
                credit: "Wikipedia"
            },
            {
                text: "iPhone",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IPhone_14_Pro_vector.svg/372px-IPhone_14_Pro_vector.svg.png",
                alt: "iPhone",
                credit: "Wikipedia"
            },
            {
                text: "Google Pixel",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pixel_%28smartphone%29_5_inch_silver_mock.png/400px-Pixel_%28smartphone%29_5_inch_silver_mock.png",
                alt: "Google Pixel phone",
                credit: "Wikipedia"
            },
            {
                text: "A phone is a phone, whichever is cheapest",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Telefon_BW_2012-02-18_13-44-32.JPG/440px-Telefon_BW_2012-02-18_13-44-32.JPG",
                alt: "Classic phone",
                credit: "Wikipedia"
            }
        ]
    },
    {
        id: 3,
        text: "Pick your favorite dog!",
        answers: [
            {
                text: "Shih Tzu ",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Starofbuddha.jpg/440px-Starofbuddha.jpg",
                alt: "Shih Tzu",
                credit: "Wikipedia"
            },
            {
                text: "Puli",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Csalfa_Sommer_07_10_A.jpg/540px-Csalfa_Sommer_07_10_A.jpg",
                alt: "Puli",
                credit: "Wikipedia"
            },
            {
                text: "Old English Sheepdog",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Old_English_Sheepdog_%28side%29.jpg/440px-Old_English_Sheepdog_%28side%29.jpg",
                alt: "Old English Sheepdog",
                credit: "Wikipedia"
            },
            {
                text: "I rather not have a dog at the moment",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Zoomer_hund.jpg/600px-Zoomer_hund.jpg",
                alt: "Robot Dog",
                credit: "Wikipedia"
            }
        ]
    }
]

const unansweredQuestions = []; //array
const answeredQuestions = [];

/* Traditional Anonymous Function
    (function (a, b) {
        return a + b + 100;
    });

    Arrow Function
    (a, b) => a + b + 100;
*/
const populateQuestion = () => {
    questions.forEach(question => { //foreach
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        //copy the same process but for answers now
        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + 4; //cannot reuse 1,2,3,4
        answersBlock.classList.add('answer-option')

        unansweredQuestions.push(question.id) //for handleClick logic

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', handleClick(question.id, answer.text)) //TODO not working yet
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            answerBlock.append(answerTitle, answerImage)
            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)
    })
}

function handleClick(questionID, answer) {
    if (unansweredQuestions.includes(questionID)) {
    answeredQuestions.push(answer)
    }
    const itemToRemove = unansweredQuestions.indexOf(questionID)

    //thanks google
    if (itemToRemove > -1){
        unansweredQuestions.splice(itemToRemove, 1)
    }

    console.log(answeredQuestions)
    console.log(unansweredQuestions)
}

populateQuestion()