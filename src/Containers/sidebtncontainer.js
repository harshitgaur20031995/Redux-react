import React from "react";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Grid, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { sideBtnNormal, sideBtnRotate } from "../Redux";

function Sidebtncontainer({ sideBtnRotate, sideBtnNormal, rotate, view, cls }) {
  const sideBtnRotatefns = () => {
    view < 1 ? sideBtnRotate() : sideBtnNormal();
  };
  return (
    <>
      <Grid>
        <IconButton onClick={sideBtnRotatefns}>
          <MenuOpenRoundedIcon
            className={cls}
            color="error"
            style={{ transform: rotate, transition: `0.5s linear` }}
          />
        </IconButton>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    rotate: state.comps.rotate,
    view: state.comps.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sideBtnRotate: () => dispatch(sideBtnRotate()),
    sideBtnNormal: () => dispatch(sideBtnNormal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebtncontainer);
