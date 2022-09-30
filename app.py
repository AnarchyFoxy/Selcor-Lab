from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/rodo")
def rodo():
    return render_template("rodo.html")

@app.route("/deska")
def deska():
    return render_template("deska.html")

@app.route("/mocznik")
def mocznik():
    return render_template("mocznik.html")

@app.route("/olej")
def olej():
    return render_template("olej.html")

@app.route("/plyta")
def plyta():
    return render_template("plyta.html")

@app.route("/slupy")
def slupy():
    return render_template("slupy.html")

@app.route("/en/index")
def en_index():
    return render_template("en/index.html")

@app.route("/en/deska")
def en_deska():
    return render_template("en/deska.html")

@app.route("/en/plyta")
def en_plyta():
    return render_template("en/plyta.html")

@app.route("/en/rodo")
def en_rodo():
    return render_template("en/rodo.html")
    
if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)