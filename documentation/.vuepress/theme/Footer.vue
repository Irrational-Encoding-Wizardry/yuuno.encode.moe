<template>
    <footer class="footer">
        <div class="copyright">
            <a href="//www.gnu.org/licenses/fdl-1.3.en.html">GNU FDL <OutboundLink /></a> Licensed | Copyright © 2018 StuxCrystal<br />
            The documentation uses a modified version of the <a href="//vuepress.vuejs.org">VuePress default theme.<OutboundLink /></a><br/>
            Movie-Screenshots are taken from Sintel | © copyright Blender Foundation | <a href="//www.sintel.org/" target="_blank">www.sintel.org<OutboundLink /></a>
        </div>
        <div class="legal-stuff">
            <a href="/legal/impressum.html">Impressum</a>
            <a href="/legal/privacy-policy.html">Privacy Policy</a>
        </div>
    </footer>
</template>

<style lang="stylus">
  @import './styles/config.styl'

  .footer
    margin-top 2rem
    border-top 1px solid $borderColor
    text-align center
    color $textColor
    background-color: $navBgColor

    > *
        padding 2.5rem

    .legal-stuff
        background-color $codeBgColor

        > a, > a:visited
            color: $pageBgColor
            &:hover
                color: $accentColor

            padding-left 1rem
            padding-right 1rem

    a, a:visited
        color: $accentColor

  .theme-container:not(.no-sidebar)
    .footer
      margin-left: $sidebarWidth
</style>
