<template>
  <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
    <!-- Existing Cards -->
    <div class="bg-green-50 rounded-xl p-5">
      <tw-icon
        name="heroicons-outline:users"
        class="w-10 h-10 text-green-500"
      />
      <p class="mt-8 text-green-500 text-sm">User Online :</p>
    </div>
    <div class="bg-purple-50 rounded-xl p-5">
      <tw-icon
        name="heroicons-outline:chart-pie"
        class="w-10 h-10 text-purple-500"
      />
      <p class="mt-8 text-purple-500 text-sm">Total User :</p>
    </div>
    <div class="bg-yellow-50 rounded-xl p-5">
      <tw-icon
        name="heroicons-outline:user-group"
        class="w-10 h-10 text-yellow-500"
      />
      <p class="mt-8 text-yellow-500 text-sm">Admin :</p>
    </div>
  </div>
  <div
    class="bg-blue-50 rounded-xl p-5 flex flex-col items-center justify-center mt-2"
  >
    <p class="text-blue-500 text-lg font-bold">Real-Time Clock:</p>
    <p class="mt-2 text-blue-500 text-4xl font-bold" id="wibTime">
      {{ wib }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  data() {
    return {
      wib: null,
    };
  },
  methods: {
    updateTime() {
      const now = new Date();

      const wibTime = new Date(now.getTime());
      this.wib = this.formatTime(wibTime);
    },

    formatTime(date) {
      const options = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Intl.DateTimeFormat("id-ID", options).format(date);
    },
  },
};
</script>
