function DashboardInfo({ title, count, subInfo }) {
    return (
        <>
        <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                {title}
                <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                    ></path>
                </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                {count}
                </span>
                {subInfo && (
                <span className="hind-font caption-12 c-dashboardInfo__subInfo">
                    {subInfo}
                </span>
                )}
            </div>
        </div>
        </>
    );
}

export default DashboardInfo;
