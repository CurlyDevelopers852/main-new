import React, { useState, useLayoutEffect, useRef, ReactElement } from 'react';
import anime from 'animejs';
import { Button, styled } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { SvgIconProps } from '@mui/material';

interface Position {
  left: number;
  top: number;
}

interface RunawayButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  endIcon?: ReactElement<SvgIconProps>;
  txt?: string;
}

const StyledButton = styled(Button)({
  position: 'absolute',
  transition: 'all 0.3s ease',
});

const RunawayButton: React.FC<RunawayButtonProps> = ({
  disabled = false,
  onClick,
  endIcon,
  txt,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });

  const handleMouseInteraction = (mouseEvent: React.MouseEvent) => {
    if (disabled) {
      const parent = buttonRef.current?.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();

        const mouseX = mouseEvent.clientX;
        const mouseY = mouseEvent.clientY;

        // Calculate the distances to each of the four corners from the mouse position
        const distances = [
          {
            x: parentRect.left,
            y: parentRect.top,
            d: Math.hypot(parentRect.left - mouseX, parentRect.top - mouseY),
          },
          {
            x: parentRect.right,
            y: parentRect.top,
            d: Math.hypot(parentRect.right - mouseX, parentRect.top - mouseY),
          },
          {
            x: parentRect.left,
            y: parentRect.bottom,
            d: Math.hypot(parentRect.left - mouseX, parentRect.bottom - mouseY),
          },
          {
            x: parentRect.right,
            y: parentRect.bottom,
            d: Math.hypot(parentRect.right - mouseX, parentRect.bottom - mouseY),
          },
        ];

        // Sort the distances in descending order
        distances.sort((a, b) => b.d - a.d);

        // Select the corner that is furthest from the mouse position
        const { x, y } = distances[0];

        // Ensure the button stays within the parent's boundaries
        let left = x - parentRect.left;
        let top = y - parentRect.top;
        if (top + buttonRect.height > parentRect.height)
          top = parentRect.height - buttonRect.height;
        if (left + buttonRect.width > parentRect.width) left = parentRect.width - buttonRect.width;

        const animePosition = {
          top,
          left,
        };

        anime({
          targets: animePosition,
          left,
          top,
          duration: 500,
          easing: 'easeOutQuad',
          round: 1,
          update: (anim) => {
            setPosition({
              left: anim.animations.find((a) => a.property === 'left').currentValue,
              top: anim.animations.find((a) => a.property === 'top').currentValue,
            });
          },
        }).play();
      }
    }
  };

  useLayoutEffect(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect();
      setPosition({ left: width / 2, top: height / 2 });
    }
  }, []);

  return (
    <StyledButton
      ref={buttonRef}
      style={position}
      variant="contained"
      onMouseOver={disabled ? (e) => handleMouseInteraction(e) : undefined}
      onClick={disabled ? undefined : onClick}
      endIcon={endIcon || <SendIcon />}
    >
      {txt}
    </StyledButton>
  );
};

export default RunawayButton;
