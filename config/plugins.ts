export default () => ({
    'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::post.post',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'post',
              slug: '{slug}',
              locale: '{locale}',
            },
          },
          published: {
            url: 'http://localhost:3000/{locale}/{slug}',
          },
        },
      ],
    },
  },
});
