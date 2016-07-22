# -*- coding:utf-8 -*- 
#=====================================
#	Creater:15921315347@163.com
#	Create Time:2016-06-29 09:26:30
#	Description: 
#         something here.
#=====================================
import routes
from common import settings 
from tornado.web import Application
from tornado.gen import IOLoop
from tornado.log import gen_log
from tornado.options import define,options ,parse_command_line

from motor.motor_tornado import MotorClient

define('port',default=11108,type=int,help='listen port')
define('debug',default=True,type=bool,help='running at debug mode?')

import logging
logging.basicConfig(level=logging.DEBUG)


if __name__ == '__main__':
	parse_command_line()

	client = MotorClient(host='192.168.2.14',port=27017)
	db=client['smscenter']

	handlers=[]
	handlers.extend(routes.routes)
	app = Application(handlers=handlers,**settings)
	app.db=db
	
	gen_log.info('server listening at '+str(options.port))
	app.listen(options.port)
	IOLoop.current().start()
