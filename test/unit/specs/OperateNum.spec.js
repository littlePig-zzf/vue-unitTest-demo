import Vue from 'vue'
import OperateNum from '@/components/OperateNum'
import { mount } from 'avoriaz'

describe('OperateNum.vue', () => {
	it('set props value', ()=>{
		const Operate = mount(OperateNum);

		// set props value
		Operate.setProps({
			InitNum: 11,
			AddNum: 10
		})

		// attach click
		const button = Operate.find('button')[0];
		button.trigger('click');
		button.trigger('click');
		button.trigger('click');

		Vue.nextTick(() => {
			expect(Operate.data().ResultNum).toEqual(31);
			expect(Operate.text()).toContain('初始值为11');
			expect(Operate.text()).toContain('点击了3次');
			expect(Operate.text()).toContain('最终结果为31');
		})
		
	})
})