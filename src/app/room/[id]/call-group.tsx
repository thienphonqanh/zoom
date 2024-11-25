'use client'

import { useStreamContext } from '@/components/stream-provider'
import { Call, StreamCall, StreamTheme, StreamVideo } from '@stream-io/video-react-sdk'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import LobbyPreview from '@/components/lobby-preview'
import MeetingRoom from '@/components/meeting-room'

export default function VideoCallGroup() {
  const { client } = useStreamContext()
  const [call, setCall] = useState<Call | null>(null)
  const callId = usePathname().split('/')[2]
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  // Tạo và tham gia call khi client đã được khởi tạo
  useEffect(() => {
    if (!client) return

    const myCall = client.call('default', callId as string)
    myCall.getOrCreate().catch((err) => {
      console.error('Lỗi khi tạo call: ', err)
    })

    myCall.camera.enable().catch((err) => {
      console.error('Lỗi khi bật camera: ', err)
    })

    myCall.microphone.enable().catch((err) => {
      console.error('Lỗi khi bật microphone: ', err)
    })

    setCall(myCall)

    return () => {
      if (call) {
        call.leave().catch((err) => {
          console.error('Lỗi khi rời khỏi: ', err)
        })
        setCall(null)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, callId])

  if (!client || !call) return null
  return (
    <StreamTheme>
      <StreamCall call={call}>
        <StreamVideo client={client}>
          {!isSetupComplete ? <LobbyPreview setIsSetupComplete={setIsSetupComplete} /> : <MeetingRoom />}
        </StreamVideo>
      </StreamCall>
    </StreamTheme>
  )
}
