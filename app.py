from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', text=None)

@app.route('/display')
def display():
    return render_template('display.html')

@app.route('/issue')
def issue():
    return render_template('issue.html')

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    #app.run("127.0.0.1", port=5001, debug = True)
    app.run(host= '142.151.168.114', port=5010, debug=True)