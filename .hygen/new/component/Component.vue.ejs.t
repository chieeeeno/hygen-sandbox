---
to: '<%= `${absPath}/${componentName}.vue` %>'
---

<template>
  <div></div>
</template>

<% if (isTypescript) { -%>
<script lang="ts">
<% } else { -%>
<script>
<% } -%>
export default {
  name: '<%= componentName %>'
}
</script>

<style lang="scss" scoped>
</style>