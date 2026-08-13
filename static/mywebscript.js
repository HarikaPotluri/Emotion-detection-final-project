function runEmotionAnalysis() {
    const text = document.getElementById("textToAnalyze").value;
    const request = new XMLHttpRequest();

    request.onreadystatechange = function handleResponse() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("system_response").innerHTML = this.responseText;
        }
    };

    request.open(
        "GET",
        `emotionDetector?textToAnalyze=${encodeURIComponent(text)}`,
        true
    );
    request.send();
}
