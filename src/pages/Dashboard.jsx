import '../assets/js/customDashboard.css';
import Applications from './DashboardElements/Applications';
import DashboardInfo from './DashboardElements/DashboardInfo';

const Dashbaord =() => {
    return(
        <>
            <main className='container-main'>
                <h4>Dashboard</h4>
                <div id="root">
                    <div className="container pt-5 m-0">
                        <div className="row align-items-stretch">
                            <DashboardInfo title="Applications" count="2" />
                            <DashboardInfo
                                title="Weekly errors"
                                count="43"
                                subInfo="Last week: 56"
                            />
                            <DashboardInfo title="In Development" count="2" />
                            <DashboardInfo title="Published Apps" count="0" />
                        </div>
                    </div>
                    <div className="pt-5">
                        <h4>Applications</h4>
                        <Applications />
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Dashbaord;