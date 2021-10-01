import React, { Component } from "react";

export default class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <div className="d-flex justify-content-flex-start align-items-center" >
          <i className="fa fa-heart"></i>

          <span onClick={onToggleLiked} className="app-list-item-label">
            {label}
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" style={{ backgroundColor: "transparent" }} className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>

        </div>
      </div>
    );
  }
}
