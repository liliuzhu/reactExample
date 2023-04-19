import React, {useState} from 'react';
import {Menu, MenuProps} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
   return {
      key,
      icon,
      children,
      label,
   } as MenuItem;
}

const items: MenuItem[] = [
   getItem('菜单1', '/page1', <PieChartOutlined />),
   getItem('菜单2', '/page2', <DesktopOutlined />),
   {
      label: '菜单3',
      key: '/page3',
      icon: <UserOutlined />,
      children: [
         {
            label: '菜单301',
            key: '/page3/page301',
         }
      ],
   },
   getItem('User', '/user', <UserOutlined />, [
      getItem('Tom', '/Tom'),
      getItem('Bill', '4'),
      getItem('Alex', '/Alex', <UserOutlined />, [
         getItem('Alex1', '/user/Alex/page5-1'),
         getItem('Alex2', '/user/Alex/page5-2'),
      ]),
   ]),
   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
   getItem('Files', '9', <FileOutlined />),
];

function getPathArr(items: MenuItem[], key: string) {
   let res:string[] = []
   items.forEach((item) =>{
      if(item!['children']?.length) {
         let temp:string[] = []
         temp.push((item!.key as string))
         temp.push(...getPathArr(item!['children'], key))
         if(temp.length === 1) {
            temp.pop()
         }
         res.push(...temp)
      } else if(item?.key===key) {
         res.push(item.key)
      }
   })
   return res
}

function findFirstOpenKeys(key: string): string[] {
   let res: string[] = getPathArr(items, key)
   res.pop()
   return res
}

const MainMenu = () => {

   const navigateTo = useNavigate()
   const currentRoute = useLocation()
   const firstOpenKeys:string[] = findFirstOpenKeys(currentRoute.pathname)
   const [openKeys, setOpenKeys]: any[] = useState(firstOpenKeys || []);
   // const [defaultSelectedKeys, setDefaultSelectedKeys]: any[] = useState([currentRoute]);
   const menuClick = (e:any)=>{
      // console.log('点击了菜单', e)
      navigateTo(e.key)
   }

   const rootSubmenuKeys = items.map(item => {
      if(item!['children']?.length){
         return item?.key
      }
   });
   const onOpenChange:MenuProps['onOpenChange']  = (keys:string[]) =>{
      const latestOpenKey: string|undefined = keys.find((key) => openKeys.indexOf(key) === -1);
      if(latestOpenKey === undefined){
         setOpenKeys([]);
      } else if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
         setOpenKeys(keys);
      } else {
         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
   }

   return (
     <Menu
       theme="dark"
       defaultSelectedKeys={[currentRoute.pathname]}
       mode="inline"
       items={items}
       openKeys={openKeys}
       onOpenChange={onOpenChange}
       onClick={menuClick}/>
   );
};

export default MainMenu;
