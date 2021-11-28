FROM python

COPY [".","/usr/src"]

WORKDIR /usr/src

RUN pip3 install -r requirements.txt

CMD ["python3","run.py"]