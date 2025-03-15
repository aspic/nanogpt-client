// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch'
import type {
  CreateChatCompletionData,
  CreateChatCompletionResponse,
  CreateChatCompletionError,
  GenerateImageData,
  GenerateImageResponse,
  GenerateImageError
} from './types.gen.js'
import { client as _heyApiClient } from './client.gen.js'

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>
}

/**
 * Create a chat completion
 * Generate a chat-based completion using the specified parameters.
 */
export const createChatCompletion = <ThrowOnError extends boolean = false>(
  options: Options<CreateChatCompletionData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    CreateChatCompletionResponse,
    CreateChatCompletionError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http'
      },
      {
        name: 'x-api-key',
        type: 'apiKey'
      }
    ],
    url: '/v1/chat/completions',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  })
}

/**
 * Generate an image
 * Create an image based on the provided prompt and parameters.
 */
export const generateImage = <ThrowOnError extends boolean = false>(
  options: Options<GenerateImageData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    GenerateImageResponse,
    GenerateImageError,
    ThrowOnError
  >({
    security: [
      {
        name: 'x-api-key',
        type: 'apiKey'
      }
    ],
    url: '/generate-image',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  })
}
