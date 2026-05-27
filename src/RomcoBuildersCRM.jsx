/* eslint-disable no-unused-vars, no-undef */
import { useState } from "react";

// ─────────────────────────────────────────────
// BRAND CONFIG — ROMCO BUILDERS
// ─────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
const BRAND = {
  name: "ROMCO",
  division: "BUILDERS",
  slogan: "Built on Integrity. Delivered with Precision.",
  domain: "romcobuilders.com",
  email: "john@romcobuilders.com",
  phone: "954.123.4567",
  owner: "John Romano",
  ownerTitle: "Partner",
  gold: "#D4AF37",
  charcoal: "#1A1A1A",
  steel: "#4A4A4A",
  white: "#FFFFFF",
  region: "South Florida",
};

// Inject Montserrat font
if(typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

// ─────────────────────────────────────────────
// SHARED DATA
// ─────────────────────────────────────────────
const SAMPLE_LEADS = [
  { id:1, name:"Marcus & Linda Chen", phone:"(954) 555-0182", email:"mchen@email.com", type:"Home Renovation", value:145000, status:"Proposal Sent", source:"Referral", date:"2026-05-10", salesperson:"John R.", notes:"Full kitchen + 2 bathrooms. Timeline: Aug start." },
  { id:2, name:"Brickell Plaza LLC", phone:"(305) 555-0247", email:"info@brickellplaza.com", type:"Commercial Build-Out", value:380000, status:"New Lead", source:"Website", date:"2026-05-14", salesperson:"Sarah K.", notes:"3rd floor tenant improvement, 4,200 sqft office." },
  { id:3, name:"Roberto Vasquez", phone:"(786) 555-0391", email:"rvasquez@gmail.com", type:"Home Renovation", value:62000, status:"Appointment Set", source:"Google Ads", date:"2026-05-08", salesperson:"John R.", notes:"Master bath, flooring, paint throughout." },
  { id:4, name:"Coral Gables Realty Group", phone:"(305) 555-0558", email:"dev@cgr.com", type:"Commercial Build-Out", value:520000, status:"Won", source:"Referral", date:"2026-04-22", salesperson:"Sarah K.", notes:"Flagship office, design-build contract signed." },
  { id:5, name:"Stephanie & Tom Nguyen", phone:"(954) 555-0614", email:"snguyen@outlook.com", type:"Home Renovation", value:89000, status:"Lost", source:"Zillow", date:"2026-04-30", salesperson:"John R.", notes:"Went with lower bidder. Follow up in 6 months." },
  { id:6, name:"Wynwood Arts District Inc.", phone:"(305) 555-0733", email:"ops@wynwoodarts.com", type:"Commercial Build-Out", value:210000, status:"In Negotiation", source:"Cold Outreach", date:"2026-05-01", salesperson:"Sarah K.", notes:"Restaurant + gallery conversion." },
];

const SAMPLE_PROJECTS = [
  { id:1, name:"Chen Residence Renovation", client:"Marcus & Linda Chen", clientEmail:"mchen@email.com", type:"Home Renovation", status:"In Progress", startDate:"2026-08-01", endDate:"2026-11-15", budget:145000, spent:42000, phase:"Demo & Framing", pm:"John R.", pmPhone:"954.123.4567", address:"1204 Hibiscus Dr, Coral Springs FL", completion:28 },
  { id:2, name:"Brickell Plaza Fl.3 Build-Out", client:"Brickell Plaza LLC", clientEmail:"info@brickellplaza.com", type:"Commercial", status:"Pre-Construction", startDate:"2026-07-01", endDate:"2026-10-30", budget:380000, spent:18000, phase:"Permitting", pm:"Sarah K.", pmPhone:"(954) 555-0002", address:"1450 Brickell Ave #300, Miami FL", completion:5 },
  { id:3, name:"Coral Gables Flagship Office", client:"Coral Gables Realty Group", clientEmail:"dev@cgr.com", type:"Commercial", status:"In Progress", startDate:"2026-03-15", endDate:"2026-07-30", budget:520000, spent:310000, phase:"Interiors & MEP", pm:"Sarah K.", pmPhone:"(954) 555-0002", address:"2600 Douglas Rd, Coral Gables FL", completion:62 },
  { id:4, name:"Wynwood Arts Conversion", client:"Wynwood Arts District Inc.", clientEmail:"ops@wynwoodarts.com", type:"Commercial", status:"Planning", startDate:"2026-09-01", endDate:"2027-01-15", budget:210000, spent:0, phase:"Design Development", pm:"John R.", pmPhone:"954.123.4567", address:"231 NW 25th St, Miami FL", completion:0 },
  { id:5, name:"Vasquez Bath & Floors", client:"Roberto Vasquez", clientEmail:"rvasquez@gmail.com", type:"Home Renovation", status:"Bidding", startDate:"2026-06-15", endDate:"2026-08-01", budget:62000, spent:0, phase:"Estimating", pm:"John R.", pmPhone:"954.123.4567", address:"887 Sunset Blvd, Davie FL", completion:0 },
];

const SAMPLE_CONTACTS = [
  { id:1, name:"Marcus Chen", role:"Client", company:"Residential", email:"mchen@email.com", phone:"(954) 555-0182", type:"Client", tags:["VIP"] },
  { id:2, name:"Sarah Kowalski", role:"Project Manager", company:"Romco Builders", email:"sarah@romcobuilders.com", phone:"(954) 555-0001", type:"Team", tags:["PM"] },
  { id:3, name:"Juan Gomez", role:"Sub — Electrical", company:"Gomez Electric LLC", email:"juan@gomezelectric.com", phone:"(305) 555-0299", type:"Subcontractor", tags:["Licensed","Preferred"] },
  { id:4, name:"Pavel Hrib", role:"Sub — Plumbing", company:"South FL Plumbing", email:"phrib@sfplumbing.com", phone:"(786) 555-0451", type:"Subcontractor", tags:["Licensed"] },
  { id:5, name:"Diana Ortega", role:"Inspector", company:"Miami-Dade County", email:"d.ortega@miamidade.gov", phone:"(305) 555-0800", type:"Government", tags:[] },
  { id:6, name:"Kevin Lam", role:"Architect", company:"Lam Design Group", email:"kevin@lamdesign.com", phone:"(954) 555-0610", type:"Vendor", tags:["Preferred"] },
];

const SAMPLE_DOCS = [
  { id:1, name:"Chen - Signed Contract.pdf", projectId:1, project:"Chen Residence Renovation", type:"Contract", uploaded:"2026-05-12", size:"2.4 MB", uploader:"John R.", clientVisible:true },
  { id:2, name:"Brickell - Permit Application.pdf", projectId:2, project:"Brickell Plaza Fl.3", type:"Permit", uploaded:"2026-05-15", size:"5.1 MB", uploader:"Sarah K.", clientVisible:true },
  { id:3, name:"Coral Gables - Change Order #3.pdf", projectId:3, project:"Coral Gables Flagship", type:"Change Order", uploaded:"2026-05-18", size:"0.8 MB", uploader:"Sarah K.", clientVisible:true },
  { id:4, name:"Romco - Certificate of Insurance 2026.pdf", projectId:null, project:"Company", type:"Insurance", uploaded:"2026-01-05", size:"1.2 MB", uploader:"Admin", clientVisible:false },
  { id:5, name:"Wynwood - Architectural Plans v2.pdf", projectId:4, project:"Wynwood Arts Conversion", type:"Plans", uploaded:"2026-05-09", size:"18.3 MB", uploader:"Kevin Lam", clientVisible:true },
  { id:6, name:"Chen - Selection Sheet Kitchen.pdf", projectId:1, project:"Chen Residence Renovation", type:"Selections", uploaded:"2026-05-20", size:"3.1 MB", uploader:"John R.", clientVisible:true },
];

const SAMPLE_TASKS = [
  { id:1, title:"Submit Brickell permit application", project:"Brickell Plaza Fl.3", projectId:2, assignee:"Sarah K.", due:"2026-05-28", priority:"High", done:false },
  { id:2, title:"Order framing materials - Chen job", project:"Chen Residence", projectId:1, assignee:"John R.", due:"2026-07-25", priority:"Medium", done:false },
  { id:3, title:"Schedule final walkthrough - Coral Gables", project:"Coral Gables Flagship", projectId:3, assignee:"Sarah K.", due:"2026-07-28", priority:"High", done:false },
  { id:4, title:"Send proposal to Nguyen follow-up", project:"Lead", projectId:null, assignee:"John R.", due:"2026-11-01", priority:"Low", done:true },
  { id:5, title:"Collect deposit - Vasquez", project:"Vasquez Bath", projectId:5, assignee:"John R.", due:"2026-06-10", priority:"High", done:false },
  { id:6, title:"Review Wynwood design drawings", project:"Wynwood Arts Conversion", projectId:4, assignee:"Kevin Lam", due:"2026-06-01", priority:"Medium", done:false },
];

const SAMPLE_CHANGE_ORDERS = [
  { id:1, projectId:1, title:"Additional electrical outlets in kitchen", description:"Client requested 4 additional GFCI outlets along kitchen island and under-cabinet areas.", amount:1850, status:"Pending Approval", date:"2026-05-19", addedBy:"John R." },
  { id:2, projectId:3, title:"Upgraded HVAC units — Coral Gables", description:"Owner requested upgrade from standard Carrier to Trane XR series for all 3 zones.", amount:12400, status:"Approved", date:"2026-05-10", addedBy:"Sarah K." },
  { id:3, projectId:1, title:"Tile upgrade — master bath", description:"Client selected Calacatta Gold marble tile instead of original budget-grade porcelain.", amount:3200, status:"Pending Approval", date:"2026-05-21", addedBy:"John R." },
];

const SAMPLE_INVOICES = [
  { id:1, projectId:1, number:"INV-2026-031", description:"Draw #1 — Mobilization & Demo", amount:29000, status:"Paid", due:"2026-08-10", paid:"2026-08-09" },
  { id:2, projectId:1, number:"INV-2026-038", description:"Draw #2 — Framing & Rough-In", amount:36250, status:"Pending", due:"2026-09-15", paid:null },
  { id:3, projectId:3, number:"INV-2026-022", description:"Draw #4 — MEP Rough-In", amount:78000, status:"Paid", due:"2026-05-01", paid:"2026-04-29" },
  { id:4, projectId:3, number:"INV-2026-029", description:"Draw #5 — Interiors Phase 1", amount:95000, status:"Overdue", due:"2026-05-15", paid:null },
  { id:5, projectId:2, number:"INV-2026-035", description:"Draw #1 — Pre-Construction Services", amount:19000, status:"Pending", due:"2026-06-01", paid:null },
];

const SAMPLE_DAILY_LOGS = [
  { id:1, projectId:1, date:"2026-05-20", weather:"Sunny 84°F", crew:6, hours:48, note:"Completed demo of existing kitchen cabinetry and flooring. Plumbing rough-in starts tomorrow.", photos:3, author:"John R." },
  { id:2, projectId:1, date:"2026-05-19", weather:"Partly Cloudy 81°F", crew:4, hours:32, note:"Structural wall opened up between kitchen and dining. Steel beam delivered and set.", photos:5, author:"John R." },
  { id:3, projectId:3, date:"2026-05-20", weather:"Sunny 86°F", crew:12, hours:96, note:"MEP inspections passed on floors 1 and 2. Drywall crew begins tomorrow.", photos:8, author:"Sarah K." },
  { id:4, projectId:3, date:"2026-05-19", weather:"Sunny 84°F", crew:10, hours:80, note:"Elevator shaft framing complete. Fire suppression rough-in 70% done.", photos:4, author:"Sarah K." },
];

const SAMPLE_PHOTOS = [
  { id:1, projectId:1, date:"2026-05-20", caption:"Kitchen demo complete — ready for framing", phase:"Demo", thumb:"🏗️" },
  { id:2, projectId:1, date:"2026-05-19", caption:"Steel beam set — structural opening", phase:"Structural", thumb:"⚙️" },
  { id:3, projectId:1, date:"2026-05-18", caption:"Cabinet removal — existing layout", phase:"Demo", thumb:"🔨" },
  { id:4, projectId:3, date:"2026-05-20", caption:"MEP rough-in — floor 2 complete", phase:"MEP", thumb:"🔌" },
  { id:5, projectId:3, date:"2026-05-19", caption:"Elevator shaft framing", phase:"Framing", thumb:"🏢" },
  { id:6, projectId:3, date:"2026-05-17", caption:"Drywall delivery on site", phase:"Materials", thumb:"📦" },
];

const SAMPLE_MESSAGES = [
  { id:1, projectId:1, from:"John R.", fromType:"team", to:"Marcus & Linda Chen", message:"Hi Marcus & Linda — wanted to give you a heads up that demo is fully complete. We're right on schedule. I'll send over updated photos tonight.", date:"2026-05-20 4:32 PM", read:true },
  { id:2, projectId:1, from:"Marcus Chen", fromType:"client", to:"John R.", message:"Thanks James! The photos look great. Quick question — can we discuss the kitchen island size one more time before framing? Thinking we want to go a bit larger.", date:"2026-05-20 5:14 PM", read:false },
  { id:3, projectId:3, from:"Sarah K.", fromType:"team", to:"Coral Gables Realty Group", message:"MEP inspections passed on both floors today — big milestone. Change order #3 for the HVAC upgrade has been approved and we'll proceed with Trane install next week.", date:"2026-05-20 3:00 PM", read:true },
];

// ─────────────────────────────────────────────
// CLIENT PORTAL USERS (demo logins)
// ─────────────────────────────────────────────
const CLIENT_PORTAL_USERS = [
  { email:"mchen@email.com", password:"chen2026", name:"Marcus Chen", projectId:1, initials:"MC" },
  { email:"dev@cgr.com", password:"cgr2026", name:"CGR Admin", projectId:3, initials:"CG" },
  { email:"info@brickellplaza.com", password:"brickell2026", name:"Brickell Plaza", projectId:2, initials:"BP" },
];

// ─────────────────────────────────────────────
// CONTRACTOR PORTAL DATA
// ─────────────────────────────────────────────
const CONTRACTOR_USERS = [
  { id:1, email:"juan@gomezelectric.com", password:"gomez2026", name:"Juan Gomez", company:"Gomez Electric LLC", trade:"Electrical", initials:"JG", phone:"(305) 555-0299", licenseNo:"EC13008742", licenseExp:"2027-03-15", insuranceExp:"2026-12-31", status:"Active", assignedProjects:[1,3], preferredVendor:true },
  { id:2, email:"phrib@sfplumbing.com", password:"hrib2026", name:"Pavel Hrib", company:"South FL Plumbing", trade:"Plumbing", initials:"PH", phone:"(786) 555-0451", licenseNo:"CFC1430882", licenseExp:"2026-09-30", insuranceExp:"2026-08-15", status:"Active", assignedProjects:[1], preferredVendor:false },
  { id:3, email:"mroofing@sunroof.com", password:"sun2026", name:"Miguel Torres", company:"SunState Roofing", trade:"Roofing", initials:"MT", phone:"(954) 555-0812", licenseNo:"CCC1333901", licenseExp:"2027-06-01", insuranceExp:"2027-01-20", status:"Active", assignedProjects:[2], preferredVendor:true },
];

const CONTRACTOR_INVOICES = [
  { id:1, contractorId:1, projectId:1, number:"SUB-2026-011", description:"Rough-in electrical — Chen Kitchen & Baths", amount:8400, status:"Paid", submitted:"2026-05-05", paid:"2026-05-12" },
  { id:2, contractorId:1, projectId:3, number:"SUB-2026-018", description:"MEP electrical rough-in — Coral Gables Fl.1 & 2", amount:24600, status:"Pending", submitted:"2026-05-18", paid:null },
  { id:3, contractorId:2, projectId:1, number:"SUB-2026-014", description:"Plumbing rough-in — master & guest bath", amount:6200, status:"Pending", submitted:"2026-05-20", paid:null },
  { id:4, contractorId:1, projectId:1, number:"SUB-2026-022", description:"Trim-out electrical — kitchen island outlets", amount:1850, status:"Pending Approval", submitted:"2026-05-21", paid:null },
  { id:5, contractorId:3, projectId:2, number:"SUB-2026-009", description:"Roof survey & pre-construction assessment", amount:3500, status:"Paid", submitted:"2026-05-01", paid:"2026-05-08" },
];

const CONTRACTOR_CHANGE_ORDERS = [
  { id:1, contractorId:1, projectId:1, title:"Additional GFCI outlets — kitchen island", description:"4 additional GFCI outlets along kitchen island per client request. Labor & materials included.", amount:1850, status:"Pending Approval", date:"2026-05-19" },
  { id:2, contractorId:1, projectId:3, title:"Panel upgrade — Coral Gables main service", description:"Upgrade main electrical panel from 200A to 400A to accommodate new HVAC load.", amount:4200, status:"Approved", date:"2026-05-12" },
  { id:3, contractorId:2, projectId:1, title:"Additional clean-out access — master bath", description:"Install additional cleanout fitting per inspector request during rough-in.", amount:380, status:"Approved", date:"2026-05-17" },
];

const CONTRACTOR_DAILY_LOGS = [
  { id:1, contractorId:1, projectId:1, date:"2026-05-20", weather:"Sunny 84°F", crew:3, hours:24, note:"Completed kitchen rough-in. All circuits run to panel. Ready for inspection.", photos:2 },
  { id:2, contractorId:1, projectId:3, date:"2026-05-20", weather:"Sunny 86°F", crew:5, hours:40, note:"Floor 2 MEP complete. Coordinating with HVAC sub for floor 3 schedule.", photos:4 },
  { id:3, contractorId:2, projectId:1, date:"2026-05-19", weather:"Partly Cloudy 81°F", crew:2, hours:16, note:"Master bath drain and supply rough-in complete. Guest bath starts tomorrow.", photos:3 },
];

const CONTRACTOR_MESSAGES = [
  { id:1, contractorId:1, projectId:1, from:"John R.", fromType:"pm", message:"Juan — great work on the kitchen rough-in. Inspector scheduled for Thursday 9AM. Make sure the panel is labeled before then.", date:"2026-05-20 5:00 PM", read:true },
  { id:2, contractorId:1, projectId:1, from:"Juan Gomez", fromType:"contractor", message:"Copy that, John. Panel will be labeled and ready. I'll have my foreman on site at 8AM to prep.", date:"2026-05-20 5:22 PM", read:true },
  { id:3, contractorId:2, projectId:1, from:"John R.", fromType:"pm", message:"Pavel — heads up, tile install starts June 3rd. Make sure all plumbing rough-in is fully signed off before then.", date:"2026-05-21 9:15 AM", read:false },
];

const CONTRACTOR_SCHEDULES = [
  { id:1, contractorId:1, projectId:1, task:"Electrical rough-in — kitchen & baths", startDate:"2026-05-12", endDate:"2026-05-22", status:"In Progress", notes:"Coordinate with plumbing sub for wet wall access" },
  { id:2, contractorId:1, projectId:1, task:"Electrical trim-out & fixtures", startDate:"2026-10-01", endDate:"2026-10-20", status:"Scheduled", notes:"After drywall complete" },
  { id:3, contractorId:1, projectId:3, task:"MEP electrical rough-in — all floors", startDate:"2026-04-15", endDate:"2026-05-25", status:"In Progress", notes:"Coordinate with mechanical for conduit routing" },
  { id:4, contractorId:2, projectId:1, task:"Plumbing rough-in — master & guest baths", startDate:"2026-05-18", endDate:"2026-05-28", status:"In Progress", notes:"Hot/cold supply + drain/waste/vent" },
  { id:5, contractorId:3, projectId:2, task:"Pre-construction roof survey", startDate:"2026-05-01", endDate:"2026-05-08", status:"Completed", notes:"Report submitted to PM" },
  { id:6, contractorId:3, projectId:2, task:"New roof installation — Brickell", startDate:"2026-08-15", endDate:"2026-09-10", status:"Scheduled", notes:"Pending permit approval" },
];

// ─────────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────────
const fmt = (n) => "$" + Number(n).toLocaleString();

const STATUS_COLORS = {
  "New Lead":{ bg:"#E6F1FB", text:"#185FA5" }, "Appointment Set":{ bg:"#FAEEDA", text:"#854F0B" },
  "Proposal Sent":{ bg:"#EAF3DE", text:"#3B6D11" }, "In Negotiation":{ bg:"#EEEDFE", text:"#534AB7" },
  "Won":{ bg:"#E1F5EE", text:"#0F6E56" }, "Lost":{ bg:"#FCEBEB", text:"#A32D2D" },
  "In Progress":{ bg:"#E6F1FB", text:"#185FA5" }, "Pre-Construction":{ bg:"#FAEEDA", text:"#854F0B" },
  "Planning":{ bg:"#EEEDFE", text:"#534AB7" }, "Bidding":{ bg:"#FAEEDA", text:"#854F0B" },
  "Completed":{ bg:"#E1F5EE", text:"#0F6E56" }, "Pending":{ bg:"#FAEEDA", text:"#854F0B" },
  "Paid":{ bg:"#E1F5EE", text:"#0F6E56" }, "Overdue":{ bg:"#FCEBEB", text:"#A32D2D" },
  "Pending Approval":{ bg:"#FAEEDA", text:"#854F0B" }, "Approved":{ bg:"#E1F5EE", text:"#0F6E56" },
  "Declined":{ bg:"#FCEBEB", text:"#A32D2D" },
};

function Badge({ status }) {
  const c = STATUS_COLORS[status] || { bg:"#F1EFE8", text:"#5F5E5A" };
  return <span style={{ background:c.bg, color:c.text, fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:12, whiteSpace:"nowrap" }}>{status}</span>;
}

function ProgressBar({ pct, color="#D4AF37" }) {
  return (
    <div style={{ background:"#EBEBEB", borderRadius:4, height:6, width:"100%", overflow:"hidden" }}>
      <div style={{ background:color, borderRadius:4, height:6, width:`${Math.min(pct,100)}%`, transition:"width 0.4s" }} />
    </div>
  );
}

function StatCard({ label, value, sub, color="#D4AF37" }) {
  return (
    <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:"16px 20px", flex:1, minWidth:130 }}>
      <div style={{ fontSize:11, color:"#888", marginBottom:4, textTransform:"uppercase", letterSpacing:1 }}>{label}</div>
      <div style={{ fontSize:24, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif" }}>{value}</div>
      {sub && <div style={{ fontSize:12, color, marginTop:2 }}>{sub}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────
// ADMIN VIEWS
// ─────────────────────────────────────────────

function AdminDashboard() {
  const totalPipeline = SAMPLE_LEADS.filter(l=>!["Won","Lost"].includes(l.status)).reduce((s,l)=>s+l.value,0);
  const wonRevenue = SAMPLE_LEADS.filter(l=>l.status==="Won").reduce((s,l)=>s+l.value,0);
  const activeProjects = SAMPLE_PROJECTS.filter(p=>p.status==="In Progress").length;
  const openTasks = SAMPLE_TASKS.filter(t=>!t.done).length;
  const pendingCOs = SAMPLE_CHANGE_ORDERS.filter(c=>c.status==="Pending Approval").length;
  const unreadMsgs = SAMPLE_MESSAGES.filter(m=>!m.read && m.fromType==="client").length;

  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <h1 style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Good morning, John 👋</h1>
        <p style={{ color:"#888", margin:"4px 0 0", fontSize:14 }}>Friday, May 22, 2026 · ROMCO Builders — South Florida</p>
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Pipeline Value" value={fmt(totalPipeline)} sub="4 active leads" />
        <StatCard label="Won Revenue" value={fmt(wonRevenue)} sub="This quarter" color="#0F6E56" />
        <StatCard label="Active Projects" value={activeProjects} sub="2 commercial, 1 reno" />
        <StatCard label="Open Tasks" value={openTasks} sub="2 due this week" color="#A32D2D" />
        <StatCard label="Pending COs" value={pendingCOs} sub="Awaiting approval" color="#534AB7" />
        <StatCard label="Client Messages" value={unreadMsgs} sub="Unread" color="#185FA5" />
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
        <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
          <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", marginBottom:16, fontFamily:"Montserrat, Arial, sans-serif" }}>Active Projects</div>
          {SAMPLE_PROJECTS.filter(p=>["In Progress","Pre-Construction"].includes(p.status)).map(p=>(
            <div key={p.id} style={{ marginBottom:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{p.name}</span>
                <span style={{ fontSize:12, color:"#888" }}>{p.completion}%</span>
              </div>
              <ProgressBar pct={p.completion} />
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                <span style={{ fontSize:11, color:"#888" }}>{p.phase}</span>
                <span style={{ fontSize:11, color:"#888" }}>Due {p.endDate}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
          <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", marginBottom:16, fontFamily:"Montserrat, Arial, sans-serif" }}>Recent Client Messages</div>
          {SAMPLE_MESSAGES.map(m=>(
            <div key={m.id} style={{ display:"flex", gap:10, marginBottom:14, padding:"10px 12px", background:!m.read&&m.fromType==="client"?"#FFF8EE":"#FAFAFA", borderRadius:8, border:`1px solid ${!m.read&&m.fromType==="client"?"#D4AF3733":"#EBEBEB"}` }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:m.fromType==="client"?"#E6F1FB":"#E1F5EE", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:m.fromType==="client"?"#185FA5":"#0F6E56", flexShrink:0 }}>
                {m.from.split(" ").map(n=>n[0]).join("").slice(0,2)}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:12, fontWeight:600, color:"#1A1A1A" }}>{m.from} <span style={{ fontWeight:400, color:"#888" }}>→</span> {m.to}</div>
                <div style={{ fontSize:12, color:"#555", marginTop:2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{m.message}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>{m.date}</div>
              </div>
              {!m.read && m.fromType==="client" && <div style={{ width:8, height:8, borderRadius:"50%", background:"#D4AF37", flexShrink:0, marginTop:4 }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", marginBottom:16, fontFamily:"Montserrat, Arial, sans-serif" }}>Lead Pipeline</div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {["New Lead","Appointment Set","Proposal Sent","In Negotiation","Won","Lost"].map(stage=>{
            const count=SAMPLE_LEADS.filter(l=>l.status===stage).length;
            const val=SAMPLE_LEADS.filter(l=>l.status===stage).reduce((s,l)=>s+l.value,0);
            return (
              <div key={stage} style={{ flex:1, minWidth:90, background:"#F5F5F5", borderRadius:8, padding:"12px 14px", textAlign:"center" }}>
                <div style={{ fontSize:10, color:"#888", marginBottom:4 }}>{stage}</div>
                <div style={{ fontSize:18, fontWeight:700, color:"#1A1A1A" }}>{count}</div>
                {val>0&&<div style={{ fontSize:11, color:"#D4AF37" }}>{fmt(val)}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LeadPipeline() {
  const [leads, setLeads] = useState(SAMPLE_LEADS);
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name:"", phone:"", email:"", type:"Home Renovation", value:"", status:"New Lead", source:"", salesperson:"", notes:"" });
  const stages = ["All","New Lead","Appointment Set","Proposal Sent","In Negotiation","Won","Lost"];
  const visible = filter==="All" ? leads : leads.filter(l=>l.status===filter);
  const save = () => {
    if(!form.name) return;
    if(selected) setLeads(leads.map(l=>l.id===selected.id?{...selected,...form,value:Number(form.value)}:l));
    else setLeads([...leads,{...form,id:Date.now(),value:Number(form.value),date:new Date().toISOString().split("T")[0]}]);
    setShowForm(false); setSelected(null);
    setForm({ name:"",phone:"",email:"",type:"Home Renovation",value:"",status:"New Lead",source:"",salesperson:"",notes:"" });
  };
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Lead Pipeline</h2>
        <button onClick={()=>{setShowForm(true);setSelected(null);}} style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ Add Lead</button>
      </div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
        {stages.map(s=><button key={s} onClick={()=>setFilter(s)} style={{ background:filter===s?"#1A1A1A":"#F5F5F5", color:filter===s?"#fff":"#555", border:"none", borderRadius:20, padding:"6px 14px", fontSize:12, cursor:"pointer", fontWeight:filter===s?600:400 }}>{s}</button>)}
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Client","Type","Value","Status","Source","Salesperson","Date",""].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {visible.map((l,i)=>(
              <tr key={l.id} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                <td style={{ padding:"12px 14px" }}><div style={{ fontWeight:600, color:"#1A1A1A" }}>{l.name}</div><div style={{ fontSize:11, color:"#888" }}>{l.email}</div></td>
                <td style={{ padding:"12px 14px", color:"#444" }}>{l.type}</td>
                <td style={{ padding:"12px 14px", fontWeight:700, color:"#1A1A1A" }}>{fmt(l.value)}</td>
                <td style={{ padding:"12px 14px" }}><Badge status={l.status} /></td>
                <td style={{ padding:"12px 14px", color:"#666" }}>{l.source}</td>
                <td style={{ padding:"12px 14px", color:"#666" }}>{l.salesperson}</td>
                <td style={{ padding:"12px 14px", color:"#888" }}>{l.date}</td>
                <td style={{ padding:"12px 14px" }}><button onClick={()=>{setSelected(l);setForm({...l,value:String(l.value)});setShowForm(true);}} style={{ background:"none", border:"1px solid #E0E0E0", borderRadius:6, padding:"4px 10px", fontSize:12, cursor:"pointer", color:"#555" }}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length===0&&<div style={{ padding:32, textAlign:"center", color:"#aaa" }}>No leads in this stage</div>}
      </div>
      {showForm&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ background:"#fff", borderRadius:14, padding:28, width:500, maxHeight:"85vh", overflowY:"auto" }}>
            <h3 style={{ margin:"0 0 20px", fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A" }}>{selected?"Edit Lead":"New Lead"}</h3>
            {[["Client / Company Name","name","text"],["Phone","phone","text"],["Email","email","email"],["Estimated Value","value","number"],["Source","source","text"],["Salesperson","salesperson","text"]].map(([lbl,key,type])=>(
              <div key={key} style={{ marginBottom:14 }}>
                <label style={{ fontSize:12, color:"#666", display:"block", marginBottom:4 }}>{lbl}</label>
                <input type={type} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} style={{ width:"100%", border:"1px solid #ddd", borderRadius:8, padding:"9px 12px", fontSize:14, boxSizing:"border-box" }} />
              </div>
            ))}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
              <div><label style={{ fontSize:12, color:"#666", display:"block", marginBottom:4 }}>Type</label>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{ width:"100%", border:"1px solid #ddd", borderRadius:8, padding:"9px 12px", fontSize:14 }}>
                  <option>Home Renovation</option><option>Commercial Build-Out</option><option>Project Management</option>
                </select>
              </div>
              <div><label style={{ fontSize:12, color:"#666", display:"block", marginBottom:4 }}>Status</label>
                <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} style={{ width:"100%", border:"1px solid #ddd", borderRadius:8, padding:"9px 12px", fontSize:14 }}>
                  {["New Lead","Appointment Set","Proposal Sent","In Negotiation","Won","Lost"].map(s=><option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginBottom:18 }}><label style={{ fontSize:12, color:"#666", display:"block", marginBottom:4 }}>Notes</label>
              <textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} rows={3} style={{ width:"100%", border:"1px solid #ddd", borderRadius:8, padding:"9px 12px", fontSize:14, boxSizing:"border-box", resize:"vertical" }} />
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
              <button onClick={()=>{setShowForm(false);setSelected(null);}} style={{ border:"1px solid #ddd", background:"#fff", borderRadius:8, padding:"9px 18px", cursor:"pointer" }}>Cancel</button>
              <button onClick={save} style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, cursor:"pointer" }}>Save Lead</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [detail, setDetail] = useState(null);
  const statuses = ["All","In Progress","Pre-Construction","Planning","Bidding","Completed"];
  const visible = filter==="All" ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter(p=>p.status===filter);

  if(detail) {
    const p=detail;
    const budgetPct = p.budget>0 ? Math.round(p.spent/p.budget*100) : 0;
    const projDocs = SAMPLE_DOCS.filter(d=>d.projectId===p.id);
    const projTasks = SAMPLE_TASKS.filter(t=>t.projectId===p.id);
    const projCOs = SAMPLE_CHANGE_ORDERS.filter(c=>c.projectId===p.id);
    const projLogs = SAMPLE_DAILY_LOGS.filter(l=>l.projectId===p.id);
    return (
      <div>
        <button onClick={()=>setDetail(null)} style={{ background:"none", border:"none", color:"#D4AF37", fontWeight:600, cursor:"pointer", fontSize:14, marginBottom:20, padding:0 }}>← Back to Projects</button>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20 }}>
          <div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:24, marginBottom:18 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                <div><h2 style={{ margin:0, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", fontSize:20 }}>{p.name}</h2>
                  <div style={{ color:"#888", fontSize:13, marginTop:4 }}>{p.address}</div></div>
                <Badge status={p.status} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
                {[["Client",p.client],["PM",p.pm],["Type",p.type],["Start",p.startDate],["End",p.endDate],["Phase",p.phase]].map(([k,v])=>(
                  <div key={k}><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:1 }}>{k}</div><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A", marginTop:2 }}>{v}</div></div>
                ))}
              </div>
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20, marginBottom:18 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Budget Tracker</div>
              <div style={{ display:"flex", gap:20, marginBottom:14 }}>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Contract</div><div style={{ fontSize:20, fontWeight:700, color:"#1A1A1A" }}>{fmt(p.budget)}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Spent</div><div style={{ fontSize:20, fontWeight:700, color:"#D4AF37" }}>{fmt(p.spent)}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Remaining</div><div style={{ fontSize:20, fontWeight:700, color:"#0F6E56" }}>{fmt(p.budget-p.spent)}</div></div>
              </div>
              <ProgressBar pct={budgetPct} />
              <div style={{ fontSize:11, color:"#888", marginTop:6 }}>{budgetPct}% of budget utilized</div>
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20, marginBottom:18 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Change Orders</div>
              {projCOs.length===0 ? <div style={{ color:"#aaa", fontSize:13 }}>No change orders</div> : projCOs.map(co=>(
                <div key={co.id} style={{ padding:"12px 0", borderBottom:"1px solid #EBEBEB" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div style={{ flex:1 }}><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{co.title}</div>
                      <div style={{ fontSize:12, color:"#666", marginTop:3 }}>{co.description}</div>
                      <div style={{ fontSize:11, color:"#aaa", marginTop:3 }}>{co.date} · {co.addedBy}</div>
                    </div>
                    <div style={{ textAlign:"right", marginLeft:16, flexShrink:0 }}>
                      <div style={{ fontSize:15, fontWeight:700, color:"#1A1A1A", marginBottom:4 }}>{fmt(co.amount)}</div>
                      <Badge status={co.status} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Daily Logs</div>
              {projLogs.map(log=>(
                <div key={log.id} style={{ padding:"12px 0", borderBottom:"1px solid #EBEBEB" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                    <span style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{log.date}</span>
                    <span style={{ fontSize:12, color:"#888" }}>{log.weather}</span>
                  </div>
                  <div style={{ fontSize:13, color:"#444" }}>{log.note}</div>
                  <div style={{ fontSize:11, color:"#aaa", marginTop:4 }}>Crew: {log.crew} · Hours: {log.hours} · 📷 {log.photos} photos · {log.author}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18, marginBottom:14 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:10 }}>Completion</div>
              <div style={{ fontSize:32, fontWeight:700, color:"#D4AF37", fontFamily:"Montserrat, Arial, sans-serif" }}>{p.completion}%</div>
              <ProgressBar pct={p.completion} />
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18, marginBottom:14 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:10 }}>Tasks</div>
              {projTasks.map(t=>(
                <div key={t.id} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:10 }}>
                  <div style={{ width:10, height:10, borderRadius:2, background:t.done?"#E1F5EE":"#FAEEDA", border:`2px solid ${t.done?"#0F6E56":"#D4AF37"}`, marginTop:2, flexShrink:0 }} />
                  <div><div style={{ fontSize:12, color:t.done?"#aaa":"#1A1A1A", textDecoration:t.done?"line-through":"none" }}>{t.title}</div>
                    <div style={{ fontSize:11, color:"#aaa" }}>Due {t.due}</div></div>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:10 }}>Documents</div>
              {projDocs.map(d=>(
                <div key={d.id} style={{ display:"flex", gap:8, alignItems:"center", padding:"8px 0", borderBottom:"1px solid #EBEBEB" }}>
                  <span style={{ fontSize:18 }}>📄</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:12, color:"#1A1A1A", fontWeight:500, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{d.name}</div>
                    <div style={{ fontSize:11, color:"#aaa" }}>{d.type} · {d.size}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Projects</h2>
        <button style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ New Project</button>
      </div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
        {statuses.map(s=><button key={s} onClick={()=>setFilter(s)} style={{ background:filter===s?"#1A1A1A":"#F5F5F5", color:filter===s?"#fff":"#555", border:"none", borderRadius:20, padding:"6px 14px", fontSize:12, cursor:"pointer", fontWeight:filter===s?600:400 }}>{s}</button>)}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        {visible.map(p=>(
          <div key={p.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20, cursor:"pointer" }} onClick={()=>setDetail(p)}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
              <div><div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{p.name}</div>
                <div style={{ fontSize:12, color:"#888", marginTop:2 }}>{p.client} · {p.pm}</div></div>
              <Badge status={p.status} />
            </div>
            <div style={{ display:"flex", gap:16, marginBottom:10 }}>
              <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Budget</div><div style={{ fontSize:14, fontWeight:700, color:"#1A1A1A" }}>{fmt(p.budget)}</div></div>
              <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Spent</div><div style={{ fontSize:14, fontWeight:600, color:"#D4AF37" }}>{fmt(p.spent)}</div></div>
              <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Phase</div><div style={{ fontSize:13, color:"#555" }}>{p.phase}</div></div>
            </div>
            <ProgressBar pct={p.completion} />
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
              <span style={{ fontSize:11, color:"#888" }}>{p.completion}% complete</span>
              <span style={{ fontSize:11, color:"#888" }}>Due {p.endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contacts() {
  const [filter, setFilter] = useState("All");
  const types = ["All","Client","Team","Subcontractor","Vendor","Government"];
  const typeColors = { Client:"#185FA5", Team:"#0F6E56", Subcontractor:"#854F0B", Vendor:"#534AB7", Government:"#5F5E5A" };
  const visible = filter==="All" ? SAMPLE_CONTACTS : SAMPLE_CONTACTS.filter(c=>c.type===filter);
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Contacts</h2>
        <button style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ Add Contact</button>
      </div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
        {types.map(t=><button key={t} onClick={()=>setFilter(t)} style={{ background:filter===t?"#1A1A1A":"#F5F5F5", color:filter===t?"#fff":"#555", border:"none", borderRadius:20, padding:"6px 14px", fontSize:12, cursor:"pointer", fontWeight:filter===t?600:400 }}>{t}</button>)}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14 }}>
        {visible.map(c=>(
          <div key={c.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18 }}>
            <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:12 }}>
              <div style={{ width:42, height:42, borderRadius:"50%", background:`${typeColors[c.type]}22`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:700, color:typeColors[c.type] }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
              <div><div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{c.name}</div><div style={{ fontSize:12, color:"#888" }}>{c.role}</div></div>
            </div>
            <div style={{ fontSize:12, color:"#555", marginBottom:4 }}>📧 {c.email}</div>
            <div style={{ fontSize:12, color:"#555", marginBottom:10 }}>📞 {c.phone}</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              <span style={{ background:`${typeColors[c.type]}18`, color:typeColors[c.type], fontSize:11, fontWeight:600, padding:"2px 10px", borderRadius:10 }}>{c.type}</span>
              {c.tags.map(tag=><span key={tag} style={{ background:"#F5F5F5", color:"#666", fontSize:11, padding:"2px 8px", borderRadius:10 }}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Documents() {
  const typeColors = { Contract:"#185FA5", Permit:"#854F0B", "Change Order":"#534AB7", Insurance:"#0F6E56", Plans:"#A32D2D", Selections:"#D4AF37" };
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Documents</h2>
        <button style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ Upload</button>
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Document","Project","Type","Client Visible","Uploaded","Size",""].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {SAMPLE_DOCS.map((d,i)=>(
              <tr key={d.id} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                <td style={{ padding:"12px 14px" }}><div style={{ display:"flex", gap:8, alignItems:"center" }}><span style={{ fontSize:18 }}>📄</span><span style={{ fontWeight:500, color:"#1A1A1A" }}>{d.name}</span></div></td>
                <td style={{ padding:"12px 14px", color:"#555" }}>{d.project}</td>
                <td style={{ padding:"12px 14px" }}><span style={{ background:`${typeColors[d.type]||"#888"}18`, color:typeColors[d.type]||"#888", fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:10 }}>{d.type}</span></td>
                <td style={{ padding:"12px 14px" }}><span style={{ color:d.clientVisible?"#0F6E56":"#aaa", fontSize:13 }}>{d.clientVisible?"✓ Visible":"Hidden"}</span></td>
                <td style={{ padding:"12px 14px", color:"#888" }}>{d.uploaded}</td>
                <td style={{ padding:"12px 14px", color:"#888" }}>{d.size}</td>
                <td style={{ padding:"12px 14px" }}><button style={{ background:"none", border:"1px solid #E0E0E0", borderRadius:6, padding:"4px 10px", fontSize:12, cursor:"pointer", color:"#185FA5" }}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tasks() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);
  const [filter, setFilter] = useState("Open");
  const visible = filter==="All" ? tasks : filter==="Open" ? tasks.filter(t=>!t.done) : tasks.filter(t=>t.done);
  const toggle = (id) => setTasks(tasks.map(t=>t.id===id?{...t,done:!t.done}:t));
  const prioColors = { High:"#D4AF37", Medium:"#185FA5", Low:"#888" };
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Tasks</h2>
        <button style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ Add Task</button>
      </div>
      <div style={{ display:"flex", gap:6, marginBottom:20 }}>
        {["Open","Completed","All"].map(f=><button key={f} onClick={()=>setFilter(f)} style={{ background:filter===f?"#1A1A1A":"#F5F5F5", color:filter===f?"#fff":"#555", border:"none", borderRadius:20, padding:"6px 14px", fontSize:12, cursor:"pointer", fontWeight:filter===f?600:400 }}>{f}</button>)}
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        {visible.map((t,i)=>(
          <div key={t.id} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", borderBottom:i<visible.length-1?"1px solid #EBEBEB":"none", background:i%2===0?"#fff":"#FAFAFA" }}>
            <div onClick={()=>toggle(t.id)} style={{ width:20, height:20, borderRadius:5, border:`2px solid ${t.done?"#0F6E56":"#ddd"}`, background:t.done?"#E1F5EE":"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, color:"#0F6E56", flexShrink:0 }}>{t.done&&"✓"}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, color:t.done?"#aaa":"#1A1A1A", textDecoration:t.done?"line-through":"none", fontWeight:500 }}>{t.title}</div>
              <div style={{ fontSize:12, color:"#888", marginTop:2 }}>{t.project} · {t.assignee}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <span style={{ background:`${prioColors[t.priority]}18`, color:prioColors[t.priority], fontSize:11, fontWeight:600, padding:"2px 10px", borderRadius:10, display:"block", marginBottom:4 }}>{t.priority}</span>
              <div style={{ fontSize:11, color:"#aaa" }}>Due {t.due}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Financials() {
  const [invoices, setInvoices] = useState(SAMPLE_INVOICES);
  const totalContract = SAMPLE_PROJECTS.reduce((s,p)=>s+p.budget,0);
  const totalSpent = SAMPLE_PROJECTS.reduce((s,p)=>s+p.spent,0);
  const pipeline = SAMPLE_LEADS.filter(l=>!["Won","Lost"].includes(l.status)).reduce((s,l)=>s+l.value,0);
  const collected = invoices.filter(i=>i.status==="Paid").reduce((s,i)=>s+i.amount,0);
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 20px" }}>Financials</h2>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Total Contract Value" value={fmt(totalContract)} sub="All active projects" />
        <StatCard label="Collected" value={fmt(collected)} sub="Paid invoices" color="#0F6E56" />
        <StatCard label="Outstanding" value={fmt(invoices.filter(i=>i.status!=="Paid").reduce((s,i)=>s+i.amount,0))} sub="Pending + overdue" color="#A32D2D" />
        <StatCard label="Pipeline" value={fmt(pipeline)} sub="Open leads" color="#534AB7" />
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden", marginBottom:20 }}>
        <div style={{ padding:"14px 18px", borderBottom:"1px solid #E0E0E0", fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif" }}>Invoices</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Invoice #","Project","Description","Amount","Due","Status",""].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {invoices.map((inv,i)=>(
              <tr key={inv.id} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                <td style={{ padding:"12px 14px", fontWeight:600, color:"#1A1A1A" }}>{inv.number}</td>
                <td style={{ padding:"12px 14px", color:"#555" }}>{SAMPLE_PROJECTS.find(p=>p.id===inv.projectId)?.name||""}</td>
                <td style={{ padding:"12px 14px", color:"#444" }}>{inv.description}</td>
                <td style={{ padding:"12px 14px", fontWeight:700, color:"#1A1A1A" }}>{fmt(inv.amount)}</td>
                <td style={{ padding:"12px 14px", color:"#888" }}>{inv.due}</td>
                <td style={{ padding:"12px 14px" }}><Badge status={inv.status} /></td>
                <td style={{ padding:"12px 14px" }}>
                  {inv.status==="Pending"&&<button onClick={()=>setInvoices(invoices.map(x=>x.id===inv.id?{...x,status:"Paid",paid:new Date().toISOString().split("T")[0]}:x))} style={{ background:"#E1F5EE", color:"#0F6E56", border:"none", borderRadius:6, padding:"4px 10px", fontSize:12, cursor:"pointer", fontWeight:600 }}>Mark Paid</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        <div style={{ padding:"14px 18px", borderBottom:"1px solid #E0E0E0", fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif" }}>Job Cost Summary</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Project","Contract","Spent","Remaining","% Used","Status"].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {SAMPLE_PROJECTS.map((p,i)=>{
              const pct=p.budget>0?Math.round(p.spent/p.budget*100):0;
              return (
                <tr key={p.id} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                  <td style={{ padding:"12px 14px", fontWeight:600, color:"#1A1A1A" }}>{p.name}</td>
                  <td style={{ padding:"12px 14px", fontWeight:700, color:"#1A1A1A" }}>{fmt(p.budget)}</td>
                  <td style={{ padding:"12px 14px", color:"#D4AF37", fontWeight:600 }}>{fmt(p.spent)}</td>
                  <td style={{ padding:"12px 14px", color:"#0F6E56", fontWeight:600 }}>{fmt(p.budget-p.spent)}</td>
                  <td style={{ padding:"12px 14px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}><ProgressBar pct={pct} /><span style={{ fontSize:11, color:"#888", whiteSpace:"nowrap" }}>{pct}%</span></div>
                  </td>
                  <td style={{ padding:"12px 14px" }}><Badge status={p.status} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CLIENT PORTAL VIEWS
// ─────────────────────────────────────────────

function ClientPortalDashboard({ project, user }) {
  const pendingCOs = SAMPLE_CHANGE_ORDERS.filter(c=>c.projectId===project.id&&c.status==="Pending Approval");
  const pendingInvoices = SAMPLE_INVOICES.filter(i=>i.projectId===project.id&&i.status==="Pending");
  const unreadMsgs = SAMPLE_MESSAGES.filter(m=>m.projectId===project.id&&m.fromType==="team"&&!m.read);
  const budgetPct = project.budget>0?Math.round(project.spent/project.budget*100):0;

  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <h1 style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Welcome, {user.name} 👋</h1>
        <p style={{ color:"#888", margin:"4px 0 0", fontSize:14 }}>Your project overview — {project.name}</p>
      </div>

      {/* Alert banners */}
      {pendingCOs.length>0&&(
        <div style={{ background:"#FFF8EE", border:"1px solid #D4AF3744", borderRadius:10, padding:"12px 18px", marginBottom:14, display:"flex", gap:12, alignItems:"center" }}>
          <span style={{ fontSize:20 }}>⚠️</span>
          <div><div style={{ fontWeight:600, color:"#854F0B", fontSize:14 }}>{pendingCOs.length} Change Order{pendingCOs.length>1?"s":""} Awaiting Your Approval</div>
            <div style={{ fontSize:12, color:"#888" }}>Please review and approve or decline to keep your project on schedule.</div></div>
        </div>
      )}
      {pendingInvoices.length>0&&(
        <div style={{ background:"#E6F1FB", border:"1px solid #185FA544", borderRadius:10, padding:"12px 18px", marginBottom:14, display:"flex", gap:12, alignItems:"center" }}>
          <span style={{ fontSize:20 }}>💳</span>
          <div><div style={{ fontWeight:600, color:"#185FA5", fontSize:14 }}>{pendingInvoices.length} Invoice{pendingInvoices.length>1?"s":""} Due for Payment</div>
            <div style={{ fontSize:12, color:"#888" }}>Total: {fmt(pendingInvoices.reduce((s,i)=>s+i.amount,0))}</div></div>
        </div>
      )}

      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Project Budget" value={fmt(project.budget)} sub="Total contract value" />
        <StatCard label="Completion" value={`${project.completion}%`} sub={project.phase} />
        <StatCard label="Target Finish" value={project.endDate} sub={`Started ${project.startDate}`} color="#185FA5" />
        <StatCard label="Your PM" value={project.pm} sub={project.pmPhone} color="#0F6E56" />
      </div>

      {/* Progress */}
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:22, marginBottom:18 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:16 }}>Project Progress</div>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
          <span style={{ fontSize:13, color:"#444" }}>Overall Completion</span>
          <span style={{ fontSize:13, fontWeight:700, color:"#D4AF37" }}>{project.completion}%</span>
        </div>
        <ProgressBar pct={project.completion} />
        <div style={{ display:"flex", gap:8, marginTop:14, flexWrap:"wrap" }}>
          {["Planning","Permitting","Demo & Framing","Rough-In","Drywall","Finishes","Punch List","Complete"].map((phase,idx)=>{
            const phases = ["Planning","Permitting","Demo & Framing","Rough-In","Drywall","Finishes","Punch List","Complete"];
            const currentIdx = phases.indexOf(project.phase);
            const done = idx < currentIdx;
            const active = phase === project.phase;
            return (
              <div key={phase} style={{ display:"flex", flexDirection:"column", alignItems:"center", flex:1, minWidth:60 }}>
                <div style={{ width:24, height:24, borderRadius:"50%", background:done?"#D4AF37":active?"#1A1A1A":"#EBEBEB", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done||active?"#fff":"#aaa", fontWeight:700, marginBottom:4 }}>{done?"✓":idx+1}</div>
                <div style={{ fontSize:9, color:active?"#1A1A1A":done?"#D4AF37":"#aaa", textAlign:"center", fontWeight:active?700:400, lineHeight:1.2 }}>{phase}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Site Photos */}
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:22, marginBottom:18 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Recent Site Photos</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
          {SAMPLE_PHOTOS.filter(ph=>ph.projectId===project.id).map(ph=>(
            <div key={ph.id} style={{ background:"#F5F5F5", borderRadius:8, padding:"18px 12px", textAlign:"center", border:"1px solid #E0E0E0" }}>
              <div style={{ fontSize:36, marginBottom:8 }}>{ph.thumb}</div>
              <div style={{ fontSize:12, color:"#1A1A1A", fontWeight:500 }}>{ph.caption}</div>
              <div style={{ fontSize:11, color:"#aaa", marginTop:4 }}>{ph.phase} · {ph.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Logs preview */}
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:22 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Latest Site Updates</div>
        {SAMPLE_DAILY_LOGS.filter(l=>l.projectId===project.id).slice(0,2).map(log=>(
          <div key={log.id} style={{ padding:"12px 0", borderBottom:"1px solid #EBEBEB" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
              <span style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{log.date}</span>
              <span style={{ fontSize:12, color:"#888" }}>{log.weather}</span>
            </div>
            <div style={{ fontSize:13, color:"#444" }}>{log.note}</div>
            <div style={{ fontSize:11, color:"#aaa", marginTop:4 }}>Crew: {log.crew} workers · 📷 {log.photos} photos added</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientChangeOrders({ project }) {
  const [cos, setCOs] = useState(SAMPLE_CHANGE_ORDERS.filter(c=>c.projectId===project.id));
  const approve = (id) => setCOs(cos.map(c=>c.id===id?{...c,status:"Approved"}:c));
  const decline = (id) => setCOs(cos.map(c=>c.id===id?{...c,status:"Declined"}:c));
  const total = cos.filter(c=>c.status==="Approved").reduce((s,c)=>s+c.amount,0);

  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 8px" }}>Change Orders</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Review and approve or decline changes to your project scope.</p>
      {total>0&&<div style={{ background:"#E1F5EE", border:"1px solid #0F6E5644", borderRadius:10, padding:"12px 18px", marginBottom:20, fontSize:13, color:"#0F6E56", fontWeight:600 }}>✓ Approved Change Orders Total: {fmt(total)}</div>}
      {cos.length===0&&<div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:32, textAlign:"center", color:"#aaa" }}>No change orders for this project yet.</div>}
      {cos.map(co=>(
        <div key={co.id} style={{ background:"#fff", border:`1px solid ${co.status==="Pending Approval"?"#D4AF3755":"#E0E0E0"}`, borderRadius:10, padding:22, marginBottom:14 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:700, color:"#1A1A1A" }}>{co.title}</div>
              <div style={{ fontSize:13, color:"#555", marginTop:6, lineHeight:1.6 }}>{co.description}</div>
              <div style={{ fontSize:12, color:"#aaa", marginTop:6 }}>Submitted {co.date} by {co.addedBy}</div>
            </div>
            <div style={{ textAlign:"right", marginLeft:24, flexShrink:0 }}>
              <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", marginBottom:6 }}>{fmt(co.amount)}</div>
              <Badge status={co.status} />
            </div>
          </div>
          {co.status==="Pending Approval"&&(
            <div style={{ display:"flex", gap:10, paddingTop:12, borderTop:"1px solid #EBEBEB" }}>
              <button onClick={()=>approve(co.id)} style={{ flex:1, background:"#0F6E56", color:"#fff", border:"none", borderRadius:8, padding:"10px", fontWeight:700, fontSize:13, cursor:"pointer" }}>✓ Approve Change Order</button>
              <button onClick={()=>decline(co.id)} style={{ flex:1, background:"#fff", color:"#A32D2D", border:"1px solid #A32D2D44", borderRadius:8, padding:"10px", fontWeight:600, fontSize:13, cursor:"pointer" }}>✕ Decline</button>
            </div>
          )}
          {co.status==="Approved"&&<div style={{ paddingTop:10, borderTop:"1px solid #EBEBEB", fontSize:12, color:"#0F6E56", fontWeight:600 }}>✓ You approved this change order</div>}
          {co.status==="Declined"&&<div style={{ paddingTop:10, borderTop:"1px solid #EBEBEB", fontSize:12, color:"#A32D2D", fontWeight:600 }}>✕ You declined this change order</div>}
        </div>
      ))}
    </div>
  );
}

function ClientInvoices({ project }) {
  const [invoices, setInvoices] = useState(SAMPLE_INVOICES.filter(i=>i.projectId===project.id));
  const pay = (id) => setInvoices(invoices.map(i=>i.id===id?{...i,status:"Paid",paid:new Date().toISOString().split("T")[0]}:i));
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 8px" }}>Invoices & Payments</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>View your draw schedule and payment history.</p>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Total Invoiced" value={fmt(invoices.reduce((s,i)=>s+i.amount,0))} sub="All draws" />
        <StatCard label="Paid" value={fmt(invoices.filter(i=>i.status==="Paid").reduce((s,i)=>s+i.amount,0))} sub="Collected" color="#0F6E56" />
        <StatCard label="Outstanding" value={fmt(invoices.filter(i=>i.status!=="Paid").reduce((s,i)=>s+i.amount,0))} sub="Due or pending" color="#A32D2D" />
      </div>
      {invoices.map(inv=>(
        <div key={inv.id} style={{ background:"#fff", border:`1px solid ${inv.status==="Overdue"?"#A32D2D44":inv.status==="Pending"?"#D4AF3744":"#E0E0E0"}`, borderRadius:10, padding:20, marginBottom:12 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A" }}>{inv.number}</div>
              <div style={{ fontSize:13, color:"#555", marginTop:3 }}>{inv.description}</div>
              <div style={{ fontSize:12, color:"#aaa", marginTop:3 }}>Due: {inv.due}{inv.paid&&` · Paid: ${inv.paid}`}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", marginBottom:6 }}>{fmt(inv.amount)}</div>
              <Badge status={inv.status} />
            </div>
          </div>
          {(inv.status==="Pending"||inv.status==="Overdue")&&(
            <div style={{ marginTop:14, paddingTop:14, borderTop:"1px solid #EBEBEB" }}>
              <button onClick={()=>pay(inv.id)} style={{ background:"#1A1A1A", color:"#fff", border:"none", borderRadius:8, padding:"10px 24px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Pay Now — {fmt(inv.amount)}</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ClientDocuments({ project }) {
  const docs = SAMPLE_DOCS.filter(d=>d.projectId===project.id&&d.clientVisible);
  const typeColors = { Contract:"#185FA5", Permit:"#854F0B", "Change Order":"#534AB7", Insurance:"#0F6E56", Plans:"#A32D2D", Selections:"#D4AF37" };
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 8px" }}>Your Documents</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Contracts, permits, plans, and selections shared by your project team.</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        {docs.map(d=>(
          <div key={d.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18, display:"flex", gap:14, alignItems:"center" }}>
            <div style={{ width:48, height:48, background:"#F5F5F5", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, flexShrink:0 }}>📄</div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{d.name}</div>
              <div style={{ marginTop:4, display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ background:`${typeColors[d.type]||"#888"}18`, color:typeColors[d.type]||"#888", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>{d.type}</span>
                <span style={{ fontSize:11, color:"#aaa" }}>{d.size} · {d.uploaded}</span>
              </div>
            </div>
            <button style={{ background:"#1A1A1A", color:"#fff", border:"none", borderRadius:8, padding:"8px 14px", fontSize:12, cursor:"pointer", fontWeight:600, flexShrink:0 }}>Download</button>
          </div>
        ))}
        {docs.length===0&&<div style={{ gridColumn:"1/-1", padding:32, textAlign:"center", color:"#aaa", background:"#fff", borderRadius:10, border:"1px solid #E0E0E0" }}>No documents available yet.</div>}
      </div>
    </div>
  );
}

function ClientMessages({ project, user }) {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES.filter(m=>m.projectId===project.id));
  const [newMsg, setNewMsg] = useState("");
  const send = () => {
    if(!newMsg.trim()) return;
    setMessages([...messages, { id:Date.now(), projectId:project.id, from:user.name, fromType:"client", to:"John R.", message:newMsg, date:new Date().toLocaleString(), read:false }]);
    setNewMsg("");
  };
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 8px" }}>Messages</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Direct communication with your Romco project team.</p>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        <div style={{ padding:"16px 20px", borderBottom:"1px solid #E0E0E0", background:"#F5F5F5", display:"flex", gap:10, alignItems:"center" }}>
          <div style={{ width:36, height:36, borderRadius:"50%", background:"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, color:"#D4AF37" }}>JR</div>
          <div><div style={{ fontSize:13, fontWeight:700, color:"#1A1A1A" }}>{project.pm}</div><div style={{ fontSize:11, color:"#888" }}>Project Manager · {project.pmPhone}</div></div>
        </div>
        <div style={{ padding:20, minHeight:320, maxHeight:400, overflowY:"auto", display:"flex", flexDirection:"column", gap:12 }}>
          {messages.map(m=>(
            <div key={m.id} style={{ display:"flex", flexDirection:m.fromType==="client"?"row-reverse":"row", gap:10 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:m.fromType==="client"?"#E6F1FB":"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:m.fromType==="client"?"#185FA5":"#D4AF37", flexShrink:0 }}>
                {m.from.split(" ").map(n=>n[0]).join("").slice(0,2)}
              </div>
              <div style={{ maxWidth:"70%" }}>
                <div style={{ background:m.fromType==="client"?"#1A1A1A":"#F5F5F5", color:m.fromType==="client"?"#fff":"#1A1A1A", padding:"10px 14px", borderRadius:m.fromType==="client"?"12px 12px 4px 12px":"12px 12px 12px 4px", fontSize:13, lineHeight:1.5 }}>{m.message}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:4, textAlign:m.fromType==="client"?"right":"left" }}>{m.from} · {m.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:"14px 20px", borderTop:"1px solid #E0E0E0", display:"flex", gap:10 }}>
          <input value={newMsg} onChange={e=>setNewMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type a message..." style={{ flex:1, border:"1px solid #ddd", borderRadius:8, padding:"10px 14px", fontSize:13 }} />
          <button onClick={send} style={{ background:"#D4AF37", color:"#fff", border:"none", borderRadius:8, padding:"10px 20px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Send</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// LOGIN SCREEN
// ─────────────────────────────────────────────

function LoginScreen({ onLogin, onAdminLogin, onContractorLogin }) {
  const [tab, setTab] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClientLogin = () => {
    const user = CLIENT_PORTAL_USERS.find(u=>u.email===email&&u.password===password);
    if(user) { setError(""); onLogin(user); }
    else setError("Invalid email or password. Try: mchen@email.com / chen2026");
  };

  const handleContractorLogin = () => {
    const user = CONTRACTOR_USERS.find(u=>u.email===email&&u.password===password);
    if(user) { setError(""); onContractorLogin(user); }
    else setError("Invalid credentials. Try: juan@gomezelectric.com / gomez2026");
  };

  const handleAdminLogin = () => {
    if(email==="admin@romcobuilders.com"&&password==="romco2026") { setError(""); onAdminLogin(); }
    else setError("Invalid admin credentials. Try: admin@romcobuilders.com / romco2026");
  };

  const handleLogin = tab==="client" ? handleClientLogin : tab==="contractor" ? handleContractorLogin : handleAdminLogin;
  const placeholderEmail = tab==="client" ? "mchen@email.com" : tab==="contractor" ? "juan@gomezelectric.com" : "admin@romcobuilders.com";
  const btnLabel = tab==="client" ? "Access My Project Portal" : tab==="contractor" ? "Access Contractor Portal" : "Sign In to CRM";

  return (
    <div style={{ minHeight:"100vh", background:"#1A1A1A", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ width:"100%", maxWidth:440 }}>
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:72, height:72, borderRadius:"50%", border:"2px solid #D4AF37", marginBottom:18, position:"relative" }}>
            <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4 L4 40" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
              <path d="M4 4 L24 4 Q34 4 34 14 Q34 24 24 24 L4 24" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M18 24 L34 40" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ fontFamily:"Montserrat, Arial, sans-serif", fontWeight:700, fontSize:30, color:"#FFFFFF", letterSpacing:6, lineHeight:1 }}>ROMCO</div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, margin:"6px 0" }}>
            <div style={{ height:1, width:40, background:"#D4AF37", opacity:0.6 }}/>
            <div style={{ fontSize:11, color:"#D4AF37", letterSpacing:5, fontWeight:600 }}>BUILDERS</div>
            <div style={{ height:1, width:40, background:"#D4AF37", opacity:0.6 }}/>
          </div>
          <div style={{ color:"#888888", fontSize:11, letterSpacing:2, marginTop:10, textTransform:"uppercase" }}>Built on Integrity. Delivered with Precision.</div>
        </div>

        {/* 3-way tab toggle */}
        <div style={{ display:"flex", background:"#2A2A2A", borderRadius:10, padding:4, marginBottom:24, gap:2 }}>
          {[["client","🏠 Client"],["contractor","🔧 Contractor"],["admin","⚙ Admin"]].map(([t,lbl])=>(
            <button key={t} onClick={()=>{setTab(t);setError("");setEmail("");setPassword("");}} style={{ flex:1, background:tab===t?"#D4AF37":"none", color:tab===t?"#1A1A1A":"#9A9A9A", border:"none", borderRadius:8, padding:"10px 4px", fontWeight:600, fontSize:12, cursor:"pointer" }}>{lbl}</button>
          ))}
        </div>

        {/* Portal description badge */}
        <div style={{ textAlign:"center", marginBottom:20 }}>
          {tab==="client"&&<div style={{ display:"inline-block", background:"#2A2A2A", borderRadius:8, padding:"6px 16px", fontSize:12, color:"#9A9A9A" }}>View your project progress, invoices & documents</div>}
          {tab==="contractor"&&<div style={{ display:"inline-block", background:"#2A2A2A", borderRadius:8, padding:"6px 16px", fontSize:12, color:"#9A9A9A" }}>Submit logs, view schedules & manage your invoices</div>}
          {tab==="admin"&&<div style={{ display:"inline-block", background:"#2A2A2A", borderRadius:8, padding:"6px 16px", fontSize:12, color:"#9A9A9A" }}>Full CRM access — staff & management only</div>}
        </div>

        <div style={{ background:"#2A2A2A", borderRadius:14, padding:28 }}>
          <div style={{ marginBottom:16 }}>
            <label style={{ fontSize:12, color:"#9A9A9A", display:"block", marginBottom:6, letterSpacing:1 }}>EMAIL ADDRESS</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={placeholderEmail} style={{ width:"100%", background:"#1A1A1A", border:"1px solid #3A3A3A", borderRadius:8, padding:"11px 14px", fontSize:14, color:"#fff", boxSizing:"border-box" }} />
          </div>
          <div style={{ marginBottom:8 }}>
            <label style={{ fontSize:12, color:"#9A9A9A", display:"block", marginBottom:6, letterSpacing:1 }}>PASSWORD</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="••••••••" style={{ width:"100%", background:"#1A1A1A", border:"1px solid #3A3A3A", borderRadius:8, padding:"11px 14px", fontSize:14, color:"#fff", boxSizing:"border-box" }} />
          </div>
          {error&&<div style={{ color:"#E87070", fontSize:12, marginBottom:12, padding:"8px 12px", background:"#3A1A1A", borderRadius:6 }}>{error}</div>}
          <button onClick={handleLogin} style={{ width:"100%", background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"13px", fontWeight:700, fontSize:15, cursor:"pointer", marginTop:8 }}>{btnLabel}</button>
          <div style={{ marginTop:20, padding:"14px", background:"#1A1A1A", borderRadius:8 }}>
            <div style={{ fontSize:11, color:"#888888", marginBottom:8, letterSpacing:1 }}>DEMO CREDENTIALS</div>
            {tab==="client" && (
              <div style={{ fontSize:12, color:"#9A9A9A", lineHeight:1.9 }}>
                <div>📧 mchen@email.com · <span style={{ color:"#D4AF37" }}>chen2026</span></div>
                <div>📧 dev@cgr.com · <span style={{ color:"#D4AF37" }}>cgr2026</span></div>
                <div>📧 info@brickellplaza.com · <span style={{ color:"#D4AF37" }}>brickell2026</span></div>
              </div>
            )}
            {tab==="contractor" && (
              <div style={{ fontSize:12, color:"#9A9A9A", lineHeight:1.9 }}>
                <div>🔌 juan@gomezelectric.com · <span style={{ color:"#D4AF37" }}>gomez2026</span> <span style={{ color:"#888", fontSize:11 }}>(Electrical)</span></div>
                <div>🔧 phrib@sfplumbing.com · <span style={{ color:"#D4AF37" }}>hrib2026</span> <span style={{ color:"#888", fontSize:11 }}>(Plumbing)</span></div>
                <div>🏗 mroofing@sunroof.com · <span style={{ color:"#D4AF37" }}>sun2026</span> <span style={{ color:"#888", fontSize:11 }}>(Roofing)</span></div>
              </div>
            )}
            {tab==="admin" && (
              <div style={{ fontSize:12, color:"#9A9A9A" }}>📧 admin@romcobuilders.com · <span style={{ color:"#D4AF37" }}>romco2026</span></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CLIENT PORTAL SHELL
// ─────────────────────────────────────────────

function ClientPortalShell({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const project = SAMPLE_PROJECTS.find(p=>p.id===user.projectId)||SAMPLE_PROJECTS[0];
  const pendingCOs = SAMPLE_CHANGE_ORDERS.filter(c=>c.projectId===project.id&&c.status==="Pending Approval").length;
  const pendingInv = SAMPLE_INVOICES.filter(i=>i.projectId===project.id&&["Pending","Overdue"].includes(i.status)).length;
  const unreadMsgs = SAMPLE_MESSAGES.filter(m=>m.projectId===project.id&&m.fromType==="team"&&!m.read).length;

  const tabs = [
    { id:"overview", label:"Overview", icon:"⊞" },
    { id:"changeorders", label:"Change Orders", icon:"±", badge:pendingCOs },
    { id:"invoices", label:"Invoices", icon:"💳", badge:pendingInv },
    { id:"documents", label:"Documents", icon:"▤" },
    { id:"messages", label:"Messages", icon:"✉", badge:unreadMsgs },
  ];

  const views = { overview:<ClientPortalDashboard project={project} user={user} />, changeorders:<ClientChangeOrders project={project} />, invoices:<ClientInvoices project={project} />, documents:<ClientDocuments project={project} />, messages:<ClientMessages project={project} user={user} /> };

  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"Montserrat, Arial, sans-serif", background:"#F2F2F2", overflow:"hidden" }}>
      <div style={{ width:230, background:"#1A1A1A", display:"flex", flexDirection:"column", flexShrink:0 }}>
        <div style={{ padding:"20px 18px 16px", borderBottom:"1px solid #2A2A2A" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
            <div style={{ width:32, height:32, borderRadius:"50%", border:"1.5px solid #D4AF37", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="14" height="17" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4 L4 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
                <path d="M4 4 L24 4 Q34 4 34 14 Q34 24 24 24 L4 24" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M18 24 L34 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily:"Montserrat, Arial, sans-serif", fontWeight:700, fontSize:15, color:"#fff", letterSpacing:3, lineHeight:1 }}>ROMCO</div>
              <div style={{ fontSize:9, color:"#D4AF37", letterSpacing:3, fontWeight:600, marginTop:2 }}>BUILDERS</div>
            </div>
          </div>
          <div style={{ fontSize:9, color:"#666", marginTop:4, letterSpacing:1 }}>Client Portal · romcobuilders.com</div>
        </div>
        <div style={{ padding:"14px 18px 10px", borderBottom:"1px solid #2A2A2A" }}>
          <div style={{ fontSize:11, color:"#888888", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>Your Project</div>
          <div style={{ fontSize:13, fontWeight:600, color:"#fff", lineHeight:1.4 }}>{project.name}</div>
          <div style={{ marginTop:8 }}><Badge status={project.status} /></div>
          <div style={{ marginTop:10 }}>
            <ProgressBar pct={project.completion} />
            <div style={{ fontSize:11, color:"#888888", marginTop:4 }}>{project.completion}% complete</div>
          </div>
        </div>
        <nav style={{ flex:1, padding:"10px 0" }}>
          {tabs.map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{ display:"flex", alignItems:"center", gap:10, width:"100%", padding:"11px 18px", background:activeTab===tab.id?"#2A2A2A":"none", border:"none", color:activeTab===tab.id?"#D4AF37":"#9A9A9A", cursor:"pointer", fontSize:13, fontWeight:activeTab===tab.id?600:400, textAlign:"left", borderLeft:activeTab===tab.id?"3px solid #D4AF37":"3px solid transparent" }}>
              <span style={{ fontSize:15, lineHeight:1 }}>{tab.icon}</span>
              <span style={{ flex:1 }}>{tab.label}</span>
              {tab.badge>0&&<span style={{ background:"#D4AF37", color:"#fff", fontSize:10, fontWeight:700, width:18, height:18, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{tab.badge}</span>}
            </button>
          ))}
        </nav>
        <div style={{ padding:"14px 18px", borderTop:"1px solid #2A2A2A" }}>
          <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
            <div style={{ width:32, height:32, borderRadius:"50%", background:"#185FA522", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#185FA5" }}>{user.initials}</div>
            <div><div style={{ fontSize:12, fontWeight:600, color:"#fff" }}>{user.name}</div><div style={{ fontSize:10, color:"#888888" }}>Client</div></div>
          </div>
          <button onClick={onLogout} style={{ width:"100%", background:"none", border:"1px solid #2A2A2A", borderRadius:8, padding:"7px", color:"#888888", fontSize:12, cursor:"pointer" }}>Sign Out</button>
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"28px 32px" }}>
        {views[activeTab]}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTRACTOR PORTAL VIEWS
// ─────────────────────────────────────────────────────────────

function ContractorSidebar({ user, activeTab, setActiveTab, onLogout }) {
  const pendingCOs = CONTRACTOR_CHANGE_ORDERS.filter(c=>c.contractorId===user.id&&c.status==="Pending Approval").length;
  const pendingInv = CONTRACTOR_INVOICES.filter(i=>i.contractorId===user.id&&["Pending","Pending Approval"].includes(i.status)).length;
  const unreadMsgs = CONTRACTOR_MESSAGES.filter(m=>m.contractorId===user.id&&m.fromType==="pm"&&!m.read).length;
  const tabs = [
    { id:"dashboard", label:"My Dashboard", icon:"⊞" },
    { id:"schedule", label:"Schedule & Jobs", icon:"📅" },
    { id:"dailylogs", label:"Daily Logs", icon:"📋", badge:0 },
    { id:"photos", label:"Photo Upload", icon:"📷" },
    { id:"changeorders", label:"Change Orders", icon:"±", badge:pendingCOs },
    { id:"invoices", label:"My Invoices", icon:"💰", badge:pendingInv },
    { id:"messages", label:"Messages", icon:"✉", badge:unreadMsgs },
    { id:"compliance", label:"License & Insurance", icon:"🛡" },
  ];
  const expSoon = (dateStr) => {
    const d = new Date(dateStr); const now = new Date();
    return (d - now) / (1000*60*60*24) < 60;
  };
  const licWarn = expSoon(user.licenseExp);
  const insWarn = expSoon(user.insuranceExp);
  return (
    <div style={{ width:235, background:"#1A1A1A", display:"flex", flexDirection:"column", flexShrink:0, height:"100vh" }}>
      <div style={{ padding:"20px 18px 16px", borderBottom:"1px solid #2A2A2A" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
          <div style={{ width:34, height:34, borderRadius:"50%", border:"1.5px solid #D4AF37", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <svg width="16" height="19" viewBox="0 0 38 44" fill="none"><path d="M4 4 L4 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/><path d="M4 4 L24 4 Q34 4 34 14 Q34 24 24 24 L4 24" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M18 24 L34 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div style={{ fontFamily:"Montserrat, Arial, sans-serif", fontWeight:700, fontSize:15, color:"#fff", letterSpacing:3, lineHeight:1 }}>ROMCO</div>
            <div style={{ fontSize:9, color:"#D4AF37", letterSpacing:3, fontWeight:600, marginTop:2 }}>BUILDERS</div>
          </div>
        </div>
        <div style={{ fontSize:9, color:"#666", letterSpacing:1 }}>Contractor Portal</div>
      </div>
      <div style={{ padding:"12px 18px", borderBottom:"1px solid #2A2A2A" }}>
        <div style={{ fontSize:11, color:"#666", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>Logged in as</div>
        <div style={{ fontSize:13, fontWeight:700, color:"#fff" }}>{user.name}</div>
        <div style={{ fontSize:11, color:"#D4AF37", marginTop:2 }}>{user.company}</div>
        <div style={{ fontSize:11, color:"#888", marginTop:2 }}>{user.trade}</div>
        {(licWarn||insWarn) && (
          <div style={{ marginTop:8, background:"#3A2A00", border:"1px solid #D4AF3744", borderRadius:6, padding:"6px 10px", fontSize:11, color:"#D4AF37" }}>
            ⚠ {licWarn&&insWarn?"License & insurance expiring soon":licWarn?"License expiring soon":"Insurance expiring soon"}
          </div>
        )}
      </div>
      <nav style={{ flex:1, padding:"10px 0", overflowY:"auto" }}>
        {tabs.map(tab=>(
          <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{ display:"flex", alignItems:"center", gap:10, width:"100%", padding:"11px 18px", background:activeTab===tab.id?"#2A2A2A":"none", border:"none", color:activeTab===tab.id?"#D4AF37":"#9A9A9A", cursor:"pointer", fontSize:13, fontWeight:activeTab===tab.id?600:400, textAlign:"left", borderLeft:activeTab===tab.id?"3px solid #D4AF37":"3px solid transparent" }}>
            <span style={{ fontSize:15, lineHeight:1 }}>{tab.icon}</span>
            <span style={{ flex:1 }}>{tab.label}</span>
            {tab.badge>0&&<span style={{ background:"#D4AF37", color:"#1A1A1A", fontSize:10, fontWeight:700, width:18, height:18, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{tab.badge}</span>}
          </button>
        ))}
      </nav>
      <div style={{ padding:"14px 18px", borderTop:"1px solid #2A2A2A" }}>
        <button onClick={onLogout} style={{ width:"100%", background:"none", border:"1px solid #2A2A2A", borderRadius:8, padding:"7px", color:"#888", fontSize:12, cursor:"pointer" }}>Sign Out</button>
      </div>
    </div>
  );
}

function ContractorDashboard({ user }) {
  const myProjects = SAMPLE_PROJECTS.filter(p=>user.assignedProjects.includes(p.id));
  const myInvoices = CONTRACTOR_INVOICES.filter(i=>i.contractorId===user.id);
  const pendingPay = myInvoices.filter(i=>["Pending","Overdue"].includes(i.status)).reduce((s,i)=>s+i.amount,0);
  const totalPaid = myInvoices.filter(i=>i.status==="Paid").reduce((s,i)=>s+i.amount,0);
  const openCOs = CONTRACTOR_CHANGE_ORDERS.filter(c=>c.contractorId===user.id&&c.status==="Pending Approval").length;
  const unread = CONTRACTOR_MESSAGES.filter(m=>m.contractorId===user.id&&m.fromType==="pm"&&!m.read).length;
  const fmt = n=>"$"+Number(n).toLocaleString();
  const daysUntil = (d)=>Math.ceil((new Date(d)-new Date())/(1000*60*60*24));
  const licDays = daysUntil(user.licenseExp);
  const insDays = daysUntil(user.insuranceExp);
  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <h1 style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Welcome back, {user.name.split(" ")[0]} 👷</h1>
        <p style={{ color:"#888", margin:"4px 0 0", fontSize:14 }}>Friday, May 22, 2026 · {user.company}</p>
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Active Projects" value={myProjects.filter(p=>p.status==="In Progress").length} sub="Currently on site" />
        <StatCard label="Pending Payment" value={fmt(pendingPay)} sub="Awaiting release" color="#D4AF37" />
        <StatCard label="Total Earned" value={fmt(totalPaid)} sub="This contract" color="#0F6E56" />
        <StatCard label="Open Change Orders" value={openCOs} sub="Awaiting approval" color="#534AB7" />
        {unread>0&&<StatCard label="New Messages" value={unread} sub="From your PM" color="#185FA5" />}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20, marginBottom:20 }}>
        <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
          <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:16 }}>Your Assigned Projects</div>
          {myProjects.map(p=>(
            <div key={p.id} style={{ marginBottom:18, paddingBottom:18, borderBottom:"1px solid #F0F0F0" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{p.name}</div>
                  <div style={{ fontSize:12, color:"#888", marginTop:2 }}>📍 {p.address}</div>
                  <div style={{ fontSize:12, color:"#888", marginTop:1 }}>PM: {p.pm} · {p.pmPhone}</div>
                </div>
                <Badge status={p.status} />
              </div>
              <ProgressBar pct={p.completion} />
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:5 }}>
                <span style={{ fontSize:11, color:"#888" }}>{p.phase}</span>
                <span style={{ fontSize:11, color:"#888" }}>Due {p.endDate}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18 }}>
            <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Compliance Status</div>
            <div style={{ marginBottom:12 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:12, color:"#555" }}>License</span>
                <span style={{ fontSize:12, fontWeight:600, color:licDays<60?"#A32D2D":"#0F6E56" }}>{licDays < 60 ? `⚠ ${licDays}d` : "✓ Valid"}</span>
              </div>
              <div style={{ fontSize:11, color:"#aaa" }}>#{user.licenseNo} · Exp {user.licenseExp}</div>
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:12, color:"#555" }}>Insurance</span>
                <span style={{ fontSize:12, fontWeight:600, color:insDays<60?"#A32D2D":"#0F6E56" }}>{insDays < 60 ? `⚠ ${insDays}d` : "✓ Valid"}</span>
              </div>
              <div style={{ fontSize:11, color:"#aaa" }}>COI on file · Exp {user.insuranceExp}</div>
            </div>
          </div>
          <div style={{ background:"#1A1A1A", border:"1px solid #2A2A2A", borderRadius:10, padding:18 }}>
            <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#D4AF37", marginBottom:10 }}>Quick Actions</div>
            {[["📋","Submit Daily Log","dailylogs"],["📷","Upload Photos","photos"],["💰","View Invoices","invoices"],["✉","Message PM","messages"]].map(([ic,lb])=>(
              <div key={lb} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #2A2A2A", cursor:"pointer" }}>
                <span style={{ fontSize:16 }}>{ic}</span>
                <span style={{ fontSize:13, color:"#ccc" }}>{lb}</span>
                <span style={{ marginLeft:"auto", color:"#D4AF37", fontSize:12 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContractorSchedule({ user }) {
  const mySchedule = CONTRACTOR_SCHEDULES.filter(s=>s.contractorId===user.id);
  const statusColors = { "In Progress":"#185FA5", "Scheduled":"#534AB7", "Completed":"#0F6E56", "Delayed":"#A32D2D" };
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>Schedule & Job Assignments</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 24px" }}>Your assigned work scopes across all ROMCO projects.</p>
      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {mySchedule.map(s=>{
          const proj = SAMPLE_PROJECTS.find(p=>p.id===s.projectId);
          return (
            <div key={s.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:22 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A" }}>{s.task}</div>
                  <div style={{ fontSize:13, color:"#D4AF37", fontWeight:600, marginTop:3 }}>{proj?.name}</div>
                  <div style={{ fontSize:12, color:"#888", marginTop:2 }}>📍 {proj?.address}</div>
                </div>
                <span style={{ background:`${statusColors[s.status]||"#888"}18`, color:statusColors[s.status]||"#888", fontSize:12, fontWeight:600, padding:"4px 12px", borderRadius:12 }}>{s.status}</span>
              </div>
              <div style={{ display:"flex", gap:24, marginBottom:12 }}>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:1 }}>Start</div><div style={{ fontSize:14, fontWeight:600, color:"#1A1A1A" }}>{s.startDate}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:1 }}>End</div><div style={{ fontSize:14, fontWeight:600, color:"#1A1A1A" }}>{s.endDate}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:1 }}>PM Contact</div><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{proj?.pm} · {proj?.pmPhone}</div></div>
              </div>
              {s.notes&&<div style={{ background:"#F5F5F5", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#555", borderLeft:"3px solid #D4AF37" }}>📌 {s.notes}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContractorDailyLogs({ user }) {
  const [logs, setLogs] = useState(CONTRACTOR_DAILY_LOGS.filter(l=>l.contractorId===user.id));
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ projectId:user.assignedProjects[0]||1, date:new Date().toISOString().split("T")[0], weather:"", crew:"", hours:"", note:"" });
  const submit = () => {
    if(!form.note.trim()) return;
    setLogs([{ id:Date.now(), contractorId:user.id, ...form, crew:Number(form.crew), hours:Number(form.hours), photos:0 }, ...logs]);
    setShowForm(false);
    setForm({ projectId:user.assignedProjects[0]||1, date:new Date().toISOString().split("T")[0], weather:"", crew:"", hours:"", note:"" });
  };
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div><h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Daily Site Logs</h2><p style={{ color:"#888", fontSize:13, margin:"4px 0 0" }}>Submit your end-of-day site reports.</p></div>
        <button onClick={()=>setShowForm(!showForm)} style={{ background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:700, fontSize:13, cursor:"pointer" }}>+ New Log</button>
      </div>
      {showForm&&(
        <div style={{ background:"#fff", border:"2px solid #D4AF37", borderRadius:12, padding:24, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:18 }}>Submit Daily Log</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:14 }}>
            <div><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>PROJECT</label>
              <select value={form.projectId} onChange={e=>setForm({...form,projectId:Number(e.target.value)})} style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 12px", fontSize:13 }}>
                {user.assignedProjects.map(pid=>{ const p=SAMPLE_PROJECTS.find(x=>x.id===pid); return p?<option key={pid} value={pid}>{p.name}</option>:null; })}
              </select></div>
            <div><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>DATE</label>
              <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 12px", fontSize:13 }} /></div>
            <div><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>WEATHER</label>
              <input value={form.weather} onChange={e=>setForm({...form,weather:e.target.value})} placeholder="e.g. Sunny 84°F" style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 12px", fontSize:13 }} /></div>
            <div><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>CREW SIZE</label>
              <input type="number" value={form.crew} onChange={e=>setForm({...form,crew:e.target.value})} placeholder="0" style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 12px", fontSize:13 }} /></div>
            <div><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>TOTAL HOURS</label>
              <input type="number" value={form.hours} onChange={e=>setForm({...form,hours:e.target.value})} placeholder="0" style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 12px", fontSize:13 }} /></div>
          </div>
          <div style={{ marginBottom:14 }}><label style={{ fontSize:11, color:"#888", display:"block", marginBottom:4, letterSpacing:1 }}>WORK PERFORMED</label>
            <textarea value={form.note} onChange={e=>setForm({...form,note:e.target.value})} rows={4} placeholder="Describe today's work, progress made, and any issues encountered..." style={{ width:"100%", border:"1px solid #E0E0E0", borderRadius:8, padding:"10px 12px", fontSize:13, resize:"vertical", boxSizing:"border-box" }} /></div>
          <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
            <button onClick={()=>setShowForm(false)} style={{ border:"1px solid #E0E0E0", background:"#fff", borderRadius:8, padding:"9px 18px", cursor:"pointer", fontSize:13 }}>Cancel</button>
            <button onClick={submit} style={{ background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:700, cursor:"pointer", fontSize:13 }}>Submit Log</button>
          </div>
        </div>
      )}
      {logs.map(log=>{
        const proj = SAMPLE_PROJECTS.find(p=>p.id===log.projectId);
        return (
          <div key={log.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20, marginBottom:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
              <div><div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{log.date}</div>
                <div style={{ fontSize:12, color:"#D4AF37", fontWeight:600, marginTop:2 }}>{proj?.name}</div></div>
              <div style={{ display:"flex", gap:14, fontSize:12, color:"#888" }}>
                <span>☀ {log.weather}</span><span>👷 {log.crew} crew</span><span>⏱ {log.hours}h</span><span>📷 {log.photos} photos</span>
              </div>
            </div>
            <div style={{ fontSize:13, color:"#444", lineHeight:1.6, background:"#F8F8F8", padding:"12px 14px", borderRadius:8 }}>{log.note}</div>
          </div>
        );
      })}
    </div>
  );
}

function ContractorPhotos({ user }) {
  const [photos, setPhotos] = useState(SAMPLE_PHOTOS.filter(ph=>user.assignedProjects.includes(ph.projectId)));
  const [caption, setCaption] = useState("");
  const [phase, setPhase] = useState("General");
  const [projId, setProjId] = useState(user.assignedProjects[0]||1);
  const upload = () => {
    if(!caption.trim()) return;
    setPhotos([{ id:Date.now(), projectId:Number(projId), date:new Date().toISOString().split("T")[0], caption, phase, thumb:"📷" }, ...photos]);
    setCaption(""); setPhase("General");
  };
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>Photo Upload</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Document site progress with photos from the field.</p>
      <div style={{ background:"#fff", border:"2px dashed #D4AF37", borderRadius:12, padding:24, marginBottom:24, textAlign:"center" }}>
        <div style={{ fontSize:36, marginBottom:10 }}>📷</div>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", marginBottom:4 }}>Upload Site Photos</div>
        <div style={{ fontSize:13, color:"#888", marginBottom:18 }}>Drag & drop or tap to select photos from your device</div>
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:14 }}>
          <select value={projId} onChange={e=>setProjId(e.target.value)} style={{ border:"1px solid #E0E0E0", borderRadius:8, padding:"8px 12px", fontSize:13 }}>
            {user.assignedProjects.map(pid=>{ const p=SAMPLE_PROJECTS.find(x=>x.id===pid); return p?<option key={pid} value={pid}>{p.name}</option>:null; })}
          </select>
          <select value={phase} onChange={e=>setPhase(e.target.value)} style={{ border:"1px solid #E0E0E0", borderRadius:8, padding:"8px 12px", fontSize:13 }}>
            {["General","Demo","Framing","Rough-In","MEP","Drywall","Finishes","Inspection","Materials"].map(ph=><option key={ph}>{ph}</option>)}
          </select>
          <input value={caption} onChange={e=>setCaption(e.target.value)} placeholder="Photo caption / description" style={{ border:"1px solid #E0E0E0", borderRadius:8, padding:"8px 12px", fontSize:13, width:260 }} />
        </div>
        <button onClick={upload} style={{ background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"10px 28px", fontWeight:700, fontSize:14, cursor:"pointer" }}>📤 Upload Photo</button>
      </div>
      <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Recent Photos</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
        {photos.map(ph=>{
          const proj=SAMPLE_PROJECTS.find(p=>p.id===ph.projectId);
          return (
            <div key={ph.id} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
              <div style={{ background:"#F5F5F5", height:110, display:"flex", alignItems:"center", justifyContent:"center", fontSize:44 }}>{ph.thumb}</div>
              <div style={{ padding:"12px 14px" }}>
                <div style={{ fontSize:12, fontWeight:600, color:"#1A1A1A", marginBottom:4 }}>{ph.caption}</div>
                <div style={{ fontSize:11, color:"#D4AF37", fontWeight:600 }}>{ph.phase}</div>
                <div style={{ fontSize:11, color:"#888", marginTop:2 }}>{proj?.name} · {ph.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContractorChangeOrders({ user }) {
  const [cos, setCOs] = useState(CONTRACTOR_CHANGE_ORDERS.filter(c=>c.contractorId===user.id));
  const sign = id=>setCOs(cos.map(c=>c.id===id?{...c,status:"Approved"}:c));
  const fmt = n=>"$"+Number(n).toLocaleString();
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>Change Orders</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Review and digitally sign change orders for additional scope.</p>
      {cos.map(co=>{
        const proj=SAMPLE_PROJECTS.find(p=>p.id===co.projectId);
        return (
          <div key={co.id} style={{ background:"#fff", border:`1px solid ${co.status==="Pending Approval"?"#D4AF3766":"#E0E0E0"}`, borderRadius:10, padding:22, marginBottom:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:16, fontWeight:700, color:"#1A1A1A" }}>{co.title}</div>
                <div style={{ fontSize:13, color:"#D4AF37", fontWeight:600, marginTop:2 }}>{proj?.name}</div>
                <div style={{ fontSize:13, color:"#555", marginTop:8, lineHeight:1.6 }}>{co.description}</div>
                <div style={{ fontSize:12, color:"#aaa", marginTop:6 }}>Submitted {co.date} · Ref: CO-{co.id.toString().padStart(3,"0")}</div>
              </div>
              <div style={{ textAlign:"right", marginLeft:24, flexShrink:0 }}>
                <div style={{ fontSize:24, fontWeight:700, color:"#1A1A1A", marginBottom:6 }}>{fmt(co.amount)}</div>
                <Badge status={co.status} />
              </div>
            </div>
            {co.status==="Pending Approval"&&(
              <div style={{ display:"flex", gap:10, paddingTop:14, borderTop:"1px solid #F0F0F0" }}>
                <button onClick={()=>sign(co.id)} style={{ flex:1, background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:8, padding:"11px", fontWeight:700, fontSize:13, cursor:"pointer" }}>✍ Sign & Approve</button>
                <button style={{ flex:1, background:"#fff", color:"#A32D2D", border:"1px solid #A32D2D44", borderRadius:8, padding:"11px", fontWeight:600, fontSize:13, cursor:"pointer" }}>Decline</button>
              </div>
            )}
            {co.status==="Approved"&&<div style={{ paddingTop:10, borderTop:"1px solid #F0F0F0", fontSize:12, color:"#0F6E56", fontWeight:600 }}>✓ Signed & Approved</div>}
          </div>
        );
      })}
    </div>
  );
}

function ContractorInvoices({ user }) {
  const [invoices] = useState(CONTRACTOR_INVOICES.filter(i=>i.contractorId===user.id));
  const fmt = n=>"$"+Number(n).toLocaleString();
  const totalPaid = invoices.filter(i=>i.status==="Paid").reduce((s,i)=>s+i.amount,0);
  const totalPending = invoices.filter(i=>i.status!=="Paid").reduce((s,i)=>s+i.amount,0);
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>My Invoices & Payments</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Track your submitted invoices and payment status from ROMCO.</p>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
        <StatCard label="Total Invoiced" value={fmt(invoices.reduce((s,i)=>s+i.amount,0))} sub="All submissions" />
        <StatCard label="Paid Out" value={fmt(totalPaid)} sub="Received from ROMCO" color="#0F6E56" />
        <StatCard label="Awaiting Payment" value={fmt(totalPending)} sub="Pending release" color="#D4AF37" />
      </div>
      {invoices.map(inv=>{
        const proj=SAMPLE_PROJECTS.find(p=>p.id===inv.projectId);
        return (
          <div key={inv.id} style={{ background:"#fff", border:`1px solid ${inv.status==="Paid"?"#E0E0E0":inv.status==="Overdue"?"#A32D2D44":"#D4AF3744"}`, borderRadius:10, padding:20, marginBottom:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A" }}>{inv.number}</div>
                <div style={{ fontSize:13, color:"#555", marginTop:3 }}>{inv.description}</div>
                <div style={{ fontSize:12, color:"#D4AF37", fontWeight:600, marginTop:2 }}>{proj?.name}</div>
                <div style={{ fontSize:12, color:"#aaa", marginTop:3 }}>Submitted: {inv.submitted}{inv.paid&&` · Paid: ${inv.paid}`}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1A", marginBottom:6 }}>{fmt(inv.amount)}</div>
                <Badge status={inv.status} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContractorMessages({ user }) {
  const [messages, setMessages] = useState(CONTRACTOR_MESSAGES.filter(m=>m.contractorId===user.id));
  const [msg, setMsg] = useState("");
  const [projId] = useState(user.assignedProjects[0]||1);
  const send = ()=>{ if(!msg.trim()) return; setMessages([...messages,{ id:Date.now(), contractorId:user.id, projectId:projId, from:user.name, fromType:"contractor", message:msg, date:new Date().toLocaleString(), read:false }]); setMsg(""); };
  const proj = SAMPLE_PROJECTS.find(p=>p.id===projId);
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>Messages</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>Direct communication with your ROMCO Project Manager.</p>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, overflow:"hidden" }}>
        <div style={{ padding:"16px 20px", borderBottom:"1px solid #E0E0E0", background:"#F8F8F8", display:"flex", gap:10, alignItems:"center" }}>
          <div style={{ width:36, height:36, borderRadius:"50%", background:"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, color:"#D4AF37" }}>JR</div>
          <div><div style={{ fontSize:13, fontWeight:700, color:"#1A1A1A" }}>{proj?.pm} — ROMCO Builders</div><div style={{ fontSize:11, color:"#888" }}>Project Manager · {proj?.pmPhone}</div></div>
        </div>
        <div style={{ padding:20, minHeight:300, maxHeight:380, overflowY:"auto", display:"flex", flexDirection:"column", gap:12 }}>
          {messages.map(m=>(
            <div key={m.id} style={{ display:"flex", flexDirection:m.fromType==="contractor"?"row-reverse":"row", gap:10 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:m.fromType==="contractor"?"#1A1A1A":"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:m.fromType==="contractor"?"#D4AF37":"#D4AF37", flexShrink:0 }}>
                {m.from.split(" ").map(n=>n[0]).join("").slice(0,2)}
              </div>
              <div style={{ maxWidth:"70%" }}>
                <div style={{ background:m.fromType==="contractor"?"#1A1A1A":"#F5F5F5", color:m.fromType==="contractor"?"#D4AF37":"#1A1A1A", padding:"10px 14px", borderRadius:m.fromType==="contractor"?"12px 12px 4px 12px":"12px 12px 12px 4px", fontSize:13, lineHeight:1.5 }}>{m.message}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:4, textAlign:m.fromType==="contractor"?"right":"left" }}>{m.from} · {m.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:"14px 20px", borderTop:"1px solid #E0E0E0", display:"flex", gap:10 }}>
          <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Message your PM..." style={{ flex:1, border:"1px solid #E0E0E0", borderRadius:8, padding:"10px 14px", fontSize:13 }} />
          <button onClick={send} style={{ background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"10px 20px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Send</button>
        </div>
      </div>
    </div>
  );
}

function ContractorCompliance({ user }) {
  const daysUntil = d=>Math.ceil((new Date(d)-new Date())/(1000*60*60*24));
  const licDays = daysUntil(user.licenseExp);
  const insDays = daysUntil(user.insuranceExp);
  const warn = (days)=>days<60;
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 6px" }}>License & Insurance</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 24px" }}>Your compliance documents on file with ROMCO Builders.</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:24 }}>
        <div style={{ background:"#fff", border:`2px solid ${warn(licDays)?"#A32D2D":"#0F6E56"}`, borderRadius:12, padding:24 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div><div style={{ fontWeight:700, fontSize:16, color:"#1A1A1A" }}>Contractor License</div><div style={{ fontSize:13, color:"#888", marginTop:2 }}>{user.trade} · State of Florida</div></div>
            <span style={{ fontSize:28 }}>{warn(licDays)?"⚠️":"✅"}</span>
          </div>
          <div style={{ fontSize:13, color:"#555", marginBottom:6 }}>License #: <strong>{user.licenseNo}</strong></div>
          <div style={{ fontSize:13, color:"#555", marginBottom:6 }}>Expiration: <strong>{user.licenseExp}</strong></div>
          <div style={{ fontSize:13, fontWeight:700, color:warn(licDays)?"#A32D2D":"#0F6E56", marginTop:12 }}>{warn(licDays)?`⚠ Expires in ${licDays} days — renewal needed`:"✓ License current and valid"}</div>
        </div>
        <div style={{ background:"#fff", border:`2px solid ${warn(insDays)?"#A32D2D":"#0F6E56"}`, borderRadius:12, padding:24 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div><div style={{ fontWeight:700, fontSize:16, color:"#1A1A1A" }}>Certificate of Insurance</div><div style={{ fontSize:13, color:"#888", marginTop:2 }}>General Liability + Workers Comp</div></div>
            <span style={{ fontSize:28 }}>{warn(insDays)?"⚠️":"✅"}</span>
          </div>
          <div style={{ fontSize:13, color:"#555", marginBottom:6 }}>COI on file with ROMCO</div>
          <div style={{ fontSize:13, color:"#555", marginBottom:6 }}>Expiration: <strong>{user.insuranceExp}</strong></div>
          <div style={{ fontSize:13, fontWeight:700, color:warn(insDays)?"#A32D2D":"#0F6E56", marginTop:12 }}>{warn(insDays)?`⚠ Expires in ${insDays} days — upload renewal`:"✓ Insurance current and on file"}</div>
        </div>
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:22 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Upload Renewal Documents</div>
        <div style={{ background:"#F8F8F8", border:"2px dashed #D4AF37", borderRadius:8, padding:28, textAlign:"center" }}>
          <div style={{ fontSize:32, marginBottom:8 }}>📎</div>
          <div style={{ fontWeight:600, fontSize:14, color:"#1A1A1A", marginBottom:4 }}>Drag & drop renewal documents</div>
          <div style={{ fontSize:12, color:"#888", marginBottom:14 }}>Accepted: PDF, JPG, PNG · Max 20MB</div>
          <button style={{ background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:8, padding:"10px 24px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Select Files to Upload</button>
        </div>
        <div style={{ marginTop:14, fontSize:12, color:"#888" }}>Documents are reviewed by ROMCO admin within 1 business day. Contact john@romcobuilders.com with questions.</div>
      </div>
    </div>
  );
}

function ContractorPortalShell({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const views = {
    dashboard: <ContractorDashboard user={user} />,
    schedule: <ContractorSchedule user={user} />,
    dailylogs: <ContractorDailyLogs user={user} />,
    photos: <ContractorPhotos user={user} />,
    changeorders: <ContractorChangeOrders user={user} />,
    invoices: <ContractorInvoices user={user} />,
    messages: <ContractorMessages user={user} />,
    compliance: <ContractorCompliance user={user} />,
  };
  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"Montserrat, Arial, sans-serif", overflow:"hidden" }}>
      <ContractorSidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      <div style={{ flex:1, overflowY:"auto", padding:"28px 32px", background:"#F2F2F2" }}>{views[activeTab]}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ADMIN CONTRACTOR MANAGER TAB
// ─────────────────────────────────────────────

function AdminContractors({ onPreviewContractor }) {
  const [selected, setSelected] = useState(null);
  const fmt = n=>"$"+Number(n).toLocaleString();
  const daysUntil = d=>Math.ceil((new Date(d)-new Date())/(1000*60*60*24));
  if(selected) {
    const c = selected;
    const myInvoices = CONTRACTOR_INVOICES.filter(i=>i.contractorId===c.id);
    const myCOs = CONTRACTOR_CHANGE_ORDERS.filter(co=>co.contractorId===c.id);
    const myProjects = SAMPLE_PROJECTS.filter(p=>c.assignedProjects.includes(p.id));
    // eslint-disable-next-line no-unused-vars
  const licDays = daysUntil(c.licenseExp);
    // eslint-disable-next-line no-unused-vars
  const insDays = daysUntil(c.insuranceExp);
    return (
      <div>
        <button onClick={()=>setSelected(null)} style={{ background:"none", border:"none", color:"#D4AF37", fontWeight:600, cursor:"pointer", fontSize:14, marginBottom:20, padding:0 }}>← Back to Contractors</button>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20 }}>
          <div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:24, marginBottom:18 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                  <div style={{ width:52, height:52, borderRadius:"50%", background:"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:"#D4AF37" }}>{c.initials}</div>
                  <div><div style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif" }}>{c.name}</div>
                    <div style={{ fontSize:14, color:"#D4AF37", fontWeight:600, marginTop:2 }}>{c.company}</div>
                    <div style={{ fontSize:13, color:"#888", marginTop:1 }}>{c.trade} · {c.phone}</div></div>
                </div>
                <div style={{ display:"flex", gap:8 }}>
                  {c.preferredVendor&&<span style={{ background:"#D4AF3722", color:"#D4AF37", fontSize:11, fontWeight:700, padding:"4px 12px", borderRadius:12 }}>⭐ Preferred</span>}
                  <span style={{ background:"#E1F5EE", color:"#0F6E56", fontSize:11, fontWeight:600, padding:"4px 12px", borderRadius:12 }}>{c.status}</span>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
                {[["Email",c.email],["Phone",c.phone],["Trade",c.trade]].map(([k,v])=>(
                  <div key={k}><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:1 }}>{k}</div><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A", marginTop:2 }}>{v}</div></div>
                ))}
              </div>
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20, marginBottom:18 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Invoices & Payments</div>
              {myInvoices.map(inv=>(
                <div key={inv.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"1px solid #F0F0F0" }}>
                  <div><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{inv.number}</div><div style={{ fontSize:12, color:"#555" }}>{inv.description}</div><div style={{ fontSize:11, color:"#aaa" }}>Submitted {inv.submitted}</div></div>
                  <div style={{ textAlign:"right" }}><div style={{ fontSize:16, fontWeight:700, color:"#1A1A1A" }}>{fmt(inv.amount)}</div><Badge status={inv.status} /></div>
                </div>
              ))}
              <div style={{ marginTop:14, paddingTop:14, borderTop:"1px solid #F0F0F0", display:"flex", gap:12 }}>
                <button style={{ background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Release Payment</button>
                <button style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px 18px", fontSize:13, cursor:"pointer" }}>+ Add Invoice</button>
              </div>
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Change Orders</div>
              {myCOs.map(co=>(
                <div key={co.id} style={{ padding:"10px 0", borderBottom:"1px solid #F0F0F0" }}>
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <div style={{ flex:1 }}><div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{co.title}</div><div style={{ fontSize:12, color:"#555", marginTop:2 }}>{co.description}</div></div>
                    <div style={{ textAlign:"right", marginLeft:14 }}><div style={{ fontSize:15, fontWeight:700 }}>{fmt(co.amount)}</div><Badge status={co.status} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18, marginBottom:16 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:14 }}>Compliance</div>
              {[["License",c.licenseNo,c.licenseExp,daysUntil(c.licenseExp)],["Insurance","COI on file",c.insuranceExp,daysUntil(c.insuranceExp)]].map(([lbl,ref,exp,days])=>(
                <div key={lbl} style={{ marginBottom:14, padding:12, borderRadius:8, background:days<60?"#FCEBEB":"#E1F5EE" }}>
                  <div style={{ fontSize:12, fontWeight:700, color:days<60?"#A32D2D":"#0F6E56" }}>{lbl} {days<60?"⚠ Expiring Soon":"✓ Valid"}</div>
                  <div style={{ fontSize:11, color:"#555", marginTop:3 }}>{ref}</div>
                  <div style={{ fontSize:11, color:"#555" }}>Exp: {exp} ({days}d)</div>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:18, marginBottom:16 }}>
              <div style={{ fontWeight:700, fontSize:14, fontFamily:"Montserrat, Arial, sans-serif", color:"#1A1A1A", marginBottom:12 }}>Assigned Projects</div>
              {myProjects.map(p=>(
                <div key={p.id} style={{ marginBottom:10 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:"#1A1A1A" }}>{p.name}</div>
                  <div style={{ fontSize:11, color:"#888" }}>{p.phase} · {p.completion}%</div>
                  <ProgressBar pct={p.completion} />
                </div>
              ))}
            </div>
            <button onClick={()=>onPreviewContractor(c)} style={{ width:"100%", background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:8, padding:"11px", fontWeight:700, fontSize:13, cursor:"pointer", marginBottom:10 }}>👁 Preview Contractor Portal</button>
            <button style={{ width:"100%", background:"#fff", border:"1px solid #E0E0E0", borderRadius:8, padding:"9px", fontSize:13, cursor:"pointer", color:"#555" }}>✉ Send Message</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div><h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:0 }}>Contractor Management</h2>
          <p style={{ color:"#888", fontSize:13, margin:"4px 0 0" }}>Manage subcontractors, compliance, and portal access.</p></div>
        <button style={{ background:"#D4AF37", color:"#1A1A1A", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:700, fontSize:13, cursor:"pointer" }}>+ Add Contractor</button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:28 }}>
        {CONTRACTOR_USERS.map(c=>{
          const licDays = daysUntil(c.licenseExp);
          const insDays = daysUntil(c.insuranceExp);
          const hasWarn = licDays<60||insDays<60;
          const totalEarned = CONTRACTOR_INVOICES.filter(i=>i.contractorId===c.id&&i.status==="Paid").reduce((s,i)=>s+i.amount,0);
          const pendingPay = CONTRACTOR_INVOICES.filter(i=>i.contractorId===c.id&&i.status!=="Paid").reduce((s,i)=>s+i.amount,0);
          return (
            <div key={c.id} style={{ background:"#fff", border:`1px solid ${hasWarn?"#D4AF3766":"#E0E0E0"}`, borderRadius:10, padding:20, cursor:"pointer" }} onClick={()=>setSelected(c)}>
              <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:14 }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:700, color:"#D4AF37" }}>{c.initials}</div>
                <div><div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{c.name}</div>
                  <div style={{ fontSize:12, color:"#D4AF37", fontWeight:600 }}>{c.company}</div>
                  <div style={{ fontSize:11, color:"#888" }}>{c.trade}</div></div>
              </div>
              <div style={{ display:"flex", gap:8, marginBottom:12 }}>
                {c.preferredVendor&&<span style={{ background:"#D4AF3715", color:"#D4AF37", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:10 }}>⭐ Preferred</span>}
                <span style={{ background:"#E1F5EE", color:"#0F6E56", fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>{c.status}</span>
                {hasWarn&&<span style={{ background:"#FAEEDA", color:"#854F0B", fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>⚠ Docs Expiring</span>}
              </div>
              <div style={{ display:"flex", gap:16, marginBottom:12 }}>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Paid Out</div><div style={{ fontSize:14, fontWeight:700, color:"#0F6E56" }}>{fmt(totalEarned)}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Pending</div><div style={{ fontSize:14, fontWeight:700, color:"#D4AF37" }}>{fmt(pendingPay)}</div></div>
                <div><div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase" }}>Projects</div><div style={{ fontSize:14, fontWeight:700, color:"#1A1A1A" }}>{c.assignedProjects.length}</div></div>
              </div>
              <div style={{ fontSize:11, color:"#aaa" }}>Login: {c.email}</div>
            </div>
          );
        })}
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Contractor Portal Credentials</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Contractor","Trade","Email","Password","License Exp","Insurance Exp","Status"].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>{CONTRACTOR_USERS.map((c,i)=>{
            const licDays=daysUntil(c.licenseExp); const insDays=daysUntil(c.insuranceExp);
            return (
              <tr key={c.id} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                <td style={{ padding:"12px 14px", fontWeight:600, color:"#1A1A1A" }}>{c.name}</td>
                <td style={{ padding:"12px 14px", color:"#555" }}>{c.trade}</td>
                <td style={{ padding:"12px 14px", color:"#444" }}>{c.email}</td>
                <td style={{ padding:"12px 14px" }}><code style={{ background:"#F5F5F5", padding:"2px 8px", borderRadius:4, fontSize:12 }}>{c.password}</code></td>
                <td style={{ padding:"12px 14px" }}><span style={{ color:licDays<60?"#A32D2D":"#555", fontWeight:licDays<60?700:400 }}>{c.licenseExp}{licDays<60&&" ⚠"}</span></td>
                <td style={{ padding:"12px 14px" }}><span style={{ color:insDays<60?"#A32D2D":"#555", fontWeight:insDays<60?700:400 }}>{c.insuranceExp}{insDays<60&&" ⚠"}</span></td>
                <td style={{ padding:"12px 14px" }}><span style={{ background:"#E1F5EE", color:"#0F6E56", fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:12 }}>Active</span></td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ADMIN CRM SHELL
// ─────────────────────────────────────────────

const ADMIN_NAV = [
  { id:"dashboard", label:"Dashboard", icon:"⊞" },
  { id:"leads", label:"Lead Pipeline", icon:"◈" },
  { id:"projects", label:"Projects", icon:"⬡" },
  { id:"contacts", label:"Contacts", icon:"◎" },
  { id:"docs", label:"Documents", icon:"▤" },
  { id:"tasks", label:"Tasks", icon:"✓" },
  { id:"financials", label:"Financials", icon:"$" },
  { id:"contractors", label:"Contractors", icon:"🔧" },
  { id:"portal", label:"Client Portal", icon:"👤" },
];

function AdminPortalManager({ onSwitchToClientView }) {
  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:700, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", margin:"0 0 8px" }}>Client Portal Manager</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 24px" }}>Manage client portal access and preview each client's view.</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:28 }}>
        {CLIENT_PORTAL_USERS.map(u=>{
          const proj = SAMPLE_PROJECTS.find(p=>p.id===u.projectId);
          const pendingCOs = SAMPLE_CHANGE_ORDERS.filter(c=>c.projectId===u.projectId&&c.status==="Pending Approval").length;
          const pendingInv = SAMPLE_INVOICES.filter(i=>i.projectId===u.projectId&&["Pending","Overdue"].includes(i.status)).length;
          return (
            <div key={u.email} style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
              <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:14 }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"#E6F1FB", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:700, color:"#185FA5" }}>{u.initials}</div>
                <div><div style={{ fontWeight:700, fontSize:14, color:"#1A1A1A" }}>{u.name}</div><div style={{ fontSize:11, color:"#888" }}>{u.email}</div></div>
              </div>
              <div style={{ fontSize:12, color:"#555", marginBottom:4 }}>📁 {proj?.name}</div>
              <div style={{ marginBottom:12 }}>
                <ProgressBar pct={proj?.completion||0} />
                <div style={{ fontSize:11, color:"#888", marginTop:4 }}>{proj?.completion}% · {proj?.phase}</div>
              </div>
              <div style={{ display:"flex", gap:8, marginBottom:14 }}>
                {pendingCOs>0&&<span style={{ background:"#FAEEDA", color:"#854F0B", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>{pendingCOs} CO pending</span>}
                {pendingInv>0&&<span style={{ background:"#E6F1FB", color:"#185FA5", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>{pendingInv} invoice due</span>}
              </div>
              <button onClick={()=>onSwitchToClientView(u)} style={{ width:"100%", background:"#1A1A1A", color:"#fff", border:"none", borderRadius:8, padding:"9px", fontWeight:600, fontSize:12, cursor:"pointer" }}>Preview Portal →</button>
            </div>
          );
        })}
      </div>
      <div style={{ background:"#fff", border:"1px solid #E0E0E0", borderRadius:10, padding:20 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1A1A1A", fontFamily:"Montserrat, Arial, sans-serif", marginBottom:14 }}>Portal Login Credentials</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:"#F5F5F5", borderBottom:"1px solid #E0E0E0" }}>
            {["Client","Email","Password","Project","Portal Status"].map(h=><th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#555", fontSize:12 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {CLIENT_PORTAL_USERS.map((u,i)=>(
              <tr key={u.email} style={{ borderBottom:"1px solid #EBEBEB", background:i%2===0?"#fff":"#FAFAFA" }}>
                <td style={{ padding:"12px 14px", fontWeight:600, color:"#1A1A1A" }}>{u.name}</td>
                <td style={{ padding:"12px 14px", color:"#444" }}>{u.email}</td>
                <td style={{ padding:"12px 14px" }}><code style={{ background:"#F5F5F5", padding:"2px 8px", borderRadius:4, fontSize:12 }}>{u.password}</code></td>
                <td style={{ padding:"12px 14px", color:"#555" }}>{SAMPLE_PROJECTS.find(p=>p.id===u.projectId)?.name}</td>
                <td style={{ padding:"12px 14px" }}><span style={{ background:"#E1F5EE", color:"#0F6E56", fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:12 }}>Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminCRMShell({ onLogout, onPreviewClient, onPreviewContractor }) {
  const [active, setActive] = useState("dashboard");
  const unreadMsgs = SAMPLE_MESSAGES.filter(m=>!m.read&&m.fromType==="client").length;
  const contractorAlerts = CONTRACTOR_USERS.filter(c=>{
    const ld=Math.ceil((new Date(c.licenseExp)-new Date())/(1000*60*60*24));
    const id=Math.ceil((new Date(c.insuranceExp)-new Date())/(1000*60*60*24));
    return ld<60||id<60;
  }).length;

  const views = {
    dashboard:<AdminDashboard />, leads:<LeadPipeline />, projects:<Projects />,
    contacts:<Contacts />, docs:<Documents />, tasks:<Tasks />, financials:<Financials />,
    contractors:<AdminContractors onPreviewContractor={onPreviewContractor} />,
    portal:<AdminPortalManager onSwitchToClientView={onPreviewClient} />,
  };

  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"Montserrat, Arial, sans-serif", background:"#F2F2F2", overflow:"hidden" }}>
      <div style={{ width:225, background:"#1A1A1A", display:"flex", flexDirection:"column", flexShrink:0 }}>
        <div style={{ padding:"20px 18px 16px", borderBottom:"1px solid #2A2A2A" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", border:"1.5px solid #D4AF37", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="16" height="19" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4 L4 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
                <path d="M4 4 L24 4 Q34 4 34 14 Q34 24 24 24 L4 24" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M18 24 L34 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily:"Montserrat, Arial, sans-serif", fontWeight:700, fontSize:16, color:"#fff", letterSpacing:3, lineHeight:1 }}>ROMCO</div>
              <div style={{ fontSize:9, color:"#D4AF37", letterSpacing:3, fontWeight:600, marginTop:2 }}>BUILDERS</div>
            </div>
          </div>
          <div style={{ fontSize:9, color:"#666", marginTop:6, letterSpacing:1 }}>romcobuilders.com</div>
        </div>
        <nav style={{ flex:1, padding:"12px 0" }}>
          {ADMIN_NAV.map(item=>(
            <button key={item.id} onClick={()=>setActive(item.id)} style={{ display:"flex", alignItems:"center", gap:10, width:"100%", padding:"11px 18px", background:active===item.id?"#2A2A2A":"none", border:"none", color:active===item.id?"#D4AF37":"#9A9A9A", cursor:"pointer", fontSize:13, fontWeight:active===item.id?600:400, textAlign:"left", borderLeft:active===item.id?"3px solid #D4AF37":"3px solid transparent" }}>
              <span style={{ fontSize:15, lineHeight:1 }}>{item.icon}</span>
              <span style={{ flex:1 }}>{item.label}</span>
              {item.id==="portal"&&unreadMsgs>0&&<span style={{ background:"#D4AF37", color:"#1A1A1A", fontSize:10, fontWeight:700, width:18, height:18, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{unreadMsgs}</span>}
              {item.id==="contractors"&&contractorAlerts>0&&<span style={{ background:"#A32D2D", color:"#fff", fontSize:10, fontWeight:700, width:18, height:18, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{contractorAlerts}</span>}
            </button>
          ))}
        </nav>
        <div style={{ padding:"14px 18px", borderTop:"1px solid #2A2A2A" }}>
          <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
            <div style={{ width:32, height:32, borderRadius:"50%", background:"#D4AF3722", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#D4AF37" }}>JR</div>
            <div><div style={{ fontSize:12, fontWeight:600, color:"#fff" }}>John Romano</div><div style={{ fontSize:10, color:"#888888" }}>Partner / Owner</div></div>
          </div>
          <button onClick={onLogout} style={{ width:"100%", background:"none", border:"1px solid #2A2A2A", borderRadius:8, padding:"7px", color:"#888888", fontSize:12, cursor:"pointer" }}>Sign Out</button>
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"28px 32px" }}>{views[active]}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────

export default function RomcoCRM() {
  const [appState, setAppState] = useState("login"); // "login"|"admin"|"client"|"contractor"|"preview"|"contractorPreview"
  const [clientUser, setClientUser] = useState(null);
  const [contractorUser, setContractorUser] = useState(null);
  const [previewUser, setPreviewUser] = useState(null);
  const [previewContractor, setPreviewContractor] = useState(null);

  if(appState==="login") {
    return <LoginScreen
      onLogin={(user)=>{ setClientUser(user); setAppState("client"); }}
      onAdminLogin={()=>setAppState("admin")}
      onContractorLogin={(user)=>{ setContractorUser(user); setAppState("contractor"); }}
    />;
  }
  if(appState==="client") {
    return <ClientPortalShell user={clientUser} onLogout={()=>{ setClientUser(null); setAppState("login"); }} />;
  }
  if(appState==="contractor") {
    return <ContractorPortalShell user={contractorUser} onLogout={()=>{ setContractorUser(null); setAppState("login"); }} />;
  }
  if(appState==="preview") {
    return (
      <div style={{ position:"relative" }}>
        <div style={{ position:"fixed", top:0, left:0, right:0, background:"#D4AF37", color:"#1A1A1A", padding:"10px 20px", zIndex:999, display:"flex", alignItems:"center", gap:16, fontSize:13 }}>
          <span style={{ fontWeight:700 }}>👁 Admin Preview — Client Portal</span>
          <span>Viewing as: {previewUser.name}</span>
          <button onClick={()=>{ setPreviewUser(null); setAppState("admin"); }} style={{ marginLeft:"auto", background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontWeight:600, fontSize:12 }}>← Back to CRM</button>
        </div>
        <div style={{ marginTop:44 }}>
          <ClientPortalShell user={previewUser} onLogout={()=>{ setPreviewUser(null); setAppState("admin"); }} />
        </div>
      </div>
    );
  }
  if(appState==="contractorPreview") {
    return (
      <div style={{ position:"relative" }}>
        <div style={{ position:"fixed", top:0, left:0, right:0, background:"#D4AF37", color:"#1A1A1A", padding:"10px 20px", zIndex:999, display:"flex", alignItems:"center", gap:16, fontSize:13 }}>
          <span style={{ fontWeight:700 }}>👁 Admin Preview — Contractor Portal</span>
          <span>Viewing as: {previewContractor.name} · {previewContractor.company}</span>
          <button onClick={()=>{ setPreviewContractor(null); setAppState("admin"); }} style={{ marginLeft:"auto", background:"#1A1A1A", color:"#D4AF37", border:"none", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontWeight:600, fontSize:12 }}>← Back to CRM</button>
        </div>
        <div style={{ marginTop:44 }}>
          <ContractorPortalShell user={previewContractor} onLogout={()=>{ setPreviewContractor(null); setAppState("admin"); }} />
        </div>
      </div>
    );
  }
  return (
    <AdminCRMShell
      onLogout={()=>setAppState("login")}
      onPreviewClient={(user)=>{ setPreviewUser(user); setAppState("preview"); }}
      onPreviewContractor={(user)=>{ setPreviewContractor(user); setAppState("contractorPreview"); }}
    />
  );
}
