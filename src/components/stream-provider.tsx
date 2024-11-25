'use client'

import envConfig from '@/config'
import { getAccessTokenFromLocalStorage, getDecodedToken } from '@/lib/utils'
import { useGetStreamToken } from '@/queries/useRoom'
import { StreamVideoClient } from '@stream-io/video-react-sdk'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface StreamContextInterface {
  client: StreamVideoClient | null
}

export const StreamContext = createContext<StreamContextInterface | null>(null)

export const StreamProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<StreamVideoClient | null>(null)
  const { user_id, user_name } = getDecodedToken(getAccessTokenFromLocalStorage() as string)
  const user = { id: user_id, name: user_name }

  const { data, isLoading, error } = useGetStreamToken()

  useEffect(() => {
    if (isLoading || error || !data) return

    const clientInstance = new StreamVideoClient({
      apiKey: envConfig.NEXT_PUBLIC_STREAM_API_KEY,
      user,
      tokenProvider: async () => data.payload.data as string // Provide token from API
    })

    setClient(clientInstance)

    // Xóa client khi component bị unmount
    return () => {
      clientInstance.disconnectUser()
      setClient(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <StreamContext.Provider value={{ client }}>{children}</StreamContext.Provider>
}

export const useStreamContext = (): StreamContextInterface => {
  const context = useContext(StreamContext)
  if (!context) {
    throw new Error('useStreamContext phải được sử dụng bên trong StreamProvider')
  }
  return context
}
