from flask import Flask, render_template

app = Flask(__name__)
app.config["TESTING"] = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/chooseGame')
def chooseGame():
    return render_template('chooseGame.html')

@app.route('/scoreScreen')
def scoreScreen():
    return render_template('scoreScreen.html')

if __name__ == '__main__':
    app.run()