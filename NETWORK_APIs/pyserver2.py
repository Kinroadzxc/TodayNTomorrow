from bottle import route, run, template
from bottle import request
import pymysql.cursors
import json
import datetime

@route('/upload', method='POST')
def uploadData():

    dictdata = request.json
    #print(data)
    #data = request.body
    #jsondata = data.decode()
    #dictdata = json.loads(jsondata)

    date_num = dictdata['data_num']
    color = dictdata['color']
    sentence = dictdata['sentence']


    connection = pymysql.connect(host='47.91.155.55',
                                 user='AVASKY',
                                 password='avasql1',
                                 db='mydb',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)

    try:
        with connection.cursor() as cursor:
            # Create a new record
            t = (date_num, color, sentence)
            sql = "INSERT INTO record (RECORD_ID, RECORD_DATE, RECORD_COLOR, RECORD_SENTENCE) VALUES (NULL, %s, %s, %s)"
            cursor.execute(sql, t)

            # connection is not autocommit by default. So you must commit to save
            # your changes.
        connection.commit()

    finally:
        connection.close()
    return

@route('/gettest')
def test():
    return {"status":"ok"}


run(host='0.0.0.0', port=8000, debug=True)
