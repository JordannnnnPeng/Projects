import csv
import baostock as bs
import json
import numpy as np
import pandas as pd
import flask_cors
import datetime
def NameDic():
    Code2Name=pd.read_csv("Code_Name.csv")
    dic={}
    column=['code','name','market']
    Code2Name.reindex(columns=column)
    for row in Code2Name.iterrows():
        # print(row)
        # print(row[1]['code'])
        dic[str(row[1]['code']).zfill(6)]=[str(row[1]['name']),str(row[1]['market'])]
        allcode=dic.keys()
    return dic,allcode

def listToJson(data):
    result=pd.DataFrame(data)
    # result.to_json("TwoPrice.json",orient="records")
    result=result.to_json(orient="records")
    parsed = json.loads(result)
    result=json.dumps(parsed, indent=4)
    return result
#
#
# def GetPridictPrice(code):
#     path="DataSet/"+code+"Data.csv"
#     data = pd.read_csv(path)
#     data1 = data[['Date', 'open', 'PredictPrice', 'low', 'high', 'volume']]
#     result=listToJson(data1)
#     return result


def GetRealPrice(code,dict):
    path="DataSet/"+code+"Data.csv"
    data = pd.read_csv(path)
    data1 = data[['Date', 'open', 'RealPrice', 'low', 'high', 'volume','PredictPrice']]
    result=listToJson(data1)
    return result

def GetIndex(code,dict):
    #### 登陆系统 ####
    lg = bs.login()
    # 显示登陆返回信息
    name = dict[code][0]
    market=dict[code][1]
    print('login respond error_code:'+lg.error_code)
    print('login respond  error_msg:'+lg.error_msg)
    num=code+market
    rs = bs.query_history_k_data(num, "date,code,open,high,low,close,preclose,volume,amount,adjustflag,turn,tradestatus,pctChg,peTTM,pbMRQ,psTTM,pcfNcfTTM,isST",
                                 start_date='2018-12-01', end_date='2018-12-31', frequency="d", adjustflag="3")
    print('query_history_k_data respond error_code:'+rs.error_code)
    print('query_history_k_data respond  error_msg:'+rs.error_msg)

    if len(rs.data)!=0:
        data_list = rs.data[-1]
        fields=rs.fields
        LastDay_dic={}
        for i in range(18):
            LastDay_dic[fields[i]]=data_list[i]
        LastDay_dic["name"]=name
        LastDay_dic["CodeInt"]=code
        result=json.dumps(LastDay_dic,ensure_ascii=False)
        return result
    else:
        return -1


def getStockCode(duration,price,allcode,dict):
    time="2019-01-01"
    time=datetime.datetime.strptime(time,"%Y-%m-%d")
    dayss=int(duration)*30
    time=time+datetime.timedelta(days=dayss)
    endtime = time.strftime('%Y-%m-%d')
    lg = bs.login()
    print('login respond error_code:' + lg.error_code)
    print('login respond  error_msg:' + lg.error_msg)
    return_code_list=[]
    for i in allcode:
        market = dict[i][1]
        num = i + market
        rs = bs.query_history_k_data(num,"close",start_date='2018-12-31', end_date=endtime, frequency="d", adjustflag="3")
        if len(rs.data)!=0:
            endDateValue = rs.data[-1][0]
            startDateValue=rs.data[0][0]
            if float(endDateValue)/float(startDateValue)>=(1+float(price)):
                return_code_list.append(i)
        print("Now examine"+num)
    return return_code_list





