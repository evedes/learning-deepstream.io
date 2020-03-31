import React, { useState } from "react";
import { DeepstreamClient } from "@deepstream/client";
import "./App.css";

const client = new DeepstreamClient("localhost:6020");
client.login();

const App = () => {
  const record = client.record.getRecord("firstName");
  record.subscribe("firstName", value => setValue(value));
  const [value, setValue] = useState("");

  console.log("state.value: ", value);
  console.log("record: ", client.record.getRecord("firstName"));

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
    record.set("firstName", value);
  };

  return (
    <div className="App">
      <div>
        <h1>deepstream.io</h1>
      </div>
      <div>
        <input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default App;
