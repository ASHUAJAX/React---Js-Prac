import React from 'react'

function DynamicForm() {
    const formProperties = {
        configs: {
          type: "object",
          properties: {
            clientId: {
              type: "string",
              title: "Client Id",
              description: "Client Id shared by JioPay toStatusResponse merchant",
              minLength: 1,
            },
            clientSecret: {
              type: "string",
              title: "Client Secret",
              description:
                "Client Secret shared by JioPay toStatusResponse merchant",
              minLength: 5,
            },
            pspMid: {
              type: "string",
              title: "Merchant Id",
              description: "Merchant Id shared by JioPay toStatusResponse merchant",
              minLength: 1,
            },
          },
        },
      };
  return (
    <div>DynamicForm</div>
  )
}

export default DynamicForm