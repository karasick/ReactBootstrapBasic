import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(async () => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect()

        let options = {
            root: document
        }

        let observerCallback = function(entries, observer) {
            if(entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(observerCallback, options);
        observer.current.observe(ref.current)
    }, [isLoading])
}