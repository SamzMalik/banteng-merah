import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonCard = ({idPortofolio, children} : {idPortofolio: number, children: string}) => {
    const router = useRouter()
  return (
    <Button onClick={() => router.push(`/portofolio/${idPortofolio}`)}>{children}</Button>
  )
}

export default ButtonCard