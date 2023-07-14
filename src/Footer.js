import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "20vh",
          width: "100%",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <div style={{ position: "absolute", left: "50%", top: "25%" }}>
          <div
            style={{
              width: "80px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <GitHubIcon style={{ fontSize: 30 }} />
            <LinkedInIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "47%", top: "50%" }}>
          <div>@Muhammad Bilal</div>
        </div>
        <div style={{ position: "absolute", left: "42%", top: "70%" }}>
          Icons used from Flaticon & Font Awesome
        </div>
      </div>
    </>
  );
};

export default Footer;
