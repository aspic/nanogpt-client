export const chatSuccesful = {
  id: 'chatcmpl-1741987982317',
  object: 'chat.completion',
  created: 1741987982,
  model: 'ChatGPT 4o',
  choices: [
    {
      index: 0,
      message: { role: 'assistant', content: 'this is a test' },
      logprobs: null,
      finish_reason: 'stop'
    }
  ],
  usage: {
    prompt_tokens: 304,
    completion_tokens: 512,
    total_tokens: 816,
    prompt_tokens_details: {
      cached_tokens: 0,
      audio_tokens: 0
    },
    completion_tokens_details: {
      reasoning_tokens: 0,
      audio_tokens: 0,
      accepted_prediction_tokens: 0,
      rejected_prediction_tokens: 0
    },
    reasoning_tokens: 0,
    citation_tokens: 0,
    num_search_queries: 0
  },
  service_tier: 'default',
  system_fingerprint: 'fp_bezn5iwhg',
  nanoGPT: {
    cost: 0.013181514514108306,
    inputTokens: 304,
    outputTokens: 512,
    paymentSource: 'XNO'
  }
}
