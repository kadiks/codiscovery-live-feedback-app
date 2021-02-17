import { useState, useEffect } from "react";

import Card from "./components/feedback/Card";
import Form from "./components/feedback/Form";

import "./App.css";

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
    <div>
      <h1 className="App-title">Codiscovery Feedback</h1>
      <p className="App-flink" onClick={() => changeTab("form")}>
        Nouvelle suggestion
      </p>
      <div>
        <button onClick={() => changeTab("live")}>Lives</button>
        <button onClick={() => changeTab("tutorial")}>Tutoriels</button>
        <button onClick={() => changeTab("article")}>Articles de blog</button>
      </div>
      {isLoading && <p>Loading</p>}
      {!isLoading &&
        selectedTab !== "form" &&
        dFeedbacks.map((feedback) => {
          return <Card key={feedback._id} {...feedback} />;
        })}

      {selectedTab === "form" && <Form onSubmitSuccess={onSubmitSuccess} />}
    </div>
  );
};

export default App;
