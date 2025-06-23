<template>
  <t-steps theme="dot" :current="currentStep" readonly>
    <t-step-item v-for="i in total - 2" :key="'step-' + i" />
  </t-steps>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { StepsProps } from "tdesign-vue-next";
import { useNav } from "@slidev/client";

const { currentPage, total } = useNav();

const currentStep = computed<StepsProps["current"]>(
  () =>
    currentPage.value -
    // Start counting from 0
    1 -
    // Skip the cover
    1
);
</script>

<style scoped></style>
