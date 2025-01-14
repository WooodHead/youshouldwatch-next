"use client";
import Link from "next/link";

import { useContext } from "react";
import { FirebaseContext } from "../app/firebase-provider";
import styles from "./nav.module.css";

export function Nav() {
  const { user, list } = useContext(FirebaseContext);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" data-testid="home-link">
            <strong>Home</strong>{" "}
            {list && list.length > 0 && <span>({list.length})</span>}
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/add" role="button" data-testid="nav-add">
            + Add/Find
          </Link>
        </li>
        <li>
          {user && (
            <Link
              href="/signin"
              title={`Signed in as ${user.displayName || user.email || ""}`}
              data-testid="nav-signed-in"
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={user.photoURL || "/face.png"}
                alt={user.displayName || user.email || ""}
                className={styles.avatar}
                width="100"
                height="100"
              />
            </Link>
          )}

          {/* If `user` is null, it means we don't know yet. */}

          {user === false && (
            <Link href="/signin" role="button" data-testid="nav-auth">
              Sign up/in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
