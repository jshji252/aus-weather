import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    local_time = time.localtime()
    asc_time = time.asctime(local_time)
    return {'time': asc_time}