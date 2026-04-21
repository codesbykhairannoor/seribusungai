import { useState, useEffect } from "react";

const LIMIT = 10;
const STORAGE_KEY = "kalutuk_ai_limit";

export function useChatLimit() {
  const [count, setCount] = useState(0);
  const [isLimited, setIsLimited] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const { count: savedCount, date } = JSON.parse(saved);
      const today = new Date().toDateString();
      
      if (date === today) {
        setCount(savedCount);
        setIsLimited(savedCount >= LIMIT);
      } else {
        // Reset for a new day
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }));
      }
    }
  }, []);

  const incrementLimit = () => {
    const newCount = count + 1;
    const today = new Date().toDateString();
    
    setCount(newCount);
    setIsLimited(newCount >= LIMIT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: newCount, date: today }));
    
    return newCount <= LIMIT;
  };

  return { count, isLimited, incrementLimit, limit: LIMIT };
}
