<template>
  <div class="slidev-layout cover">
    <div class="animated-gradient-bg"></div>
    <div class="decorative-shapes"></div>
    <div class="content-grid">
      <div class="main-content">
        <div class="logo">
          <slot name="logo">
            <img
              width="136"
              src="https://www.tencent.com/img/index/menu_logo_hover.png"
              alt="logo"
            />
          </slot>
        </div>

        <div class="prose">
          <slot />
        </div>

        <div class="footer-info">
          <slot name="report-info">
            {{ reportInfo }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "演示文稿标题",
  },
  reporter: {
    type: String,
  },
  department: {
    type: String,
  },
});

const reportInfo = computed(() => {
  if (props.reporter && props.department) {
    return `${props.reporter} | ${props.department}`;
  }
  return props.reporter || props.department || "{reporter} | {department}";
});
</script>

<style scoped>
/* Background, animation, and basic styles remain unchanged */
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
.animated-gradient-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
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
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.2;
  background-image:
    radial-gradient(
      circle at 10% 20%,
      var(--td-brand-color-4) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 80% 90%,
      var(--td-brand-color-5) 0%,
      transparent 25%
    );
}
.content-grid {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vw;
  box-sizing: border-box;
}

/* Main content area - Glassmorphic card */
.main-content {
  width: 100%;
  max-width: 900px;
  padding: 3.5rem 4rem; /* Increased vertical padding for a stronger sense of space */
  background: rgba(
    255,
    255,
    255,
    0.5
  ); /* Slightly increased opacity for better text clarity */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: var(--td-radius-large);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--td-shadow-3);
  display: flex;
  flex-direction: column;
  text-align: left;
  animation: fade-in-up 0.8s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- Logo Optimization --- */
.logo {
  margin-bottom: 2.5rem; /* Increased spacing between logo and title */
  align-self: flex-start;
  opacity: 0.8; /* Slightly reduced opacity by default */
  transition: opacity 0.3s ease;
}
.logo:hover {
  opacity: 1;
}

.logo :deep(img) {
  max-height: 36px;
}

.prose {
  flex-grow: 1;
}

.footer-info {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 1.5rem;
  margin-top: 3rem;

  font-size: var(--td-font-size-title-small);
  color: var(--td-text-color-secondary);
  align-self: flex-start;
  width: 100%;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .main-content {
    padding: 2.5rem 2rem;
    text-align: center;
  }
  .logo,
  .footer-info {
    align-self: center;
  }
}
</style>
