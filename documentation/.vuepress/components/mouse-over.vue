<template>
    <div class="mouse-over">
        <div class="component primary">
            <slot name="primary"></slot>
        </div>
        <div class="component secondary">
            <slot name="secondary"></slot>
        </div>
    </div>
</template>
<style lang="less">
.mouse-over {
    & > .component {
        display: none;
    }

    &:not(:hover) > .component.primary,
    &:hover > .component.secondary {
        display: block;
    }
}
</style>