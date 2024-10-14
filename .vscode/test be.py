from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Extract parameters from the request
    capacity = data.get('capacity', 0)
    cycles = data.get('cycles', 0)
    temperature = data.get('temperature', 0)
    
    # Simple calculation for forecasting RUL
    rul = (capacity - cycles) * 10 - temperature
    forecasted_rul = max(0, rul)  # Ensure RUL is not negative

    # Return the forecasted RUL as JSON
    return jsonify({'forecasted_rul': forecasted_rul})

if __name__ == '__main__':
    app.run(debug=True)
