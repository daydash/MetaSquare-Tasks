from selenium import webdriver
from splinter import Browser 
import time

browser = Browser('chrome')
browser.visit("http://github.com")
signIn = browser.links.find_by_partial_href('/login')
signIn.click()

inputUsername = browser.find_by_id("login_field")
inputUsername.fill("your-username-here")
inputPassword = browser.find_by_id("password")
inputPassword.fill("your-password-here")
submit = browser.find_by_name("commit")
submit.click()


createNewRepo = browser.find_by_css("Button-label").find_by_partial_href('/new')
# print(createNewRepo)
createNewRepo.click()

# inputRepoName = browser.find_by_id(":r2:")
# inputRepoName.fill("yoyoyoyo")

# submitCreateRepo = browser.find_by_text('Create repository')
# print(submitCreateRepo)
# submitCreateRepo.first.click()

time.sleep(40)
