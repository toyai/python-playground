FROM python:3.7.10-slim-buster

WORKDIR /workspace

COPY ./ /workspace/

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get autoremove -y && \
  apt-get clean && \
  python -m pip install -U pip wheel setuptools --no-cache-dir && \
  pip install -r ./backend/requirements.txt --no-cache-dir

CMD [ "gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "backend.main:app" ]
