FROM python:3.10.4-slim-buster

WORKDIR /workspace

COPY ./ /workspace/

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get autoremove -y && \
  apt-get clean && \
  python -m pip install -U pip wheel setuptools --no-cache-dir && \
  sh ./scripts/install_deps.sh

CMD [ "gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "api.main:app" ]
