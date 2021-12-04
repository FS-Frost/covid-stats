<script lang="ts">
    import type { Stats } from "./StatsClient";

    export let name: string;
    export let stats: Stats;
</script>

<div>
    <p>{name}:</p>
    <ul>
        <li>Confirmados: {stats.confirmed ?? "-"}</li>
        <li>Recuperados: {stats.recovered ?? "-"}</li>
        <li>Muertos: {stats.deaths ?? "-"}</li>
    </ul>
</div>

<style>
</style>
