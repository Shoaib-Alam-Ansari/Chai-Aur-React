import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div style={{ height: "100vh", backgroundColor:color}}>
        <div className="bg-dark d-flex flex-wrap justify-content-center gap-4 py-4">
          <button type="button" className="btn btn-primary" onClick={() => setColor ("blue") }>
            Primary
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setColor ("#808080") }>
            Secondary
          </button>
          <button type="button" className="btn btn-success" onClick={() => setColor ("green") }>
            Success
          </button>
          <button type="button" className="btn btn-danger" onClick={() => setColor ("red") }>
            Danger
          </button>
          <button type="button" className="btn btn-warning" onClick={() => setColor ("yellow") }>
            Warning
          </button>
          <button type="button" className="btn btn-info" onClick={() => setColor ("cyan") }>
            Info
          </button>
          <button type="button" className="btn btn-light" onClick={() => setColor ("#fff") }>
            Light
          </button>

        </div>
      </div>
    </>
  );
}

export default BgChanger;
