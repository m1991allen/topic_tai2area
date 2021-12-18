<template>
    <div class="section" id="profile">
        <h3>{{ title }}</h3>
        <div class="section-box">
            <b-tabs content-class="mt-3" fill>
                <b-tab title="張烱春">
                    <div class="grid">
                        <div style="margin: auto">
                            <h4>
                                <span class="number">{{ guys[0].no }}</span> {{ guys[0].party }}
                            </h4>
                            <img :src="guys[0].photo" />
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷">
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[0].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[0].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見">
                                    <ul>
                                        <li v-for="(item, index) of guys[0].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="guys[0].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i> 財產申報資料 下載</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of guys[0].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="林金連">
                    <div class="grid">
                        <div style="margin: auto">
                            <h4>
                                <span class="number">{{ guys[1].no }}</span> {{ guys[1].party }}
                            </h4>
                            <img :src="guys[1].photo" />
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷">
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[1].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[1].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見">
                                    <ul>
                                        <li v-for="(item, index) of guys[1].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="guys[1].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i> 財產申報資料 下載</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of guys[1].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="李昇翰">
                    <div class="grid">
                        <div style="margin: auto">
                            <h4>
                                <span class="number">{{ guys[2].no }}</span> {{ guys[2].party }}
                            </h4>
                            <img :src="guys[2].photo" />
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷">
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[2].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[2].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見">
                                    <ul>
                                        <li v-for="(item, index) of guys[2].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="guys[2].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i> 財產申報資料 下載</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of guys[2].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="林靜儀" active>
                    <div class="grid">
                        <div style="margin: auto">
                            <h4>
                                <span class="number">{{ guys[3].no }}</span> {{ guys[3].party }}
                            </h4>
                            <img :src="guys[3].photo" />
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷">
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[3].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[3].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見">
                                    <ul>
                                        <li v-for="(item, index) of guys[3].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="guys[3].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i> 財產申報資料 下載</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of guys[3].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="顏寬恒">
                    <div class="grid">
                        <div style="margin: auto">
                            <h4>
                                <span class="number">{{ guys[4].no }}</span> {{ guys[4].party }}
                            </h4>
                            <img :src="guys[4].photo" />
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷">
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[4].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of guys[4].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見">
                                    <ul>
                                        <li v-for="(item, index) of guys[4].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="guys[4].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i> 財產申報資料 下載</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of guys[4].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '候選人介紹',
            guys: [
                {
                    name: '張烱春',
                    no: '1',
                    party: '張烱春/台灣股票黨',
                    photo: require('../assets/張烱春.png'),
                    experience: {
                        edu: ['台中師專'],
                        exp: ['台中市北屯仁和里長', '台中市街頭藝人協會創會理事長', '台中市兒童福利發展協會總幹事'],
                    },
                    opinion: {
                        title: '政見',
                        opin: [''],
                    },
                    property: {
                        title: '財產申報',
                        prop: [''],
                        file: ['https://www.ftvnews.com.tw/topics/taichillVote/property/張烱春財申表.pdf'],
                    },
                },
                {
                    name: '林金連',
                    no: '2',
                    party: '林金連/無黨籍',
                    photo: require('../assets/林金連.png'),
                    experience: {
                        edu: [
                            '光華高工',
                            '省立嘉義師專幼稚教育師資科',
                            '省立嘉義師專幼稚教育師資科',
                            '國立嘉義師範學院幼兒教育學系',
                            '國立嘉義大學幼兒教育研究所，幼教碩士',
                        ],
                        exp: [
                            '台中黎明幼兒園園長',
                            '87年文建會地方記錄片首獎、考古研究、埔里石墩坑、南屯麻糍埔遺址發現',
                            '台灣省道教會理事',
                            '台灣土地正義行動聯盟常務理事',
                            '嘉義大學幼兒教育研究所甄試榜首',
                            '中華道教學院合格大法師認證',
                        ],
                    },
                    opinion: {
                        title: '政見',
                        opin: ['土地4筆', '建物5筆', '汽車1筆'],
                    },
                    property: {
                        title: '財產申報',
                        prop: [''],
                        file: ['https://www.ftvnews.com.tw/topics/taichillVote/property/林金連財申表.pdf'],
                    },
                },
                {
                    name: '李昇翰',
                    no: '3',
                    party: '李昇翰/無黨籍',
                    photo: require('../assets/李昇翰.png'),
                    experience: {
                        edu: [''],
                        exp: [],
                    },
                    opinion: {
                        title: '政見',
                        opin: [''],
                    },
                    property: {
                        title: '財產申報',
                        prop: [
                            '土地1筆',
                            '建物1筆',
                            '汽車1筆',
                            '保險3筆 84萬9200元',
                            '股票 3萬元',
                            '存款 87萬3190元',
                            '債務 532萬6852元',
                        ],
                        file: ['https://www.ftvnews.com.tw/topics/taichillVote/property/李昇翰財申表.pdf'],
                    },
                },
                {
                    name: '林靜儀',
                    no: '4',
                    party: '林靜儀/民主進步黨',
                    photo: require('../assets/林靜儀.png'),
                    experience: {
                        edu: ['台大分子醫學研究所碩士', '中山醫學大學醫學研究所碩士', '中山醫學大學醫學研究所博士'],
                        exp: [
                            '第9屆立法委員',
                            '民進黨中央黨部婦女發展部主任',
                            '中山醫大附設醫院產科主任',
                            '行政院婦權會委員',
                        ],
                    },
                    opinion: {
                        title: '政見',
                        opin: [''],
                    },
                    property: {
                        title: '財產申報',
                        prop: [
                            '土地3筆',
                            '建物3筆',
                            '汽車1筆',
                            '保險4筆 285萬7457元',
                            '存款 172萬0389元',
                            '債務 491萬9800元',
                        ],
                        file: ['https://www.ftvnews.com.tw/topics/taichillVote/property/林靜儀財申表.pdf'],
                    },
                },
                {
                    name: '顏寬恒',
                    no: '5',
                    party: '顏寬恒/中國國民黨',
                    photo: require('../assets/顏寬恒.png'),
                    experience: {
                        edu: ['建國工專機械工程科', '美國舊金山多明尼肯大學企管碩士', '中華大學行政管理研究所碩士'],
                        exp: [
                            '第8、9屆立法委員',
                            '台中市救國團團委會指導委員',
                            '大甲鎮瀾宮兒童家園志工',
                            '台中市後備指揮部發展委員',
                            '台中市新移民女性家庭關懷協會顧問',
                            '台中市沙鹿中正獅子會2016-2017會長',
                            '中華民國法警協會榮譽理事長',
                            '社團法人台中市學前教育協會顧問',
                        ],
                    },
                    opinion: {
                        title: '政見',
                        opin: [''],
                    },
                    property: {
                        title: '財產申報',
                        prop: [
                            `土地62筆`,
                            `建物10筆`,
                            `汽車1筆`,
                            `保險27筆`,
                            `股票 1384萬6760元`,
                            `存款 2705萬9790元`,
                            `債務 7422萬1077元`,
                            `事業投資 1800萬元`,
                        ],
                        file: ['https://www.ftvnews.com.tw/topics/taichillVote/property/顏寬恒財申表.pdf'],
                    },
                },
            ],
        }
    },
}
</script>

<style scoped>
h4 {
    text-align: left;
    margin: 2rem 0;
}
p {
    text-align: left;
    font-size: 1.2rem;
}

ul li {
    font-size: 1.2rem;
    margin: 1rem 0 1rem 2rem;
}

@media screen and (max-width: 768px) {
    p,
    ul li {
        font-size: 1rem;
    }
}

.grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
}

@media screen and (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.number {
    color: red;
    font-size: 1.4rem;
    font-variant-numeric: normal;
    position: relative;
    border: 1px solid rgb(74, 74, 74);
    border-radius: 50%;
    padding: 0.2rem 0.63rem;
    font-family: monospace;
}

/* pdf下載 樣式 */
a {
    font-size: 1.1rem;
    font-weight: bolder;
    transition: 0.3s;
    border: dashed 1px gray;
    color: #45588f;
    display: flex;
    margin: auto;
    padding: 1rem;
}

a:hover {
    color: #45588f;
}

.grid-inner {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

@media screen and (max-width: 500px) {
    .grid-inner {
        grid-template-columns: 1fr;
    }
}
</style>
