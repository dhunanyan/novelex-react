import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

// export const Loader = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) rotate(45deg);
//   width: 170px;
//   height: 170px;
//   border: 10px solid #262626;
//   display: flex;
//   align-items: space-between;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   border-radius: 20px;
//   animation: animateLoader 4s infinite;
//   animation-timing-function: ${({ grey }) =>
//     grey ? "ease-in-out" : "ease-out"};

//   &.grey {
//     border: 10px solid #747474;

//     span {
//       background: #747474;
//     }
//   }

//   span {
//     width: 50px;
//     height: 50px;
//     background: #262626;
//     animation: animateSpan 2s linear infinite;
//     margin: 0;
//     padding: 0;

//     &:nth-child(1) {
//       border-top-left-radius: 20%;
//     }

//     &:nth-child(3) {
//       animation-delay: 0.8s;
//       border-top-right-radius: 20%;
//     }

//     &:nth-child(2),
//     &:nth-child(6) {
//       animation-delay: 0.6s;
//     }

//     &:nth-child(1),
//     &:nth-child(5),
//     &:nth-child(9) {
//       animation-delay: 0.4s;
//     }

//     &:nth-child(4),
//     &:nth-child(8) {
//       animation-delay: 0.2s;
//     }

//     &:nth-child(7) {
//       animation-delay: 0s;
//       border-bottom-left-radius: 20%;
//     }

//     &:nth-child(9) {
//       border-bottom-right-radius: 20%;
//     }
//   }

//   @keyframes animateSpan {
//     0% {
//       transform: scale(1);
//     }
//     30% {
//       transform: scale(0);
//     }
//     50% {
//       transform: scale(0);
//     }
//     75% {
//       transform: scale(1);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }

//   @keyframes animateLoader {
//     0% {
//     }

//     0.0001% {
//       transform: translate(-50%, -50%) rotate(45deg);
//     }

//     55% {
//       transform: translate(-50%, -50%) rotate(225deg);
//     }

//     100% {
//       transform: translate(-50%, -50%) rotate(405deg);
//     }
//   }
// `;
