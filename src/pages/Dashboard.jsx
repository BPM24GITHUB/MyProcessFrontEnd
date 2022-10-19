import React from 'react';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked,Pie,Button,SparkLine } from '../components';
import { earningData,SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  return (
    <div className='mt-2'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center hover:drop-shadow-xl'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl  w-full  p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-hero-pattern lg:w-120
        ' >
          <div className='flex justify-between items-center'>
          <div>
              <p className="font-bold text-gray-400">Documentation</p>
              <p className="text-3x">More than 2000 processes </p>
              
            </div>
          </div>
            <div className='mt-6'>
                <Button
                  color="white"
                  bgColor="blue"
                  text="Get Started"
                  borderRadius="10px"
                  size="md"
                />
            </div>
        </div>
        </div>
          <div className='flex m-3  flex-wrap justify-between gap-1 item-center '>
            { earningData.map(item => (
              <div
                className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl hover:drop-shadow-xl'
              >
                <button 
                  type='button'
                  style={{color:item.color , backgroundColor:item.iconBg , }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <span className='m-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm ${item.pcColor} ml-2`}
             
                  >
                    {item.percentage} 
                  </span>

                </span>
                <p className='text-sm text-gray-400 mt-3 ml-12' 
                >
                    {item.title}
                </p>
              </div>
            )) }
          </div>

          <div 
            className='flex gap-10 flex-wrap justify-center '
          >
            <div
              className='bg-white drak:text-gray-200 ml-5 mr-5 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '
            >
              <div
                className='flex justify-between'
              >
                <p
                  className='font-semibold text-xl'
                >
                  Process Status
                </p>
                  <div className='flex items-center gap-4'>
                    <p
                      className='flex items-center gap-2 text-gray-600 hover:shadow-xl rounded-sm'  
                    >
                      <span>
                        <GoPrimitiveDot />
                      </span>
                      <span>Disable</span>
                    </p>
                    <p
                      className='flex items-center gap-2 text-green-400 hover:shadow-xl rounded-sm'  
                    >
                      <span>
                        <GoPrimitiveDot />
                      </span>
                      <span>Enable</span>
                    </p>
                  </div>
              </div>
              <div 
                className='mt-10 flex gap-10 flex-wrap justify-center'
              >
                <div
                  className='border-r-2 border-color m-4 pr-10'
                >
                  <div >
                      <p>
                        <span className='text-3xl font-semiblod'>
                           93 ,1932 Instance
                        </span>
                        <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
                        text-white bg-green-400 ml-3 text-xs'>23%</span>
                      </p>
                      <p>
                        <p className='text-gray-500 mt-1'>Enable</p>
                      </p>
                  </div>
                  <div >
                      <p>
                        <span className='text-3xl font-semiblod'>
                           45, 21 Instance
                        </span>
                        
                      </p>
                      <p>
                        <p className='text-gray-500 mt-1'>Disable</p>
                      </p>
                  </div>
                  <div className='mt-5'>
                      <SparkLine 
                        currentColor="blue"
                        id="line-sparkLine"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color="blue"
                      />
                    
                  </div>

                  <div className='mt-10'>
                    <Button 
                      color="white"
                      bgColor="blue"
                      text="Download Report"
                      borderRadius="10px"
                    />
                  </div>
                </div>
                <div>
                  <Stacked width="320px" height="360px"/>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Dashboard