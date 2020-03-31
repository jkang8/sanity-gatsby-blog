export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e82f11526d53a1fc3a73c96',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sacaute3',
                  apiId: 'cae40532-0333-4acf-8218-399419ce13a3'
                },
                {
                  buildHookId: '5e82f1152ba0836ff42d355c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hzo23oyk',
                  apiId: 'a01855eb-699f-4142-b2f2-38427a06efd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkang8/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hzo23oyk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
