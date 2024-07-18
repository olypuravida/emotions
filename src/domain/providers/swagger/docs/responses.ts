const responses = {
  BadRequest: {
    description: 'Bad Request',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
            status: {
              $ref: '#/components/schemas/ResponseStatusBadRequest',
            },
          },
        },
      },
    },
  },

  InternalServerError: {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
            status: {
              $ref: '#/components/schemas/ResponseStatusInternalServerError',
            },
          },
        },
      },
    },
  },

  NotFound: {
    description: 'Not Found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
            status: {
              $ref: '#/components/schemas/ResponseStatusNotFound',
            },
          },
        },
      },
    },
  },

  Unauthorized: {
    description: 'Unauthorized',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
            status: {
              $ref: '#/components/schemas/ResponseStatusUnauthorized',
            },
          },
        },
      },
    },
  },

  OK: {
    description: 'OK',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
            status: {
              $ref: '#/components/schemas/ResponseStatusOK',
            },
          },
        },
      },
    },
  },

  EmotionsSuccess: {
    description: 'Get Emotions success response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Get Emotions successfully!',
                },
                emotions: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Emotion',
                  },
                },
              },
            },

            status: {
              $ref: '#/components/schemas/ResponseStatusOK',
            },
          },
        },
      },
    },
  },

  UserEmotionsSuccess: {
    description: 'Get User Emotions success response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Get Emotions successfully!',
                },
                emotions: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Emotion',
                  },
                },
              },
            },

            status: {
              $ref: '#/components/schemas/ResponseStatusOK',
            },
          },
        },
      },
    },
  },

  UserEmotionCreatedSuccess: {
    description: 'User Emotion created success response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            content: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'User Emotion registered!',
                },
                emotions: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Emotion',
                  },
                },
              },
            },

            status: {
              $ref: '#/components/schemas/ResponseStatusOK',
            },
          },
        },
      },
    },
  },
}

export default responses
