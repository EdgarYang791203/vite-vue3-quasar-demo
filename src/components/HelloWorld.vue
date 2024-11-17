<script setup lang="ts">
import { ref } from "vue";
import { Notify } from "quasar";

defineProps<{ msg: string }>();

const count = ref(0);

const showNotify = () => {
  Notify.create({ message: "Hello from Quasar!" });
};
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ msg }}
  </h1>

  <div class="card">
    <div class="mb-3">
      <q-btn label="Show Notification" @click="showNotify" />
    </div>
    <div class="mb-3">
      <q-btn
        color="primary"
        class="q-btn q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable"
        type="button"
        @click="count++"
      >
        count is {{ count }}
      </q-btn>
    </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
