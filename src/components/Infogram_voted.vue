<template>
    <div class="section" id="result">
        <h3>{{ title }}</h3>
        <div
            class="infogram-embed"
            data-id="977a1895-eeab-40c5-9b42-cc2c768ae870"
            data-type="interactive"
            data-title="Infographic Modern"
        ></div>

        <div
            style="
                padding: 8px 0;
                font-family: Arial !important;
                font-size: 13px !important;
                line-height: 15px !important;
                text-align: center;
                border-top: 1px solid #dadada;
                margin: 0 30px;
            "
        ></div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    data() {
        return {
            title: '歷年選舉',
        }
    },
}
</script>

<style scoped></style>
