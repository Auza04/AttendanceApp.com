import B from '../assets/back.jpg';
import Prof from '../assets/Profile.png';
import CS from '../assets/CSlogo.png'
import MEM from '../assets/members.png'
import LS from '../assets/list.png';
import SC from '../assets/scan.png';
import CR from '../assets/create.png'
export default function Admin() {
    
    return (
        <>
            <div className="row" style={{ position: 'relative' }}>
                <div className="col-12">
                    <img src={B} style={{ width: '100%', position: 'relative' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '20%',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        pointerEvents: 'none'
                    }}></div>
                    <img src={CS} alt="" style={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '5rem',
                        height: '5rem',
                    }} />
                    <img src={Prof} alt="" style={{
                        position: 'absolute',
                        top: '55%',
                        left: '20%',
                        transform: 'translate(-50%, -50%)',
                        width: '10rem'
                    }} />
                    <h1 style={{
                        position: 'absolute',
                        top: '55%',
                        left: '35%',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        textAlign: 'center'
                    }}>Joshua Miguel, Venegas</h1>
                    <h1 style={{
                        position: 'absolute',
                        top: '72%',
                        left: '9%',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '3rem'
                    }}>Admin</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <img src={CS} alt="" style={{
                        position: 'absolute',
                        top: '35%',
                        left: '1%',
                        width: '40rem',
                        opacity: '0.2'
                    }} />
                </div>
            </div>

            <div className="row">
                <div className="col-6" style={{
                    width: '18rem',
                    marginLeft: '2rem',
                    marginTop: '-2rem',
                }}>
                    <div className="card" style={{
                        height: '20rem',
                        borderRadius: '1.5rem',
                        boxShadow: '6px 6px 5px rgba(1, 19 ,225 ,0.2 ) ',
                        cursor: 'pointer',
                    }}>
                        <div className="card-body">
                            <img src={MEM} alt="" style={{
                                position: 'absolute',
                                top: '15%',
                                left: '25%',
                                width: '8rem',
                                height: '8rem',
                                borderRadius: '50%',
                                border: '2px solid blue'
                            }} />
                        </div>
                        <button className='btn btn-primary'
                            style={{
                                position: 'absolute',
                                top: '70%',
                                left: '19%',
                                width: '10rem',
                                height: '3rem',
                                borderRadius: '2rem'
                            }} onClick={() => window.location.href = '/CreateMembers'}>Create Members</button>
                    </div>
                </div>

                <div className="col-6" style={{
                    width: '18rem',
                    marginLeft: '2rem',
                    marginTop: '-2rem',
                }}>
                    <div className="card" style={{
                        height: '20rem',
                        borderRadius: '1.5rem',
                        boxShadow: '6px 6px 5px rgba(1, 19 ,225 ,0.2 ) ',
                        cursor: 'pointer',
                    }}>
                        <div className="card-body">
                            <img src={LS} alt="" style={{
                                position: 'absolute',
                                width: '8rem',
                                height: '8rem',
                                top: '15%',
                                left: '25%',
                                border: '2px solid black',
                                borderRadius: '50%',
                            }} />
                        </div>
                        <h1 style={{
                            position: 'absolute',
                            top: '70%',
                            left: '16%',
                        }}>
                            Member List
                        </h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6" style={{
                    width: '18rem',
                    marginLeft: '2rem',
                    marginTop: '4rem',
                }}>
                    <div className="card" style={{
                        height: '20rem',
                        borderRadius: '1.5rem',
                        boxShadow: '6px 6px 5px rgba(1, 19 ,225 ,0.2 ) ',
                        cursor: 'pointer',
                    }}>
                        <div className="card-body">
                            <img src={CR} alt="" style={{
                                position: 'absolute',
                                top: '15%',
                                left: '25%',
                                width: '8rem',
                                height: '8rem',
                                borderRadius: '50%',
                                border: '2px solid black'
                            }} />
                        </div>

                        <h1 style={{
                            position: 'absolute',
                            top: '70%',
                            left: '15%',
                        }}>
                            Create Event
                        </h1>
                    </div>
                </div>

                <div className="col-6" style={{
                    width: '18rem',
                    marginLeft: '2rem',
                    marginTop: '4rem',
                }}>
                    <div className="card" style={{
                        height: '20rem',
                        borderRadius: '1.5rem',
                        boxShadow: '6px 6px 5px rgba(1, 19 ,225 ,0.2 ) ',
                        cursor: 'pointer',
                    }}>
                        <div className="card-body">
                            <img src={SC} alt="" style={{
                                position: 'absolute',
                                width: '8rem',
                                height: '8rem',
                                top: '15%',
                                left: '25%',
                                border: '2px solid black',
                                borderRadius: '50%',
                            }} />
                        </div>
                        <h1 style={{
                            position: 'absolute',
                            top: '70%',
                            left: '37%',
                        }}>
                            Scan
                        </h1>
                    </div>
                </div>
            </div>
            <h1 style={{
                position: 'absolute',
                top: '92%',
                left: '38%',
                opacity: '0.2',
                fontSize: '25px'

            }}>
                All right reserve
            </h1>
            <h1 style={{
                position: 'absolute',
                top: '95%',
                left: '12%',
                opacity: '0.2',

            }}>
                Cubay Sermon Attendance System
            </h1>
        </>
    )
}