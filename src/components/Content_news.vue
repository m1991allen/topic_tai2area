<template>
    <div class="section" id="news">
        <h3>{{ title }}</h3>
        <ul>
            <li @click="getData_ftvNews">中二補選</li>
            <li @click="getData_ftvNews1">顏寬恒</li>
            <li @click="getData_ftvNews2">林靜儀</li>
        </ul>
        <div class="section-box">
            <div class="news-layout">
                <div class="news" v-for="(item, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                        <div>
                            <img :src="item.Image" alt="新聞封面照" />
                        </div>
                        <div>
                            <h2 class="title">{{ item.Title }}</h2>
                        </div>
                        <div>
                            <p>{{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="btn_more">
                <a href="https://www.ftvnews.com.tw/tag/中二補選/" target="blank">更多新聞</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '最新新聞',
            newsInfo: [],
        }
    },
    methods: {
        getData_ftvNews() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=中二補選&Page=1&sp=3')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews1() {
            // 顏寬恒 相關新聞
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=顏寬恒&Page=1&sp=3')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews2() {
            // 林靜儀 相關新聞
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=林靜儀&Page=1&sp=3')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
    },
    mounted() {
        this.getData_ftvNews()
    },
}
</script>

<style scoped>
.news-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .news-layout {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .news-layout {
        grid-template-columns: 1fr;
    }
}

.news {
    transition: 0.5s;
}

.news:hover {
    box-shadow: 1px 1px 1px rgb(131, 131, 131);
    display: block;
    text-decoration: none !important;
}

.news p {
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0.3rem;
    font-weight: lighter;
}

.news img {
    width: 100%;
}

.title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 解決firefox不支援-webkit-line-clamp的問題 */
    line-height: 30px;
    max-height: 60px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.3rem;
}
@media screen and (max-width: 768px) {
    .title {
        font-size: 1rem;
    }
}
ul {
    display: flex;
}

ul li {
    margin: auto;
    border: 1px solid;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    box-shadow: 1px 2px 3px gray;
    cursor: pointer;
}

ul li:before {
    content: '#';
}

.btn_more {
    max-width: 300px;
    margin: 3rem auto;
    background-color: #45588f;
    padding: 0.6rem;
    display: block;
    font-weight: bolder;
    cursor: pointer;
    text-align: center !important;
}

.btn_more a {
    color: white;
}
</style>
