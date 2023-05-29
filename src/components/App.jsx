import React from "react";
import Notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <>
      <Header />
      {Notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
