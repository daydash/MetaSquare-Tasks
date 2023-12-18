from selenium import webdriver
import time

# Replace 'https://example.com' with the URL you want to open
url_to_open = 'https://google.com'

# Set up the Selenium WebDriver (make sure you have the appropriate driver installed, e.g., ChromeDriver)
driver = webdriver.Chrome()

# Open the specified URL in a new window
driver.execute_script("window.open('{}', '_blank');".format(url_to_open))

# Switch to the newly opened window
driver.switch_to.window(driver.window_handles[1])

# Perform automation tasks here, for example:
# driver.find_element_by_name('username').send_keys('your_username')
# driver.find_element_by_name('password').send_keys('your_password')
# driver.find_element_by_id('login_button').click()

# Close the browser window (you can remove this if you want to keep the window open)

time.sleep(10)

driver.close()

# Quit the WebDriver
driver.quit()
