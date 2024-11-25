'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'
import { CheckRoomReqBody } from '@/types/requests/Users.requests'
import { zodResolver } from '@hookform/resolvers/zod'
import { RoomBody } from '@/types/inputBodys/room.body'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useCheckRoomMutation } from '@/queries/useRoom'
import { handleErrorApi } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function JoinRoomform() {
  const [roomIdToJoin] = useState<string>('')
  const checkRoomMutation = useCheckRoomMutation()
  const router = useRouter()
  const form = useForm<CheckRoomReqBody>({
    resolver: zodResolver(RoomBody),
    defaultValues: {
      roomId: ''
    }
  })
  const onSubmit = async (data: CheckRoomReqBody) => {
    if (checkRoomMutation.isPending) return
    try {
      const result = await checkRoomMutation.mutateAsync(data)
      toast({
        title: 'Thành công',
        description: result.payload.message ?? 'Tham gia thành công',
        className: 'bg-green-500 text-white'
      })
      router.push('/room/' + data.roomId)
    } catch (error) {
      handleErrorApi({ error, setError: form.setError })
    }
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomIdToJoin).then(
      () => {
        toast({
          title: 'Thành công',
          description: 'Đã sao chép mã phòng họp thành công',
          className: 'bg-green-500 text-white'
        })
      },
      (error) => {
        toast({
          title: 'Lỗi',
          description: error ?? 'Sao chép mã phòng họp thất bại',
          variant: 'destructive'
        })
      }
    )
  }
  return (
    <Form {...form}>
      <form
        className="space-y-2 max-w-[420px] flex-shrink-0 w-full"
        noValidate
        onSubmit={form.handleSubmit(onSubmit, console.log)}
      >
        <div className="flex items-center gap-2 mb-2">
          <FormField
            control={form.control}
            name="roomId"
            render={({ field }) => (
              <FormItem className="w-full">
                <div>
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input id="link" placeholder="e.g., 0f561c16-9ab8-40e0" required {...field} />
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button
            type="button"
            size="sm"
            className="px-3 bg-gray-50 text-black hover:bg-gray-200"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
        <Button type="submit" className="py-5 font-bold">
          Tham gia
        </Button>
      </form>
    </Form>
  )
}
