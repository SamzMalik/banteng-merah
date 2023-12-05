import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { FaAndroid } from 'react-icons/fa6'

const PortofolioButton = ({ href }: any) => {
    return (
        <Link href={href}><Button><FaAndroid></FaAndroid>Download</Button></Link>
    )
}

export default PortofolioButton