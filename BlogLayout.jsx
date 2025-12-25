import React, { useState } from "react";

function BlogLayout() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div style={styles.container}>
      <h1>My Blog</h1>

      <div style={styles.blogPost}>
        <h2>React Blog Post</h2>
        <p>
          This is a simple responsive blog layout. Users can add comments and
          see them update instantly.
        </p>
      </div>

      <div style={styles.commentBox}>
        <h3>Add Comment</h3>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
          style={styles.input}
        />
        <button onClick={addComment} style={styles.button}>
          Post
        </button>
      </div>

      <div>
        <h3>Comments</h3>
        {comments.length === 0 && <p>No comments yet</p>}
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial"
  },
  blogPost: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "5px"
  },
  commentBox: {
    marginTop: "20px"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px"
  },
  button: {
    padding: "8px 15px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default BlogLayout;
