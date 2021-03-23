const questions = document.querySelectorAll('.question-container');

questions.forEach((currQuestion) => {
  const container = currQuestion.querySelector('.question');
  container.addEventListener('click', () => {
    currQuestion.classList.toggle('show');
    questions.forEach((question) => {
      if (question !== currQuestion) {
        question.classList.remove('show');
      }
    });
  });
});
