export default {
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        handleClick(){
            this.counter ++
        }
    },
    template:'<div @click="handleClick">{{ counter }}</div>'
}