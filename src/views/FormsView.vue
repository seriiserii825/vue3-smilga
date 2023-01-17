<script setup>
import SectionHeader from "@/components/globals/SectionHeader.vue";
import Input from "@/components/ui/Input.vue";
import Form from "@/components/ui/Form.vue";
import Checkbox from "@/components/ui/Checkbox.vue";
import {ref} from "vue";
import CheckboxGroup from "../components/ui/CheckboxGroup.vue";

const checkbox_is_active = ref(true);

const fruits = ref([
  {id: 1, title: "apple"},
  {id: 2, title: "pear"},
  {id: 3, title: "nuts"},
  {id: 4, title: "peach"},
  {id: 5, title: "banana"},
]);

const selected_fruits = ref([3]);

</script>
<template>
  <SectionHeader title="Form inputs"/>
  <Form title="Input example">
    <div class="form__row">
      <div class="form__group">
        <Input label="Name"/>
      </div>
      <div class="form__group">
        <Input label="Name(Success)" behaviour="success"/>
      </div>
    </div>
    <div class="form__row">
      <div class="form__group">
        <Input placeholder="Surname"/>
      </div>
      <div class="form__group">
        <Input placeholder="Surname(Error)" behaviour="error" error="Field is required"/>
      </div>
    </div>
    <div class="form__row">
      <div class="form__group">
        <Checkbox
            value="checkbox"
            label="Checkbox"
            name="checkbox"
            id="0"
            v-model:checked="checkbox_is_active"/>
        <pre>{{ checkbox_is_active }}</pre>
      </div>
      <div class="form__group">
        <CheckboxGroup
            :options="fruits"
            name="fruits"
            v-model:value="selected_fruits"
        />
        <div>{{ selected_fruits }}</div>
      </div>
    </div>
  </Form>
</template>
<style lang="scss">
</style>