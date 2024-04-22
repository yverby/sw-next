import { isValidElement, Children } from 'react';

export const SwitchCase = ({
  children,
}: React.PropsWithChildren<{
  condition?: boolean;
}>) => <>{children}</>;

export const Switch = ({ children }: React.PropsWithChildren) => {
  let matchCase: React.ReactNode | null = null;
  let defaultCase: React.ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === SwitchCase) {
      if ('condition' in child.props) {
        if (Boolean(child.props.condition)) {
          matchCase = child;
        }
      } else {
        defaultCase = child;
      }
    }
  });

  return matchCase ?? defaultCase ?? null;
};
