import {RefObject, useEffect} from "react";

export function useEventObserver(handler: (event: any) => void, eventName: string, ref: RefObject<HTMLElement>) {
    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener(eventName, handler)
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener(eventName, handler);
            }
        }
    }, []);
}

export function useEventDispatcher(eventName: string, ref: RefObject<HTMLElement>) {

    return (data: any) => {
        if (ref.current) {
            ref.current.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                detail: data,
            }));
        }
    }
}
