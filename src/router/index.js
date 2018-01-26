import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main'
import Mainindex from 'components/mainindex/mainindex'
import IndexSearch from 'components/mainindex/search'
import ChartsDetail from 'components/chartsDetail'
import Messageindex from 'components/messageindex/messageindex'
import Message from 'components/messageindex/message/message'
import Mail from 'components/messageindex/mail/Mail'
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
		}
	]
})