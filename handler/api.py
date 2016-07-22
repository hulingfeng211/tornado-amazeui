# -*- coding:utf-8 -*- 
#=====================================
#	Creater:15921315347@163.com
#	Create Time:2016-06-29 13:26:30
#	Description: 
#         something here.
#=====================================

inquiries= {
	"inquiries": [{
		"text":"复盘8年前百度虚假医药信息的竞价排名风波",
		"completed": False
	},
	{
		"text":"京东早盘大跌9% 股价跌2.29美元",
		"completed": False
	},
	{
		"text":"研究称:中国大陆Q1智能机发货量约1亿部",
		"completed": False
	},{
		"text":"Android份额增长 iOS难止下滑",
		"completed": False
	},
	{
		"text":"将超级马里奥带进《Minecraft》游戏中",
		"completed": False
	},
	{
		"text":"将使用更便宜更安全的磁悬浮技术",
		"completed": False
	},
	{
		"text":"玩任天堂Virtual Boy的游戏",
		"completed": False
	},
	{
		"text":"索尼女员工隐瞒丈夫就职于HTC",
		"completed": False
	},
	{
		"text":"谷歌搜索在测试：搜索结果字体变色了",
		"completed": False
	},{
		"text":"特斯拉最新彩蛋：充电口LED灯变多彩",
		"completed": False
	},
	{
		"text":"微软：AI将改变一切",
		"completed": False
	},
	{
		"text":"索尼女员工隐瞒丈夫就职于HTC 被解雇",
		"completed": False
	},
	{
		"text":"谷歌搜索在测试：搜索结果字体变色了",
		"completed": False
	},{
		"text":"特斯拉最新彩蛋：充电口LED灯变多彩",
		"completed": False
	},
	{
		"text":"微软：AI将改变一切",
		"completed": False
	},
	{
		"text":"百度或再遭黑色星期一：关乎99%主营收入",
		"completed": False
	}
	]
}
products={
	"products": [{
		"text":"早报：我的纪录超亨利"
	},
	{
		"text":"晋级德国杯决赛，穆勒梅开二度"
	},
	{
		"text":"水晶宫今夏想买巴巴卡"
	},{
		"text":"打曼联不会轮换阵容"
	},
	{
		"text":"阿圭罗什么水平"
	},
	{
		"text":"阿圭罗打进英超百球，阿尼塔扳平"
	}
	]
}
persons={
	"person": [{
		"text":"owen",
		"completed": False
	},
	{
		"text":"henry",
		"completed": False
	},
	{
		"text":"mesi",
		"completed": False
	},{
		"text":"C罗",
		"completed": False
	},
	{
		"text":"内马尔",
		"completed": False
	},
	{
		"text":"杰拉德",
		"completed": False
	},
	{
		"text":"贝克汉姆",
		"completed": False
	},
	{
		"text":"兰帕德",
		"completed": False
	},
	{
		"text":"伊布",
		"completed": False
	},
	{
		"text":"托雷斯",
		"completed": False
	}
	]
}

todos={
	"todos": [{
		"text":"owen",
		"completed": False
	},
	{
		"text":"henry",
		"completed": False
	},
	{
		"text":"mesi",
		"completed": False
	},{
		"text":"owen1",
		"completed": False
	},
	{
		"text":"henry2",
		"completed": False
	},
	{
		"text":"mesi3",
		"completed": False
	}
	]
}

from tornado.web import RequestHandler,escape
from tornado.log import gen_log 
from tornado.gen import coroutine
from common import json_encode

class InquiriesHandler(RequestHandler):

	def get(self,*args,**kwargs):
		self.set_header('content-type','application/json')
		self.write(escape.json_encode(inquiries))

class ProductsHandler(RequestHandler):

	def get(self,*args,**kwargs):
		self.set_header('content-type','application/json')
		self.write(escape.json_encode(products))

class PersonsHandler(RequestHandler):

	def get(self,*args,**kwargs):
		self.set_header('content-type','application/json')
		self.write(escape.json_encode(persons))

class TodosHandler(RequestHandler):

	def get(self,*args,**kwargs):
		self.set_header('content-type','application/json')
		self.write(escape.json_encode(todos))

	def post(self,*args,**kwargs):
		 
		body=escape.json_decode(self.request.body)
		global todos
		todos['todos'].append({'text':body.get('text','Empty'),'completed':False})
		gen_log.info(todos)

class ErrorHandler(RequestHandler):
	@coroutine
	def get(self,*args,**kwargs):
		pageIndex=int(self.get_argument('pageIndex',1))
		db = self.application.db
		log_list = yield db.smslog.find({}).sort([("_id",-1)]).skip((pageIndex-1)*20).limit(20).to_list(length=None)
		self.set_header('content-type','application/json')
		self.write(json_encode({"data":log_list}))
		pass

class MessageHandler(RequestHandler):
	@coroutine
	def get(self,*args,**kwargs):
		pageIndex=int(self.get_argument('pageIndex',1))
		company=self.get_argument('type','wechat')
		querys={'wechat':{'wechat':{'$exists':True}},
				'1xinxi':{'sendid':{'$exists':True}},
				'chanzor':{'sendid':{'$exists':False},'wechat':{'$exists':False}}}

		db = self.application.db
		gen_log.info(company)
		gen_log.info(pageIndex)
		record_list = yield db.sendrecord.find(querys.get(company)).sort([("_id",-1)]).skip((pageIndex-1)*20).limit(20).to_list(length=None)
		self.set_header('content-type','application/json')
		self.write(json_encode({"data":record_list}))
		pass



