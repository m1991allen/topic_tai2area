<template>
    <div class="main">
        <h1>{{ title }}</h1>
        <a href="#voting">
            <img src="../assets/banner.jpg" />
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '中二補選',
        }
    },
}
</script>

<style scoped>
h1 {
    position: absolute;
    top: -100%;
}

.main,
.main a,
.main img {
    width: 100%;
}
</style>
