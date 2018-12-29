module.exports = {
    title: "Yuuno",
    description: "A link between Jupyter and VapourSynth",

    dest: './docs',

    plugins: [
        "@vuepress/active-header-links",
    ],

    themeConfig: {
        nav: [
            {
                text: "Yuuno",
                link: '/'
            },

            {
                text: "Yuuno for IPython",
                items: [
                    {text: 'Installation', link: '/ipython/installation'},
                    {text: 'Getting started', link: '/ipython/getting-started'},
                    {text: 'Reference', link: '/ipython/reference'},
                    {text: 'Configuration', link: '/ipython/configuration'}
                ]
            },
        ],

        sidebar: {
            '/ipython/': [
                'installation.md',
                'getting-started.md',
                'reference.md',
                'configuration.md'
            ],

            '/legal/': [
                'impressum.md',
                'privacy-policy.md'
            ]
        },

        repo: 'irrational-encoding-wizardry/yuuno',
        repoLabel: "GitHub"
    }
}