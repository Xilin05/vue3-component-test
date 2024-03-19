<template>
  <div v-if="formState" class="component-form-item">
    <el-form-item :label="formState.payload.label">
      <template v-if="formState.type === 'select'">
        <el-select
          v-model="formState.payload.value"
          placeholder="please select your zone"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </template>
      <template v-else-if="formState.type === 'checkbox'">
        <el-checkbox-group v-model="formState.payload.value">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-else>
        <el-input v-model="formState.payload.value" />
      </template>
    </el-form-item>
    <FormItemComp :form-state="getNext()" />
  </div>
</template>

<script setup lang="ts">
import {
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElCheckboxGroup,
  ElCheckbox
} from 'element-plus';
import { FormItem } from './form-item.ts';

const props = defineProps<{
  formState: FormItem | null;
}>();

function getNext(): FormItem | null {
  let current: FormItem | null = props.formState;

  if (!current) {
    return null;
  }

  const acients = [];
  acients.unshift(current);

  while ((current = current.parent)) {
    acients.unshift(current);
  }

  return props.formState!.next(props.formState!, acients);
}
</script>

<style scoped lang="scss"></style>
