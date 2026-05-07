const InputAndSubmet=(props)=>{
    return(
        <>
            <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder={props?.content}
         
        />
        <button
          className="btn"
          
          style={{
            width: "30px",
            height: "37px",
            borderRadius: "8px",
            backgroundColor: "#1b2a41",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
        
        </>
    )
}

export default InputAndSubmet;