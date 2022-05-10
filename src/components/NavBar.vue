<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'alerter-list' }">Alerters</router-link> |
      <router-link :to="{ name: 'alerter-create' }">Create Alerter</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background: rgb(40, 88, 208);
  background: linear-gradient(
    97deg,
    rgba(40, 88, 208, 1) 0%,
    rgba(169, 175, 210, 1) 100%
  );
  padding: 20px;
  color: white;
}

.navbar a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>
