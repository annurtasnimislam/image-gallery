import classes from "./Header.module.css";

export default function Header({ count, handleDelete }) {
  return (
    <div className={classes.container}>
      {count === 0 && <h3>Gallery</h3>}
      {count > 0 && (
        <div className={classes.count}>
          <input type="checkbox" checked={true} />
          <h3>
            {count} {count === 1 ? "File" : "Files"} Selected
          </h3>
        </div>
      )}
      {count > 0 && (
        <p className={classes.delete} onClick={handleDelete}>
          Delete {count === 1 ? "File" : "Files"}
        </p>
      )}
    </div>
  );
}
