import React from "react";
import "../../App.css";
import Footer from "../Footer";

function Feedback() {
  return (
    <div>
      <meta name="robots" content="noindex"></meta>
      <div class="spaceX2"></div>
      <h1>FeedBack</h1>
      <p>
        Tu peux envoyer ton feedback sur mes créations avec Microsoft forms ou
        Discord !
      </p>
      <div style={{ textAlign: "center" }}>
        <iframe
          width="1280px"
          height="720px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__dPjQm5URUxGVzQ4MVZKMUNLUEhXNU03OVJTUUc3SC4u&embed=true"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
          title="FeedBack form"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Feedback;
