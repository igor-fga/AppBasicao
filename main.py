from flask import Flask, Response, request, redirect


app = Flask(__name__)

@app.route('/')
def main():
	return redirect('static/index.html')


if __name__ == "__main__":
	app.run()