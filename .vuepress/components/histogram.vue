<template>
  <div>
    <statismic-histogram
      label-x="X Label"
      label-y="Y Label"
      :data-x="xdata"
      :interval="0.1"
      style="height: 600px;"
    />
    <button @click="add">Add</button>
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
  },
  methods: {
    add() {
      this.xdata.push(Math.random());
    }
  }
};
</script>