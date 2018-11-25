<template>
   <div class="cell">
        <div class="cell--input cell--cell-no">In &nbsp;[{{ cellno }}]:</div>
        <div class="cell--input cell--content">
             <slot></slot>
        </div>
        <div class="cell--output cell--cell-no" v-if="$slots.output">Out [{{ cellno }}]:</div>
        <div class="cell--output cell--content" v-if="$slots.output">
             <slot name="output"></slot>
        </div>
   </div>
</template>


<style lang="less">
    .cell {
        display: grid;
        grid-template-columns: 5em auto;
        grid-template-rows: auto auto;

        & > .cell--cell-no {
            &.cell--input {
                color: #2a2;
                padding-top: 1.25rem;
                margin-top: 0.85rem;
            }
            &.cell--output {
                color: #a22;
            }
            font-family: 'Courier New', Courier, monospace;
        }
    }
</style>


<script>
export default {
    name: 'jupyter-cell',

    props: ["cellno"]
}
</script>

