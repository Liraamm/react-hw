import React from "react";
import { users } from "../users";
import SectionList from "./SectionList";

const Section = () => {
  return (
    <div>
      {users.map((item) => {
        return <SectionList key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Section;
