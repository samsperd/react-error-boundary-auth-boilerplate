import { ReactNode } from 'react';
import Navbar from '../Navbar'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
        <Navbar />
        { children }
    </div>
  )
}

export default Layout