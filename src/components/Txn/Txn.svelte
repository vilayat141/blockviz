<script lang="ts">
    export let blockId: string;
    export let parentHash: string;
    export let txns: {
        from: string;
        to: string;
        value: string;
        hash: string
    }[];
</script>

<div class="block">
    <div class="header">
        <h3>Block Id - {blockId}</h3>
    </div>

    <div class="meta">
        <table>
            <tr>
                <td>Parent Hash</td>
                <td>{parentHash}</td>
            </tr>
            <tr>
                <td>Merkle Hash</td>
                <td>{parentHash}</td>
            </tr>
            <tr>
                <td>Nonce</td>
                <td>{parentHash}</td>
            </tr>
            <tr>
                <td>Mined At</td>
                <td>{parentHash}</td>
            </tr>
            <tr>
                <td>Mined by</td>
                <td>{parentHash}</td>
            </tr>
        </table>
    </div>

    <div class="txns">
        <h2>Transactions</h2>
        {#each txns as txn }
            <table>
                <tr>
                    <td>Hash</td>
                    <td>0x123456</td>
                </tr>
                <tr>
                    <td>From</td>
                    <td>0x123456</td>
                </tr>
                <tr>
                    <td>To</td>
                    <td>0x123456</td>
                </tr>
                <tr>
                    <td>Value</td>
                    <td>0.0025</td>
                </tr>
            </table>
        {/each}
    </div>
</div>

<style>
    @import "./block.css";
</style>