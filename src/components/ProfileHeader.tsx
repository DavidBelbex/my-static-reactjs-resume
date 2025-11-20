import React, { JSX } from "react";

interface ContactLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

interface ProfileHeaderProps {
  name: string;
  imageUrl: string;
  contacts: ContactLink[];
}

export default function ProfileHeader({ name, imageUrl, contacts }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full border-2 border-blue-600" />
      </div>

      {/* Name */}  
        <div style={{ textAlign: "center", width: "100%" }}>
            <h1 style={{ margin: 0, fontSize: "32px" }}>{name}</h1>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 400 }}>Technical Lead</h2>
        </div>
      
      {/* Contact Links */}
      <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "right",
        }}>
        {contacts.map((c, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
            {c.icon}
            <a href={c.href} target="_blank" rel="noreferrer" className="underline">
              {c.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
