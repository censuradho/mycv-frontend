import { useAuth } from "@/context/auth";
import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import { paths } from "@/constants/routes";
import { useToast } from "@/context";

// eslint-disable-next-line max-len
export const withAuthorization = <P extends object>(Component: ComponentType<P>) => function (props: P) {
  const { isLoading, isSigned } = useAuth();
  const { onNotify } = useToast()

  const router = useRouter();

  useEffect(() => {
    if (!isSigned && !isLoading) {
      onNotify({
        title: 'Atenção! 🚨',
        description: 'É preciso logar para acessar a aplicação'
      })
      router.push(paths.auth.signIn)
    };
  }, []);

  if (isLoading) return null;
  
  return <Component {...props} />;
}