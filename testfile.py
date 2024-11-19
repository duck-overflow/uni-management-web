from flask import Flask, request, jsonify, render_template
from backend.connection import sendConnectionCommand

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def submit():
    # Empfange JSON Sachen von INDEX
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    command = 'SELECT * FROM useraccounts;'
    response = sendConnectionCommand(command, False)

    # Verarbeite die Eingabe
    if username == 'admin' and password == '1234':
        return jsonify({'message': f'Du wurdest erfolgreich eingeloggt. {response}'})
    else:
        return jsonify({'message': f'Falsche Eingabe. {username} {password}'})

    

if __name__ == '__main__':
    app.run(debug=True)