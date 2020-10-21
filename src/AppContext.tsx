import React, { createContext, ReactNode, useState } from "react";

const initialState = { isEditing: false, setIsEditing: () => null, isEditingExperience: false, setIsEditingExperience: () => null };

const AppContext = createContext<{
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}>(initialState);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AppContext.Provider value={{ isEditing, setIsEditing}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
