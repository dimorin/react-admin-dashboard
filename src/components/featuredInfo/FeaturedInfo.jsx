import React from 'react';
import './featuredInfo.css';
import ArrowDownardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpardIcon from '@mui/icons-material/ArrowUpward';
const FeaturedInfo = (props) => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownardIcon className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownardIcon className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowUpardIcon className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
};

export default FeaturedInfo;