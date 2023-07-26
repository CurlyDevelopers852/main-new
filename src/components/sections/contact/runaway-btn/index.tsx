import React, { useState, useEffect, useLayoutEffect, useRef, ReactElement } from 'react';
import anime from 'animejs';
import { Button, styled } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { SvgIconProps } from '@mui/material';


enum Direction {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

interface Position {
  left: number;
  top: number;
}

interface Size {
  width: number;
  height: number;
}

interface RunawayButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  endIcon?: ReactElement<SvgIconProps>;
  txt?: string;
}

const StyledButton = styled(Button)({
  position: 'absolute',
  transition: 'none',
});


const RunawayButton: React.FC<RunawayButtonProps> = ({ disabled = false, onClick, endIcon, txt }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });
  const [buttonSize, setButtonSize] = useState<Size>({ width: 0, height: 0 });

  const handleMouseInteraction = () => {
    if (disabled) {
      const parent = buttonRef.current?.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const spaceLeft = buttonRect.left - parentRect.left;
        const spaceRight = parentRect.right - buttonRect.right;
        const spaceTop = buttonRect.top - parentRect.top;
        const spaceBottom = parentRect.bottom - buttonRect.bottom;

        let left = position.left + (spaceRight < spaceLeft ? -60 : 60);
        let top = position.top + (spaceBottom < spaceTop ? -60 : 60);

        if (top < 0) top = 0;
        if (left < 0) left = 0;
        if (top + buttonRect.height > parentRect.height) top = parentRect.height - buttonRect.height;
        if (left + buttonRect.width > parentRect.width) left = parentRect.width - buttonRect.width;


        let animePosition = {
          top, left
        }

        anime({
          targets: animePosition,
          left,
          top,
          duration: 200,
          easing: 'easeOutCirc',
          round: 1,
          update: (anim) => {
            setPosition({
              left: anim.animations.find(a => a.property === 'left').currentValue,
              top: anim.animations.find(a => a.property === 'top').currentValue
            })
          },
        }).play();
      }
    }
  };

  useLayoutEffect(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect();
      setButtonSize({ width, height });
    }
  }, []);

  useEffect(() => {
    if (disabled) {
      handleMouseInteraction(); 
    }
  }, [buttonSize, disabled]);

  return (
    <StyledButton
      ref={buttonRef}
      style={position}
      variant="contained"
      onMouseOver={disabled ? handleMouseInteraction : undefined}
      onClick={disabled ? undefined : onClick}
      endIcon={endIcon || <SendIcon />} 
    >
      {txt}
    </StyledButton>
  );
};

export default RunawayButton;