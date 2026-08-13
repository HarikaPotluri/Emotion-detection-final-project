# 16-Point Submission Checklist

## Task 1 — GitHub repository URL
- Push this project to a **public GitHub repository**.
- Open `README.md` on GitHub and submit its public URL.

## Task 2 — Emotion detection application
- Submit `EmotionDetection/emotion_detection.py` showing `emotion_detector`.
- In terminal run:
  ```bash
  python3 -c "from EmotionDetection import emotion_detector; print(emotion_detector('I love this new technology'))"
  ```
- Capture terminal output with no import/runtime error.

## Task 3 — Format output
- Submit the return dictionary section from `emotion_detection.py`.
- Run:
  ```bash
  python3 -c "from EmotionDetection import emotion_detector; print(emotion_detector('I am glad this happened'))"
  ```
- Capture output containing: anger, disgust, fear, joy, sadness, dominant_emotion.

## Task 4 — Validate package
- Submit the GitHub URL of `EmotionDetection/__init__.py`.
- Run:
  ```bash
  python3 -c "from EmotionDetection import emotion_detector; print('EmotionDetection package imported successfully')"
  ```
- Capture the terminal output.

## Task 5 — Unit tests
- Submit `test_emotion_detection.py`.
- Run:
  ```bash
  python3 -m unittest test_emotion_detection.py -v
  ```
- Capture the output showing all 5 tests pass.

## Task 6 — Flask deployment
- Submit `server.py`.
- Run:
  ```bash
  python3 server.py
  ```
- Open port 5000, enter `I am glad this happened`, click the button, and save the screenshot as:
  `6b_deployment_test.png`

## Task 7 — Error handling
- Submit the `response.status_code == 400` section from `emotion_detection.py`.
- Submit the `dominant_emotion is None` section from `server.py`.
- In the web app submit a blank input and save the screenshot as:
  `7c_error_handling_interface.png`
- The page should display: `Invalid text! Please try again!`

## Task 8 — Static code analysis
- Submit `server.py` as the code being analyzed.
- Run:
  ```bash
  pylint server.py
  ```
- Capture output showing `Your code has been rated at 10.00/10`.
- If your course image uses a different Pylint version and reports only environment/import warnings, use the course-provided environment/config and fix any real style messages before taking the screenshot.
