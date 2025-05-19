# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import webbrowser
import threading
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

def open_urls(url, interval, times):
    for i in range(times):
        webbrowser.open(url)
        time.sleep(interval)

@app.route('/open-url', methods=['POST'])
def open_url():
    data = request.json
    url = data.get('url')
    interval = int(data.get('interval', 1))
    times = int(data.get('times', 1))

    # Run the URL opening in a separate thread
    thread = threading.Thread(target=open_urls, args=(url, interval, times))
    thread.start()

    return jsonify({"message": "Opening started successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
