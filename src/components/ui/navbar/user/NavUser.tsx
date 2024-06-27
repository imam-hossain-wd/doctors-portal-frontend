import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, User} from "@nextui-org/react";
import { UserTwitterCard } from "./TCard";


export default function NavUser() {
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        
        <User   
          as="button"
          name=""
          className="transition-transform"
          avatarProps={{
            src: "https://filestore.community.support.microsoft.com/api/images/0ce956b2-9787-4756-a580-299568810730?upload=true"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="px-4 py-2 mt-3 rounded-none">
        <UserTwitterCard />
      </PopoverContent>
    </Popover>
  );
}
