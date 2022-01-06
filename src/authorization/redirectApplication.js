import { toast } from "react-toastify";

const onappRedirect=()=>{
    if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
        window.location.href = 'https://play.google.com/store/apps/details?id=com.app.dipiciousnew';
    }
    else if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
        window.location.href = 'https://apps.apple.com/app/capsigo/id1547746310';
    }else {
      toast.warn('Download Application for full user Experience',{position:'top-center'})
    }
}
export default onappRedirect