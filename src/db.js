const {REACT_APP_PROFILE_AVATAR}=process.env;

export const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  export const productData = [
    {
      name: 'Jan',
      "Sales":200,
    },
    {
      name: 'Feb',
      "Sales": 600,
    },
    {
      name: 'Mar',
      "Sales": 1800,
    },
  ];
  
export  const rows = [
    { id: 1, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active", transaction:"$120.00"},
    { id: 2, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active", transaction:"$120.00"},
    { id: 3, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active", transaction:"$120.00"},
    { id: 4, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active", transaction:"$120.00"},
    { id: 5, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active", transaction:"$120.00"},
  ];

  export  const productRows = [
    { id: 2, name: 'Apple Airpods',  img:REACT_APP_PROFILE_AVATAR, stock:123, status:"active", price:"$120.00"},
    { id: 3, name: 'Apple Airpods',  img:REACT_APP_PROFILE_AVATAR, stock:123, status:"active", price:"$120.00"},
    { id: 4, name: 'Apple Airpods',  img:REACT_APP_PROFILE_AVATAR, stock:123, status:"active", price:"$120.00"},
    { id: 5, name: 'Apple Airpods',  img:REACT_APP_PROFILE_AVATAR, stock:123, status:"active", price:"$120.00"},
    { id: 1, name: 'Apple Airpods',  img:REACT_APP_PROFILE_AVATAR, stock:123, status:"active", price:"$120.00"},
  ];