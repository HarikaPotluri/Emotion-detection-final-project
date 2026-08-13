# Emotion Detection Web Application

Final project for developing and deploying an AI-based web application with Python, IBM Watson NLP, Flask, unit testing, error handling, and static code analysis.

## Author

Harika Potluri

## Project structure

```text
emotion_detection_final_project/
├── EmotionDetection/
│   ├── __init__.py
│   └── emotion_detection.py
├── static/
│   └── mywebscript.js
├── templates/
│   └── index.html
├── README.md
├── requirements.txt
├── server.py
└── test_emotion_detection.py
```

## Setup

```bash
python3 -m pip install -r requirements.txt
```

## Validate the package

```bash
python3 -c "from EmotionDetection import emotion_detector; print(emotion_detector('I love this new technology'))"
```

## Run unit tests

```bash
python3 -m unittest test_emotion_detection.py -v
```

## Run the Flask application

```bash
python3 server.py
```

Open the application on port `5000` in your lab environment or browser.

## Static code analysis

```bash
pylint server.py
```
