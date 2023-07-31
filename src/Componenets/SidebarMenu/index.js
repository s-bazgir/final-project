import React, {useState, useEffect, Fragment} from 'react';
import { Layout, Menu } from 'antd';
import axios from "axios";
import { UserOutlined,LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import  "./style.css";
import MoviesByGenreInfinity from  "../../Componenets/MoviesByGenreInfinity";
// import { Scrollbars } from 'react-custom-scrollbars'; // اضافه کردن کتابخانه‌ی scrollbars

const { Sider } = Layout;

export default function SidebarMenu(props)  {

    const [selectedItem , setSelectedItem] = useState('1');
    const [movies,setMovies] = useState();
    
    // useEffect(function(){                 
    //     getApi();
    // },[selectedItem]); 

    // async function getApi(){
    //     try{
        
    //     const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${selectedItem}/movies?page={1}`);
    //     setMovies(response.data.data);
    //     console.log("yyyyyyyy");
    //     console.log(response);
    //     }catch(e){    
    //     }
    //     }

function renderGenres(){
    return props.genres.map(function(genre) {
        return(<Menu.Item key={genre.id}>{genre.name}</Menu.Item>)
            }
        )}
        
   // function handleMenuSelect(item){
      //  setSelectedItem(5);
        // setSelectedItem(item.key);
        // console.log(item.key);
   // }

  return (
     <Fragment>
        <div className="genreList">
        <Sider width={200} className="site-layout-background">
        {/* <Scrollbars autoHide> */}
        <Menu 
             mode="inline"
            // selectedKeys={[selectedItem]}
            //    onSelect={handleMenuSelect()}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
        >
          {renderGenres()}
        </Menu>
        {/* </Scrollbars> */}
        </Sider>
        </div>
    </Fragment>    
  );
};

