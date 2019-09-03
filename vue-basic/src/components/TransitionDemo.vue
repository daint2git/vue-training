<template>
  <div>
    <div>
      <button @click="handleClick">Kich hoat</button>
      <transition name="fade">
        <p v-if="show">Xin chao</p>
      </transition>
      <br />
      <transition name="slide-fade">
        <p v-if="show">Xin chào</p>
      </transition>
    </div>
    <hr />
    <div>
      <label for="comA">
        <input v-model="pickedView" id="comA" type="radio" value="v-a" />
        A
      </label>
      <label for="comB">
        <input v-model="pickedView" id="comB" type="radio" value="v-b" />
        B
      </label>
      <transition name="component-fade" mode="out-in">
        <!-- eslint-disable-next-line -->
        <component v-bind:is="pickedView" />
      </transition>
    </div>
    <hr />
    <div>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="div">
        <span v-for="item in items" :key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>
    <hr />
    <button v-on:click="shuffle">Xáo trộn</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
import _shuffle from 'lodash-es/shuffle'

export default {
  name: 'TransitionDemo',
  components: {
    'v-a': {
      template: '<div>Component A</div>',
    },
    'v-b': {
      template: '<div>Component B</div>',
    },
  },
  data() {
    return {
      show: false,
      pickedView: 'v-a',

      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },

    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.nextNum += 1
      this.items.splice(this.randomIndex(), 0, this.nextNum)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },

    shuffle() {
      this.items = _shuffle(this.items)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

/*
  Animation cho enter và leave có thể có giá trị
  duration và timing function khác nhau.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 1s;
}
</style>
