import { useState, useEffect } from "react";

const RatingStars = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clicked, setClicked] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token")

  useEffect(() => {
    const getStarRating = async () => {
      try {
        const res = await fetch(`http://localhost:3000/Ratings/residence/${props.res_id}/my-star`, {
          headers: { "Authorization": `Bearer ${token}` }
        })

        if (res.status === 404) return // no rating yet, stay at default

        const data = await res.json()
        if (data.starCount) {
          setClicked(data.starCount - 1)
          setSubmitted(true)
        }
      } catch (error) {
        console.error("Error fetching star rating:", error)
      }
    }
    if (props.res_id) getStarRating()
  }, [props.res_id])

  const handleOnHover = (index) => {
    if (submitted && !isEditing) return;
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    if (submitted && !isEditing) return;
    setHoveredIndex(-1);
  };

  const handleOnClick = async (index) => {
    if (submitted && !isEditing) return;
    setClicked(index);
    setSubmitted(true);
    setIsEditing(false);

    try {
      await fetch(`http://localhost:3000/Ratings/star`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          res_id: props.res_id,
          starCount: index + 1,
        })
      })
    } catch (error) {
      console.error("Error submitting star rating:", error)
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setHoveredIndex(-1);
  };

  const handleDelete = async () => {
    try {
      // ✅ correct endpoint matching your router
      const rating = await fetch(`http://localhost:3000/Ratings/residence/${props.res_id}/my-star`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      const data = await rating.json()

      await fetch(`http://localhost:3000/Ratings/${data.id}/student/${JSON.parse(localStorage.getItem("student")).id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      })

      setClicked(-1);
      setSubmitted(false);
      setIsEditing(false);
    } catch (error) {
      console.error("Error deleting star rating:", error)
    }
  };

  const activeIndex = hoveredIndex !== -1 ? hoveredIndex : clicked;
  const getStarClass = (index) => index <= activeIndex ? "bi bi-star-fill" : "bi bi-star";

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-wrap gap-2"
        style={{
          fontSize: "2rem",
          cursor: submitted && !isEditing ? "not-allowed" : "pointer",
          padding: "10px 0",
          opacity: submitted && !isEditing ? 0.7 : 1,
        }}
        onMouseLeave={handleLeave}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <i
            key={i}
            className={getStarClass(i)}
            onMouseEnter={() => handleOnHover(i)}
            onClick={() => handleOnClick(i)}
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: i <= activeIndex ? "#1b2a41" : "gray",
            }}
          />
        ))}
      </div>

      {submitted && !isEditing && (
        <div className="d-flex justify-content-center gap-3 mt-1">
          <p style={{ color: "gray", fontSize: "0.9rem", margin: 0 }}>
            شكراً على تقييمك!
          </p>
          <i
            className="bi bi-pencil"
            style={{ cursor: "pointer", color: "#1b2a41", fontSize: "1rem" }}
            onClick={handleEdit}
          />
          <i
            className="bi bi-trash3"
            style={{ cursor: "pointer", color: "#1b2a41", fontSize: "1rem" }}
            onClick={handleDelete}
          />
        </div>
      )}

      {isEditing && (
        <p className="text-center" style={{ color: "gray", fontSize: "0.9rem" }}>
          اختر تقييماً جديداً
        </p>
      )}
    </>
  );
};

export default RatingStars;