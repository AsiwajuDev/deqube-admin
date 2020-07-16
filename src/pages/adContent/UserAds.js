import React from "react";
import Card from "../../components/card/Card";

const UserAds = () => {
  return (
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-9 gap-6 mt-5">
        <Card cardTitle="116,000" cardBody="Team" />
        <Card cardTitle="116,000" cardBody="Male" />
        <Card cardTitle="116,000" cardBody="Female" />
      </div>
    </div>
  );
};

export default UserAds;
