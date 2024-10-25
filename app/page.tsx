import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'

export const maxDuration = 60

export default async function Page() {
  const id = generateId()
  
  return (
    <div>
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat id={id} />
      </AI>
    </div>
  )
}