<script setup>
import SectionHeader from '@/components/globals/SectionHeader.vue';
import Button from "@/components/ui/Button.vue";

const btn_code = `
      <Button label="success" color="success"/>
      <Button :outline="true" label="contrast" color="contrast"/>
      <Button :outline="true" color="contrast" icon="fa-user"/>
`;
</script>
<template>
  <SectionHeader title="Buttons"/>
  <ul class="buttons">
    <li>
      <Button label="accent"/>
    </li>
    <li>
      <Button label="contrast" color="contrast"/>
    </li>
    <li>
      <Button label="primary" color="primary"/>
    </li>
    <li>
      <Button label="success" color="success"/>
    </li>
  </ul>
  <ul class="buttons">
    <li>
      <Button :outline="true" label="accent"/>
    </li>
    <li>
      <Button :outline="true" label="contrast" color="contrast"/>
    </li>
    <li>
      <Button :outline="true" label="primary" color="primary"/>
    </li>
    <li>
      <Button :outline="true" label="success" color="success"/>
    </li>
  </ul>
  <ul class="buttons">
    <li>
      <Button icon="fa-home"/>
    </li>
    <li>
      <Button :outline="true" color="contrast" icon="fa-user"/>
    </li>
    <li>
      <Button icon="fa-envelope" color="primary"/>
    </li>
    <li>
      <Button :outline="true" color="success" icon="fa-circle-xmark"/>
    </li>
  </ul>
  <br><br>
  <SectionHeader title="How to use"/>

  <div>
    <pre>
      <code>{{ btn_code }}</code>
    </pre>
  </div>

</template>
<style lang="scss" scoped>
.buttons {
  display: flex;
  margin-bottom: 1rem;
  li {
    margin-right: 0.4rem;
  }
}
</style>
