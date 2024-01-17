const quiz = {
    currentQuestionIndex: 0,
    score: 0,
    questions: [
        {
            text: "What is the capital of France?",
            options: ["Berlin", "Paris", "Madrid", "Rome"],
            correctOption: 1
        },
        {
            text: "Which planet is known as the shining star?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            correctOption: 1
        },
        {
            text: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctOption: 1
        },
        {
            text: "Which pcategory dies the frog fall?",
            options: ["Terrestial", "Amphibian", "Reptile", "Aquatic"],
            correctOption: 1
        },
        {
            text: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctOption: 1
        }
    ],

    displayQuestion: function () {
        const questionContainer = document.getElementById("question-container");
        const optionsContainer = document.getElementById("options-container");
        const currentQuestion = this.questions[this.currentQuestionIndex];

        questionContainer.textContent = currentQuestion.text;

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => this.selectAnswer(index);
            optionsContainer.appendChild(button);
        });
    },

    selectAnswer: function (selectedOption) {
        const currentQuestion = this.questions[this.currentQuestionIndex];

        if (selectedOption === currentQuestion.correctOption) {
            this.score++;
        }

        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.displayScore();
        }
    },

    displayScore: function () {
        const scoreContainer = document.getElementById("score-container");
        scoreContainer.textContent = `Your Score: ${this.score}/${this.questions.length}`;
    }
};

quiz.displayQuestion();