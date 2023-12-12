from flask import Flask , request, jsonify
from markupsafe import escape
from selenium import webdriver
from splinter import Browser 
import time

app = Flask(__name__)

# def loginToGithub(username,password):
#     browser = Browser('chrome')
#     browser.visit("http://github.com")
#     signIn = browser.links.find_by_partial_href('/login')
#     signIn.click()

#     inputUsername = browser.find_by_id("login_field")
#     inputUsername.fill(username)
#     inputPassword = browser.find_by_id("password")
#     inputPassword.fill(password)
#     return "DONE"

@app.route('/')
def index():
    return "Hello Yash!!"

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"

@app.route('/   ') 
def query_example(): 
    username = request.args.get("username")
    password = request.args.get("password")
    # return f"user, {escape(username)}, pass -> {escape(password)}!"
    browser = Browser('chrome')
    browser.visit("http://github.com")
    signIn = browser.links.find_by_partial_href('/login')
    signIn.click()

    inputUsername = browser.find_by_id("login_field")
    inputUsername.fill(username)
    inputPassword = browser.find_by_id("password")
    inputPassword.fill(password)
    return "Task Done!"


@app.route('/api/v1/post', methods=["POST"])
def add_guide():
    username = request.json['username']
    password = request.json['password']
    browser = Browser('chrome')
    browser.visit("http://github.com")
    signIn = browser.links.find_by_partial_href('/login')
    signIn.click()

    inputUsername = browser.find_by_id("login_field")
    inputUsername.fill(username)
    inputPassword = browser.find_by_id("password")
    inputPassword.fill(password)
    return "Task Done!"

if __name__ == "__main__":
    app.run(debug=True)