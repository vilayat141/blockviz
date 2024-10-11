<script>
    import Block from "./components/Block/Block.svelte";
</script>

<div class="app">
  {#each Array(10) as entry}
  <Block blockId="1" parentHash="0x12345" txns={[
    {
        hash: "0xabcdefg",
        from: "asd",
        to: 'asd',
        value: 'adasd'
    },
    {
        hash: "0xabcdefg",
        from: "asd",
        to: 'asd',
        value: 'adasd'
    },
    {
        hash: "0xabcdefg",
        from: "asd",
        to: 'asd',
        value: 'adasd'
    }
  ]} />
  {/each}
</div>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .app {
        width: 200vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        overflow-x: scroll;
    }
</style>