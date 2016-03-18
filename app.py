from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world_home():
    return render_template('index.html', text=None)

@app.route('/<str>')
def hello_world(str):
    return render_template('index.html', text = str)


if __name__ == '__main__':
    app.run("127.0.0.1", port=5001, debug = True)
