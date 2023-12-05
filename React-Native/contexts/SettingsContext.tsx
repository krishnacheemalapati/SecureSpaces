import React, {createContext, ReactNode, useState} from 'react';

type ContextProps = {
  children: ReactNode;
};

// Default Values
export const defaultValues = {
  isProximityNotif: true,
  toggleProximity: (): void => {
    //
  },
  isAlarmMute: false,
  toggleMute: (): void => {
    //
  },
};

// Wallet Context
export const SettingsContext = createContext(defaultValues);

/**
 * @function SettingsProvider
 * @description WalletContext with walletList
 * @returns Wallet Providera
 */
export const SettingsProvider = ({children}: ContextProps) => {
  const [isProximityNotif, setIsProximityNotif] = useState<boolean>(true);
  const [isAlarmMute, setIisAlarmMute] = useState<boolean>(false);

  const toggleProximity = () => {
    setIsProximityNotif(prev => !prev);
  };
  const toggleMute = () => {
    setIisAlarmMute(prev => !prev);
  };

  return (
    // Wallet Provider
    <SettingsContext.Provider
      value={{isProximityNotif, toggleProximity, isAlarmMute, toggleMute}}>
      {children}
    </SettingsContext.Provider>
  );
};
