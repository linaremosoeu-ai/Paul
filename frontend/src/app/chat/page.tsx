'use client'

import { Card } from '@/components/Card'
import { useState } from 'react'
import { SendIcon } from '@heroicons/react/24/outline'

interface Message {
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const suggestionQuestions = [
  'What is my current health score?',
  'Why did revenue drop last week?',
  'Which customers are at risk of churning?',
  'What are my top 3 recommendations?',
  'How is my business trending compared to last quarter?',
]

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Hi! I\'m your Umbrella AI assistant. Ask me anything about your business metrics, anomalies, or predictions.',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const assistantMessage: Message = {
        type: 'assistant',
        content: 'Based on your latest data, here are the insights... [This would be powered by the AI backend]',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="container py-8 h-screen flex flex-col">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">💬 Chat</h1>
        <p className="text-gray-600 mt-2">Ask questions about your business</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
        {/* Chat Messages */}
        <div className="lg:col-span-2 card p-6 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="input flex-1"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="btn btn-primary disabled:opacity-50"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="card p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Try asking...</h3>
          <div className="space-y-2">
            {suggestionQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => setInput(question)}
                className="w-full text-left text-sm p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
