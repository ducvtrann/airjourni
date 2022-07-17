// Data
import photo from '../../public/images/remote-friends.png';
import logo from '../../public/images/svg/logo_v2.svg';
import apple from '../../public/images/svg/apple-logo.svg';
import facebook from '../../public/images/svg/facebook-logo.svg';
import google from '../../public/images/svg/google-logo.svg';
import twitter from '../../public/images/svg/twitter-logo.svg';

const loginMethods = [
  {
    name: 'Apple',
    icon: apple,
    color:
      'bg-[#050708] hover:bg-[#050708]/90 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30',
  },
  {
    name: 'Facebook',
    icon: facebook,
    color:
      'bg-[#3b5998] hover:bg-[#3b5998]/90 dark:focus:ring-[#3b5998]/50 dark:hover:bg-[#3b5998]/30',
  },
  {
    name: 'Google',
    icon: google,
    color:
      'bg-[#DB4437] hover:bg-[#DB4437]/90 dark:focus:ring-[#DB4437]/50 dark:hover:bg-[#DB4437]/30',
  },
  {
    name: 'Twitter',
    icon: twitter,
    color:
      'bg-[#1da1f2] hover:bg-[#1da1f2]/90 dark:focus:ring-[#1da1f2]/50 dark:hover:bg-[#1da1f2]/30',
  },
];

export { photo, logo, loginMethods };
