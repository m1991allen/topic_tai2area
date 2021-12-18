<template>
    <div class="section" id="voting">
        <div class="section-box">
            <div class="vote">
                <!-- 同意票/不同意票 -->
                <div class="votebox"><span id="agree_bar"></span></div>
                <p>{{ title_agree }}<span id="agree_vote"></span></p>

                <div class="votebox"><span id="disagree_bar"></span></div>
                <p>{{ title_disagree }}<span id="disagree_vote"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title_agree: '同意（門檻：7萬3744票）: ',
            title_disagree: '不同意： ',
            vote_tatol: 120000,
        }
    },

    methods: {
        vote() {
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews.com.tw/topics/taichillVote/poll220109.json')
                .then(function(res) {
                    console.log(res.data.Data)
                    let votes = res.data.Data

                    for (let i = 0; i < votes.length; i++) {
                        console.log(votes[i].AgreeTickets)
                    }

                    let vote_agree = this.vote_agree
                    let vote_disagree = this.vote_disagree
                    let bar_agree = Math.floor((vote_agree / this.vote_tatol) * 100)
                    let bar_disagree = Math.floor((vote_disagree / this.vote_tatol) * 100)

                    document.getElementById('agree_vote').innerText =
                        vote_agree.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'
                    document.getElementById('disagree_vote').innerText =
                        vote_disagree.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'

                    document.getElementById('agree_bar').style.width = bar_agree + '%'
                    document.getElementById('disagree_bar').style.width = bar_disagree + '%'
                })
                .catch(function(err) {
                    console.log(err)
                })
        },
    },

    mounted() {
        this.vote()
    },
}
</script>

<style scoped>
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

.vote {
    margin: 2rem 0;
}

.votebox {
    background-color: #aaaaaa;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    display: flex;
}

.votebox span {
    border-radius: 10px;
}

/* 票數據條 */
#agree_bar {
    width: 0%;
    background-color: #374574;
}

#disagree_bar {
    width: 0%;
    background-color: #743737;
}
</style>
