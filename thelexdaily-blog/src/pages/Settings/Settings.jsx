import React, { useEffect, useState } from "react";
import "./settings.scss";

import { db, auth } from "../../config/firebase";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

import { sendEmailVerification } from "firebase/auth";

const Settings = () => {

  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [visibility, setVisibility] = useState("Public");
  const [category, setCategory] = useState("");
  const [autoSave, setAutoSave] = useState(true);
  const [allowEdit, setAllowEdit] = useState(true);

  const [allowComments, setAllowComments] = useState(true);
  const [requireApproval, setRequireApproval] = useState(false);
  const [showCount, setShowCount] = useState(true);

  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [commentAlerts, setCommentAlerts] = useState(true);
  const [followerAlerts, setFollowerAlerts] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [hideOnline, setHideOnline] = useState(false);
  const [privateAcc, setPrivateAcc] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "system"
  );
  const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize") || "Medium"
  );

  const [twoFA, setTwoFA] = useState(false);

  const user = auth.currentUser;


  useEffect(() => {
    const loadData = async () => {
      if (!user) return;

      const ref = doc(db, "settings", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();

        setFullName(data.profile?.FullName || "");
        setLastName(data.profile?.LastName || "");
        setUsername(data.profile?.username || "");
        setEmail(data.profile?.email || "");
        setBio(data.profile?.bio || "");

        setVisibility(data.posts?.visibility || "Public");
        setCategory(data.posts?.category || "");
        setAutoSave(data.posts?.autoSave ?? true);
        setAllowEdit(data.posts?.allowEdit ?? true);

        setAllowComments(data.comments?.allowComments ?? true);
        setRequireApproval(data.comments?.requireApproval ?? false);
        setShowCount(data.comments?.showCount ?? true);

        setEmailNotif(data.notifications?.emailNotif ?? true);
        setPushNotif(data.notifications?.pushNotif ?? false);
        setCommentAlerts(data.notifications?.commentAlerts ?? true);
        setFollowerAlerts(data.notifications?.followerAlerts ?? false);

        setShowSearch(data.privacy?.showSearch ?? false);
        setHideOnline(data.privacy?.hideOnline ?? false);
        setPrivateAcc(data.privacy?.privateAcc ?? false);

        setTheme(data.appearance?.theme || "system");
        setFontSize(data.appearance?.fontSize || "Medium");

        setTwoFA(data.security?.twoFA ?? false);
      }
    };

    loadData();
  }, [user]);


  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      const isDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      isDark
        ? root.classList.add("dark")
        : root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);


  useEffect(() => {
    document.documentElement.style.fontSize =
      fontSize === "Small"
        ? "14px"
        : fontSize === "Large"
        ? "18px"
        : "16px";

    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  
  const handle2FAToggle = async () => {
    if (!user) return alert("Login first!");

    const freshUser = auth.currentUser;

    try {
      // If enabling 2FA → require email verification
      if (!twoFA) {
        if (!freshUser.emailVerified) {
          await sendEmailVerification(freshUser);
          alert("Verification email sent. Verify your email first, then enable 2FA.");
          return;
        }

        setTwoFA(true);
        alert("2FA enabled ✅");
      } else {
        setTwoFA(false);
        alert("2FA disabled ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update 2FA");
    }
  };


  
  const saveSettings = async () => {
    if (!user) return alert("Login first!");

    const data = {
     profile: { username, fullname, lastname, email, bio },
      posts: { visibility, category, autoSave, allowEdit },
      comments: { allowComments, requireApproval, showCount },
      notifications: {
        emailNotif,
        pushNotif,
        commentAlerts,
        followerAlerts,
      },
      privacy: { showSearch, hideOnline, privateAcc },
      appearance: { theme, fontSize },
      security: { twoFA },
    };

    await setDoc(doc(db, "settings", user.uid), data);
    alert("Settings saved ✅");
  };

  
  
  const deleteAccount = async () => {
    if (!user) return;

    await deleteDoc(doc(db, "settings", user.uid));
    alert("Account deleted ❌");
  };

  return ( 
    
    <div className="wrapper">


    <div className="container">
      
      <h1>⚙️ Blog Settings</h1>

      {/* PROFILE */}
      <div className="section">
        <h2>👤 Profile</h2>

        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Full Name" value={fullname} onChange={(e) => setFullName(e.target.value)} />
          <input placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>

      {/* POSTS */}
      <div className="section">
        <h2>📝 Posts</h2>

        <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
          <option>Public</option>
          <option>Private</option>
        </select>

        <input placeholder="Default Category" value={category} onChange={(e) => setCategory(e.target.value)} />

        <label>
          <input type="checkbox" checked={autoSave} onChange={() => setAutoSave(!autoSave)} />
          Auto Save
        </label>

        <label>
          <input type="checkbox" checked={allowEdit} onChange={() => setAllowEdit(!allowEdit)} />
          Allow Editing
        </label>
      </div>

      {/* COMMENTS */}
      <div className="section">
        <h2>💬 Comments</h2>

        <label>
          <input type="checkbox" checked={allowComments} onChange={() => setAllowComments(!allowComments)} />
          Allow Comments
        </label>

        <label>
          <input type="checkbox" checked={requireApproval} onChange={() => setRequireApproval(!requireApproval)} />
          Require Approval
        </label>

        <label>
          <input type="checkbox" checked={showCount} onChange={() => setShowCount(!showCount)} />
          Show Comment Count
        </label>
      </div>

      {/* NOTIFICATIONS */}
      <div className="section">
        <h2>🔔 Notifications</h2>

        <label><input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} /> Email</label>
        <label><input type="checkbox" checked={pushNotif} onChange={() => setPushNotif(!pushNotif)} /> Push</label>
        <label><input type="checkbox" checked={commentAlerts} onChange={() => setCommentAlerts(!commentAlerts)} /> Comments</label>
        <label><input type="checkbox" checked={followerAlerts} onChange={() => setFollowerAlerts(!followerAlerts)} /> Followers</label>
      </div>

      {/* PRIVACY */}
      <div className="section">
        <h2>🔒 Privacy</h2>

        <label><input type="checkbox" checked={showSearch} onChange={() => setShowSearch(!showSearch)} /> Show in search</label>
        <label><input type="checkbox" checked={hideOnline} onChange={() => setHideOnline(!hideOnline)} /> Hide online status</label>
        <label><input type="checkbox" checked={privateAcc} onChange={() => setPrivateAcc(!privateAcc)} /> Private account</label>
      </div>

      {/* APPEARANCE */}
      <div className="section">
        <h2>🎨 Appearance</h2>

        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      {/* SECURITY */}
      <div className="section">
        <h2>🔐 Security</h2>

        <label>
          <input type="checkbox" checked={twoFA} onChange={handle2FAToggle} />
          Enable 2FA
        </label>
      </div>

      {/* ACTIONS */}
      <button className="btn save" onClick={saveSettings}>
        Save Settings
      </button>

      <button className="btn danger" onClick={deleteAccount}>
        Delete Account
      </button>
    </div>
    </div>
  );
};

export default Settings;