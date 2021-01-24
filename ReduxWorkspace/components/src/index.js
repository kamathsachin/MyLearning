import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 12:00 AM"
          blogComment="Nice blog post!"
          avatar={"https://source.unsplash.com/random"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:00 PM"
          blogComment="Awesome blog post!"
          avatar={"https://source.unsplash.com/random"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          timeAgo="Yesterday at 6:00 PM"
          blogComment="Super blog post!"
          avatar={"https://source.unsplash.com/random"}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
