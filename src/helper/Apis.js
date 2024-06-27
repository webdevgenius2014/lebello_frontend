import LoginServices from "@/services/loginServices/LoginServices";
import store from "@/store";

export const logout = async () => {
    try {
        store.dispatch('logout');
        console.log('enter logout')
    //   const res = await LoginServices.logout();
    //   if (res.status === 200 && res?.data?.success === true) {
    //         store.dispatch('logout');
    //     return ;
    //   } else if (res.status === 200 && res?.data?.success === false) {
    //     return ;
    //   }
    } catch (err) {
      console.log("logout err", err);
    }
  };