from flask import Flask, request

import json, time, datetime
import Model
import pysolr

import pandas as pd

#flask服务启动，进行初始化

app = Flask(__name__)

#通过python装饰器的方法定义一个路由地址，如http://127.0.0.1/test就是接口的url

@app.route('/test', methods=['GET','POST'])

def get_data():

   if request.method == 'POST':

      argsJson = request.data.decode('utf-8')

      argsJson = json.loads(argsJson)

      print(argsJson)

      result = process_json(argsJson)

      result = json.dumps(result, ensure_ascii=False)#转化为字符串格式

      return result#return会直接把处理好的数据返回给前端

   else:

      return " 'it's not a POST operation! "

def process_json(data):

   result=Model.model(data['risk'])

   return result

if __name__ == '__main__':

   app.run(host='127.0.0.1', port=80) #可以设置为本机IP，或者127.0.0.1
