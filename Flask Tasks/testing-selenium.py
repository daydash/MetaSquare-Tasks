from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import time, logging

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

try:
    logging.warning("--------- HITTED ---------")
    
    driver = webdriver.Remote(
        command_executor='http://localhost:4444/wd/hub',
        options=Options()
    )

    driver.get("https://www.google.com")
    time.sleep(2)
    search_box = driver.find_element("name","q")
    time.sleep(2)
    search_box.send_keys("chatgpt")
    search_box.submit()
    time.sleep(5)

    driver.quit()

    logging.warning("--------- FINISHED ---------")

except Exception as error:
    logging.warning("--------- ERROR ---------")
    logging.warning(error)
