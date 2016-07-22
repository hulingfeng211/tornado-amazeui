# -*- coding:utf-8 -*- 
#=====================================
#	Creater:15921315347@163.com
#	Create Time:2016-06-29 09:26:30
#	Description: 
#         something here.
#=====================================
from tornado.web import RequestHandler


class IndexHandler(RequestHandler):
	def get(self,*args,**kwargs):
		self.render('index.html')


