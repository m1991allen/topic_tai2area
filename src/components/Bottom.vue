<template>
    <div class="bottom">
        <a href="#voting"><i class="fad fa-vote-nay"></i> 直播專區</a>
        <a href="#profile"><i class="fad fa-chart-pie"></i> 候選人介紹</a>
        <a href="#news"><i class="fad fa-rss"></i> 相關新聞</a>
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

.bottom a:hover {
    color: white !important;
}
</style>
