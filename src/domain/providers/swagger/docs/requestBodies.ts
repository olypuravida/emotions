const requestBodies = {
  UserEmotionRequest: {
    description: 'User emotion request body',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            main: {
              type: 'string',
              description: 'Main Emotion name',
              example: 'Happy',
              required: true,
            },
            emotion: {
              type: 'string',
              description: 'User Emotion selected',
              example: 'Energetic',
              required: true,
            },
          },
        },
      },
    },
  },
}

export default requestBodies
