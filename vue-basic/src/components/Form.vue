<template>
  <div>
    <div>
      <span>Thông điệp có nhiều dòng:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br />
      <textarea v-model="message" placeholder="Nhập văn bản có nhiều dòng"></textarea>
    </div>
    <br />
    <div>
      <input type="checkbox" id="checkbox1" v-model="checked" />
      <label for="checkbox1">{{ checked }}</label>
    </div>
    <br />
    <div>
      <input type="checkbox" id="com-chien-toi" value="Cơm chiên tỏi" v-model="checkedNames" />
      <label for="com-chien-toi">Cơm chiên tỏi</label>
      <br />
      <input type="checkbox" id="dot-bi-xao-toi" value="Đọt bí xào tỏi" v-model="checkedNames" />
      <label for="dot-bi-xao-toi">Đọt bí xào tỏi</label>
      <br />
      <input type="checkbox" id="canh-rau-rung" value="Canh rau rừng" v-model="checkedNames" />
      <label for="canh-rau-rung">Canh rau rừng</label>
      <br />
      <span>Món đã chọn: {{ checkedNames }}</span>
    </div>
    <br />
    <div>
      <input type="radio" id="cac-mon-rau" value="Các món rau" v-model="picked" />
      <label for="cac-mon-rau">Các món rau</label>
      <br />
      <input type="radio" id="cac-mon-thit" value="Các món thịt" v-model="picked" />
      <label for="cac-mon-thit">Các món thịt</label>
      <br />
      <span>Đã chọn: {{ picked }}</span>
    </div>
    <br />
    <div>
      <select v-model="selected">
        <option disabled value>Vui lòng chọn món</option>
        <option>Đọt bí xào tỏi</option>
        <option>Canh bông điên điển</option>
        <option>Lẩu nấm</option>
      </select>
      <br />
      <span>Món đã chọn: {{ selected }}</span>
    </div>
    <br />
    <div>
      <select v-model="selected2" multiple>
        <option>Đọt bí xào tỏi</option>
        <option>Canh bông điên điển</option>
        <option>Lẩu nấm</option>
      </select>
      <br />
      <span>Món đã chọn: {{ selected2 }}</span>
    </div>
    <br />
    <div>
      <select v-model="selected3">
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
      <br />
      <span>Giá tiền: {{ selected3 }}</span>
    </div>
    <br />
    <div>
      <input v-model="message2" />
      <input v-model.lazy="message2" />
      <input v-model.number="age" type="number" />
      <p>{{ message2 }}</p>
      <p>{{ age }}</p>
    </div>
    <br />
    <div :style="{ fontSize: fontSize + 'em' }">
      <ButtonDemo text="+" v-on:change-text="fontSize += 0.1"></ButtonDemo>
      <ButtonDemo text="-" v-on:change-text="fontSize -= 0.1"></ButtonDemo>
      <ButtonDemo text="+" v-on:change-text="fontSize += $event"></ButtonDemo>
      <ButtonDemo text="-" v-on:change-text="fontSize -= $event"></ButtonDemo>
      <ButtonDemo text="+" v-on:change-text="onChangeText($event, 'inc')"></ButtonDemo>
      <ButtonDemo text="-" v-on:change-text="onChangeText($event, 'dec')"></ButtonDemo>
      <ButtonDemo>AAAAA</ButtonDemo>
      <div is="ButtonDemo">BBBBB</div>
      <button-demo>
        <span>CCCCC</span>
        <span>CCCCC</span>
      </button-demo>
    </div>
  </div>
</template>

<script>
import ButtonDemo from '@/components/ButtonDemo'

export default {
  name: 'Form',
  components: {
    ButtonDemo,
  },
  data() {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selected2: [],

      selected3: '50k',
      options: [
        { text: 'Đọt bí xào tỏi', value: '50k' },
        { text: 'Canh bông điên điển', value: '30k' },
        { text: 'Lẩu nấm', value: '45k' },
      ],

      message2: '',
      age: 0,

      fontSize: 1,
    }
  },
  methods: {
    onChangeText(value, operation) {
      if (operation === 'inc') {
        this.fontSize += value
      }
      if (operation === 'dec') {
        this.fontSize -= value
      }
    },
  },
}
</script>
