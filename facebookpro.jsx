import { useState, useEffect } from "react";

const COLORS = {
  blue: "#1877F2", blueDark: "#145DB2", blueLight: "#E7F0FD",
  bg: "#F0F2F5", white: "#fff", text: "#050505",
  textSec: "#65676B", border: "#CED0D4",
  green: "#31A24C", red: "#E41E3F", hover: "#F2F2F2",
};

const S = {
  // Global
  page: { fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontSize: 15 },

  // Login
  loginWrap: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: COLORS.bg, padding: 20 },
  loginInner: { display: "flex", gap: 40, alignItems: "center", maxWidth: 980, width: "100%", flexWrap: "wrap" },
  loginLogo: { color: COLORS.blue, fontSize: 60, fontWeight: 700, letterSpacing: -2, marginBottom: 16 },
  loginTagline: { fontSize: 26, lineHeight: 1.4 },
  loginCard: { background: COLORS.white, borderRadius: 8, padding: 20, boxShadow: "0 2px 4px rgba(0,0,0,.1),0 8px 16px rgba(0,0,0,.1)", width: 360, flexShrink: 0 },
  input: { width: "100%", border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "14px 16px", fontSize: 17, marginBottom: 12, outline: "none", fontFamily: "inherit", boxSizing: "border-box" },
  btnBlue: { width: "100%", background: COLORS.blue, color: "#fff", border: "none", borderRadius: 6, padding: 14, fontSize: 20, fontWeight: 700, cursor: "pointer" },
  forgotLink: { display: "block", textAlign: "center", color: COLORS.blue, fontSize: 14, margin: "12px 0", textDecoration: "none" },
  divider: { border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "16px 0" },
  btnGreen: { display: "block", margin: "0 auto", background: COLORS.green, color: "#fff", border: "none", borderRadius: 6, padding: "14px 28px", fontSize: 17, fontWeight: 700, cursor: "pointer" },

  // Navbar
  navbar: { position: "sticky", top: 0, zIndex: 100, background: COLORS.white, boxShadow: "0 1px 2px rgba(0,0,0,.1)", height: 56, display: "flex", alignItems: "center", padding: "0 16px", gap: 8 },
  navLogo: { color: COLORS.blue, fontSize: 28, fontWeight: 900, letterSpacing: -1, textDecoration: "none", marginRight: 8 },
  navSearch: { background: COLORS.bg, border: "none", borderRadius: 20, padding: "8px 14px 8px 36px", fontSize: 15, width: 240, outline: "none" },
  navTabs: { display: "flex", gap: 4, flex: 1, justifyContent: "center" },
  navTab: (active) => ({ padding: "8px 28px", borderRadius: 8, border: "none", background: "transparent", cursor: "pointer", fontSize: 20, color: active ? COLORS.blue : COLORS.textSec, position: "relative", borderBottom: active ? `3px solid ${COLORS.blue}` : "3px solid transparent" }),
  navRight: { display: "flex", gap: 8, alignItems: "center" },
  navIconBtn: { width: 40, height: 40, borderRadius: "50%", background: COLORS.bg, border: "none", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  navAvatar: (color = COLORS.blue) => ({ width: 40, height: 40, borderRadius: "50%", background: color, color: "#fff", fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }),
  badge: { position: "absolute", top: 2, right: 2, background: COLORS.red, color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 10, padding: "1px 5px" },

  // Layout
  mainLayout: { display: "grid", gridTemplateColumns: "360px 1fr 360px", gap: 0, maxWidth: 1200, margin: "0 auto", padding: "16px 0", minHeight: "calc(100vh - 56px)" },

  // Sidebar
  leftSidebar: { padding: "0 8px" },
  sidebarUser: { display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8, cursor: "pointer", marginBottom: 4 },
  sidebarItem: { display: "flex", alignItems: "center", gap: 12, padding: 8, borderRadius: 8, cursor: "pointer", fontSize: 15, fontWeight: 500, marginBottom: 2 },
  sidebarIcon: { fontSize: 22, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: COLORS.bg },

  // Stories
  storiesRow: { display: "flex", gap: 8, marginBottom: 16, overflowX: "auto", paddingBottom: 4 },
  storyCard: { width: 112, height: 196, borderRadius: 12, overflow: "hidden", flexShrink: 0, position: "relative", cursor: "pointer", boxShadow: "0 1px 2px rgba(0,0,0,.1)" },
  storyName: { position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", color: "#fff", fontSize: 13, fontWeight: 600 },
  storyAvatar: { position: "absolute", top: 10, left: 10, width: 40, height: 40, borderRadius: "50%", border: `3px solid ${COLORS.blue}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 },

  // Composer
  composer: { background: COLORS.white, borderRadius: 8, padding: "12px 16px", boxShadow: "0 1px 2px rgba(0,0,0,.1)", marginBottom: 16 },
  composerInput: { flex: 1, background: COLORS.bg, border: "none", borderRadius: 20, padding: "10px 16px", fontSize: 16, cursor: "pointer", color: COLORS.textSec, outline: "none", fontFamily: "inherit" },
  composerBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: 8, borderRadius: 8, border: "none", background: "transparent", cursor: "pointer", fontSize: 14, fontWeight: 600, color: COLORS.textSec },

  // Post
  postCard: { background: COLORS.white, borderRadius: 8, boxShadow: "0 1px 2px rgba(0,0,0,.1)", marginBottom: 16, overflow: "hidden" },
  postAvatar: (color) => ({ width: 40, height: 40, borderRadius: "50%", background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }),
  postActionBtn: (liked) => ({ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: 10, borderRadius: 4, border: "none", background: "transparent", cursor: "pointer", fontSize: 15, fontWeight: 600, color: liked ? COLORS.blue : COLORS.textSec }),

  // Modal
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" },
  modal: { background: COLORS.white, borderRadius: 8, width: 500, maxWidth: "95vw", boxShadow: "0 4px 32px rgba(0,0,0,.2)", overflow: "hidden" },

  // Profile
  profileCover: { height: 350, background: "linear-gradient(135deg,#1877F2,#42A5F5)", position: "relative", borderRadius: "0 0 8px 8px" },
  profileAvatarBig: { width: 168, height: 168, borderRadius: "50%", background: COLORS.blue, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 60, border: "4px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,.2)", marginTop: -70 },
};

// ─── Data ────────────────────────────────────────────────────
const initialPosts = [
  { id: 1, author: "Rahim Uddin", initial: "R", color: "#9c27b0", time: "২ ঘণ্টা আগে", text: "আজকে ঢাকায় অনেক সুন্দর আবহাওয়া! বৃষ্টির পর রাস্তাঘাট ঠান্ডা হয়ে গেছে। সবাই কেমন আছো? 🌧️❤️", image: true, bg: "linear-gradient(135deg,#667eea,#764ba2)", likes: 47, shares: 5, liked: false, comments: [{ initial: "K", color: "#3f51b5", name: "Karim Hossain", text: "হ্যাঁ ভাই! আজকে অনেক ভালো লাগছে।" }, { initial: "N", color: "#e91e63", name: "Nila Akter", text: "❤️ সত্যিই সুন্দর!" }] },
  { id: 2, author: "Nila Akter", initial: "N", color: "#e91e63", time: "৫ ঘণ্টা আগে", text: "নতুন রেসিপি ট্রাই করলাম — চিকেন বিরিয়ানি! প্রথমবার বানিয়ে এত ভালো হবে ভাবিনি 🍛🎉", image: true, bg: "linear-gradient(135deg,#f093fb,#f5576c)", likes: 134, shares: 15, liked: false, comments: [{ initial: "S", color: COLORS.blue, name: "Siyam Ahmed", text: "রেসিপি শেয়ার করো প্লিজ!" }] },
  { id: 3, author: "Karim Hossain", initial: "K", color: "#3f51b5", time: "গতকাল", text: "ফুটবল ম্যাচ দেখলাম! বাংলাদেশ জিতছে! 🏆⚽ কী মজা ছিল!", image: false, bg: "", likes: 89, shares: 22, liked: false, comments: [{ initial: "R", color: "#9c27b0", name: "Rahim Uddin", text: "⚽ গোল গোল গোল!" }] },
];

const onlineFriends = [
  { name: "Karim Hossain", initial: "K", color: "#3f51b5" },
  { name: "Nila Akter", initial: "N", color: "#e91e63" },
  { name: "Tanha Begum", initial: "T", color: "#009688" },
  { name: "Abdul Rahman", initial: "A", color: "#ff5722" },
  { name: "Mitu Islam", initial: "M", color: "#795548" },
];

const storyColors = [
  "linear-gradient(180deg,#667eea,#764ba2)",
  "linear-gradient(180deg,#f093fb,#f5576c)",
  "linear-gradient(180deg,#4facfe,#00f2fe)",
  "linear-gradient(180deg,#43e97b,#38f9d7)",
];
const storyPeople = [
  { initial: "R", name: "Rahim", color: "#9c27b0" },
  { initial: "K", name: "Karim", color: "#3f51b5" },
  { initial: "N", name: "Nila", color: "#e91e63" },
  { initial: "T", name: "Tanha", color: "#009688" },
];

// ─── Components ──────────────────────────────────────────────

function Avatar({ initial, color = COLORS.blue, size = 40, fontSize = 16 }) {
  return (
    <div style={{ ...S.navAvatar(color), width: size, height: size, fontSize, flexShrink: 0 }}>
      {initial}
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("siyam@facebookpro.com");
  const [pass, setPass] = useState("password123");
  return (
    <div style={S.loginWrap}>
      <div style={S.loginInner}>
        <div style={{ flex: 1 }}>
          <div style={S.loginLogo}>facebook<span style={{ color: COLORS.blue }}>pro</span></div>
          <p style={S.loginTagline}>বন্ধুদের সাথে সংযুক্ত থাকো, মুহূর্তগুলো শেয়ার করো।</p>
        </div>
        <div style={S.loginCard}>
          <input style={S.input} type="email" placeholder="ইমেইল বা ফোন নম্বর" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && onLogin()} />
          <input style={S.input} type="password" placeholder="পাসওয়ার্ড" value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && onLogin()} />
          <button style={S.btnBlue} onClick={onLogin}>লগ ইন</button>
          <a href="#" style={S.forgotLink}>পাসওয়ার্ড ভুলে গেছো?</a>
          <hr style={S.divider} />
          <button style={S.btnGreen} onClick={() => alert("শীঘ্রই আসছে!")}>নতুন অ্যাকাউন্ট খোলো</button>
        </div>
      </div>
    </div>
  );
}

function Navbar({ view, setView, onLogout }) {
  const tabs = [
    { id: "feed", icon: "🏠", badge: null },
    { id: "friends", icon: "👥", badge: 3 },
    { id: "watch", icon: "📺", badge: null },
    { id: "market", icon: "🛒", badge: null },
    { id: "groups", icon: "👨‍👩‍👧‍👦", badge: null },
  ];
  return (
    <nav style={S.navbar}>
      <span style={{ ...S.navLogo, cursor: "pointer" }} onClick={() => setView("feed")}>fp</span>
      <input style={S.navSearch} placeholder="🔍 Facebook Pro খুঁজুন" />
      <div style={S.navTabs}>
        {tabs.map(t => (
          <button key={t.id} style={S.navTab(view === t.id)} onClick={() => setView(t.id)}>
            {t.icon}
            {t.badge && <span style={{ ...S.badge, fontSize: 10 }}>{t.badge}</span>}
          </button>
        ))}
      </div>
      <div style={S.navRight}>
        <button style={S.navIconBtn}>☰<span style={S.badge}>2</span></button>
        <button style={S.navIconBtn}>💬</button>
        <button style={S.navIconBtn}>🔔<span style={S.badge}>5</span></button>
        <Avatar initial="S" size={40} fontSize={16} style={{ cursor: "pointer" }} onClick={() => setView("profile")} />
        <div style={{ ...S.navAvatar(), cursor: "pointer" }} onClick={() => setView("profile")}>S</div>
        <button style={S.navIconBtn} onClick={onLogout} title="লগআউট">⏏</button>
      </div>
    </nav>
  );
}

function Stories() {
  return (
    <div style={S.storiesRow}>
      <div style={{ ...S.storyCard, background: COLORS.white, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: 12 }}>
        <div style={{ width: "100%", height: "65%", background: COLORS.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>📷</div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.blue, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, marginBottom: 6, marginTop: 8 }}>+</div>
        <span style={{ fontSize: 12, fontWeight: 600 }}>স্টোরি যোগ করো</span>
      </div>
      {storyPeople.map((s, i) => (
        <div key={s.name} style={{ ...S.storyCard, background: storyColors[i] }}>
          <div style={{ ...S.storyAvatar, background: s.color }}>{s.initial}</div>
          <div style={S.storyName}>{s.name}</div>
        </div>
      ))}
    </div>
  );
}

function Composer({ onOpen }) {
  return (
    <div style={S.composer}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
        <Avatar initial="S" size={40} fontSize={16} />
        <div style={{ ...S.composerInput, flex: 1, cursor: "pointer" }} onClick={onOpen}>
          কী ভাবছো, Siyam?
        </div>
      </div>
      <hr style={{ border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "4px 0 8px" }} />
      <div style={{ display: "flex", gap: 4 }}>
        <button style={S.composerBtn} onClick={onOpen}>📹 লাইভ ভিডিও</button>
        <button style={S.composerBtn} onClick={onOpen}>🖼️ ফটো/ভিডিও</button>
        <button style={S.composerBtn} onClick={onOpen}>😊 অনুভূতি</button>
      </div>
    </div>
  );
}

function PostCard({ post, onLike, onComment }) {
  const [commentText, setCommentText] = useState("");
  const handleComment = () => {
    if (!commentText.trim()) return;
    onComment(post.id, commentText.trim());
    setCommentText("");
  };
  return (
    <div style={S.postCard}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px 0" }}>
        <Avatar initial={post.initial} color={post.color} size={40} fontSize={15} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15 }}>{post.author}</div>
          <div style={{ fontSize: 13, color: COLORS.textSec }}>{post.time} · 🌍</div>
        </div>
        <button style={{ background: "none", border: "none", fontSize: 20, color: COLORS.textSec, cursor: "pointer", padding: "4px 8px" }}>⋯</button>
      </div>
      <div style={{ padding: "12px 16px", fontSize: 15, lineHeight: 1.5 }}>{post.text}</div>
      {post.image && (
        <div style={{ width: "100%", height: 280, background: post.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🖼️</div>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px", borderBottom: `1px solid ${COLORS.border}`, fontSize: 15, color: COLORS.textSec }}>
        <div style={{ display: "flex", gap: 2 }}>👍❤️😂 <span style={{ marginLeft: 4 }}>{post.likes}</span></div>
        <div>{post.comments.length} মন্তব্য · {post.shares} শেয়ার</div>
      </div>
      <div style={{ display: "flex" }}>
        <button style={S.postActionBtn(post.liked)} onClick={() => onLike(post.id)}>
          👍 {post.liked ? "পছন্দ করা হয়েছে" : "পছন্দ"}
        </button>
        <button style={S.postActionBtn(false)}>💬 মন্তব্য</button>
        <button style={S.postActionBtn(false)}>↗️ শেয়ার</button>
      </div>
      <div style={{ padding: "8px 16px 12px" }}>
        {post.comments.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <Avatar initial={c.initial} color={c.color} size={32} fontSize={12} />
            <div style={{ background: COLORS.bg, borderRadius: 18, padding: "8px 12px" }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{c.name}</div>
              <div style={{ fontSize: 14 }}>{c.text}</div>
            </div>
          </div>
        ))}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
          <Avatar initial="S" size={32} fontSize={12} />
          <input
            style={{ flex: 1, background: COLORS.bg, border: "none", borderRadius: 20, padding: "8px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}
            placeholder="মন্তব্য লেখো..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleComment()}
          />
        </div>
      </div>
    </div>
  );
}

function LeftSidebar({ setView }) {
  const items = [
    { icon: "👥", label: "বন্ধুরা" }, { icon: "📺", label: "Watch" },
    { icon: "🛒", label: "Marketplace" }, { icon: "👨‍👩‍👧‍👦", label: "গ্রুপ" },
    { icon: "🎮", label: "Gaming" }, { icon: "📅", label: "ইভেন্ট" },
  ];
  return (
    <div style={S.leftSidebar}>
      <div style={{ ...S.sidebarUser, cursor: "pointer" }} onClick={() => setView("profile")}>
        <Avatar initial="S" size={36} fontSize={14} />
        <span style={{ fontWeight: 600, fontSize: 15 }}>Siyam Ahmed</span>
      </div>
      {items.map(it => (
        <div key={it.label} style={S.sidebarItem}>
          <div style={S.sidebarIcon}>{it.icon}</div> {it.label}
        </div>
      ))}
      <div style={{ color: COLORS.textSec, fontSize: 15, fontWeight: 600, padding: 8, cursor: "pointer" }}>আরও দেখুন ▾</div>
      <hr style={{ border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "8px 0" }} />
      <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.textSec, padding: 8 }}>তোমার শর্টকাট</div>
      <div style={S.sidebarItem}><div style={S.sidebarIcon}>🎯</div> Siyam's Group</div>
      <div style={S.sidebarItem}><div style={S.sidebarIcon}>⚽</div> Football Fans BD</div>
      <hr style={{ border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "8px 0" }} />
      <div style={{ fontSize: 12, color: COLORS.textSec, padding: 8, lineHeight: 1.6 }}>
        গোপনীয়তা · শর্তাবলী · বিজ্ঞাপন · কুকি<br />Facebook Pro © 2025
      </div>
    </div>
  );
}

function RightSidebar() {
  const ads = [
    { icon: "🛍️", bg: "linear-gradient(135deg,#f093fb,#f5576c)", title: "Daraz BD সেল", url: "daraz.com.bd" },
    { icon: "🎓", bg: "linear-gradient(135deg,#11998e,#38ef7d)", title: "অনলাইনে শেখো", url: "10minuteschool.com" },
  ];
  return (
    <div style={{ padding: "0 8px" }}>
      <div style={{ fontSize: 17, fontWeight: 700, color: COLORS.textSec, marginBottom: 8 }}>স্পনসর করা</div>
      {ads.map(ad => (
        <div key={ad.title} style={{ background: COLORS.white, borderRadius: 8, padding: 12, boxShadow: "0 1px 2px rgba(0,0,0,.1)", marginBottom: 16 }}>
          <div style={{ width: "100%", height: 120, borderRadius: 6, background: ad.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 8 }}>{ad.icon}</div>
          <div style={{ fontWeight: 700 }}>{ad.title}</div>
          <div style={{ fontSize: 13, color: COLORS.textSec }}>{ad.url}</div>
        </div>
      ))}
      <hr style={{ border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "8px 0" }} />
      <div style={{ fontSize: 17, fontWeight: 700, color: COLORS.textSec, marginBottom: 8 }}>অনলাইনে আছে</div>
      {onlineFriends.map(f => (
        <div key={f.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 8px", borderRadius: 8, cursor: "pointer", marginBottom: 2 }}>
          <div style={{ position: "relative" }}>
            <Avatar initial={f.initial} color={f.color} size={36} fontSize={14} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, background: COLORS.green, borderRadius: "50%", border: "2px solid #fff" }} />
          </div>
          <span style={{ fontSize: 15, fontWeight: 500 }}>{f.name}</span>
        </div>
      ))}
    </div>
  );
}

function PostModal({ onClose, onSubmit }) {
  const [text, setText] = useState("");
  return (
    <div style={S.modalOverlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={S.modal}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>পোস্ট তৈরি করো</div>
          <button style={{ background: COLORS.bg, border: "none", width: 36, height: 36, borderRadius: "50%", fontSize: 20, cursor: "pointer" }} onClick={onClose}>✕</button>
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
            <Avatar initial="S" size={40} fontSize={16} />
            <div>
              <div style={{ fontWeight: 700 }}>Siyam Ahmed</div>
              <div style={{ fontSize: 13, background: COLORS.bg, padding: "2px 8px", borderRadius: 4, display: "inline-flex", gap: 4 }}>🌍 সবাই ▾</div>
            </div>
          </div>
          <textarea
            autoFocus
            style={{ width: "100%", border: "none", fontSize: 24, outline: "none", resize: "none", fontFamily: "inherit", color: COLORS.text, minHeight: 100 }}
            placeholder="কী ভাবছো, Siyam?"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div style={{ padding: 16, borderTop: `1px solid ${COLORS.border}`, display: "flex", gap: 8 }}>
          <div style={{ display: "flex", gap: 6, flex: 1, alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>যোগ করো:</span>
            {["🖼️", "🏷️", "😊", "📍"].map(ic => (
              <button key={ic} style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.bg, border: "none", fontSize: 18, cursor: "pointer" }}>{ic}</button>
            ))}
          </div>
          <button
            style={{ background: text.trim() ? COLORS.blue : COLORS.border, color: "#fff", border: "none", borderRadius: 6, padding: "8px 20px", fontSize: 15, fontWeight: 700, cursor: text.trim() ? "pointer" : "default" }}
            onClick={() => { if (text.trim()) { onSubmit(text); setText(""); } }}
          >পোস্ট করো</button>
        </div>
      </div>
    </div>
  );
}

function Newsfeed({ posts, onLike, onComment, onModalOpen }) {
  return (
    <div style={{ padding: "0 8px" }}>
      <Stories />
      <Composer onOpen={onModalOpen} />
      {posts.map(p => <PostCard key={p.id} post={p} onLike={onLike} onComment={onComment} />)}
    </div>
  );
}

function ProfilePage({ posts }) {
  const myPosts = posts.filter(p => p.author === "Siyam Ahmed");
  return (
    <div>
      <div style={S.profileCover}>
        <button style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,.5)", color: "#fff", border: "none", borderRadius: 6, padding: "8px 14px", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>📷 কভার ফটো পরিবর্তন করো</button>
      </div>
      <div style={{ background: COLORS.white, padding: "0 16px 16px", boxShadow: "0 1px 2px rgba(0,0,0,.1)", marginBottom: 16 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
              <div style={S.profileAvatarBig}>S</div>
              <div style={{ paddingBottom: 12 }}>
                <div style={{ fontSize: 28, fontWeight: 700 }}>Siyam Ahmed</div>
                <div style={{ color: COLORS.textSec, fontSize: 15 }}>৪৮৭ জন বন্ধু</div>
                <div style={{ display: "flex", marginTop: 4 }}>
                  {[["R","#9c27b0"],["K","#3f51b5"],["N","#e91e63"],["T","#009688"],["A","#ff5722"]].map(([i,c]) => (
                    <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2px solid #fff", marginRight: -8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>{i}</div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, paddingBottom: 12 }}>
              <button style={{ ...S.btnBlue, width: "auto", padding: "8px 16px", fontSize: 15 }}>➕ স্টোরি যোগ করো</button>
              <button style={{ background: COLORS.bg, color: COLORS.text, border: "none", borderRadius: 6, padding: "8px 16px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>✏️ প্রোফাইল সম্পাদনা</button>
            </div>
          </div>
          <hr style={{ border: "none", borderTop: `1px solid ${COLORS.border}`, margin: "8px 0" }} />
          <div style={{ display: "flex" }}>
            {["পোস্ট","সম্পর্কে","বন্ধুরা","ফটো","ভিডিও"].map((t, i) => (
              <button key={t} style={{ padding: "12px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: 15, fontWeight: 600, color: i === 0 ? COLORS.blue : COLORS.textSec, borderBottom: i === 0 ? `3px solid ${COLORS.blue}` : "3px solid transparent", borderRadius: 8 }}>{t}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 16, maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div>
          <div style={{ background: COLORS.white, borderRadius: 8, padding: 16, boxShadow: "0 1px 2px rgba(0,0,0,.1)", marginBottom: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>পরিচিতি</div>
            {[["🎓","BUET এ পড়াশোনা করেছেন"],["🏠","ঢাকা, বাংলাদেশ থেকে"],["📍","ঢাকায় বাস করেন"],["👥","৪৮৭ জন বন্ধু"]].map(([ic,txt]) => (
              <div key={txt} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontSize: 15, color: COLORS.textSec }}>
                <span style={{ fontSize: 20 }}>{ic}</span>{txt}
              </div>
            ))}
          </div>
          <div style={{ background: COLORS.white, borderRadius: 8, padding: 16, boxShadow: "0 1px 2px rgba(0,0,0,.1)" }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>ফটো</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
              {["linear-gradient(135deg,#667eea,#764ba2)","linear-gradient(135deg,#f093fb,#f5576c)","linear-gradient(135deg,#4facfe,#00f2fe)","linear-gradient(135deg,#43e97b,#38f9d7)","linear-gradient(135deg,#fa709a,#fee140)","linear-gradient(135deg,#a18cd1,#fbc2eb)"].map((bg, i) => (
                <div key={i} style={{ height: 100, background: bg, borderRadius: 4 }} />
              ))}
            </div>
          </div>
        </div>
        <div>
          {myPosts.length === 0
            ? <div style={{ textAlign: "center", padding: 40, color: COLORS.textSec }}>এখনো কোনো পোস্ট নেই।</div>
            : myPosts.map(p => <PostCard key={p.id} post={p} onLike={() => {}} onComment={() => {}} />)
          }
        </div>
      </div>
    </div>
  );
}

function PlaceholderView({ icon, title }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, color: COLORS.textSec }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontSize: 24, fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 15, marginTop: 8 }}>শীঘ্রই আসছে...</div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────
export default function FacebookPro() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState("feed");
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);

  const handleLike = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) } : p));
  };

  const handleComment = (id, text) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, comments: [...p.comments, { initial: "S", color: COLORS.blue, name: "Siyam Ahmed", text }] } : p));
  };

  const handlePost = (text) => {
    const newPost = { id: Date.now(), author: "Siyam Ahmed", initial: "S", color: COLORS.blue, time: "এইমাত্র", text, image: false, bg: "", likes: 0, shares: 0, liked: false, comments: [] };
    setPosts(prev => [newPost, ...prev]);
    setShowModal(false);
  };

  if (!loggedIn) return <div style={S.page}><LoginPage onLogin={() => setLoggedIn(true)} /></div>;

  const viewMap = {
    feed: <Newsfeed posts={posts} onLike={handleLike} onComment={handleComment} onModalOpen={() => setShowModal(true)} />,
    profile: <ProfilePage posts={posts} />,
    friends: <PlaceholderView icon="👥" title="বন্ধুরা" />,
    watch: <PlaceholderView icon="📺" title="Watch" />,
    market: <PlaceholderView icon="🛒" title="Marketplace" />,
    groups: <PlaceholderView icon="👨‍👩‍👧‍👦" title="গ্রুপ" />,
  };

  return (
    <div style={S.page}>
      <Navbar view={view} setView={setView} onLogout={() => setLoggedIn(false)} />
      {view === "feed" ? (
        <div style={S.mainLayout}>
          <LeftSidebar setView={setView} />
          {viewMap[view]}
          <RightSidebar />
        </div>
      ) : (
        viewMap[view] || viewMap["feed"]
      )}
      {showModal && <PostModal onClose={() => setShowModal(false)} onSubmit={handlePost} />}
    </div>
  );
}
