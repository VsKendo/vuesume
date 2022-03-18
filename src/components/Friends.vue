<template>
  <div class="friends" id="friends">
    <ModuleHeader :title="friends.header.title" :sub-title="friends.header.subtitle"/>
    <div v-for="(index) in friends.links.length">
      <Cards v-if="index%3===1" :index="index-1"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ModuleHeader from '@/components/module/ModuleHeader.vue';
import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
import {Module} from '@/api/user_interface';
// tslint:disable-next-line:no-var-requires
import Cards from '@/components/module/Cards.vue';

@Component({
  components: {
    Cards,
    ModuleHeader,
    ModuleSkeleton,
  },
  computed: {
    friends(): Module {
      return this.$store.getters.getModule('friends');
    },
  },
})
export default class About extends Vue {
}
</script>

<style scoped lang="scss">
@import '../styles/variable';

.friends {
  @media screen and (max-width: $--screen-md-min) {
    .col {
      padding: 0;

      &.color-content {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
