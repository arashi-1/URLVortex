# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Simple in-memory queue (you could swap this with a DB or file if needed)
url_log = []

@app.route('/open-url', methods=['POST'])
def open_url():
    data = request.json
    url = data.get('url')
    interval = int(data.get('interval', 1))
    times = int(data.get('times', 1))

    if not url:
        return jsonify({"error": "URL is required"}), 400

    # Log the request for monitoring (could be replaced with DB or external call)
    url_log.append({
        "url": url,
        "interval": interval,
        "times": times,
        "timestamp": time.time()
    })

    # Simulate success response (no webbrowser action on server)
    return jsonify({"message": "URL logged successfully. Please run your local script to process."})

@app.route('/logs', methods=['GET'])
def get_logs():
    return jsonify(url_log[::-1])  # Return latest first

if __name__ == '__main__':
    app.run(debug=True)