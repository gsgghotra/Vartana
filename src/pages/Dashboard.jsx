import '../assets/js/customDashboard.css';
import Applications from './DashboardElements/Applications';
import DashboardInfo from './DashboardElements/DashboardInfo';

const Dashbaord =() => {
    return(
        <>
            <main className='container-main' style={{ width: '78%'}}>
                <div id="root"  style={{height:'fitContent', overflowY:'scroll', borderRadius:'16px', margin:'20px 20px'}}>
                    <h5 style={{ width: '98%', margin: '10px auto' }}>Dashboard</h5>
                    <div className="container pt-1 mt-1 mb-3">
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
                    <h5 style={{ width: '98%', margin: '10px auto' }}>Applications</h5>
                    <div className="container mb-3">
                        <Applications />
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Dashbaord;