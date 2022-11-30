---
to: '<%= `${abs_path}/${component_name}.vue` %>'
---

<template>
  <div></div>
</template>

<% if (is_typescript) { -%>
<script lang="ts">
<% } else { -%>
<script>
<% } -%>
export default {
  name: '<%= component_name %>'
};
</script>

<style lang="scss" scoped>
</style>