"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      setIsJoined(true);
    }
  };

  if (isJoined) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>채팅방</h1>
          <p>환영합니다, {nickname}님!</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>WebSocket 채팅</h1>
        <form onSubmit={handleJoinChat} className={styles.form}>
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            채팅방 입장
          </button>
        </form>
      </main>
    </div>
  );
}
