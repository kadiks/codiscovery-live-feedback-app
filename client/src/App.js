import { useState, useEffect } from "react";

import Card from "./components/feedback/Card";
import Form from "./components/feedback/Form";

import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);

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
      });
  }, []);

  const onSubmitSuccess = (feedback) => {
    const newFeedbacks = [...feedbacks];
    newFeedbacks.push(feedback);

    setFeedbacks(newFeedbacks);
  };

  return (
    <div>
      <h1 className="App-title">Codiscovery Feedback</h1>
      {isLoading && <p>Loading</p>}
      {!isLoading &&
        feedbacks.map((feedback) => {
          return <Card key={feedback._id} {...feedback} />;
        })}

      <Form onSubmitSuccess={onSubmitSuccess} />
    </div>
  );
};

export default App;
