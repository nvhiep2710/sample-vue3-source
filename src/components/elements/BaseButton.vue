<template lang="pug">
button.button(@click="$emit('click', $event.target.value)")
  slot
</template>
