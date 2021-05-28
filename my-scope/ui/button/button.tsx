import React from 'react';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  message: string
};

export function Button({ text, message='' }: ButtonProps) {
  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}
