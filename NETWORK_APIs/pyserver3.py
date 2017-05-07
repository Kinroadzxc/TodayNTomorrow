from bottle import route, run, template
from bottle import request
import pymysql.cursors
import json
import datetime

@route('/history', method='POST')
def showHistory():

    #data_in = request.body
    #dict_in = json.loads(data_in)
    dict_in = request.json
    start_date = dict_in['start_date']
    end_date = dict_in['end_date']

    connection = pymysql.connect(host='47.91.155.55',
                                 user='AVASKY',
                                 password='avasql1',
                                 db='mydb',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)

    try:
        with connection.cursor() as cursor:

            dict_out = {}
            # Read a single record
            t = (start_date, end_date)
            sql = "SELECT RECORD_DATE, RECORD_COLOR, RECORD_SENTENCE FROM record WHERE RECORD_DATE >=%s AND RECORD_DATE<=%s"
            cursor.execute(sql, t)

            result = cursor.fetchall()

            for item in result:
                date_num = item["RECORD_DATE"]
                color_str = item["RECORD_COLOR"]
                sentence_str = item["RECORD_SENTENCE"]

                dict_out[date_num] = (color_str, sentence_str)

    finally:
        connection.close()

    json_out = json.dumps(dict_out)

    return json_out


run(host='0.0.0.0', port=8000, debug=True)


