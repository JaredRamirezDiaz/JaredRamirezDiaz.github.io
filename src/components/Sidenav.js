import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyImage from "./MyImage";
import { FotoCV2, FotoCV } from "../assets";
import {
  openMobilSidebar,
  closeMobilSidebar,
} from "../store/actions/site.actions";
import { useSpring, a } from "react-spring";
import {
  AiOutlinePhone,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const isSidebarOpen = useSelector((state) => state.site.isSidebarOpen);
  const isMobilSidebarOpen = useSelector(
    (state) => state.site.isMobilSidebarOpen
  );
  const dispatch = useDispatch();

  const openMobilbar = () => {
    dispatch(openMobilSidebar());
  };
  const closeMobilbar = () => {
    dispatch(closeMobilSidebar());
  };

  const barWidth = useSpring({
    to: {
      width: isSidebarOpen ? 280 : 0,
    },
    // from: { width: 0 },
  });

  const mobilBarWidth = useSpring({
    to: {
      width: isMobilSidebarOpen ? 330 : 0,
    },
    // from: { width: 0 },
  });

  return (
    <>
      <a.div
        style={{
          ...barWidth,
          // width: isSidebarOpen ? "250px" : "200px",
          // display: isSidebarOpen ? "block" : "none",
          height: "100vh",
          borderRight: "solid #6599a5 1px",
        }}
        className="has-background-primary is-centered  is-justified is-hidden-mobile is-hidden-touch overflowless"
      >
        <div className="is-centered columns">
          <MyImage foto={FotoCV2} posicion="bottom" maxWidth="200px" />
        </div>
        <div
          className="panel "
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <aside class="menu has-text-right">
            <p class="menu-label">General</p>
            <ul class="menu-list is-info">
              <li>
                <a>
                  Dashboard
                  <AiFillHome className="ml-2 " />
                </a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a class="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p class="menu-label">Transactions</p>
            <ul class="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </div>
      </a.div>

      <a.div
        class=" is-fixed-top navbar has-background-primary is-hidden-desktop has-text-centered has-text-white overflowless"
        style={{
          ...mobilBarWidth,
          // width: isMobilSidebarOpen ? "75vw" : "0px",
          // display: isMobilSidebarOpen ? "block" : "none",
          height: "100vh",
        }}
        id="Sidenav"
      >
        <div
          className="panel mx-2"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <MyImage />
          <aside class="menu has-text-right">
            <p class="menu-label">General</p>
            <ul class="menu-list is-info">
              <li>
                <Link class="is-active" to="/prueba">
                  Dashboard
                  <AiFillHome className="ml-2 " />
                </Link>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a>Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p class="menu-label">Transactions</p>
            <ul class="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </div>
        <button
          className="btn"
          onClick={!isMobilSidebarOpen ? openMobilbar : closeMobilbar}
        >
          Hola
        </button>
      </a.div>
    </>
  );
};

export default Sidenav;
