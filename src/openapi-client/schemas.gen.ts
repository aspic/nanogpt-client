// This file is auto-generated by @hey-api/openapi-ts

export const ChatModelSchema = {
  type: 'string',
  enum: [
    'recommended-model',
    'gpt-4.5-preview',
    'o3-mini',
    'o3-mini-high',
    'o3-mini-low',
    'o1',
    'chatgpt-4o-latest',
    'gemini-2.0-pro-exp-02-05',
    'gemini-exp-1206',
    'model-selector',
    'sonar-deep-research',
    'qwq-32b',
    'kimi-k1.5-preview',
    'gemini-2.0-flash-thinking-exp-1219',
    'gemini-2.0-flash-exp',
    'gemini-2.0-flash-thinking-exp-01-21',
    'o1-preview',
    'deep-research',
    'gemini-2.0-flash-exp-search',
    'doubao-1.5-pro-256k',
    'gemini-2.0-flash-001',
    'gemini-2.0-flash-lite',
    'claude-3-7-sonnet-20250219',
    'claude-3-7-sonnet-thinking',
    'claude-3-5-sonnet-20241022',
    'deepseek-r1-nano',
    'aion-labs/aion-1.0-mini',
    'aion-labs/aion-1.0',
    'deepclaude',
    'deepseek-chat',
    'deepseek-r1-llama-70b',
    'minimax/minimax-01',
    'google/gemma-3-27b-it',
    'glm-zero-preview',
    'hunyuan-turbos-20250226',
    'step-2-16k-exp',
    'glm-4-plus-0111',
    'glm-4-air-0111',
    'step-2-mini',
    'doubao-1.5-pro-32k',
    'doubao-1.5-vision-pro-32k',
    'Qwen/QwQ-32B-Preview',
    'kimi-latest',
    'step-2-16k',
    'meta-llama/llama-3.3-70b-instruct',
    'dolphin-2.9.2-qwen2-72b',
    'nvidia/Llama-3.1-Nemotron-70B-Instruct-HF',
    'Sao10K/L3-8B-Stheno-v3.2',
    'claude-3-5-sonnet-20240620',
    'claude-3-5-haiku-20241022',
    'claude-3-opus-20240229',
    'yi-lightning',
    'amazon/nova-pro-v1',
    'gpt-4o-mini',
    'glm-4-plus',
    'learnlm-1.5-pro-experimental',
    'Meta-Llama-3-1-405B-Instruct-FP8',
    'nousresearch/hermes-3-llama-3.1-405b',
    'qwen-turbo',
    'qwen-max',
    'qwen-plus',
    'qwen-long',
    'Qwen/Qwen2.5-Coder-32B-Instruct',
    'phi-4-multimodal-instruct',
    'phi-4-mini-instruct',
    'amazon/nova-lite-v1',
    'amazon/nova-micro-v1',
    'yi-large',
    'yi-medium-200k',
    'Mistral-Nemo-12B-ArliAI-RPMax-v1.2',
    'Mistral-Nemo-12B-Wayfarer',
    'TheDrummer/Cydonia-24B-v2',
    'EVA-UNIT-01/EVA-LLaMA-3.33-70B-v0.0',
    'abacusai/Dracarys-72B-Instruct',
    'mistralai/mistral-large',
    'NeverSleep/Lumimaid-v0.2-70B',
    'deepseek-chat-cheaper',
    'inflection/inflection-3-pi',
    'inflection/inflection-3-productivity',
    'microsoft/wizardlm-2-8x22b',
    'raifle/sorcererlm-8x22b',
    'gpt-4o-2024-08-06',
    'gpt-4o-2024-11-20',
    'meta-llama/llama-3.2-90b-vision-instruct',
    'huihui-ai/Llama-3.3-70B-Instruct-abliterated',
    'sonar-pro',
    'sonar-reasoning-pro',
    'sonar-reasoning',
    'google/gemini-flash-1.5',
    'sonar',
    'Gryphe/MythoMax-L2-13b',
    'glm-4',
    'glm-4-long',
    'qwen/qwen-2.5-72b-instruct',
    'eva-unit-01/eva-qwen-2.5-72b',
    'yi-34b-chat-200k',
    'yi-34b-chat-0205',
    'yi-large-turbo',
    'gpt-4-turbo-preview',
    'gpt-4o',
    'gpt-3.5-turbo',
    'free-model',
    'anthracite-org/magnum-v4-72b',
    'EVA-UNIT-01/EVA-Qwen2.5-32B-v0.2',
    'thedrummer/skyfall-36b-v2',
    'GalrionSoftworks/MN-LooseCannon-12B-v1',
    'EVA-UNIT-01/EVA-Qwen2.5-72B-v0.2',
    'EVA-UNIT-01/EVA-LLaMA-3.33-70B-v0.1',
    'cognitivecomputations/dolphin-mixtral-8x22b',
    'thedrummer/anubis-pro-105b-v1',
    'meta-llama/llama-3.1-8b-instruct',
    'undi95/remm-slerp-l2-13b',
    'mistralai/mistral-tiny',
    'mistralai/mistral-saba',
    'mistralai/mistral-7b-instruct',
    'microsoft/wizardlm-2-7b',
    'deepseek-ai/DeepSeek-R1-Zero',
    'cohere/command-r',
    'cohere/command-r-plus-08-2024',
    'mlabonne/NeuralDaredevil-8B-abliterated',
    'failspy/Meta-Llama-3-70B-Instruct-abliterated-v3.5',
    'huihui-ai/Llama-3.1-Nemotron-70B-Instruct-HF-abliterated',
    'anthracite-org/magnum-v2-72b',
    'Steelskull/L3.3-Damascus-R1',
    'mistralai/Mistral-Nemo-Instruct-2407',
    'deepseek-reasoner',
    'Llama-3.3+3.1-70B-ArliAI-RPMax-v1.3',
    'Envoid/Llama-3.05-NT-Storybreaker-Ministral-70B',
    'Envoid/Llama-3.05-Nemotron-Tenyxchat-Storybreaker-70B',
    'inflatebot/MN-12B-Mag-Mell-R1',
    'Steelskull/L3.3-MS-Evayale-70B',
    'NeverSleep/Llama-3-Lumimaid-70B-v0.1',
    'Steelskull/L3.3-MS-Evalebis-70b',
    'TheDrummer/Anubis-70B-v1',
    'Qwen2.5-32B-EVA-v0.2',
    'Llama-3.3-70B-MiraiFanfare',
    'Qwen2.5-32B-Dazzling-Star-Aurora-32b-v0.0',
    'meta-llama/llama-3.2-3b-instruct',
    'Meta-Llama-3-1-8B-Instruct-FP8',
    'glm-4-airx',
    'glm-4-air',
    'glm-4-flash',
    'Sao10K/L3.1-70B-Hanami-x1',
    'TheDrummer/Rocinante-12B-v1.1',
    'Sao10K/L3.3-70B-Euryale-v2.3',
    'Sao10K/L3.1-70B-Euryale-v2.2',
    'Steelskull/L3.3-Cu-Mai-R1-70b',
    'TheDrummer/UnslopNemo-12B-v4.1',
    'MarinaraSpaghetti/NemoMix-Unleashed-12B',
    'VongolaChouko/Starcannon-Unleashed-12B-v1.0',
    'nothingiisreal/L3.1-70B-Celeste-V0.1-BF16',
    'Infermatic/MN-12B-Inferor-v0.0',
    'Nexusflow/Athene-V2-Chat',
    'huihui-ai/DeepSeek-R1-Distill-Qwen-32B-abliterated',
    'huihui-ai/DeepSeek-R1-Distill-Llama-70B-abliterated',
    'deepseek-reasoner-cheaper',
    'aion-labs/aion-rp-llama-3.1-8b',
    'azure-o1',
    'azure-o3-mini',
    'azure-gpt-4o',
    'azure-gpt-4o-mini',
    'azure-gpt-4-turbo',
    'jamba-large-1.6',
    'jamba-mini-1.6',
    'Llama-3.1-Tulu-3-405B',
    'deepseek-r1-sambanova',
    'r1-1776',
    'LatitudeGames/Wayfarer-Large-70B-Llama-3.3',
    'claude-3-7-sonnet-thinking:1024',
    'claude-3-7-sonnet-thinking:8192',
    'claude-3-7-sonnet-thinking:32768',
    'claude-3-7-sonnet-thinking:128000',
    'gpt-4o-reasoner',
    'gpt-4.5-preview-2025-02-27-reasoner',
    'gemini-2.0-pro-reasoner',
    'chatgpt-4o-latest-reasoner'
  ]
} as const

export const ImageModelSchema = {
  type: 'string',
  enum: [
    'recraft-v3',
    'flux-pro/v1.1',
    'imagen-3.0-generate-002',
    'flux-pro/v1.1-ultra',
    'ideogram-ai/ideogram-v2',
    'flux-lora',
    'flux-lightning',
    'flux/schnell',
    'stable-diffusion-v35-large',
    'ideogram-ai/ideogram-v2-turbo',
    'flux-realism',
    'dall-e-3',
    'dall-e-3-hd',
    'stable-diffusion-v35-large/turbo',
    'playground-v25',
    'proteus-v0.2',
    'promptchan',
    'sd3_base_medium.safetensors',
    'dreamshaper_8_93211.safetensors',
    'revAnimated_v122.safetensors',
    'fast-sdxl',
    'flux-pro',
    'longstories',
    'longstories-kids'
  ]
} as const

export const NegativePromptSchema = {
  type: 'string',
  required: false,
  description: 'Things to exclude in the generated image.'
} as const

export const MessageSchema = {
  type: 'object',
  properties: {
    role: {
      type: 'string',
      description: "The role of the message sender (e.g., 'user', 'assistant').",
      enum: ['user', 'assistant', 'system']
    },
    content: {
      type: 'string',
      description: 'The content of the message.'
    }
  }
} as const

export const DeltaSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      description: 'The content of the delta.'
    }
  }
} as const

export const PaymentSourceSchema = {
  type: 'string',
  enum: ['XNO']
} as const

export const CostSchema = {
  type: 'float',
  description: 'Cost for running the query.'
} as const

export const RemainingBalanceSchema = {
  type: 'float',
  description: 'Remaining balance in wallet.'
} as const

export const ObjectSchema = {
  type: 'string',
  enum: ['list', 'model']
} as const

export const CreatedSchema = {
  type: 'integer',
  description: 'Timestamp when the completion was created.'
} as const

export const NanoAddressSchema = {
  type: 'string',
  description: 'Nano address'
} as const
