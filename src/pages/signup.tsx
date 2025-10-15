// src/pages/signup.tsx
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5C1zQUdt0u5mirx8l9sUpgWD52FY8CBg",
  authDomain: "hackathon-2025-22929.firebaseapp.com",
  projectId: "hackathon-2025-22929",
  storageBucket: "hackathon-2025-22929.firebasestorage.app",
  messagingSenderId: "642929167073",
  appId: "1:642929167073:web:98eb9923c4197c14d6c5a0",
  measurementId: "G-J1H57CEC8H",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Problem Statements
export const PROBLEM_STATEMENTS = [
  { id: "ps1", title: "Smart Classroom & Timetable Scheduler" },
  { id: "ps2", title: "Digital Notice Board TPGIT" },
  { id: "ps3", title: "COPO Attainment Software" },
];

// Type for team member
type Member = {
  name: string;
  regNo: string;
  year: string;
  dept: string;
};

const SignupPage = () => {
  // Main user info
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  // Team members
  const [teamMembers, setTeamMembers] = useState<Member[]>([
    { name: "", regNo: "", year: "", dept: "" },
    { name: "", regNo: "", year: "", dept: "" },
    { name: "", regNo: "", year: "", dept: "" },
    { name: "", regNo: "", year: "", dept: "" },
  ]);

  // ✅ Toggle problem checkbox
  const handleCheckboxChange = (id: string) => {
    setSelectedProblems((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // ✅ Update team member data
  const handleMemberChange = (
    index: number,
    field: keyof Member,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  // ✅ Submit form to Firestore
  const handleRegister = async () => {
    if (!name || !email || !regNo || !role || !year || !department) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    try {
      await addDoc(collection(db, "registrations"), {
        name,
        email,
        regNo,
        role,
        year,
        department,
        selectedProblems,
        teamMembers,
        timestamp: new Date(),
      });

      alert("✅ Registration Successful!");
      // Reset form
      setName("");
      setEmail("");
      setRegNo("");
      setRole("");
      setYear("");
      setDepartment("");
      setSelectedProblems([]);
      setTeamMembers([
        { name: "", regNo: "", year: "", dept: "" },
        { name: "", regNo: "", year: "", dept: "" },
        { name: "", regNo: "", year: "", dept: "" },
        { name: "", regNo: "", year: "", dept: "" },
      ]);
    } catch (error) {
      console.error("Error adding document:", error);
      alert("❌ Failed to register. Please try again!");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="title">Registration</h1>

      <div className="form-card">
        {/* Main Info */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Register Number</label>
          <input
            type="number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter your register number"
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="faculty">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="I">I Year</option>
            <option value="II">II Year</option>
            <option value="III">III Year</option>
            <option value="IV">IV Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>

        {/* Problem Statements */}
        <div className="problem-section">
          <h2>Select Problem Statement</h2>
          <div className="problem-list">
            {PROBLEM_STATEMENTS.map((ps) => (
              <label key={ps.id} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedProblems.includes(ps.id)}
                  onChange={() => handleCheckboxChange(ps.id)}
                />
                {ps.title}
              </label>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="team-section">
          <h2>Team Members (Up to 4)</h2>
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <h3>Member {index + 1}</h3>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) =>
                    handleMemberChange(index, "name", e.target.value)
                  }
                  placeholder="Enter member name"
                />
              </div>
              <div className="form-group">
                <label>Register Number</label>
                <input
                  type="text"
                  value={member.regNo}
                  onChange={(e) =>
                    handleMemberChange(index, "regNo", e.target.value)
                  }
                  placeholder="Enter register number"
                />
              </div>
              <div className="form-group">
                <label>Year</label>
                <select
                  value={member.year}
                  onChange={(e) =>
                    handleMemberChange(index, "year", e.target.value)
                  }
                >
                  <option value="">Select Year</option>
                  <option value="I">I Year</option>
                  <option value="II">II Year</option>
                  <option value="III">III Year</option>
                  <option value="IV">IV Year</option>
                </select>
              </div>
              <div className="form-group">
                <label>Department</label>
                <select
                  value={member.dept}
                  onChange={(e) =>
                    handleMemberChange(index, "dept", e.target.value)
                  }
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MECH">MECH</option>
                  <option value="CIVIL">CIVIL</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        <button className="signup-btn" onClick={handleRegister}>
          Register
        </button>
      </div>

      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0f0f0f, #2a1e16, #4b2800);
          color: #fff;
        }
        .signup-container { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
        .title { font-size: 2.5rem; background: linear-gradient(90deg,#ffcc00,#ff6b00,#ff2600); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 30px; text-shadow:0 0 20px rgba(255,140,0,0.6);}
        .form-card { background: rgba(255,255,255,0.07); border:1px solid rgba(255,165,0,0.3); border-radius:15px; padding:30px; width:100%; max-width:500px; transition:0.4s ease;}
        .form-card:hover { box-shadow:0 0 45px rgba(255,165,0,0.4);}
        .form-group { margin-bottom:15px; display:flex; flex-direction:column; }
        label { margin-bottom:6px; color:#ffd580; font-weight:500; }
        input, select { padding:10px 14px; border:1px solid #ff9900; border-radius:8px; outline:none; background: rgba(0,0,0,0.3); color:white; transition:0.3s; }
        input:focus, select:focus { border-color:#ffcc00; box-shadow:0 0 8px #ffcc00; }
        .problem-section, .team-section { margin-top:25px; padding:15px; background: rgba(255,153,0,0.1); border-radius:10px; border:1px solid rgba(255,200,100,0.4);}
        .problem-section h2, .team-section h2 { font-size:1.3rem; color:#ffcc66; margin-bottom:15px; text-align:center;}
        .problem-list { display:flex; flex-direction:column; gap:10px;}
        .checkbox-label { display:flex; align-items:center; gap:8px; background: rgba(255,255,255,0.05); padding:8px 10px; border-radius:6px; transition:0.3s;}
        .checkbox-label:hover { background: rgba(255,165,0,0.15);}
        input[type="checkbox"] { accent-color: #ff9900; width:18px; height:18px; cursor:pointer;}
        .member-card { background: rgba(255,255,255,0.04); border:1px solid rgba(255,165,0,0.2); padding:15px; border-radius:10px; margin-bottom:15px;}
        .member-card h3 { margin-bottom:10px; color:#ffaa33; text-align:center;}
        .signup-btn { width:100%; padding:12px; border:none; border-radius:8px; background:linear-gradient(90deg,#ff9900,#ff6600); color:white; font-weight:600; cursor:pointer; transition:0.4s; margin-top:20px;}
        .signup-btn:hover { background:linear-gradient(90deg,#ffaa00,#ff3300); box-shadow:0 0 15px rgba(255,120,0,0.6);}
      `}</style>
    </div>
  );
};

export default SignupPage;
