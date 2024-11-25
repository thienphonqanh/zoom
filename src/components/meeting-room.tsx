'use client'

import { CallControls, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import { UsersRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function MeetingRoom() {
  const router = useRouter()
  const { useParticipants } = useCallStateHooks()
  const participants = useParticipants()
  return (
    <div>
      <SpeakerLayout participantsBarPosition="top" />
      <footer className="h-16 shadow-inner fixed bottom-0 w-full">
        <div className="grid grid-cols-12 items-center w-full px-28">
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <CallControls onLeave={() => router.push('/home')} />
          </div>
          <div className="col-span-2 w-full">
            <Sheet>
              <SheetTrigger>
                <div className="relative w-[max-content] cursor-pointer">
                  <UsersRound size={40} className="bg-[#19232d] p-2 rounded-full" />
                  <div className="bg-gray-500 text-white w-4 h-4 absolute top-0 right-0 rounded-full text-xs text-center -translate-y-1 translate-x-1">
                    {participants.length}
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Mọi người</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </footer>
    </div>
  )
}
