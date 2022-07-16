import React from "react";

function BlogContent(props) {
  console.log(props);
  return <div>{props.articleText}</div>;
}

export default BlogContent;
