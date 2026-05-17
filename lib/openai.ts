import OpenAI from 'openai'

type CardPosition = 'upright' | 'reversed'

interface GenerateInterpretationRequest {
  cardId: string
  deckId: string
  spreadType: string
  position: CardPosition
  spreadPosition: number
  question: string
  guidebookMeaning: string
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const generateInterpretation = async (
  request: GenerateInterpretationRequest
): Promise<string> => {
  const {
    cardId,
    deckId,
    spreadType,
    position,
    spreadPosition,
    question,
    guidebookMeaning,
  } = request

  const positionText = position === 'upright' ? 'Upright' : 'Reversed'
  const spreadPositionContext = getSpreadPositionContext(spreadType, spreadPosition)

  const prompt = `You are an expert tarot reader providing insightful, mystical interpretations.

Context:
- Card ID: ${cardId}
- Deck: ${deckId}
- Card Position: ${positionText}
- Spread Type: ${spreadType}
- Position in Spread: ${spreadPositionContext}
- Question/Intent: ${question}

Cardbook Meaning:
${guidebookMeaning}

Provide a concise, mystical interpretation (2-3 sentences) that:
1. Acknowledges the guidebook meaning
2. Relates specifically to the user's question
3. Considers the card's position in the spread
4. Uses evocative, mystical language

Interpretation:`

  const response = await openai.responses.create({
    model: 'gpt-4.1-mini',
    max_output_tokens: 300,
    input: prompt,
  })

  const text = response.output_text?.trim()
  if (!text) {
    throw new Error('No text response from OpenAI')
  }

  return text
}

function getSpreadPositionContext(
  spreadType: string,
  position: number
): string {
  const contexts: Record<string, Record<number, string>> = {
    single: {
      1: 'The primary influence',
    },
    'three-card': {
      1: 'Past influences',
      2: 'Current situation',
      3: 'Future outcome',
    },
    'celtic-cross': {
      1: 'The situation',
      2: 'The challenge',
      3: 'Distant past',
      4: 'Recent past',
      5: 'Possible outcome',
      6: 'Near future',
      7: 'Self',
      8: 'Others and environment',
      9: 'Hopes and fears',
      10: 'Final outcome',
    },
  }

  return contexts[spreadType]?.[position] || `Position ${position}`
}
