import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "20vh",
        width: "100%",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div
          style={{
            width: "80px",
            display: "flex",
            alignItems:"center",
            justifyContent: "space-around",
            marginBottom: "10px", // Spacing between icons and text
          }}
        >
          <GitHubIcon style={{ fontSize: 30 }} />
          <LinkedInIcon style={{ fontSize: 30 }} />
        </div>
        <div style={{ textAlign: "center" }}>
          @Muhammad Bilal
        </div>
        <div style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Icons used from Flaticon & Font Awesome
        </div>
      </div>
    </div>
  );
};

export default Footer;
