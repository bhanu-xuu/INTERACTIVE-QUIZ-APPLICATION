const quizData = [
    {
      question: "What is the official language of Andhra pradesh?",
      choices: ["Hindi", "Kannada", "Telugu", "Tamil"],
      correct: "Telugu",
    },
    {
        question: "Which temple in Andhra Pradesh is one of the richest and most visited in the world?",
        choices: ["Srisailam Temple", "Simhachalam Temple", "Tirumala Venkateswara Temple", "Kanaka Durga Temple"],
        correct: "Tirumala Venkateswara Temple"
      },
      {
        question: "Which city is proposed as the executive capital of Andhra Pradesh?",
        choices: ["Amaravati", "Kurnool", "Vijayawada", "Visakhapatnam"],
        correct: "Visakhapatnam"
      },
      {
        question: "Which classical dance form originated in Andhra Pradesh?",
        choices: ["Bharatanatyam", "Odissi", "Kathak", "Kuchipudi"],
        correct: "Kuchipudi"
      }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  function loadQuiz() {
    const currentData = quizData[currentQuiz];
    questionEl.textContent = currentData.question;
    choicesEl.innerHTML = "";
  
    currentData.choices.forEach(choice => {
      const li = document.createElement("li");
      li.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${choice}" />
          ${choice}
        </label>
      `;
      choicesEl.appendChild(li);
    });
  
    resultEl.textContent = "";
  }
  
  submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Please select an answer.");
      return;
    }
  
    const answer = selected.value;
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEnd();
    }
  });
  
  function quizEnd() {
    quiz.innerHTML = `
      <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
  
  loadQuiz();
  