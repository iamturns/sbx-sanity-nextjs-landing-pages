export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb6a87bc2f2d2f0fa286ee2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9dqm6x71',
                  apiId: 'b3bf8f0a-4849-4667-a0fc-bab7da3d882c'
                },
                {
                  buildHookId: '5eb6a87bc2f2d2af6828728b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vhvtpy23',
                  apiId: '3efc234d-0269-4713-8791-f51ed550ac05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamturns/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vhvtpy23.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
