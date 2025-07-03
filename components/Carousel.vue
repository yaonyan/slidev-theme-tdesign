<template>
  <t-swiper 
    class="tdesign-demo-block--swiper" 
    :duration="300" 
    :interval="interval"
  >
    <t-swiper-item v-for="(item, index) in items" :key="index">
      <div class="carousel-item">
        <img v-if="typeof item === 'string'" :src="item" :alt="`Slide ${index + 1}`" />
        <div v-else class="carousel-text">{{ item }}</div>
      </div>
    </t-swiper-item>
  </t-swiper>
</template>

<script setup lang="ts">
interface Props {
  items?: (string | number)[];
  interval?: number;
}

withDefaults(defineProps<Props>(), {
  items: () => [1, 2, 3],
  interval: 2000
});
</script>

<style scoped>
.tdesign-demo-block--swiper {
  width: 100%;
  height: 78%;
}

.carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--td-brand-color-1, #0052d9),
    var(--td-brand-color-3, #266fe8)
  );
  border-radius: var(--td-radius-medium, 8px);
  box-shadow: var(--td-shadow-1);
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--td-radius-medium, 8px);
}

.carousel-text {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}
</style>
