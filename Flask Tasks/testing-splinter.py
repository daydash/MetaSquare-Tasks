from splinter import Browser
import time, logging

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

try:
    logging.warning("--------- HITTED ---------")
    browser = Browser()

    browser.visit('http://google.com')
    input_element = browser.find_by_name('q')
    input_element.fill('splinter - python acceptance testing for web applications')

    button_element = browser.find_by_name('btnK')[1]
    button_element.click()

    if browser.is_text_present('splinter.readthedocs.io'):
        print("Yes, the official website was found!")
    else:
        print("No, it wasn't found... We need to improve our SEO techniques")

    browser.visit("http://github.com")
    signIn = browser.links.find_by_partial_href('/login')
    signIn.click()

    inputUsername = browser.find_by_id("login_field")
    inputUsername.fill("your-username-here")
    inputPassword = browser.find_by_id("password")
    inputPassword.fill("your-password-here")

    time.sleep(4)
    browser.quit()

    logging.warning("--------- FINISHED ---------")

except Exception as error:
    logging.warning("--------- ERROR ---------")
    logging.warning(error)
