import Vue from 'vue'
import Router from 'vue-router'

import Enter from 'components/enter'
import Main from 'components/main'

import Mainindex from 'components/mainindex/mainindex'
import IndexSearch from 'components/mainindex/search'
import ChartsDetail from 'components/mainindex/chartsDetail'
import AllApp from 'components/mainindex/allApp'
import Messageindex from 'components/messageindex/messageindex'
import Message from 'components/messageindex/message/message'
import Mail from 'components/messageindex/mail/mail'
import AddressList from 'components/messageindex/addresslist/addresslist'
import Task from 'components/messageindex/task/task'
import TaskList from 'components/messageindex/task/tasklist'
import TaskFinished from 'components/messageindex/task/taskfinished'
import NewFriend from 'components/messageindex/addresslist/newfriend'
import NewMail from 'components/messageindex/mail/newMail'
import Inbox from 'components/messageindex/mail/inbox'
import MailDetail from 'components/messageindex/mail/maildetail'
import Found from 'components/found/found'
import News from 'components/found/news/news'
import NewsDetail from 'components/found/news/newsDetail'
import Activity from 'components/found/activity/activity'
import Workring from 'components/found/workring/workring'
import Mine from 'components/mine/mine'
import MyCode from 'components/mine/mycode'
import PersonalFile from 'components/mine/personalFile'

import TextFile from 'components/codeto/textfile'
import Materiel from 'components/codeto/materiel'
import Equipment from 'components/codeto/equipment'
import Product from 'components/codeto/product'
import People from 'components/codeto/people'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: {
				name: 'Enter'
			}
		},
		{
			path: '/enter',
			name: 'Enter',
			component: Enter
		},
		{
			path: '/main',
			name: 'Main',
			component: Main,
			redirect: {
				name: 'Mainindex'
			},
			children: [{
					path: 'mainindex',
					name: 'Mainindex',
					component: Mainindex,
					children:[{
						path: 'allapp',
						component: AllApp,
					}]
				},
				{
					path: 'messageindex',
					name: 'Messageindex',
					component: Messageindex,
					redirect: {
						name: 'Message'
					},
					children: [{
						path: 'message',
						name: 'Message',
						component: Message
					},
					{
						path: 'mail',  //邮箱
						name: 'Mail',
						component: Mail
					},
					{
						path: 'addresslist',
						name: 'AddressList',
						component: AddressList
					},
					{
						path: 'task',
						name: 'Task',
						component: Task
					}]
				},
				{
					path: 'found',
					name: 'Found',
					component: Found,
					redirect: {
						name: 'News'
					},
					children: [{
						path: 'news',
						name: 'News',
						component: News
					},
					{
						path: 'activity',
						name: 'Activity',
						component: Activity
					},
					{
						path: 'workring',
						name: 'Workring',
						component: Workring
					}]
				},
				{
					path: 'mine',
					name: 'Mine',
					component: Mine
				}
			]
		},
		{
			path: '/main/mainindex/search',
			name: 'IndexSearch',
			component: IndexSearch
		},
		{
			path: '/main/mainindex/chartsdetail',
			name: 'ChartsDetail',
			component: ChartsDetail
		},
//		{
//			path: '/main/mainindex/allapp',
//			name: 'AllApp',
//			component: AllApp
//		},
		{
			path: '/main/mainindex/hotdetail',
			name: 'NewsDetail',
			component: NewsDetail
		},
		{  
			path: '/main/messageindex/mail/inbox', //收件箱
			name: 'Inbox',
			component: Inbox
		},
		{
			path: '/main/messageindex/mail/inbox/maildetail',
			name: 'MailDetail',
			component: MailDetail
		},
		{
			path: '/main/messageindex/addresslist/newfriend',
			name: 'NewFriend',
			component: NewFriend
		},
		{
			path: '/main/messageindex/mail/inbox/newmail',
			name: 'NewMail',
			component: NewMail
		},
		{
			path: '/main/messageindex/task/tasklist',
			name: 'TaskList',
			component: TaskList
		},
		{
			path: '/main/messageindex/task/taskfinished',
			name: 'TaskFinished',
			component: TaskFinished
		},
		{
			path: '/main/mine/personalfile',
			name: 'PersonalFile',
			component: PersonalFile
		},
		{
			path: '/main/mine/mycode',
			name: 'MyCode',
			component: MyCode
		},
		{
			path: '/main/codeto/textfile',
			name: 'TextFile',
			component: TextFile
		},
		{
			path: '/main/codeto/materiel',
			name: 'Materiel',
			component: Materiel
		},
		{
			path: '/main/codeto/equipment',
			name: 'Equipment',
			component: Equipment
		},
		{
			path: '/main/codeto/product',
			name: 'Product',
			component: Product
		},
		{
			path: '/main/codeto/people',
			name: 'People',
			component: People
		}
	]
})