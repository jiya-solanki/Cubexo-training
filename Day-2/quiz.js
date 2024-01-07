// Define the quiz questions and answers
const questions = [
    {
        question: "What data type is used to store whole numbers in JavaScript?",
        options: ["String", "Number", "Boolean", "Array"],
        correctAnswer: "Number"
    },
    {
        question: "Which data type is used to store text in JavaScript?",
        options: ["Number", "Boolean", "String", "Array"],
        correctAnswer: "String"
    },
    {
        question: "What data type is used to represent true or false values in JavaScript?",
        options: ["String", "Number", "Boolean", "Array"],
        correctAnswer: "Boolean"
    }
];
let score = 0;
// Function to display a question and check the user's answer
function displayQuestion(index) 
{
    const question=questions[index];
    const userAnswer=prompt(`${question.question}\nOptions: ${question.options.join(', ')}`);
    if (userAnswer===question.correctAnswer) 
    {
        alert("Correct Answer!");
        score++;
    } 
    else 
    {
        alert(`Sorry, the correct answer is: ${question.correctAnswer}`);
    }
}
// Loop through the questions and display them
for (let i=0;i<questions.length;i++) 
{
    displayQuestion(i);
}
// Displaying the final score
alert(`You scored ${score} out of ${questions.length}`);