import { useEffect, useState } from 'react';
import { useUi } from '../hooks/useUi.js';

const BAR_BASE_CLASSES =
  'fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden transition-opacity duration-300';
const BAR_FILL_CLASSES =
  'h-full bg-blue-500 animate-[loading-bar_1.2s_linear_infinite]';

export default function TopProgressBar() {
  const { loadingCount } = useUi();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(loadingCount > 0);
  }, [loadingCount]);

  return (
    <>
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <div
        className={`${BAR_BASE_CLASSES} ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className={BAR_FILL_CLASSES} />
      </div>
    </>
  );
}
