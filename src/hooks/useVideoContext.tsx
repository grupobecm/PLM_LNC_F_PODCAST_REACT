import { useContext } from "react";
import { VideoContext } from "../context/videoContext";


const useVideoContext = () => {
    const context = useContext(VideoContext);
    if(!context) {
        throw console.error('thre is not a context');
    }
    return context
}
 
export default useVideoContext;