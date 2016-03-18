from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world_home():
    return render_template('index.html', text=None)

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    app.run()
