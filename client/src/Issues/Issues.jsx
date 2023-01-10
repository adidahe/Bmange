import React, { useState, useEffect } from "react";
import "./Issues.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import IssuesCard from "../components/IssuesCard/IssuesCard";
import AddIssue from "../components/AddIssue/AddIssue";
import AddIssuePopUp from "../components/AddIssuePopUp/AddIssuePopUp";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Axios from "axios";

const Issues = () => {
  const [issueList, setIssueList] = useState([]);
  const [AddIssueOpen, setAddIssueOpen] = useState(false);
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  let isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;
  const getIssues = () => {
    Axios.get("https://buildingmanage-gh8w.vercel.app/getIssues").then(
      (response) => {
        setIssueList(response.data);
      }
    );
  };
  useEffect(() => {
    Axios.get("https://buildingmanage-gh8w.vercel.app/getIssues").then(
      (response) => {
        setIssueList(response.data);
      }
    );
  }, [issueList]);

  const addIssue = (category, desc, date) => {
    Axios.post("https://buildingmanage-gh8w.vercel.app/addIssue", {
      category: category,
      desc: desc,
      date: date,
    }).then(() => {
      getIssues();
    });
  };
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Issues"} desc={"AllIssues"} />
      <RightSide />

      <div className="addIssue">
        <button
          onClick={() => {
            setAddIssueOpen(true);
          }}
        >
          <LibraryAddOutlinedIcon />
        </button>
      </div>

      <div className="IssuesCard-content">
        <div className="AllIssues">
          {issueList.map((data, id) => {
            return (
              <IssuesCard
                key={id}
                category={data.category}
                desc={data.desc}
                date={data.date}
              />
            );
          })}
        </div>

        {!isMobile && (
          <AddIssue addIssuehandler={addIssue} setOpenModal={setAddIssueOpen} />
        )}
      </div>

      {AddIssueOpen && (
        <AddIssuePopUp
          addIssuehandler={addIssue}
          setOpenModal={setAddIssueOpen}
          //onClick={onAddNewVoteHandle}
        />
      )}
    </div>
  );
};

export default Issues;
