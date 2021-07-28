<template lang="pug">
.SignIn
  p SignIn
  BaseInput(v-model="form.email", label="email", placeholder="email")
  BaseInput(v-model="form.pwd", label="password", placeholder="password")
  BaseButton(@click="submit") Sign In
</template>
<script>
import { onMounted, reactive } from 'vue'
export default {
  setup() {
    const form = reactive({
      email: '',
      pwd: '',
    })

    onMounted(() => {
      console.log('mounted')
    })

    const submit = () => {
      console.log(form)
    }

    return {
      form,
      submit,
    }
  },
}
</script>
<style lang="scss" scoped>
.SignIn {
  display: grid;
  gap: 20px;
  place-items: center;

  > p {
    color: var(--black100);
  }
}
</style>
