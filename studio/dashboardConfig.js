export default {
  widgets: [
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
                  buildHookId: '62bfc7dd30935f72844ab505',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kx35igju',
                  apiId: '3b48e390-e8bc-40fd-8f9a-8b674c2df178'
                },
                {
                  buildHookId: '62bfc7de6049b973eaddacf7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3w353j5v',
                  apiId: '8babcc6d-b8b9-47b6-a080-ba0fd235f396'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HouseofAloha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3w353j5v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
