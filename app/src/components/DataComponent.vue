<template>
  <div>
    <h1>
      {{ results }}
    </h1>
  </div>
</template>

<script src="./DataComponent.bs.js">
  /*
import { pipelineResults } from "../rescript/DataComponent/ProcessData.bs.js";

export default {
  name: "DataComponent",
  data() {
    return {
      results: pipelineResults
    };
  }
  };
*/
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
