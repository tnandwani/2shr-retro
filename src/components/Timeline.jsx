import React, { useState } from 'react'
import { Slider, Cutout } from 'react95'

export default function Timeline() {

    let [year, setYear] = useState(2022)

    return (
        <div className='mx-4 my-3'>
            <Cutout>
                <div className='text-center '>
                    <h1>In {year} ...</h1>
                    {year == 2013 &&
                        <h1 className='m-2'>I learned competed in FIRST robotics competition</h1>
                    }
                    {year == 2014 &&
                        <h1 className='m-2'>I learned some C++</h1>
                    }
                    {year == 2015 &&
                        <h1 className='m-2'>I learned some Python. Sorta.</h1>
                    }
                    {year == 2016 &&
                        <h1 className='m-2'>I learned some Swift. It had just come out at the time</h1>
                    }
                    {year == 2017 &&
                        <h1 className='m-2'>I learned the fundamentals of web development. The holy trinity of HTML, CSS, and JS</h1>
                    }
                    {year == 2018 &&
                        <h1 className='m-2'>I learned some React. When it was still class based</h1>
                    }
                    {year == 2019 &&
                        <h1 className='m-2'>I got way better at React. Started using Redux and functional components</h1>
                    }
                    {year == 2020 &&
                        <h1 className='m-2'>I learned some R and Postgres SQL for my finance job</h1>
                    }
                    {year == 2021 &&
                        <h1 className='m-2'>I learned some React Native.</h1>
                    }
                    {year == 2022 &&
                        <h1 className='m-2'>Launched my first cross platform app.</h1>
                    }

                </div>
            </Cutout>
            <div className='mt-2'>

                <Slider
                    size='100%'
                    min={2013}
                    max={2022}
                    step={1}
                    defaultValue={year}
                    onChange={(value) => {
                    
                        if (value.target.ariaValueNow) {
                            setYear(value.target.ariaValueNow)
                        }
                        
                        
                    }}
                   
                    marks={[
                        { value: 2013, label: '2013' },
                        { value: 2014, label: '2014' },
                        { value: 2015, label: '2015' },
                        { value: 2016, label: '2016' },
                        { value: 2017, label: '2017' },
                        { value: 2018, label: '2018' },
                        { value: 2019, label: '2019' },
                        { value: 2020, label: '2020' },
                        { value: 2021, label: '2021' },
                        { value: 2022, label: 'Now' },
                    ]}
                />
            </div>



        </div>
    )
}
