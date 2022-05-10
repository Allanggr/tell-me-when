<template>
  <div>
    <h1>This is Alerter list page</h1>
    <div class="alert-list">
      <AlerterCard :alerter="alerter" />
    </div>
  </div>
</template>

<script>
import AlerterCard from "@/components/AlerterCard.vue";

export default {
  components: {
    AlerterCard,
  },
  data() {
    return {
      alerter: {
        id: 1,
        title: "Morning Alarm",
        time: "08:00",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.alert-list {
  padding: 20px;
}
</style>
