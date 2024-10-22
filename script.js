
// Syllabus data
const syllabus = [
  "Module 1: Introduction to Algebra",
  "Module 2: Geometry Fundamentals",
  "Module 3: Calculus Basics",
  "Module 4: Statistical Analysis"
];

// Dynamically add syllabus items
const syllabusList = document.getElementById('syllabus-list');
syllabus.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  syllabusList.appendChild(listItem);
});

// Enroll button event listener
const enrollBtn = document.getElementById('enroll-btn');
enrollBtn.addEventListener('click', () => {
  alert('Thank you for enrolling in the Mathematics course!');
});

// Quiz button event listener
const quizBtn = document.getElementById('quiz-btn');
quizBtn.addEventListener('click', () => {
  // Generate random quiz questions
  const questions = [
    {
      question: 'What is the value of x in 2x + 5 = 11?',
      options: ['2', '3', '4', '5'],
      answer: '3'
    },
    {
      question: 'What is the formula for the area of a circle?',
      options: ['πr^2', '2πr', 'πd', 'r^2'],
      answer: 'πr^2'
    }
  ];

  // Display quiz questions
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  document.body.appendChild(quizContainer);

  questions.forEach((question, index) => {
    const quizQuestion = document.createElement('h3');
    quizQuestion.textContent = question.question;
    quizQuestion.style.textAlign = 'center';
    quizContainer.appendChild(quizQuestion);

    const optionsList = document.createElement('ul');
    optionsList.style.listStyleType = 'disc';
    optionsList.style.padding = '0';
    optionsList.style.margin = '0';
    optionsList.style.display = 'flex';
    optionsList.style.flexDirection = 'column';
    optionsList.style.alignItems = 'center';

    question.options.forEach((option) => {
      const optionItem = document.createElement('li');
      optionItem.textContent = option;
      optionsList.appendChild(optionItem);
    });

    quizContainer.appendChild(optionsList);

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Enter answer';
    answerInput.style.width = '150px';
    answerInput.style.margin = '20px auto';
    answerInput.style.height = '25px';
    quizContainer.appendChild(answerInput);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.style.margin = '20px auto';
    submitBtn.style.display = 'block';
    submitBtn.addEventListener('click', () => {
      const userAnswer = answerInput.value.trim();
      if (userAnswer === question.answer) {
        showCustomAlert('Correct!');
      } else {
        showCustomAlert(`Incorrect. The correct answer is ${question.answer}.`);
      }
    });
    
    function showCustomAlert(message) {
      const customAlert = document.getElementById('custom-alert');
      const customAlertMessage = document.getElementById('custom-alert-message');
      const customAlertClose = document.getElementById('custom-alert-close');
      
      customAlertMessage.textContent = message;
      customAlert.style.display = 'block';
      
      customAlertClose.addEventListener('click', () => {
        customAlert.style.display = 'none';
      });
    }
    
    
    

    quizContainer.appendChild(submitBtn);
  });
});



