import React from "react";
import Swal from "sweetalert2";

// rafce
const Header = () => {
  const HandleButton = () => {
    Swal.fire({
      icon: "warning",
      title: "Peraturan",
      text: "Anda harus menebak kata dengan benar!",
      confirmButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Informasi",
          text: "Terdapat 45 kata baku yang diacak",
          confirmButtonColor: "#2563EB",
        });
      }
    });
  };

  return (
    <>
      <h1>React Hangman Games</h1>
      <p>Find the hidden word!</p>
      <button onClick={HandleButton}>Rules</button>
    </>
  );
};

export default Header;
