import { forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

import "react-datepicker/dist/react-datepicker.css";

import { DatePickerProps } from "./types";
import * as Styles from './styles'
import { format } from "@/lib/date-fns";

registerLocale('pt-BR', ptBR)

export const DatePicker= forwardRef<any, DatePickerProps>((props, ref) => {
  const {
    fullWidth,
    errorMessage,
    ...otherProps
  } = props


  const renderLabel = () => {
    if (!props?.label) return null;
    return (
      <Styles.Label
        htmlFor={otherProps?.id || ""}
      >
        {props?.label}
      </Styles.Label>
    );
  };


  return (
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <ReactDatePicker
        customInput={<input ref={ref} value={otherProps.value} />}
        {...otherProps}
        value={otherProps.value ? format(new Date(otherProps.value) , (otherProps?.dateFormat as string)  || 'dd/MM/yyyy') : ''}
        selected={otherProps.selected || otherProps?.value && new Date(otherProps?.value) || undefined}
        locale="pt-BR" 
      />
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
}) 