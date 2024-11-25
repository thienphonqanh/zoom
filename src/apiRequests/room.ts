import http from '@/lib/http'
import { CheckRoomReqBody } from '@/types/requests/Users.requests'
import { ResponseDataType } from '@/types/responses/responseDataType'

const roomApiRequest = {
  checkRoom: (body: CheckRoomReqBody) => http.post<ResponseDataType>('/users/check-room-id', body),
  getStreamToken: () => http.get<ResponseDataType>('/users/gen-stream-token')
}

export default roomApiRequest
