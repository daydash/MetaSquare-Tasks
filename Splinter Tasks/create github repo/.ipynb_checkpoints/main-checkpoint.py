from splinter import Browser
executable_path = {'executable_path': r'D:/geckodriver.exe'}
browser = Browser("firefox", **executable_path)


# print(executable_path['executable_path'])