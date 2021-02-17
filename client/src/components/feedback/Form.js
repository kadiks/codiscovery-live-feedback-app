import { useState } from "react";

const Form = ({ onSubmitSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const types = [
    {
      value: "",
      htmlText: "",
    },
    {
      value: "live",
      htmlText: "Live",
    },
    {
      value: "tutorial",
      htmlText: "Tutoriel",
    },
    {
      value: "article",
      htmlText: "Article de blog",
    },
  ];

  const onChangeTitle = ({ target }) => {
    setTitle(target.value);
  };
  const onChangeDescription = ({ target }) => {
    setDescription(target.value);
  };
  const onChangeType = ({ target }) => {
    console.log("target", target.value);
    setType(target.value);
  };

  const onSubmitForm = async (e) => {
    console.log("#onSubmitForm");
    e.preventDefault();

    // fetch(url, options)
    // // options
    // // // method default="GET" (POST|GET\DELETE|PUT)
    const res = await fetch("/api/feedbacks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        type,
      }),
    });
    const json = await res.json();
    onSubmitSuccess(json.data);
    setTitle("");
    setDescription("");
    setType("");
  };

  return (
    <div>
      <h4>Formulaire</h4>
      <form onSubmit={onSubmitForm}>
        <div className="Form-group">
          <label htmlFor="form-title">Titre</label>
          <input
            id="form-title"
            onChange={onChangeTitle}
            type="text"
            className="Form-title"
            value={title}
          />
        </div>
        <div>
          <select onChange={onChangeType}>
            {types.map(({ value, htmlText }) => {
              const isSelected = value === type ? true : false;
              return (
                <option value={value} selected={isSelected}>
                  {htmlText}
                </option>
              );
            })}
            {/* <option value=""></option>
            <option value="live">Live</option>
            <option value="tutorial">Tutoriel</option>
            <option value="article">Article de blog</option> */}
          </select>
          <div>
            <textarea onChange={onChangeDescription} value={description} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
