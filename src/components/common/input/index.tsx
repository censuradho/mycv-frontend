import { Box, ButtonIcon, Icon, TextHelper } from "@/components/common";
import { IconProps } from "@/components/common/icon/types";
import { forwardRef, KeyboardEvent } from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    fullWidth,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    defaultValue,
    textHelper,
    mask,
    ...otherProps
  } = props;
  const hasError = !!errorMessage;

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Box gap={0.5}>
        <Styles.Label
          htmlFor={otherProps?.id || ""}
        >
          {label}
        </Styles.Label>
        {textHelper && <TextHelper content={textHelper} />}
      </Box>
    );
  };

  const renderErrorMessage = () => {
    if (!hasError) return null;

    return (
      <Styles.ErrorMessage color="error">{errorMessage}</Styles.ErrorMessage>

    );
  };

  const renderIcon = (icon: IconProps, callback?: () => void) => {
    if (callback) {
      return (
        <ButtonIcon
          type="button"
          label="icon"
          onClick={callback}
          icon={icon}
        />
      );
    }

    return (
      <Icon {...icon} />
    );
  };

  const renderLeftIcon = () => {
    if (!leftIcon) return null;

    return (
      <Styles.LeftIconView>
        {renderIcon(leftIcon, onLeftIconClick)}
      </Styles.LeftIconView>
    );
  };

  const renderRightIcon = () => {
    if (!rightIcon) return null;

    return (
      <Styles.RightIconView>
        {renderIcon(rightIcon, onRightIconClick)}
      </Styles.RightIconView>
    );
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!mask) return;
    return mask(event);
  };

  return (
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <Styles.IconView>
        {renderLeftIcon()}
        <Styles.Input
          {...otherProps}
          ref={ref}
          hasError={hasError}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          onKeyUp={handleKeyUp}
        />
        {renderRightIcon()}
      </Styles.IconView>
      {renderErrorMessage()}
    </Styles.Container>
  );
});
