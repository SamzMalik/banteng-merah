import { Card, Link, CardHeader, Divider, CardBody, CardFooter } from '@nextui-org/react'

const FooterCard = ({ country, children }: { country: string, children: string }) => {
  return (
    <Card className="max-w-[400px] bg-blue-900 text-yellow-100">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">{country}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{children}</p>
      </CardBody>
      <CardFooter>
        <Link
          isExternal
          color='warning'
          showAnchorIcon
          href="https://www.google.com/maps"
        >
          Find us on google maps.
        </Link>
      </CardFooter>
    </Card>
  )
}

export default FooterCard