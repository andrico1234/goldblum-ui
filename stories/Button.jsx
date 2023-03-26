import React from 'react';
import { Button as AntdButton } from 'antd'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return (
    <AntdButton
      {...props}
    >
      {label}
    </AntdButton>
  );
};

Button.defaultProps = {
  type: 'primary',
  size: 'default',
  disabled: false,
};
