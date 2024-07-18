const paths = {
  '/api/emotions': {
    get: {
      tags: ['Emotions'],
      summary: 'Retrieve emotions',
      description: 'Retrieve all emotions available',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          $ref: '#/components/responses/EmotionsSuccess',
        },
        400: {
          $ref: '#/components/responses/BadRequest',
        },
        401: {
          $ref: '#/components/responses/Unauthorized',
        },
        404: {
          $ref: '#/components/responses/NotFound',
        },
        500: {
          $ref: '#/components/responses/InternalServerError',
        },
      },
    },
  },

  '/api/emotions/user/{Id}': {
    get: {
      tags: ['User Emotions'],
      summary: 'Retrieve user emotions',
      description: 'Retrieve all user emotions selected',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          $ref: '#/components/responses/UserEmotionsSuccess',
        },
        400: {
          $ref: '#/components/responses/BadRequest',
        },
        401: {
          $ref: '#/components/responses/Unauthorized',
        },
        404: {
          $ref: '#/components/responses/NotFound',
        },
        500: {
          $ref: '#/components/responses/InternalServerError',
        },
      },
    },
  },

  '/api/emotions/user/{id}': {
    post: {
      tags: ['User Emotions'],
      summary: 'Register selected user emotion',
      description: 'Register a selected emotion by user.',
      security: [{ bearerAuth: [] }],
      requestBody: {
        $ref: '#/components/requestBodies/UserEmotionRequest',
      },
      responses: {
        200: {
          $ref: '#/components/responses/UserEmotionCreatedSuccess',
        },
        400: {
          $ref: '#/components/responses/BadRequest',
        },
        401: {
          $ref: '#/components/responses/Unauthorized',
        },
        404: {
          $ref: '#/components/responses/NotFound',
        },
        500: {
          $ref: '#/components/responses/InternalServerError',
        },
      },
    },
  },
}

export default paths
