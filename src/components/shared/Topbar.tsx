import { signOutAccount } from "@/lib/appwrite/api";
import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex fap-2 items-centre">
          <img
            src="/assets/images/logo.svy"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <button
            variant="ghost"
            className="shad-button"
            onClick={signOutAccount()}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
