FROM python

WORKDIR /src/app

RUN pip install --no-cache-dir selenium splinter

EXPOSE 4444
EXPOSE 5900
EXPOSE 7900

COPY testing-splinter.py testing-splinter.py

FROM selenium/standalone-firefox

CMD [ "python", "testing-splinter.py" ] 