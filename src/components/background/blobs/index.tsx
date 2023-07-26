import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import './index.scss';

interface RandCircles {
  cx: number;
  cy: number;
  r: number;
}

const BackGroundBlob = () => {
  const generateRandomCircles = useCallback((count: number): RandCircles[] => {
    return Array.from({ length: count }, () => ({
      cx: Math.floor(Math.random() * 101),
      cy: Math.floor(Math.random() * 101),
      r: Math.floor(Math.random() * 161) + 80,
    }));
  }, []);

  const randomCircles1: RandCircles[] = generateRandomCircles(8);
  const randomCircles2: RandCircles[] = generateRandomCircles(8);
  const randomCircles3: RandCircles[] = generateRandomCircles(8);

  const circlesRef1 = useRef<(SVGCircleElement | null)[]>([]);
  const circlesRef2 = useRef<(SVGCircleElement | null)[]>([]);
  const circlesRef3 = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    function animateCircles(circlesRef: React.RefObject<(SVGCircleElement | null)[]>, randomCircles: RandCircles[]) {
      if (circlesRef.current && circlesRef.current.length > 0) {
        return circlesRef.current.map((circle, index) => {
          return gsap.to(circle, {
            duration: Math.random() * 15 + 15,
            x: `${randomCircles[index].cx + Math.random() * 50 - 25}%`,
            y: `${randomCircles[index].cy + Math.random() * 50 - 25}%`,
            scale: Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        });
      }
    }

    animateCircles(circlesRef1, randomCircles1);
    animateCircles(circlesRef2, randomCircles2);
    animateCircles(circlesRef3, randomCircles3);
  }, [randomCircles1, randomCircles2, randomCircles3]);

  return (
    <svg className="blobCont">
      <defs>
        <filter id="gooey" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
        </filter>
      </defs>

      <image
        xlinkHref="https://img.freepik.com/premium-photo/top-view-abstract-paper-texture-background_225709-2718.jpg?w=2000"
        mask="url(#mask0)"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />

      <mask id="mask0" x="0" y="0">
        {[randomCircles1, randomCircles2, randomCircles3].map((randomCircles, i) => (
          <g style={{ filter: 'url(#gooey)' }} key={`group-${i}`}>
            {randomCircles.map((circle, index) => (
              <circle
                ref={(el) => {
                  if (i === 0) circlesRef1.current[index] = el;
                  if (i === 1) circlesRef2.current[index] = el;
                  if (i === 2) circlesRef3.current[index] = el;
                }}
                className="blob"
                key={`circle-${i}-${index}`}
                cx={`${circle.cx}%`}
                cy={`${circle.cy}%`}
                r={circle.r}
                fill={['#444', '#ccc', '#888'][i]}
                stroke={['#444', '#ccc', '#888'][i]}
              />
            ))}
          </g>
        ))}
      </mask>
    </svg>
  );
};

export default BackGroundBlob;