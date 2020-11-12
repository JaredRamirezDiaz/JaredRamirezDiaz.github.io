import React from "react";
import { HiBriefcase, HiOutlineLocationMarker } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import {
  AiOutlinePhone,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillHome,
} from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri";
import {
  openSidebar,
  closeSidebar,
  openMobilSidebar,
  closeMobilSidebar,
} from "../store/actions/site.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.site.isSidebarOpen);
  const isMobilSidebarOpen = useSelector(
    (state) => state.site.isMobilSidebarOpen
  );

  const dispatch = useDispatch();

  const closeBar = () => {
    dispatch(closeSidebar());
  };
  const openbar = () => {
    dispatch(openSidebar());
  };
  const openMobilbar = () => {
    dispatch(openMobilSidebar());
  };
  const closeMobilbar = () => {
    dispatch(closeMobilSidebar());
  };

  return (
    <>
      <div
        class="has-background-primary  has-text-info is-size-5  has-text-centered"
        style={{
          width: "30px",
          // paddingTop: "30vh",
          height: "100vh",
        }}
        id="sideBar"
      >
        <span
          className="is-size-4 is-hidden-mobile is-hidden-touch "
          style={{ cursor: "pointer" }}
          onClick={isSidebarOpen ? closeBar : openbar}
        >
          {isSidebarOpen ? "<" : ">"}
        </span>
        <span
          className="is-size-4 is-hidden-desktop "
          style={{ cursor: "pointer" }}
          onClick={isMobilSidebarOpen ? closeMobilbar : openMobilbar}
        >
          {isMobilSidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </span>
        <div
          className=""
          style={{
            // marginTop: "20vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            /* align-items: center; */
            height: "90%",
            paddingTop: "8vh",
            paddingBottom: "8vh",
          }}
        >
          <Link to="/" className="has-text-info">
            <AiFillHome
              className=""
              cursor="pointer"
              style={{ width: "30px", height: "20px", margin: "5px 0px" }}
            />
          </Link>
          <span>·</span>
          <HiBriefcase
            onClick={closeBar}
            className=""
            cursor="pointer"
            style={{ width: "30px", height: "20px", margin: "5px 0px" }}
          />
          <span>·</span>
          <GiGraduateCap
            onClick={closeBar}
            className=""
            cursor="pointer"
            style={{ width: "30px", height: "20px", margin: "5px 0px" }}
          />
          <span>·</span>
          <RiContactsBookFill
            onClick={closeBar}
            className=""
            cursor="pointer"
            style={{ width: "30px", height: "20px", margin: "5px 0px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
