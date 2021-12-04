<script lang="ts">
    import Stats from "./Stats.svelte";

    const URL_INFO = "https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme";
</script>

<main>
    <a
        class="github-fork-ribbon"
        href="https://github.com/FS-Frost/covid-stats"
        target="_blank"
        rel="noreferrer"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub">Fork me on GitHub</a
    >

    <h1 class="title">Estadísticas de Covid-19</h1>

    <Stats />

    <p class="text-center">
        Información obtenida desde <a href={URL_INFO} target="_blank" rel="noreferrer">API for Latest Covid-19</a>.
    </p>
</main>

<style>
    main {
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    .title {
        color: #bd0000;
        text-transform: uppercase;
        font-weight: 100;
        text-align: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }

        .title {
            font-size: 1.6em;
        }
    }

    .text-center {
        text-align: center;
    }
</style>
