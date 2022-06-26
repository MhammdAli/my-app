import * as React from 'react';
import {isTrivialHref} from 'utilities/helper'
//////////////////////////// TYPESCRIPT TYPES //////////////////////
export type ButtonType = 'button' | 'reset' | 'submit';
 
export interface AriaButtonProps {
    type?: ButtonType | undefined;
    disabled: boolean | undefined;
    role?: 'button';
    tabIndex?: number | undefined;
    href?: string | undefined;
    target?: string | undefined;
    rel?: string | undefined;
    'aria-disabled'?: true | undefined;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
}

export interface AnchorOptions {
    href?: string;
    rel?: string;
    target?: string;
}

export interface UseButtonPropsOptions extends AnchorOptions {
    type?: ButtonType;
    disabled?: boolean;
    onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
    tabIndex?: number;
    tagName?: keyof JSX.IntrinsicElements;
}  

export interface ButtonProps extends BaseButtonProps,React.ComponentPropsWithoutRef<'button'> {}

export interface BaseButtonProps {
  as?: keyof JSX.IntrinsicElements | undefined;
  disabled?: boolean | undefined;
  href?: string | undefined; 
  target?: string | undefined; 
  rel?: string | undefined;
}

///////////////////////////////////////////////////////////////
 

export function useButtonProps({tagName,disabled,href,target,rel,onClick,tabIndex = 0,type}: UseButtonPropsOptions)
:[AriaButtonProps, React.ElementType] {
   
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }
 
  
  if (tagName === 'button') {
    return [{ type: (type as any) || 'button', disabled }, tagName as React.ElementType];
  }

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
   
    if (disabled || (tagName === 'a' && isTrivialHref(href))) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href ||= '#';
    if (disabled) {
      href = undefined;
    }
  }

  return [
    {
      role: 'button',
      disabled: undefined,
      tabIndex: disabled ? undefined : tabIndex,
      href,
      target: tagName === 'a' ? target : undefined,
      'aria-disabled': !disabled ? undefined : disabled,
      rel: tagName === 'a' ? rel : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
    },
    tagName as React.ElementType,
  ];
}




// BaseButton Component
const BaseButton = React.forwardRef<HTMLElement, ButtonProps>(({ as: asProp, ...props }, ref) => {

    const [buttonProps, Component] = useButtonProps({tagName: asProp,...props});
 
    return <Component {...props} {...buttonProps} ref={ref} />;

  }
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;