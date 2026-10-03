"use client";

import userStore from "../../../stores/userStore";

export default function UserInformation() {
  const phoneNumber = userStore((state) => state.phoneNumber);
  const email = userStore((state) => state.email);

  const isPhone = Boolean(phoneNumber);
  const displayLabel = isPhone ? "Registered Phone Number" : "Registered Email";
  const displayValue = isPhone ? phoneNumber : email;

  return (
    <div className="user-info-card">
      <div className="user-info-content">
        <div className="user-info-icon">
          {isPhone ? (
            /* Phone Icon */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
          ) : (
            /* Mail Icon */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          )}
        </div>

        <div className="user-info-text">
          <h1 className="user-info-label">{displayLabel}</h1>
          <h2 className="user-info-value">{displayValue}</h2>
        </div>
      </div>
    </div>
  );
}