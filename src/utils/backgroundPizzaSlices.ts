export const PIZZA_SLICES_TOP_BG = [
  { top: "20%", left: "5%", size: "200px", rotate: "0deg" },
  {
    top: "40%",
    left: "20%",
    size: "160px",
    rotate: "10deg",
    rotateY: "180deg",
  },
  { top: "-10px", left: "35%", size: "170px", rotate: "-30deg" },
  { top: "53%", left: "30%", size: "150px", rotate: "-10deg" },
  {
    top: "15%",
    left: "49%",
    size: "135px",
    rotate: "30deg",
    rotateY: "180deg",
  },
  { top: "-100px", left: "55%", size: "255px", rotate: "-40deg" },
  { top: "18%", left: "73%", size: "165px", rotate: "10deg" },
  {
    top: "0%",
    left: "90%",
    size: "125px",
    rotate: "5deg",
    rotateY: "180deg",
  },
  {
    top: "55%",
    left: "80%",
    size: "155px",
    rotate: "-75deg",
  },
  {
    top: "57%",
    left: "60%",
    size: "155px",
    rotate: "25deg",
    rotateY: "180deg",
  },
];
export const PIZZA_SLICES_TOP_BG_MOBILE = [
  { top: "10%", left: "-30px", size: "200px", rotate: "0deg" },
  {
    top: "40%",
    left: "20%",
    size: "160px",
    rotate: "10deg",
    rotateY: "180deg",
  },
  { top: "61%", left: "-10px", size: "150px", rotate: "-10deg" },
  {
    top: "10%",
    left: "49%",
    size: "135px",
    rotate: "30deg",
    rotateY: "180deg",
  },
  { top: "-100px", left: "25%", size: "255px", rotate: "-40deg" },
  { top: "32%", left: "65%", size: "135px", rotate: "-20deg" },
  {
    top: "67%",
    left: "60%",
    size: "155px",
    rotate: "25deg",
    rotateY: "180deg",
  },
];
export const PIZZA_SLICES_FOOTER = [
  { top: "10%", left: "5%", size: "140px", rotate: "15deg" },
  { top: "35%", left: "80%", size: "160px", rotate: "-45deg" },
  { top: "50%", left: "15%", size: "150px", rotate: "180deg" },
  { top: "45%", left: "45%", size: "135px", rotate: "90deg" },
  { top: "2%", left: "75%", size: "155px", rotate: "120deg" },
  { top: "15%", left: "60%", size: "145px", rotate: "-20deg" },
  { top: "0%", left: "35%", size: "165px", rotate: "-105deg" },
];

export type PizzaSlicesType = {
  top: string;
  left: string;
  size: string;
  rotate: string;
  rotateY?: string;
};
