from flask import Flask, request, jsonify
from io import BytesIO
from PIL import Image
import base64
import cv2
import numpy as np
import mediapipe as mp

app = Flask(__name__)

# Overlay logic based on the original AI plan
def overlay_hairstyle(input_image):
    # Dummy example - Use your AI logic here
    overlay = np.full_like(input_image, (255, 0, 0))  # Red tint as a placeholder
    result_image = cv2.addWeighted(input_image, 0.7, overlay, 0.3, 0)
    return result_image

@app.route('/process-image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    input_image = Image.open(file.stream).convert('RGB')
    input_np = np.array(input_image)

    # Process the image and overlay hairstyle
    result_np = overlay_hairstyle(input_np)

    # Convert to Base64 for output
    result_image = Image.fromarray(result_np)
    buffer = BytesIO()
    result_image.save(buffer, format="PNG")
    result_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

    return jsonify({'result_image': result_base64})

if __name__ == '__main__':
    app.run(debug=True)
