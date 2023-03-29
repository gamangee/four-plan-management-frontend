import { useEffect } from 'react';

export default function OutsideClick(ref, handler) {
  const listener = event => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    handler();
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);

  // ref   요소 내부를 클릭하면 handler 함수를 호출해서 모달을 닫기
}
