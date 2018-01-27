import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main'
import Mainindex from 'components/mainindex/mainindex'
import IndexSearch from 'components/mainindex/search'
import ChartsDetail from 'components/chartsDetail'
import Messageindex from 'components/messageindex/messageindex'
import Message from 'components/messageindex/message/message'
import Mail from 'components/messageindex/mail/mail'
import AddressList from 'components/messageindex/addresslist/addresslist'
import NewFriend from 'components/messageindex/addresslist/newfriend'
import NewMail from 'components/messageindex/mail/newMail'
import Inbox from 'components/messageindex/mail/inbox'
import Found from 'components/found/found'
import News from 'components/found/news/news'
import Activity from 'components/found/activity/activity'
import Workring from 'components/found/workring/workring'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: {
				name: 'Mainindex'
			}
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
					component: Mainindex
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
						path: 'mail',
						name: 'Mail',
						component: Mail
					},
					{
						path: 'addresslist',
						name: 'AddressList',
						component: AddressList
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
		{
			path: '/main/messageindex/mail/inbox',
			name: 'Inbox',
			component: Inbox
		},
		{
			path: '/main/messageindex/addresslist/newfriend',
			name: 'NewFriend',
			component: NewFriend
		},
		{
			path: '/main/messageindex/mail/newmail',
			name: 'NewMail',
			component: NewMail
		}
	]
})