import http from '@/lib/http'
import { LoginReqBody, LogoutReqBody, RegisterReqBody } from '@/types/requests/Users.requests'
import { LoginResponse } from '@/types/responses/loginResponse'
import { ResponseDataType } from '@/types/responses/responseDataType'

const authApiRequest = {
  sLogin: (body: LoginReqBody) => http.post<ResponseDataType<LoginResponse>>('/users/login', body),
  login: (body: LoginReqBody) =>
    http.post<ResponseDataType<LoginResponse>>('/api/auth/login', body, {
      baseUrl: ''
    }),
  sRegister: (body: Omit<RegisterReqBody, 'confirmPassword'>) => http.post<ResponseDataType>('/users/register', body),
  register: (body: Omit<RegisterReqBody, 'confirmPassword'>) =>
    http.post<ResponseDataType>('/api/auth/register', body, {
      baseUrl: ''
    }),
  sLogout: (body: LogoutReqBody) => http.post<ResponseDataType>('/users/logout', body),
  // Client gọi đến route handler, không cần truyền RT vào body vì RT tự động gửi thông qua cookie rồi
  logout: () => http.post<ResponseDataType>('/api/auth/logout', null, { baseUrl: '' })
}

export default authApiRequest
