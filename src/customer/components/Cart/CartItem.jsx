import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://lp2.hm.com/hmgoepprod?set=source[/32/62/3262d9662f73fe6bd46c4a2d4d79f43a0afb7c92.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Cropped Strappy Top</p>
          <p className="opacity-70">Size:L,Blue</p>
          <p className="opacity-70 mt-3">Seller: HnM</p>

          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold"> Rs199</p>
            <p className="opacity-50 line-through">Rs 211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                     <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-1 px-7 border rounded-sm"> 3 </span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                     <AddCircleOutlineIcon/>
                </IconButton>
               
            </div>

            <div>
                <Button sx={{color:"RGB(145 85 253)"}} >Remove</Button>
            </div>



        </div>


    </div>
  );
};

export default CartItem;
