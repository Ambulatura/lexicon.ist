from flask import Flask, render_template, request, jsonify
from static import genpass


app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        number = True if request.form["number"] == "True" else False
        bletter = True if request.form["bletter"] == "True" else False
        sletter = True if request.form["sletter"] == "True" else False
        special = True if request.form["special"] == "True" else False
        length = int(request.form["length"])
        result = str(genpass.pass_generator(length, bletter, sletter, number, special))
        return result
    if request.method == "GET":
        return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)