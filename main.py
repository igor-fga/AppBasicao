from flask import Flask, Response, request, redirect
from formCadastro import *
import datetime


app = Flask(__name__)

@app.route('/')
def main():
	return redirect('static/index.html')


@app.route('/listForm', methods=['POST'])
def listForm():	
	return listCadastro()

@app.route('/saveForm', methods=['POST'])
def saveForm():
	token = request.args.get("token")
	item = {"contact": request.args.get("contact"), 
			"message": request.args.get("message"),
			"timestamp": datetime.datetime.utcnow()}
	return saveCadastro(item)


if __name__ == "__main__":
	app.run(debug=True)