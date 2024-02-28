import Image from 'next/image';
import logo from '../../../assets/Logo.png';

export const Logo = () => {
  return <Image src={logo} alt="Logo" className="h-12 w-12" />;
}