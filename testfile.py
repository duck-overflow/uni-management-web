from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Empfange JSON Sachen von INDEX
    data = request.get_json()
    text = data.get('text')

    # Verarbeite die Eingabe
    return jsonify({'message': f'Du hast folgendes eingegeben: {text}'})

if __name__ == '__main__':
    app.run(debug=True)