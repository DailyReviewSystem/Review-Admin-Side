<style>
.loading-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.loading-container.overlay {
    position: absolute;
    inset: 0;
    background: #FFF;
    z-index: 10;
}

.loading-svg {
    display: block;
    width: 1em;
    height: 1em;
    margin: auto;
    animation: rotate 1.4s linear infinite;
}

.circle-svg {
    stroke: #000;
    animation:  progress 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
    transition:.3s;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes progress {
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0px;
    }
    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<template>
    <transition name="fade">
        <div class="loading-container" v-if="loading">
            <svg class="loading-svg" viewBox="22 22 44 44">
                <circle class="circle-svg" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
            </svg>
        </div>
    </transition>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    loading: Boolean
});


</script>