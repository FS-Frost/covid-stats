<script lang="ts">
    import { onMount } from "svelte";
    import { ClientResponse, getStats } from "./StatsClient";
    import Summary from "./Summary.svelte";

    let response: ClientResponse;
    let isLoading: boolean = false;

    onMount(async () => {
        isLoading = true;
        response = await getStats();
        isLoading = false;
    });

    async function updateStats() {
        isLoading = true;
        response = await getStats();
        isLoading = false;
    }

    function timestampToLocalString(timestamp: number): string {
        return new Date(timestamp).toLocaleString();
    }
</script>

<div>
    {#if response != null && !isLoading}
        <p class="text-center">Última actualización: {timestampToLocalString(response.json?.cache.lastUpdatedTimestamp)}</p>

        <div class="summaries">
            <Summary name="Global" stats={response.json?.summaryStats.global} />
            <Summary name="Fuera de China" stats={response.json?.summaryStats.nonChina} />
            <Summary name="China" stats={response.json?.summaryStats.china} />
        </div>
    {:else}
        <p class="text-center">Cargando...</p>
    {/if}
</div>

<div class="update-container">
    <button on:click={updateStats} disabled={isLoading}>Actualizar</button>
</div>

<style>
    .text-center {
        text-align: center;
    }

    .summaries {
        margin-left: 20px;
    }

    .update-container {
        display: flex;
        justify-content: center;
    }
</style>
