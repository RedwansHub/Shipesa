import { Crypto } from './Currency'
import { Countries } from "./Countries";
import { CryptoIcons } from "./CryptoIcons";
import { PaymentMethods } from "./Payment";
import { IconType } from 'react-icons';
import { CgProfile } from 'react-icons/cg';
import { TbArrowsExchange } from 'react-icons/tb';
import { AiFillCalendar, AiOutlineSetting } from 'react-icons/ai';
import { BsFillChatLeftTextFill, BsFillInboxFill } from 'react-icons/bs';
import { RxDashboard,  } from 'react-icons/rx';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export type MenuItemProps = {
    id: number;
    name: string; 
    path: string ; 
    Icon?: IconType;
  };

  const UserMenuBar:  MenuItemProps[]  = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/Dashboard',
      Icon: RxDashboard,
    },
    {
      id: 2,
      name: 'Transactions',
      path: '/Transactions',
      Icon: TbArrowsExchange,
    },
    {
      id: 3,
      name: 'Profile',
      path: '/Profile',
      Icon: CgProfile,
    },
    {
      id: 4,
      name: 'Logout',
      path: '/',
      Icon: RiLogoutCircleRLine,
    },
  ];
  const AdminMenuBar:  MenuItemProps[]  = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/Admin/Dashboard',
      Icon: RxDashboard,
    },
    {
      id: 2,
      name: 'Transactions',
      path: '/Admin/Analytics',
      Icon: TbArrowsExchange,
    },
    {
      id: 3,
      name: 'Profile',
      path: '/Admin/Profile',
      Icon: CgProfile,
    },
    {
      id: 4,
      name: 'Settings',
      path: '/Admin/Settings',
      Icon: AiOutlineSetting,
    },
    {
      id: 5,
      name: 'Logout',
      path: '/',
      Icon: RiLogoutCircleRLine,
    },
  ];

  export const ClientsInfo = [
    {title: 'Evc Plus', logo: '/Evc.png'},
    {title: 'M-Pesa', logo: '/Mpesa.png'},
    {title: 'Trust', logo: '/Trust.png'},
    {title: 'Metamask', logo: '/Meta.png'},
]
 const CryptIcons = [
  {name:'Bitcoin', sub:'BTC', icon: 'Images/Icons/BTC-logo.png'},
  {name:'Ethereum', sub:'ETH', icon: 'Images/Icons/ETH-logo.png'},
  {name:'Tether', sub:'USDT', icon: 'Images/Icons/USDT-logo.png'},
  {name:'Binance', sub:'BNB', icon: 'Images/Icons/BNB-logo.png'},
  {name:'Solana', sub:'SOL', icon: 'Images/Icons/SOL-logo.png'},
  {name:'Ripple', sub:'XRP', icon: 'Images/Icons/XRP-logo.png'},
]
export { UserMenuBar, AdminMenuBar, CryptIcons,  Crypto, Countries, CryptoIcons, PaymentMethods }