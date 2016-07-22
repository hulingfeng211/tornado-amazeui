# -*- coding:utf-8 -*- 
#=====================================
#	Creater:15921315347@163.com
#	Create Time:2016-06-29 09:26:30
#	Description: 
#         something here.
#=====================================
import handler
from tornado.web import url,StaticFileHandler
from handler import api


routes = [
	url(r'/',handler.IndexHandler,dict(),name='app.home'),
	url(r'/api/inquiries',api.InquiriesHandler,dict(),name='api.inquiries'),
	url(r'/api/products',api.ProductsHandler,dict(),name='api.products'),
	url(r'/api/persons',api.PersonsHandler,dict(),name='api.persons'),
	url(r'/api/todos',api.TodosHandler,dict(),name='api.todos'),
	url(r'/api/error',api.ErrorHandler,dict(),name='api.error'),
	url(r'/api/message',api.MessageHandler,dict(),name='api.message'),
	url(r"/page/(.*)", StaticFileHandler, {"path": "templates","default_filename":"index.html"})
]
