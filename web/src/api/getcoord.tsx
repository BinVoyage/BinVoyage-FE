import axios from "axios";

type CurrentLocation = {
    latitude?: number;
    longitude?: number;
  };

// const getData = async ({ latitude, longitude }: CurrentLocation) => {
//     const response = await axios.get(`api/bin/search?lat=${latitude}&lng=${longitude}&radius=2000`);
//     console.log(response)
//     console.log(response.data?.data.bin_list);
//   };


  type Info ={
    bin_id?:number,
    coordinate1?:any,
    coordinate2?:any,
    address?:string,
    detail?:string,
    type_no?:number,
  }
  
  
  let local : any;
  let coord1: any; 
  let coord2: any;
  let type_no:any;

    export const getData = async ({ latitude, longitude }: CurrentLocation) => {
      const response = await axios.get(`api/bin/search?lat=${latitude}&lng=${longitude}&radius=2000`);
      console.log(response)
      console.log(response.data?.data.bin_list[0]);
      const LocalData = response.data?.data.bin_list
      local = LocalData;
      local.forEach((item:any,{bin_id,detail}:Info) => {
        return(
        bin_id = item?.bin_id,
        detail = item?.detail,
        type_no = item?.type_no,
        coord1= item?.coordinate[0],
        coord2 =  item?.coordinate[1]
            )
        }
    )
}
  

  

  

// getData()