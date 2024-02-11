import { useEffect, useState } from "react"

export const useClickOutside = (ref) => {
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setIsClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);

    return isClicked;

    
}

