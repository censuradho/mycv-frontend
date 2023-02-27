import { ToastMessage } from "@/components/common/toast/types";

export interface ToastContextProps {
  onNotify: (message: ToastMessage) => void
}