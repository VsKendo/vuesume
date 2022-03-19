<template>
  <a-space align="center"  :size="40" class="link-navigation">
    <div v-for="i in 3">
      <div v-if="index+i-1<friends.length" class="card">
        <a :href="friends[index+i-1].link" target="_blank">
          <img class="ava" :data-src="friends[index+i-1].img" :src="friends[index+i-1].img" data-loaded="true"
               :alt="index+i-1">
          <div class="card-header">
            <div>{{ friends[index + i - 1].name }}</div>
            <div class="info">{{ friends[index + i - 1].desc }}</div>
          </div>
        </a>
      </div>
      <div v-else style="width: 300px;" />

    </div>
  </a-space>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Module} from '@/api/user_interface';

@Component({
  props: {
    index: Number,
  },
  computed: {
    friends(): Module {
      return this.$store.getters.getModule('friends').links;
    },
  },
  methods: {},
  filters: {},
})
export default class Cards extends Vue {

}

</script>

<style scoped lang="scss">
@import '../../styles/variable';

.link-navigation {
  clear: both;
  padding-left: 3%;
  padding-right: 5%;
}

.card {
  width: 300px;
  font-size: 1rem;
  padding: 10px 15px 10px;
  border-radius: 4px;
  transition-duration: .15s;
  margin-bottom: 1rem;
  display: flex;
  line-height: 2;
  border: 3px solid #e8e8e8;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}

.card .card-header {
  font-style: italic;
  overflow: hidden;
  width: 236px;
  line-height: 2;
}

.ava {
  width: 3rem !important;
  height: 3rem !important;
  margin: 0 !important;
  margin-right: 1em !important;
  border-radius: 4px;
}

@media screen and (max-width: $--screen-sm-min) {
  .link-navigation {
    display: block;

    .card {
      margin-left: 10%;
    }
  }
}

</style>
