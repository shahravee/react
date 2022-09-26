import React from "react";
const style = {
  card: {
    border: "2px solid rgba(255,0,0,0.7)",
    padding: "10px",
    width: "250px",
    borderRadius: "20px",
    margin: "10px",
  },
  headerText: {
    color: "Black",
    fontSize: "bolder",
    fontSize: "30px",
  },
  content: {
    color: "red",
  },

  para: {
    color: "black",
    fontSize: "16px",
    fontFamily: "san-serif",
    padding: "10px",
  },
  imgStyle: {
    width: "100%",
    height: "auto",
  },
  immageWrapper: {
    width: "100%",
  },
};

function Cards() {
  return (
    <div style={style.card}>
      <p style={style.headerText}> Ravi resturants</p>
      <hr />
      <p style={style.content}>Momos</p>
      <hr />
      <p style={style.para}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <hr />
      <div style={style.immageWrapper}>
        <img
          src="https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg"
          style={style.imgStyle}
        />
      </div>
    </div>
  );
}
export default Cards;
