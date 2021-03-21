import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 6:00 PM"
        comment="Nice Blog Post"
        imageSrc={faker.image.animals()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:43 PM"
        comment="Super Blog Post"
        imageSrc={faker.image.animals()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:15 PM"
        comment="Awesome Blog Post"
        imageSrc={faker.image.animals()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
