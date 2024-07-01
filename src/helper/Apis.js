import LoginServices from "@/services/loginServices/LoginServices";
import store from "@/store";
import router from "@/router";

export const logout = async () => {
    const payload = store.getters.token;
    console.log(payload)
    try {
        store.dispatch('logout');
        router.push('/login')
        console.log('enter logout')
      const res = await LoginServices.logout(payload);
      if (res.status === 200) {
            store.dispatch('logout');
        return ;
      } else if (res.status === 200 ) {
        return ;
      }
    } catch (err) {
      console.log("logout err", err);
    }
  };