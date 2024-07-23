import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className=' px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={2}/>
        </div>

       <Grid className='space-y-5' container>
        {[1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://lp2.hm.com/hmgoepprod?set=source[/32/62/3262d9662f73fe6bd46c4a2d4d79f43a0afb7c92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
              alt=""/>
              <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Cropped Strappy Top</p>
                <p className='space-x-5 opacity-50 text-xs font-semibold '> <span>Color:Blue</span> <span>Size:L</span></p>
                <p>Seller: HnM</p>
                <p>Rs 1099</p>
              </div>
                </div>

            </Grid>

            <Grid item>
                <Box sx={{color:deepPurple[500] }}>
                    <StarBorderIcon sx={{fontSize:"2rem"} } className='px-2 text-2xl'/>
                    <span> Rate & Review Product</span>
                </Box>
                
            </Grid>

        </Grid>  )}
        

       </Grid>
        
    </div>
  )
}

export default OrderDetails