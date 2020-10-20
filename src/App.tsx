import React, { useState, useContext } from "react";
import "./styles.css";
import Header from "./Header";
import Profile from "./Profile";
import ProfileEditor from "./ProfileEditor";
import { AppContext, AppProvider } from "./AppContext";

export default function AppContainer() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
function App() {
  const { isEditing, setIsEditing } = useContext(AppContext);
  const [nom, setNom] = useState("Déan");
  const [prenom, setPrenom] = useState("Ludovic");
  const [description, setDescription] = useState("Stagiaire au rectorat");
  return (
    <>
      <Header />
      {isEditing ? (
        <ProfileEditor prenom={prenom} nom={nom} description={description} />
      ) : (
        <Profile prenom={prenom} nom={nom} description={description} />
      )}
    </>
  );
}
