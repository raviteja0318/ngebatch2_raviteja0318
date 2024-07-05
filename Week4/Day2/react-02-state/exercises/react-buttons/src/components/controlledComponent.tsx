import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState<string>("Guest");
  const handleInput = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onInput={(event) => handleInput(event)} />
      <p style={{ color: name }}>name is {name}</p>
    </div>
  );
}

export default ControlledComponent;
