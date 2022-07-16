import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import Score from "./Score";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration. He is the best among many."
       isPublished={true}
       minutesToRead={1} />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="He is just so excellent in his delivery. - Joshua Mwale"/>
      <Score scoreText="I give the oration a score of 9. - JM"/>
    </div>
  );
}

export default BlogPost;
