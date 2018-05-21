import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { mount } from 'avoriaz'
// describe('HelloWorld.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(HelloWorld)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .toEqual('Welcome to Your Vue.js App')
//   })
// })

describe('HelloWorld.vue', () => {
	it('displays items from the list', () => {
		// const Constructor = Vue.extend(HelloWorld);
		// const ListComponent = new Constructor().$mount();
		const ListComponent = mount(HelloWorld);
		expect(ListComponent.text()).toContain('play games');
	})

	it('adds new item to list on click with avoriaz', () => {
		// build component
    	const ListComponent = mount(HelloWorld); //获取挂载组件

    	// set input value
    	ListComponent.setData({ //设置data值
    		newItem: 'brush my teeth'
    	})

    	// simulate click event
	    const button = ListComponent.find('button')[0]; //查找元素
	    button.trigger('click'); //增加点击事件

	    // assert list contains new item
	    expect(ListComponent.text()).toContain('brush my teeth'); //获取文本中判断是否包含某元素
	    expect(ListComponent.data().listItems).toContain('brush my teeth'); //判断data中的某元素是否存在某元素
	})
	// it('adds a new item to list on click', () => {
	// 	// build component
	// 	const Constructor = Vue.extend(HelloWorld);
	// 	const ListComponent = new Constructor().$mount();

	// 	// set value of new item
	// 	ListComponent.newItem = 'brush my teeth';

	// 	// find button
	// 	const button = ListComponent.$el.querySelector('button');

	// 	// simulate click event
	// 	const clickEvent = new window.Event('click');
	// 	button.dispatchEvent(clickEvent);
	// 	ListComponent._watcher.run();

	// 	//assert list contains new item
	// 	expect(ListComponent.$el.textContent).toContain('brush my teeth');
	// 	expect(ListComponent.listItems).toContain('brush my teeth');
	// })
})