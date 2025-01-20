import { createContext, useState } from "react";

interface videoContext {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
}

export const VideoContext = createContext<videoContext | undefined>(undefined);

export const VideoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <VideoContext.Provider value={{ isOpenMenu, handleToggleMenu }}>
      {children}
    </VideoContext.Provider>
  );
};
