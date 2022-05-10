<template>
  <router-link
    class="alerter-link"
    :to="{ name: 'alerter-show', params: { id: alerter.id } }"
  >
    <div class="alerter-card">
      <h1>{{ alerter.title }}</h1>
      <span>Timer: {{ alerter.time }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    alerter: Object,
  },
};
</script>

<style lang="scss" scoped>
.alerter-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  border: 1px rgb(40, 88, 208);
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}
.alerter-link {
  color: rgb(40, 88, 208);
  text-decoration: none;
  font-weight: 100;
}
</style>
