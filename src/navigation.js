import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navigation.css';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate();
 const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const accountDisplay = firstName && lastName ? `${firstName} ${lastName}` : "Account";
  const handleCategoryClick = () => navigate('/deals');
 const handleNew = () => navigate('/toys');
  const handleHome = () => navigate('/home');
  const handleAboutus = () => navigate('/aboutus');
  return (
    <div>
        <div className='homepage'>
    <ul className='navbar'>
    <li><a  onClick={handleHome} style={{ cursor: 'pointer' }}><b>Home</b></a></li>
      <li><a  onClick={handleCategoryClick} style={{ cursor: 'pointer' }}><b>Deals</b></a></li>
      <li><a onClick={handleNew} style={{ cursor: 'pointer' }}><b>What's new</b></a></li>
      <li><a onClick={handleAboutus} style={{ cursor: 'pointer' }}><b>About Us</b></a></li>
       </ul>
       <div className="profiledata"  style={{ cursor: 'pointer' }}>
      <AccountCircleOutlinedIcon />
      <h4>{accountDisplay}</h4>
    </div>
  </div>
   </div>
  )
}
export default Navigation;
