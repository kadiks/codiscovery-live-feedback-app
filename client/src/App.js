import { useState, useEffect } from "react";

import Card from "./components/feedback/Card";
import Form from "./components/feedback/Form";

// import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [dFeedbacks, setDFeedbacks] = useState([]);
  // selectedTab
  // // live | tutorial | article | form
  const [selectedTab, setSelectedTab] = useState("live");

  // when the component is displayed the first time
  // componentDidMount
  useEffect(() => {
    // code
    fetch("/api/feedbacks")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        setLoading(false);
        setFeedbacks(json.data);
        filterTab(json.data, selectedTab);
      });
  }, []);

  const onSubmitSuccess = (feedback) => {
    const newFeedbacks = [...feedbacks];
    newFeedbacks.push(feedback);

    setFeedbacks(newFeedbacks);
    filterTab(newFeedbacks, feedback.type);
  };

  const changeTab = (currentTab) => {
    // console.log("");
    filterTab(feedbacks, currentTab);
  };

  const filterTab = (feedbacks, tab) => {
    // console.log("feedbacks", feedbacks);
    // console.log("tab", tab);
    const currentFeedbacks = feedbacks.filter((f) => {
      return f.type === tab;
    });
    setSelectedTab(tab);
    setDFeedbacks(currentFeedbacks);
  };

  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a
            href="#"
            class="brand-logo"
            style={{
              paddingLeft: "1em",
            }}
          >
            Codiscovery Feedback
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {/* <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="container">
        <h1 className="App-title">Codiscovery Feedback</h1>
        <div className="row">
          <div className="col">
            <a
              className="waves-effect waves-light btn red pulse"
              onClick={() => changeTab("form")}
            >
              <i className="material-icons left">add</i>
              Nouveau
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <a
              className="waves-effect waves-light btn-large"
              onClick={() => changeTab("live")}
            >
              <i class="material-icons left">live_tv</i>Lives
            </a>
          </div>
          <div className="col s4">
            <a
              className="waves-effect waves-light btn-large"
              onClick={() => changeTab("tutorial")}
            >
              <i class="material-icons left">school</i>Tutoriels
            </a>
          </div>
          <div className="col s4">
            <a
              className="waves-effect waves-light btn-large"
              onClick={() => changeTab("article")}
            >
              <i class="material-icons left">library_books</i>Articles de blog
            </a>
          </div>
        </div>
        {isLoading && <p>Loading</p>}
        {!isLoading &&
          selectedTab !== "form" &&
          dFeedbacks.map((feedback) => {
            return <Card key={feedback._id} {...feedback} />;
          })}

        {selectedTab === "form" && <Form onSubmitSuccess={onSubmitSuccess} />}
      </div>
    </>
  );
};

export default App;
