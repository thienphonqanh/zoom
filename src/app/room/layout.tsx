import { StreamProvider } from '@/components/stream-provider'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen w-screen bg-[#202124] text-white">
      <StreamProvider>{children}</StreamProvider>
    </div>
  )
}
