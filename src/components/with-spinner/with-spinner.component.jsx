import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
  // const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );

  return Spinner;
};

export default WithSpinner;

// <div>
// <Loader className="grey" grey={true}>
//   {spans.map((span) => (
//     <span key={span} />
//   ))}
// </Loader>
// <Loader grey={false}>
//   {spans.map((span) => (
//     <span key={span} />
//   ))}
// </Loader>
// </div>
