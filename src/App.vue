<template>
    <div>
        <Header />
        <COntentBanner />
        <ContentVideo />
        <ContentVoting />
        <InfogramResult />
        <ContentProfile />
        <InfogramVoted />
        <ContentProcess />
        <ContentNews />
        <Footer />
        <AdditionSide />
        <AdditionScrolltop />
        <AdditionBottom />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import COntentBanner from '@/components/Content_banner.vue'
import ContentVideo from '@/components/Content_video.vue'
import ContentVoting from '@/components/Content_voting.vue'
import InfogramVoted from '@/components/Infogram_voted.vue'
import ContentProfile from '@/components/Content_profile.vue'
import InfogramResult from '@/components/Infogram_result.vue'
import ContentProcess from '@/components/Content_process.vue'
import ContentNews from '@/components/Content_news.vue'
import Footer from '@/components/Footer.vue'
import AdditionSide from '@/components/Addition_side.vue'
import AdditionScrolltop from './components/Addition_scrolltop.vue'
import AdditionBottom from './components/Addition_bottom.vue'

export default {
    name: 'App',
    components: {
        Header,
        COntentBanner,
        ContentVideo,
        ContentVoting,
        InfogramVoted,
        ContentProfile,
        InfogramResult,
        ContentProcess,
        ContentNews,
        Footer,
        AdditionSide,
        AdditionScrolltop,
        AdditionBottom,
    },
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>

<style>
/* 全局自訂 */
* {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: rgb(237, 240, 247);
}

#app {
    font-family: Helvetica, 微軟正黑體, 蘋果儷中黑, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    transition: 0.3s;
    width: 100%;
    overflow-x: hidden;
}

h1,
h2 {
    font-size: 1.8rem;
}

h3 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bolder;
    padding: 0.6rem 0;
    margin: 2rem 0 0.1rem 0;
    color: white;
    background-color: #45588f;
}

h4 {
    font-size: 1.3rem;
}

ul li {
    text-align: left;
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
    line-height: 1.4rem;
}

p {
    text-align: left;
    margin: 0.5rem 0 2rem 0;
    line-height: 1.4rem;
    font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
    p,
    ul li {
        font-size: 1rem;
    }
}

a {
    color: black;
    text-decoration: none !important;
}

a:hover {
    color: black;
}

figure {
    margin: 0;
}

.layout {
    max-width: 1000px;
}

.section {
    margin: 3rem auto;
    max-width: 1000px;
    background-color: white;
}

.section-box {
    margin: auto;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .section {
        margin: 3rem auto;
        padding: 0 1rem;
        width: 100%;
    }
}

.flex {
    display: flex;
}

@media screen and (max-width: 350px) {
    .flex {
        display: block;
    }
}

.name {
    text-align: center;
    font-weight: bolder;
    font-size: 1.6rem;
    margin: 1rem 0;
    line-height: 2rem;
}

.section-box p:nth-child(1) {
    margin-left: 0;
}

/* Tabs style */
.nav-tabs .nav-link.active {
    background-color: #5d72af !important;
    color: white;
}

.nav-item {
    background-color: rgb(233 233 233);
    border-left: 2px solid white;
}

/* 候選人編號樣式 */
.fa.fa-circle-o {
    font-weight: lighter !important;
    color: #494949;
}
.fa-stack-1x {
    color: red;
    font-weight: bolder;
}
</style>
