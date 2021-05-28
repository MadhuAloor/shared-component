import React from 'react';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  optionalMessage: string
};

export function Button({ text, optionalMessage='' }: ButtonProps) {
  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        {optionalMessage}
      </div>
    </div>
  );
}
