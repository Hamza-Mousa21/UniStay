import { useEffect, useState } from "react";
import InputAndSubmet from "./inputAndSubmit.jsx";
import CommentSection from "./commentSection.jsx";
import IssueSection from "./issueSection.jsx";

const InputField = (props) => {
  const [data, setData] = useState([]);

  const handleDeleteComment = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/Ratings/${id}/comment`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.log("Error");
        throw new Error("Failed to delete comment");
      }

      setData((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleDeleteIssue = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/Ratings/${id}/issue`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.log("Error");
        throw new Error("Failed to delete issue");
      }

      setData((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/Ratings");
      const data = await res.json();
      setData(data);
    };

    getData();
  }, []);

  return (
    <>
      <div className="container-fluid px-2 px-md-3 px-lg-4">
        <ul className="list-unstyled w-100">

          {data.map((comm, i) => (
            <div
              key={i}
              className="mb-3"
            >
              {props.tab === "comments" && comm.comment !== null && (
                <div className="w-100">
                  <CommentSection
                    data={comm}
                    i={i}
                    setData={setData}
                  />
                </div>
              )}

              {props.tab === "issues" && comm.issues !== null && (
                <div className="w-100">
                  <IssueSection
                    data={comm}
                    i={i}
                    setData={setData}
                  />
                </div>
              )}
            </div>
          ))}

        </ul>

        <div className="w-100 mt-3">
          <InputAndSubmet
            content={props.content}
            tab={props.tab}
            data={data}
            setData={setData}
          />
        </div>
      </div>

      {/* Responsive Fix */}
      <style>
        {`
          @media (max-width: 992px) {
            .container-fluid {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
          }

          @media (max-width: 576px) {
            .container-fluid {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }

            ul.list-unstyled {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default InputField;



{/* <ul className="list-unstyled">
        {data.map((c, i) => (
          <div
            key={i}
            className="mb-2 p-2 rounded d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#faf7f7", color: "#1b2a41" }}
          >
            {editingIndex === i ? (
              <div className="d-flex gap-2 flex-grow-1 me-2">
                <input
                  className="form-control form-control-sm"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveEdit(i)
                    if (e.key === "Escape") setEditingIndex(null)
                  }}
                  autoFocus
                />
                <button
                  className="btn btn-sm"
                  style={{ backgroundColor: "#1b2a41", color: "white", whiteSpace: "nowrap" }}
                  onClick={() => handleSaveEdit(i)}
                >
                  Save
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => setEditingIndex(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <li style={{ listStyle: "none" }}>{c.comment}</li>
            )}

            {editingIndex !== i && (
              <div style={{ position: "relative" }}>
                <i
                  className="bi bi-three-dots-vertical"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCommentSettings(i)}
                />
                {commentSetting === i && (
                  <div
                    style={{
                      width: "90px",
                      height: "auto",
                      backgroundColor: "#1b2a41",
                      color: "lightgray",
                      position: "absolute",
                      right: "0",
                      zIndex: 10,
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="d-flex p-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleUpdate(i)}
                    >
                      <i className="bi bi-pencil" />
                      <span>Update</span>
                    </div>

                    <div
                      className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(i)}
                    >
                      <i className="bi bi-trash3" />
                      <span>Delete</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </ul> */}