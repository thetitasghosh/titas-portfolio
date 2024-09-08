import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="size-14 overflow-hidden rounded-xl">
      <Image
        src={
          "https://gxvexicguxtddkwzyser.supabase.co/storage/v1/object/sign/Titas%20Projects/Profile/me.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUaXRhcyBQcm9qZWN0cy9Qcm9maWxlL21lLmpwZyIsImlhdCI6MTcyNTc3NDk3OSwiZXhwIjoxNzU3MzEwOTc5fQ.ucgfxHqDltN55aXDmZD38oTgdSCr2lpK6Xvrdwd-BzM&t=2024-09-08T05%3A54%3A42.283Z"
        }
        alt="Titas Ghosh | An Tech Explorer "
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Profile;
