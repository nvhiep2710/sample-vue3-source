<template lang="pug">
.inputBase
  label {{ label }}
  input(
   v-bind="$attrs"
   :value="modelValue"
   :placeholder="placeholder"
   @input="$emit('update:modelValue', $event.target.value)"
  )
</template>
<script>
export default {
  props: {
    label: { type: String, default: 'Name' },
    placeholder: { type: String, default: 'Name' },
    modelValue: { type: [String, Number], default: '' },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.inputBase {
  > .label {
    font-size: 20px;
    font-weight: 400;
    color: var(--grey100);
    place-self: center;
    padding-bottom: 12px;
  }

  > input {
    @include input;
  }
}
</style>
