# -*- coding:utf-8 -*- 
#=====================================
#	Creater:15921315347@163.com
#	Create Time:2016-06-29 09:26:30
#	Description: 
#         something here.
#=====================================
import config
from bson import ObjectId
import datetime
import json
from json import JSONEncoder

def load_settings():
	settings = dict()
	for attr in dir(config):
		if attr.isupper():
			settings[attr.lower()]=getattr(config,attr)

	return settings

class MongoEncoder(JSONEncoder):

	def default(self,o,**kwargs):
		if isinstance(o,ObjectId):
			return str(o)
		elif isinstance(o,datetime.datetime):
			return o.strftime('%Y-%m-%d %H:%M:%S')	
		elif isinstance(o,datetime.date):
			return o.strftime('%Y-%m-%d')	
		else:
			return JSONEncoder.default(self,o)



def json_encode(obj):
	return json.dumps(obj,cls=MongoEncoder)

settings = load_settings()

