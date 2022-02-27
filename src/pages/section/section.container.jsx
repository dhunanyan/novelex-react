import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsSectionLoaded } from "../../redux/sections/sections.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SectionPage from "./section.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsSectionLoaded(state),
});

const SectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SectionPage);

export default SectionPageContainer;
