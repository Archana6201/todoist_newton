import React from 'react'

const Sidebar = ({selectedTab, setselectedTab}) => {
   
    return (
        <div className="sidebar">
            <div className={selectedTab === "INBOX" ? "active" : ""} onClick={() => setselectedTab("INBOX")}><i class="fas fa-inbox"></i>My Tasks</div>
            <div className={selectedTab === "TODAY" ? "active" : ""} onClick={() => setselectedTab("TODAY")}><i class="far fa-calendar"></i>Today</div>
            <div className={selectedTab === "NEXT_7" ? "active" : ""} onClick={() => setselectedTab("NEXT_7")}><i class="far fa-calendar-alt"></i> Next 7 days</div>
        </div>
    )
}

export default Sidebar;
