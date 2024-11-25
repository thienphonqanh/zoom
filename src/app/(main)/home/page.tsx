import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import JoinRoomform from './join-form'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="container w-full h-full flex items-center">
        <div className="grid grid-cols-12 w-full h-full items-center">
          <div className="col-span-2"></div>
          <div className="col-span-3 flex flex-wrap w-4/5 ml-auto">
            <div className="flex flex-col items-center w-1/2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex flex-col items-center">
                    <button
                      className="bg-orange-500 p-6 rounded-3xl hover:bg-orange-600 transition duration-150"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-10 h-10">
                        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                      </svg>
                    </button>
                    <span className="text-sm mt-3 mb-12 cursor-pointer">Tạo cuộc họp</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="-translate-y-1/2" side="bottom" align="center">
                  <DropdownMenuItem>
                    <button className="px-2">Tạo cuộc họp tức thì</button>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button className="px-2">Tạo mã để dùng sau</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-col items-center">
                    <button className="bg-blue-500 p-6 rounded-3xl hover:bg-blue-600 transition duration-150">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#3b82f6"
                        className="w-10 h-10 bg-white rounded-md p-1"
                      >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                    </button>
                    <span className="text-sm mt-3 mb-12 cursor-pointer">Tham gia</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Tham gia phòng</DialogTitle>
                    <DialogDescription>
                      Hãy nhập mã phòng mà bạn muốn tham gia vào ô phía dưới để tham gia phòng họp.
                    </DialogDescription>
                  </DialogHeader>
                  <JoinRoomform />
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <button className="bg-blue-500 p-6 rounded-3xl hover:bg-blue-600 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-10 h-10">
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-sm mt-3 mb-12">Lịch trình</span>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <button className="bg-blue-500 p-6 rounded-3xl hover:bg-blue-600 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-10 h-10">
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-sm mt-3 mb-12">Chia sẻ màn hình</span>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3 border-2 border-gray-100 rounded-lg h-2/3"></div>
        </div>
      </div>
    </div>
  )
}
