import React, { useEffect } from 'react'
import ChatHeader from './skeletons/ChatHeader'
import MessageInput from './skeletons/MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'
import { useChatStore } from '../store/useChatStore'

const ChatContainer = () => {
    const { messages , selectedUser, getMessages, isMessagesLoading } = useChatStore();


    useEffect(() => {
        getMessages(selectedUser._id)
    },[selectedUser._id, getMessages])

    if(isMessagesLoading) return (
      <div className='flex-1 flex flex-col overflow-auto'>
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    )


  return (
    <div className='flex-1 flex flex-col overflow-auto'>
        <ChatHeader />

        <p>messages...</p>

        <MessageInput />

    </div>
  )
}

export default ChatContainer