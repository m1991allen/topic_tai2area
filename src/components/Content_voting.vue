<template>
    <div class="section" id="voting">
        <div class="section-box">
            <!-- 同意票/不同意票 -->
            <div v-for="(item, index) of getProfile" :key="index" class="vote_info">
                <h4>
                    <div>
                        <span class="number">{{ item.no }}</span> {{ item.party }}
                        <img :src="getProfile[index].party_photo" alt="政黨" />
                        <span :class="{ elected: getVotes[index].elected }"></span>
                    </div>
                    <div class="vote_layout">
                        <span class="votes">{{ getVotes[index].valid_vote }}</span> <span> 票</span>
                        <span class="percent">{{ getVotes[index].percent }}</span>
                    </div>
                </h4>
                <div class="vote_bar">
                    <span class="vote_progress"></span>
                </div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        // 持續抓取新票數
        keepGetVotes() {
            setInterval(() => {
                this.$store.commit('votes')
            }, 1500)
        },
    },

    computed: {
        getProfile() {
            return this.$store.state.guys
        },
        getVotes() {
            return this.$store.state.vote_personal
        },
    },

    mounted() {
        this.$store.commit('votes')
        this.keepGetVotes() // 抓取新票數
    },
}
</script>

<style scoped>
h4 {
    position: relative;
}

h4 img {
    width: 36px;
    margin-left: 1rem;
}

h4 div:nth-child(1) {
    display: flex;
    align-items: center;
}

/* vidoe */
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
}
.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

/* 4x3 縱橫比 */
.iframe-container-4x3 {
    padding-top: 75%;
}

/* 票數據條 */

.votes {
    font-weight: bolder;
    color: brown;
}

.percent {
    display: block;
    text-align: right;
    font-size: 1.2rem;
    margin-top: 1rem;
}
.percent::after {
    content: ' %';
}

.vote_layout {
    text-align: right;
}

.vote_bar {
    background-color: #aaaaaa;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    display: flex;
    margin: 1rem 0 2rem 0;
}

.vote_bar span {
    border-radius: 10px;
}

.vote_progress {
    width: 0%;
}

.vote_info:nth-child(1) .vote_progress {
    background: linear-gradient(to right, #45588f 25%, #5b6d9f 45%, #87a8d0 50%, #5b6d9f 55%, #45588f 75%);
    background-size: 300% 100%;
    animation: gradient 4s linear infinite reverse;
}
.vote_info:nth-child(2) .vote_progress {
    background: linear-gradient(to right, #45588f 25%, #5b6d9f 45%, #87a8d0 50%, #5b6d9f 55%, #45588f 75%);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite reverse;
}
.vote_info:nth-child(3) .vote_progress {
    background: linear-gradient(to right, #45588f 25%, #5b6d9f 45%, #87a8d0 50%, #5b6d9f 55%, #45588f 75%);
    background-size: 300% 100%;
    animation: gradient 2s linear infinite reverse;
}
.vote_info:nth-child(4) .vote_progress {
    background: linear-gradient(to right, #45588f 25%, #5b6d9f 45%, #87a8d0 50%, #5b6d9f 55%, #45588f 75%);
    background-size: 300% 100%;
    animation: gradient 0.7s linear infinite reverse;
}
.vote_info:nth-child(5) .vote_progress {
    background: linear-gradient(to right, #45588f 5%, #5b6d9f 35%, #bfcffe 50%, #5b6d9f 65%, #45588f 95%);
    background-size: 300% 100%;
    animation: gradient 1s linear infinite reverse;
}

@keyframes gradient {
    0% {
        background-position: 0% 100%;
    }
    100% {
        background-position: 100% 0%;
    }
}

.elected {
    content: '';
    background-image: url('../assets/elected.png');
    width: 35px;
    height: 36px;
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 1rem;
}
</style>
