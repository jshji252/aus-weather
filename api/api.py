from flask import Flask
import time
import requests

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    r = requests.get("http://reg.bom.gov.au/fwo/IDQ60901/IDQ60901.94576.json")
    if(r.status_code == 200):
        jsn = r.json()
        cty = jsn["observations"]["header"][0]["name"]
        return {'time': cty}
    else:
        local_time = time.localtime()
        asc_time = time.asctime(local_time)
        return {'time': asc_time}

    
    