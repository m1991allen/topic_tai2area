<template>
    <div class="bottom">
        <a href="#video">直播專區</a>
        <a href="#profile">候選人介紹</a>
        <a href="#news">最新新聞</a>
    </div>
</template>

<script>
export default {}
</script>

<style>
.bottom {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #374674;
    z-index: 999;
}

.bottom a {
    width: 33.3%;
    padding: 1rem;
    color: white;
    text-align: center;
}

.bottom a:nth-child(1),
.bottom a:nth-child(2) {
    border-right: 0.01rem solid #a5a5a5;
}

.bottom a:hover {
    color: white !important;
}
</style>
