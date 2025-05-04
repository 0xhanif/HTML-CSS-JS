const questions = [
  {
    question: "Apakah nama anak harimau?",
    choices: ["Anak", "Cub", "Anak Harimau", "Kitten"],
    correctAnswer: 1,
  },
  {
    question: "Apakah nama anak ayam?",
    choices: ["Chick", "Puyuh", "Duckling", "Kit"],
    correctAnswer: 0,
  },
  {
    question: "Apakah nama anak kambing?",
    choices: ["Cub", "Calf", "Kid", "Foal"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function () {
  displayCurrentQuestion();

  $(".nextButton").on("click", function () {
    if (!quizOver) {
      const value = $("input[type='radio']:checked").val();

      if (value === undefined) {
        $(".quizMessage").text("Sila pilih jawapan!").show();
      } else {
        $(".quizMessage").hide();
        if (parseInt(value) === questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          $(".nextButton").text("Cuba Lagi?");
          quizOver = true;
        }
      }
    } else {
      resetQuiz();
      displayCurrentQuestion();
      $(".nextButton").text("Soalan Seterusnya");
      $(".result").hide();
    }
  });
});

function displayCurrentQuestion() {
  const question = questions[currentQuestion].question;
  const choices = questions[currentQuestion].choices;

  $(".question").text(question);
  $(".choiceList").empty();

  for (let i = 0; i < choices.length; i++) {
    $(".choiceList").append(
      `<li><input type="radio" name="dynradio" value="${i}">${choices[i]}</li>`
    );
  }
}

function displayScore() {
  $(".result").text(
    `Skor anda: ${correctAnswers} daripada ${questions.length}`
  );
  $(".result").show();
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  quizOver = false;
}
