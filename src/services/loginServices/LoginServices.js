import instance from './loginInstance'
import ApiConfig from '@/config/apiConfig'

class LoginService {
  register(payload) {
    return instance.post(ApiConfig.register, payload)
  }
  login(payload) {
    return instance.post(ApiConfig.login, payload)
  }
  logout() {
    return instance.post(ApiConfig.logout)
  }
  forgetpassword(payload) {
    return instance.post(ApiConfig.logout , payload)
  }
  
  confirmPassword(payload) {
    return instance.post(ApiConfig.logout , payload)
  }
  varifyEmail(payload) {
    return instance.post(ApiConfig.updatePassword, payload)
  }
  resetpassword(payload) {
    return instance.post(ApiConfig.updatePassword, payload)
  }
}

export default new LoginService()
