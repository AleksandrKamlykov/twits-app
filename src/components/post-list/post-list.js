import React from "react";
import { ListGroup } from "reactstrap";
import PostListItem from "../post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item" style={{ borderRadius: 8, boxShadow: "2px 2px 2px rgba(78, 78, 78, 0.596)", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list ">{elements}</ListGroup>;
};

export default PostList;
