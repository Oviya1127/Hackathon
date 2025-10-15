import type { ProblemStatement } from "../components/ProblemStatementCard";

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "ps1",
    title: "Smart Classroom & Timetable Scheduler",
    background: `Higher education institutions struggle to prepare efficient, conflict-free timetables due to limited infrastructure, faculty workload distribution, elective courses, and overlapping departmental needs. Manual scheduling often leads to class clashes, underutilized classrooms, uneven workload, and dissatisfied students/faculty. With NEP 2020 introducing flexible curricula, scheduling has become more dynamic and complex, requiring intelligent solutions.`,
    description: `Current scheduling relies on spreadsheets and manual adjustments, which cannot handle real-time faculty availability, workload norms, or student preferences. A smart solution is needed to generate optimized timetables for UG and PG students, ensuring resource efficiency, reduced conflicts, and achievement of academic outcomes.`,
    keyParameters: `• Number and type of classrooms/labs (capacity vs. student size).\n• UG/PG batches, sections, and elective course groups.\n• Subjects with credit hours, theory/lab/practical types.\n• Faculty availability, specialization, workload limits.\n• Constraints: max/min classes per day, gap between sessions, fixed slots (labs, seminars).\n• Dynamic conditions: faculty leave, room unavailability, substitute teachers.\n• Student-centric inputs: elective preferences, balanced subject distribution.`,
    expectedSolution: `A web-based timetable generator with:\n• Auto-optimized scheduling and conflict detection.\n• Multiple timetable variations for review/selection.\n• Real-time “what-if” rescheduling (e.g., leave handling).\n• Department-wise, faculty-wise, and student-wise timetable views.\n• Export to PDF/Excel and sync with Google/Outlook calendars.\n• Notifications of schedule changes to students/faculty via portal or app.`,
    registrationOpen: true,
  },
  {
    id: "ps2",
    title: "Digital Notice Board TPGIT",
    background: `Paper-based notice boards delay information sharing, cause inefficiencies, and limit accessibility. Students often miss critical updates (academic, exams, placements, events) if not present on campus. With a digital ecosystem emerging in higher education, a centralized and real-time notice system is essential.`,
    description: `Currently, publishing notices requires manual printing and physical display. This is time-consuming and fails to reach all stakeholders quickly. A digital solution should replace manual boards with an interactive, centralized platform accessible via web, mobile, and campus display screens.`,
    keyParameters: `• Role-based access (Admin, HOD, Faculty, Placement Cell, Exam Cell).\n• Notice categories: academic, exams, placements, cultural, sports, circulars.\n• Content types: text, PDFs, images, links, videos.\n• Target audience: department/year/whole campus.\n• Priority levels: urgent, important, general.\n• Real-time publishing with scheduling options.\n• Archive with search and filter options.\n• Multi-device accessibility (desktop, mobile, kiosks).`,
    expectedSolution: `A centralized digital notice system with:\n• Secure login for authorized staff.\n• Role- and department-based posting and filtering.\n• Real-time notifications via web, app, or email.\n• Multimedia support for announcements.\n• Auto-refresh display screens across campus.\n• Archive for old notices with keyword search.\n• Analytics on notice views and reach.`,
    registrationOpen: true,
  },
  {
    id: "ps3",
    title: "Biometric Based Attendance System",
    background: `Manual attendance systems are time-consuming, error-prone, and allow proxy marking. With rising class sizes and compliance needs, institutions require a secure and automated attendance solution. Biometric technology ensures accuracy, transparency, and efficiency in student verification.`,
    description: `Current attendance marking using registers or spreadsheets lacks reliability. A biometric solution using fingerprint, facial recognition, or RFID ensures unique identification, reduces proxies, and integrates with academic records for compliance and reporting.`,
    keyParameters: `• Biometric methods: fingerprint, face recognition, RFID/smart card.\n• Secure student enrollment and authentication database.\n• Class/subject mapping linked to timetable.\n• Attendance timestamping (entry, exit, late arrivals).\n• Cloud/local data storage with encryption.\n• Automated alerts for absenteeism.\n• Reporting: student/subject/class-wise attendance, defaulter lists.\n• Scalability to handle thousands of students simultaneously.`,
    expectedSolution: `A biometric attendance system with:\n• Real-time attendance capture integrated with timetable.\n• Automated alerts to students/parents for absenteeism.\n• Dashboards for faculty and admin to view attendance trends.\n• Report generation for compliance and exam eligibility.\n• Faculty override/edit option in case of device downtime.\n• Secure storage and privacy compliance for biometric data.`,
    registrationOpen: true,
  },
  {
    id: "ps4",
    title: "Library Automation for TPGIT",
    background: `Manual library operations cause delays, errors, and poor user experience in cataloging, issuing, and returning books. Tracking fines and inventory manually is inefficient. A digital system is required to automate processes, improve accessibility, and integrate e-resources.`,
    description: `Currently, library records are partly manual or basic digital logs. A modern system should support searchable catalogs, barcode/RFID-based circulation, fine management, and integration of digital resources. Students and faculty should have online access to check availability, reserve, and renew books.`,
    keyParameters: `• Catalog of books with ISBN, author, subject classification, availability.\n• User database (students, faculty, staff) with unique IDs.\n• Book issue, return, and renewal records with timestamps.\n• Reservation and waiting list management.\n• Overdue fine calculation with alerts.\n• Support for digital resources (e-books, journals).\n• Barcode/RFID integration for circulation.\n• Reports: usage statistics, popular books, department-wise trends.`,
    expectedSolution: `A library management system with:\n• Online catalog search accessible to all users.\n• Barcode/RFID-enabled issue/return system.\n• Online reservation and renewal features.\n• Automated reminders for due/overdue books.\n• User dashboards for personal borrowing history.\n• Admin portal for stock management and reporting.\n• Scalability for integrating e-books and digital repositories.`,
    registrationOpen: true,
  },
  {
    id: "ps5",
    title: "COPO Attainment Software",
    background: `NBA accreditation requires institutions to track and report Course Outcomes (COs) and Program Outcomes (POs). Manual spreadsheet-based COPO calculations are tedious, error-prone, and non-standardized. Institutions need a dedicated system to automate outcome mapping, calculation, and reporting.`,
    description: `Currently, COPO attainment mapping involves manual data entry of assessments, making it difficult to manage large datasets across multiple courses and semesters. A software platform should automate COPO calculations, integrate assessment data, and generate NBA-compliant reports.`,
    keyParameters: `• CO, PO, and PSO definitions and mapping matrices.\n• Direct assessment data: internal tests, assignments, lab records, end-semester exams.\n• Indirect assessment data: surveys, alumni/employer feedback.\n• Configurable weightage for direct vs. indirect methods.\n• Attainment calculation formulas (as per NBA guidelines).\n• Visualization of outcomes (bar charts, radar charts, heatmaps).\n• Multi-course and multi-department support.\n• Report export in NBA/NAAC formats.`,
    expectedSolution: `A COPO attainment software with:\n• Faculty login to define mappings and upload assessment data.\n• Automatic attainment calculation using predefined formulas.\n• Visualization dashboards for outcome analysis.\n• NBA-compliant report generation.\n• Multi-level analytics (course → program → department → institution).\n• Historical data tracking to monitor improvements over time.`,
    registrationOpen: true,
  },
];
