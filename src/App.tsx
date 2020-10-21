import React, { useState, useContext } from "react";
import "./styles.css";
import Header from "./Header";
import Profile from "./Profile";
import ProfileEditor from "./ProfileEditor";
import { AppContext, AppProvider } from "./AppContext";
import Experience from "./Experience";
import ExperienceEditor from "./ExperienceEditor";

export default function AppContainer() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
function App() {
  const { isEditing, setIsEditing} = useContext(AppContext);
  const [nom, setNom] = useState("Déan");
  const [prenom, setPrenom] = useState("Ludovic");
  const [description, setDescription] = useState("Stagiaire au rectorat");
  const [entreprise, setEntreprise] = useState("ITGA");
  const [poste, setPoste] = useState("Technicien support informatique");
  const [poste_description, setPoste_description] = useState("Corrections en bases de données, débogage de webservices, mise en place de tâches planifiées etc.")
  return (
    <>
      <Header />
      {isEditing ? (
        <>
        <ProfileEditor prenom={prenom} nom={nom} description={description} />
        <ExperienceEditor entreprise={entreprise} poste={poste} poste_description={poste_description}/>
        </>
      ) : (
        <>
        <Profile prenom={prenom} nom={nom} description={description} />
        <Experience entreprise={entreprise} poste={poste} poste_description={poste_description}/>
        </>
      )}
      
      
    </>
  );
}
