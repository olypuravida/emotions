const schemas = {
  Emotion: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'ObjectId',
        description: 'Emotion ID',
      },
      name: {
        type: 'string',
        description: 'Emotion name',
        example: 'Happy',
        required: true,
      },
      description: {
        type: 'string',
        description: 'Emotion description',
      },
      emotions: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'User emotions list',
        example: ['Energetic', 'Paceful'],
        required: true,
      },
      createdAt: {
        type: 'string',
        format: 'date-time',
        description: 'Emotion creation date',
      },
      updatedAt: {
        type: 'string',
        format: 'date-time',
        description: 'Emotion last update date',
      },
      deletedAt: {
        type: 'string',
        format: 'date-time',
        description: 'Emotion deletion date',
      },
    },
  },

  UserEmotion: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'ObjectId',
        description: 'User Emotion ID',
      },
      emotionId: {
        type: 'string',
        format: 'ObjectId',
        description: 'Emotion ID',
      },
      userId: {
        type: 'string',
        format: 'ObjectId',
        description: 'User ID',
      },
      createdAt: {
        type: 'string',
        format: 'date-time',
        description: 'User Emotion creation date',
      },
      updatedAt: {
        type: 'string',
        format: 'date-time',
        description: 'User Emotion last update date',
      },
      deletedAt: {
        type: 'string',
        format: 'date-time',
        description: 'User Emotion deletion date',
      },
    },
  },

  ResponseStatusOK: {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        description: 'Response code',
        example: 200,
      },
      reason: {
        type: 'string',
        description: 'Response reason',
        example: 'OK',
      },
      success: {
        type: 'boolean',
        description: 'Response success status',
        example: true,
      },
    },
  },

  ResponseStatusBadRequest: {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        description: 'Response code',
        example: 400,
      },
      reason: {
        type: 'string',
        description: 'Response reason',
        example: 'BAD_REQUEST',
      },
      success: {
        type: 'boolean',
        description: 'Response success status',
        example: false,
      },
    },
  },

  ResponseStatusUnauthorized: {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        description: 'Response code',
        example: 401,
      },
      reason: {
        type: 'string',
        description: 'Response reason',
        example: 'UNAUTHORIZED',
      },
      success: {
        type: 'boolean',
        description: 'Response success status',
        example: false,
      },
    },
  },

  ResponseStatusNotFound: {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        description: 'Response code',
        example: 404,
      },
      reason: {
        type: 'string',
        description: 'Response reason',
        example: 'NOT_FOUND',
      },
      success: {
        type: 'boolean',
        description: 'Response success status',
        example: false,
      },
    },
  },

  ResponseStatusInternalServerError: {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        description: 'Response code',
        example: 500,
      },
      reason: {
        type: 'string',
        description: 'Response reason',
        example: 'INTERNAL_SERVER_ERROR',
      },
      success: {
        type: 'boolean',
        description: 'Response success status',
        example: false,
      },
    },
  },
}

export default schemas
