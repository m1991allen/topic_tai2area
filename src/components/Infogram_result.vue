<template>
    <div class="section" id="result">
        <h3>{{ title }}</h3>
        <div
            class="infogram-embed"
            data-id="0cc1b8f5-0f9c-44f7-8f84-75f71e8ef602"
            data-type="interactive"
            data-title="中二補選-投票結果"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    data() {
        return {
            title: '開票結果',
        }
    },
}
</script>

<style scoped></style>
