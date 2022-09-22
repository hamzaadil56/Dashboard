import React from "react";

import { persons } from "./data";

import AvatarGroup from "@mui/material/AvatarGroup";
import AvatarPopOver from "./AvatarPopOver";

export default function GroupAvatars() {
  return (
    <>
      <AvatarGroup max={4}>
        {/* <AvatarPopOver /> */}
        {persons.map((person) => (
          <AvatarPopOver key={person.id} person={person} />
        ))}
      </AvatarGroup>
    </>
  );
}
