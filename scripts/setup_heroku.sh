pip install -r api/requirements.txt
gunicorn -w 4 -k uvicorn.workers.UvicornWorker
