import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        guys: [
            {
                name: '張烱春',
                no: '1',
                party: '張烱春',
                photo: require('../assets/張烱春.png'),
                party_photo: require('../assets/台灣股票黨.png'),
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
                party: '林金連',
                photo: require('../assets/林金連.png'),
                party_photo: require('../assets/無黨籍.png'),
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
                party: '李昇翰',
                photo: require('../assets/李昇翰.png'),
                party_photo: require('../assets/無黨籍.png'),
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
                party: '林靜儀',
                photo: require('../assets/林靜儀.png'),
                party_photo: require('../assets/民進黨.png'),
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
                party: '顏寬恒',
                photo: require('../assets/顏寬恒.png'),
                party_photo: require('../assets/國民黨.png'),
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

        vote_personal: [
            { no: 1, valid_vote: 0, percent: 0, elected: false },
            { no: 2, valid_vote: 0, percent: 0, elected: false },
            { no: 3, valid_vote: 0, percent: 0, elected: false },
            { no: 4, valid_vote: 0, percent: 0, elected: true },
            { no: 5, valid_vote: 0, percent: 0, elected: false },
        ],
        vote_total: 120000,
    },
    mutations: {
        votes(state) {
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews.com.tw/topics/taichillVote/poll220109.json')
                .then(function (res) {
                    let votes = res.data.Data
                    let total =
                        votes[0].AgreeTickets +
                        votes[1].AgreeTickets +
                        votes[2].AgreeTickets +
                        votes[3].AgreeTickets +
                        votes[4].AgreeTickets

                    for (let i = 0; i < state.guys.length; i++) {
                        let bar = (votes[i].AgreeTickets / state.vote_total) * 100 // 票數百分比

                        document.querySelectorAll('.percent')[i].innerHTML = Math.floor(
                            (votes[i].AgreeTickets / total) * 100
                        )
                        if (votes[i].AgreeTickets >= 120000) {
                            document.querySelectorAll('.vote_progress')[i].style.width = 100 + '%'
                        } else {
                            document.querySelectorAll('.vote_progress')[i].style.width = bar + '%' // progress長度
                        }

                        state.vote_personal[i].valid_vote = votes[i].AgreeTickets.toString().replace(
                            /\B(?=(\d{4})+(?!\d))/g,
                            '萬'
                        ) // api新票數 取代 預設票數值vote_personal

                        // person_vote = state.vote_personal[i].valid_vote
                    }
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
    },
    actions: {},
    modules: {},
})
