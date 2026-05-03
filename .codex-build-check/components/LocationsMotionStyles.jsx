"use client";

export function LocationsMotionStyles() {
  return (
    <style jsx global>{`
      @keyframes locationsFadeUp {
        from {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes locationsFloat {
        0%,
        100% {
          transform: translate3d(0, 0, 0);
        }
        50% {
          transform: translate3d(0, -8px, 0);
        }
      }
    `}</style>
  );
}

