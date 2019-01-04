<template>
  <div>
    <statismic-histogram
      label-x="X Label"
      label-y="Y Label"
      :data-x="xdata"
      interval="0.1"
      style="height: 500px;"
    />
    <button @click="xdata.push(Math.random())">Add</button>
  </div>
</template>

<script>
import Vue from "vue";
import StatismicPlots from "@statismic/plots";

Vue.use(StatismicPlots);

export default {
  data() {
    return {
      xdata: [0.9]
    };
  }
};
</script>