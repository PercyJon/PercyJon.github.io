import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'
import { contact, contactList, messageList, my } from './fackData'

const App = () => {
  const [msgList, setMsgList] = useState(messageList)

  return (
    <div
      style={{
        background: 'cadetblue',
        padding: '20px',
        display: 'flex',
      }}>
      {/* <ContactItem
    contact={contact}
    onClick={(contact) => console.log(contact)}
    border
  /> */}
      <ContactList
        contactList={contactList}
        style={{
          marginRight: 10,
          height: 500,
          borderRadius: 5,
        }}
      />
      <Chat
        contact={contact}
        me={my}
        chatList={msgList}
        onSend={(msg) => {
          console.log(JSON.stringify(msg))
          setMsgList([...msgList, msg])
        }}
        style={{
          width: 600,
          height: 500,
          borderRadius: 5,
        }}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
