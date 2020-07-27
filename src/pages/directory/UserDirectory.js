import React, { useEffect } from "react";

export default function UserDirectory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>User Directory</h1>
    </div>
  );
}
