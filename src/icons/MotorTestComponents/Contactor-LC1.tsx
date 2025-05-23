import ContactorLC1_icon from "../image/MotorTestComponents/Contactor-LC1.png"

export default function ContactorLC1({ height }: { height?: number }) {
  return (
    <img src={ContactorLC1_icon} alt="Contactor-LC1" title="Contacteur LC1" style={{
      height:height
    }} />
    // <svg
    //   height={height}
    //   version="1.1"
    //   id="Layer_1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox="0 0 512 512"
    //   xmlSpace="preserve"
    // >
    //   <img src={bat} alt="" />
    //   <g>
    //     <polygon
    //       style={{ fill: "#34485C" }}
    //       points="17.655,441.379 494.345,441.379 494.345,123.586 17.655,123.586 	"
    //     />
    //     <polygon
    //       style={{ fill: "#4897F7" }}
    //       points="70.621,88.276 123.586,88.276 123.586,35.31 70.621,35.31 	"
    //     />
    //     <polygon
    //       style={{ fill: "#576D7E" }}
    //       points="61.793,238.345 167.724,238.345 167.724,203.034 61.793,203.034 	"
    //     />
    //     <polygon
    //       style={{ fill: "#397ABC" }}
    //       points="150.073,123.586 44.142,123.586 61.798,88.276 132.418,88.276 	"
    //     />
    //     <polygon
    //       style={{ fill: "#C6421E" }}
    //       points="388.414,88.276 441.379,88.276 441.379,35.31 388.414,35.31 	"
    //     />
    //     <polygon
    //       style={{ fill: "#992C13" }}
    //       points="467.866,123.586 361.935,123.586 379.591,88.276 450.211,88.276 	"
    //     />
    //     <g>
    //       <polygon
    //         style={{ fill: "#576D7E" }}
    //         points="450.211,203.034 414.901,203.034 414.901,167.724 379.591,167.724 379.591,203.034 
    //        344.28,203.034 344.28,238.345 379.591,238.345 379.591,273.655 414.901,273.655 414.901,238.345 450.211,238.345 		"
    //       />
    //       <polygon
    //         style={{ fill: "#576D7E" }}
    //         points="0,476.69 512,476.69 512,441.379 0,441.379 		"
    //       />
    //       <path
    //         style={{ fill: "#576D7E" }}
    //         d="M176.556,44.138v79.448h35.31V79.475c0-4.89,3.964-8.854,8.854-8.854h70.568
    //        c4.89,0,8.854,3.964,8.854,8.854v44.111h35.31V44.138c0-4.873-3.955-8.828-8.828-8.828H185.384
    //        C180.511,35.31,176.556,39.265,176.556,44.138"
    //       />
    //     </g>
    //   </g>
    // </svg>
  );
}
