<template>
  <div class="slidev-layout default">
    <div class="animated-gradient-bg"></div>
    <div class="decorative-shapes"></div>

    <div class="content-wrapper">
      <main class="slide-body">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlideContext } from "@slidev/client";
import NavSteps from "../components/NavSteps.vue";

const { $frontmatter, $slidev, $page, $renderContext } = useSlideContext();
console.log({ $frontmatter, $slidev, $page, $renderContext });
</script>

<style scoped>
/* --- 基础与背景 --- */
.default {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animated-gradient-bg,
.decorative-shapes {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.animated-gradient-bg {
  background: linear-gradient(
    -45deg,
    var(--td-brand-color-2),
    var(--td-brand-color-1),
    var(--td-gray-color-2),
    var(--td-brand-color-3)
  );
  background-size: 400% 400%;
  animation: gradient-animation 15s ease infinite;
}
.decorative-shapes {
  z-index: 1;
  opacity: 0.2;
  background-image:
    radial-gradient(
      circle at 90% 10%,
      var(--td-brand-color-4) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 10% 90%,
      var(--td-brand-color-5) 0%,
      transparent 25%
    );
}

/* --- 内容容器 --- */
.content-wrapper {
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: var(--td-radius-large, 12px);
  box-shadow: var(--td-shadow-2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* --- 页眉 --- */
.slide-header {
  padding: 1.5rem 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 移除了 .title-placeholder */
.title-container {
  display: flex;
  align-items: center;
  flex-grow: 1; /* 占据左侧空间，将 NavSteps 推向右侧 */
  min-width: 0;
}
.title-decorator {
  width: 5px;
  height: 1.5rem;
  background-color: var(--td-brand-color, #0052d9);
  border-radius: var(--td-radius-small);
  margin-right: 1rem;
}
.title-text {
  margin: 0;
  font-size: var(--td-font-size-title-large, 28px);
  color: var(--td-text-color-primary, #222);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* --- 主体 --- */
.slide-body {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  padding: 1.5rem 2.5rem;
  overflow-y: auto;
  color: var(--td-text-color-primary, #222);
}
.slide-body :deep(p),
.slide-body :deep(ul) {
  line-height: 1.8;
}
.slide-body :deep(h1) {
  /* display: none; */
}
.slide-body :deep(ul) {
  padding-left: 1.2em;
}

/* --- 页脚 --- */
.slide-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}
.footer-logo :deep(img) {
  max-height: 20px;
  opacity: 0.7;
}

/* --- 响应式设计 --- */
@media (max-width: 768px) {
  .content-wrapper {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
  }
  .slide-header,
  .slide-body,
  .slide-footer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .title-text {
    font-size: var(--td-font-size-title-medium);
  }
}
</style>
