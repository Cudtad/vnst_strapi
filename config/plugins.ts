export default ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::post.post',
          draft: {
            url: `${env('URL_PREVIEW', 'http://localhost:3000')}/preview/{id}`,
          },
          published: {
            url: `${env('URL_PREVIEW', 'http://localhost:3000')}/preview/{id}`,
          },
        },
      ],
    },
  },
});
