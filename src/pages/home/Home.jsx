import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import data from '../../db'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title={"User Analytics"} data={data} dataKey={"uv"} grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />    
            </div> 
        </div>
    )
}
