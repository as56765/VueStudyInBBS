import {ref} from 'vue'

let flag = ref(false)

const renderDom = () => {
    return (
        <>
            <div v-show={flag.value}>今天</div>
            <div v-show={!flag.value}>吃什么</div>
        </>
    )
}

export default renderDom