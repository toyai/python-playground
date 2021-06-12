FROM python:3.7.10-slim-buster

RUN apt-get update && \
  apt-get upgrade && \
  apt-get autoremove -y && \
  apt-get clean

COPY . ./app

RUN cd ./app/api && \
  pip install -U pip wheel setuptools && \
  pip install -r requirements.txt

CMD [ "gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker" ]
