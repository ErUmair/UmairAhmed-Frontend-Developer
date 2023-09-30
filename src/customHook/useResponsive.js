import { useEffect, useState } from 'react';

export default function useResponsive() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to handle window resize events
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}
