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
                  buildHookId: '5ecf6ad7d5b1e9b09a1e6775',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4684fe81',
                  apiId: '01096142-e356-4068-8522-678b923cddbd'
                },
                {
                  buildHookId: '5ecf6ad7bf36229b0cbfddaa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fwbz6ysb',
                  apiId: '9fa481d4-89c9-443d-9c77-bf9eb7bd22dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabeszrozsa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fwbz6ysb.netlify.app', category: 'apps'}
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
