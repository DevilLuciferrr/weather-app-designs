import React from 'react'
import {Line} from 'react-chartjs-2';
import wind from '../assests/wind.jpg'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js';
import "./Broadcast.css"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)

const Broadcast = () => {
    const data ={
        labels:['23%','29%','58%','75%','33%','20%','73%','49%'],
        datasets:[{
            data:[23,29,58,75,33,20,73,49],
            backgroundColor:'#5c9ce5',
            borderColor:'#5c9ce5',
            fill:true,
            pointRadius:0,
            showLine:false
            // tension:0.4
        }]
    }

    const options={
        aspectRatio:12,
        plugins:{
            legend:false
        },
        scales:{
            y:{
                min:0,
                max:100,
                grid:{
                    display:false
                },
                ticks:{
                    display:false
                }
            },
            x:{
                grid:{
                    color:'grey'
                }
            }
            
        }       
    }
  return (
    <div className='broadcast'>
        <div className="brief">
            <div className="top">
                <span class="material-icons-outlined">add_box</span>                
                <div className='scroll'>
                    <div className="line"></div>
                    <div className='bt'></div>
                    <div className='bt'></div>
                </div>
                <div className='temp-ch'>
                    <p>°C</p>
                    <div className='toggle'>
                        <div className="t-left"></div>
                        <div className="t-right"></div>
                    </div>
                    <p>°F</p>
                </div>
            </div>
            <div className="mid">
                <div className="mid-1">
                    <div className='mid12'>
                        <span class="material-icons-outlined">near_me</span>                
                        <span> New York, USA </span>
                    </div>
                    <div className='mid12'> 
                        <span class="material-icons-outlined">
                            wb_twilight
                        </span>
                        <span>07:19</span> 
                    </div>
                </div>
                
                <div className="mid-2">
                    <span>Today 28 Sept</span>
                    <div className='mid12'>
                        <span class="material-icons-outlined">
                            solar_power
                        </span>
                        <span>19:32</span> 
                    </div>
                </div>
            </div>
            <div className="bottom">
                <span class="material-icons-outlined">arrow_back_ios</span>
                <span>27°</span>
                <span class="material-icons-outlined">arrow_forward_ios</span>
            </div>
            <div className="end mid12">
                <span className='material-icons-outlined'>light_mode</span>
                <span>Sunny</span> 
            </div>
        </div>
        <div className="detail">
            <div className="d-top">
                <div className="d-left">
                    <span><b>Welcome back Isabella!</b></span>
                    <span>Check out today's weather information</span>
                </div>
                <div className="d-right">
                    <span className="material-icons-outlined">more_horiz</span>
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEGRRM_Ch7UY-Wi9QYHWH99vKSTMXIpfKZg&usqp=CAU" alt="" style={{height:"2rem",width:"2rem",borderRadius:"10px"}}/></span>
                </div>
            </div>
            <div className="prediction">
                <div className="pred-1">
                    <div className="pred-1-left">
                        Upcoming hours
                    </div>
                    <div className="pred-1-right">
                        <div className="cont">
                            <span className='cont-1'>Rain precipitation</span>
                            <span className="material-icons-outlined cont-1">expand_more</span>
                        </div>
                        <div className="cont">
                            <span>Next days</span>
                            <span className="material-icons-outlined">chevron_right</span>
                        </div>
                    </div>
                </div>
                <div className="pred-2">
                        <div className="date-temp" style={{marginLeft:'5px'}}>
                            <span>Now</span>
                            <span className="material-icons-outlined">light_mode</span>
                            <span>27°</span>
                        </div>
                        <div className="date-temp">
                            <span>11:00</span>
                            <span className="material-icons-outlined">light_mode</span>
                            <span>28°</span>
                        </div>
                        <div className="date-temp">
                            <span>12:00</span>
                            <span className="material-icons-outlined">cloud</span>
                            <span>28°</span>
                        </div>
                        <div className="date-temp">
                            <span>13:00</span>
                            <span className="material-icons-outlined">cloud</span>
                            <span>29°</span>
                        </div>
                        <div className="date-temp">
                            <span>14:00</span>
                            <span className="material-icons-outlined">light_mode</span>
                            <span>30°</span>
                        </div>
                        <div className="date-temp">
                            <span>15:00</span>
                            <span className="material-icons-outlined">cloud</span>
                            <span>29°</span>
                        </div>
                        <div className="date-temp">
                            <span>16:00</span>
                            <span className="material-icons-outlined">cloud</span>
                            <span>29°</span>
                        </div>
                        <div className="date-temp" style={{marginRight:'5px'}}>
                            <span>17:00</span>
                            <span className="material-icons-outlined">light_mode</span>
                            <span>28°</span>
                        </div>
                </div>
                <div className="pred-3" >
                    <Line
                        style={{width:'100%',height:'300px'}}
                        data={data}
                        options={options}
                    >
                    </Line>
                </div>
            </div>
            <span className='det'><b>More details of today's weather</b></span>
            <div className="more-details">
                <div className="humidity">
                    <div className="h-1">
                        <span>Humidity</span>
                        <span className="material-icons-outlined stat">water_drop</span>
                    </div>
                    <div className="h-2">
                        <span><b>82%</b></span>
                        &nbsp;
                        <span className='bad'>bad</span>
                    </div>
                    <div className="h-3">
                        <div className="gd">
                            <span>good</span>
                            <span>normal</span>
                            <span>bad</span>
                        </div>
                        <div className="nm">
                            <div className='nm-1'></div>
                            <div className='nm-1'></div>                            
                            <div className='nm-3'>
                                <div className='nm-3-1'></div>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wind">
                    <div className="w-1">
                        <span>Wind</span>
                        <span className="material-icons-outlined stat">air</span>
                    </div>
                    <div className="w-2">
                        <div className="curve-1">
                              <img src={wind} style={{width:'100%',height:'5vh'}} />                                                
                        </div>                        
                    </div>
                </div>

                <div className="precipitation">
                    <div className="p-1">
                        <span>Precipitation</span>
                        <span className="material-icons-outlined stat">thunderstorm</span>
                    </div>
                    <div className="p-2">
                      <b>1.4 cm</b>  
                    </div>
                    <div className="p-3">
                        <div className="aa">
                            <span>00</span>
                            <span>10</span>
                            <span>20</span>
                            <span>30</span>
                            <span>40</span>
                            <span>50</span>
                            <span>60</span>
                            <span>70</span>
                            <span>80</span>
                            <span>90</span>
                        </div>
                        <div className="bb">
                            <div className='nm-1'></div>
                            <div className='nm-2'>
                                <div className="nm-1-1"></div>
                            </div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-2'></div>
                            <div className='nm-4'></div>
                        </div>
                    </div>
                </div>
                <div className="humidity">
                    <div className="h-1">
                        <span>UV index</span>
                        <span className="material-icons-outlined stat">light_mode</span>
                    </div>
                    <div className="h-2">
                        <span><b>4</b></span>
                        &nbsp;
                        <span className='bad'>medium</span>
                    </div>
                    <div className="u-3">
                        <div className="gd">
                            <span>0-2</span>
                            <span>3-5</span>
                            <span>6-7</span>
                            <span>8-10</span>
                            <span>11+</span>
                        </div>
                        <div className="nm">
                            <div className='nm-1'></div>                           
                            <div className='nm-3' style={{marginRight:'5px'}}>
                                <div className='nm-3-2'></div>
                                <span></span>
                            </div>
                            <div className="nm-2"></div>
                            <div className="nm-2"></div>
                            <div className="nm-4"></div>
                        </div>
                    </div>
                </div>
                <div className="humidity">
                    <div className="h-1">
                        <span>Feels Like</span>
                        <span className="material-icons-outlined stat">thermostat</span>
                    </div>
                    <div className="h-2">
                        <span><b>30°</b></span>
                    </div>
                    <div className="u-3">
                        <div className="gd">
                            <span>0°</span>
                            <span>25°</span>
                            <span>50°</span>
                        </div>
                        <div className="nm">                           
                            <div className='nm-3'>
                                <div className='nm-3-3'></div>
                                <span></span>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="humidity">
                    <div className="h-1">
                        <span>Chance of rain</span>
                        <span className="material-icons-outlined stat">beach_access</span>
                    </div>
                    <div className="h-2">
                        <span><b>42%</b></span>
                    </div>
                    <div className="u-3">
                        <div className="gd">
                            <span>0%</span>
                            <span>25%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                        </div>
                        <div className="nm">                           
                            <div className='nm-3'>
                                <div className='nm-3-4'></div>
                                <span></span>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Broadcast