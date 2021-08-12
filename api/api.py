from flask import Flask, request, jsonify
import datetime
import time
import requests

app = Flask(__name__)

@app.route('/api')
def get_header():
    def epocher(time_int):
        # Turns the time info from BOM into epoch time
        s=str(time_int)
        return 1000*datetime.datetime(int(s[:4]),int(s[4:6]),int(s[6:8]),int(s[8:10]),int(s[10:12])).timestamp()
    api_address = request.args.get("api_address")
    r = requests.get(api_address)
    try:
        jsn = r.json()
        header = jsn["observations"]["header"][0]
        weather_data = jsn["observations"]["data"]
        datas = [{"date": epocher(data["local_date_time_full"]), "temp": data["apparent_t"], "sort_order": data["sort_order"]} for data in weather_data]
        return jsonify(datas)
    except:
        print(f"Could not resolve BOM's data. Status code: {r.status_code}!")
        return {"error": "Error Fetching Data! Please try other cities."}