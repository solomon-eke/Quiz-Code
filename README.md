# Quiz-Code
Code Quiz - Web APIs
This application is a code quiz with multiple-choice questions; stores high scores client-side.

On the landing page, the user is requested to "Start Quiz and when the quiz is completed, the navigation option is available to "View Highscores" and the "Time" value set at 0.

• Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins to count.

• Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty for instance, 15 seconds are subtracted from time remaining.

• When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.
