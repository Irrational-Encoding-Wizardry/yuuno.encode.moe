<template>
    <div class="docs--columns">
        <slot></slot>
    </div>
</template>

<style lang="less">
    .docs--columns {
        display: flex;
        
        & > * {
            flex-grow: 1;
            flex-shrink: 1;
            margin-left: 0.5em;
            margin-right: 0.5em;
            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>

