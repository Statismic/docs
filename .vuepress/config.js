module.exports = {
    title: 'Statismic Plots',
    description: 'Documentation for Statismic Plots',
    base: '/docs/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'User Guides',
                items: [
                    {
                        text: 'plots', link: '/guide/user/plots/'
                    },
                    {
                        text: 'components', link: '/guide/user/components/'
                    }
                ]
            },
            {
                text: 'Dev Guides',
                items: [
                    {
                        text: 'plots', link: '/guide/dev/plots/'
                    },
                    {
                        text: 'components', link: '/guide/dev/components/'
                    }
                ]
            },
        ]
    }
}