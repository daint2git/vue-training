<template>
  <div id="watch-example">
    <p>
      Hãy hỏi một câu hỏi yes/no:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <img v-if="image" :src="image" />
    <div v-else>Không có ảnh</div>
  </div>
</template>

<script>
import axios from 'axios'
import _debounce from 'lodash-es/debounce'
import _capitalize from 'lodash-es/capitalize'

export default {
  name: 'Test2',
  data() {
    return {
      question: '',
      answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!',
      image: '',
    }
  },
  watch: {
    // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
    // eslint-disable-next-line
    question(newQuestion, oldQuestion) {
      this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
      this.getAnswer()
    },
  },
  methods: {
    getAnswer: _debounce(function getAnswer() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
        this.image = ''
        return
      }
      this.answer = 'Đang suy nghĩ...'
      const vm = this
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          vm.answer = _capitalize(response.data.answer)
          vm.image = response.data.image
        })
        .catch(error => {
          vm.answer = `Lỗi! Không thể truy cập API. ${error}`
        })
    }, 500),
  },
}
</script>
