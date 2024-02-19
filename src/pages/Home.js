import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';

function HomePage(props) {
    return (
        <>
            <div className="bg-black h-[100vh] w-[100vw]">
                <div className="fixed top-0 left-0 z-[89] h-0 w-0">
                    <div className="rounded-[20px] overflow-hidden fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-[448px] rounded-[20px] shadow-[rgba(0, 0, 0, 0.15) 0px 4px 12px] flex-col justify-between inline-flex transform scale-[0.7] p-[16px] h-[840px] bg-[#101010]">
                            <Home {...props} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    UserName: state.UserName,
});
export default connect(mapStateToProps)(HomePage);
