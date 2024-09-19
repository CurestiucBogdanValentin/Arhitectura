import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox
} from '@material-tailwind/react';
import { FingerPrintIcon } from '@heroicons/react/24/solid';
import { PageTitle, Footer } from '@/widgets/layout';
import { FeatureCard } from '@/widgets/cards';
import { featuresData, contactData } from '@/data';

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Bine ai venit la Arhitectura
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                vezi mai jos ani de studiu
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: 'w-5 h-5 text-white'
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit amet. At magnam aspernatur sed exercitationem dolorum qui
                iusto adipisci aut internos esse qui debitis error. Qui voluptatibus perspiciatis et
                consequuntur molestias sed saepe voluptatem. Et omnis aliquid non culpa animi id
                possimus possimus quo nostrum blanditiis. Qui voluptas sint ut debitis doloribus sit
                expedita deleniti qui natus nihil At illo neque aut maiores galisum.
                <br />
                <br />
                Lorem ipsum dolor sit amet. At magnam aspernatur sed exercitationem dolorum qui
                iusto adipisci aut internos esse qui debitis error. Qui voluptatibus perspiciatis et
                consequuntur molestias sed saepe voluptatem. Et omnis aliquid non culpa animi id
                possimus possimus quo nostrum blanditiis. Qui voluptas sint ut debitis doloribus sit
                expedita deleniti qui natus nihil At illo neque aut maiores galisum.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img alt="Card Image" src="/img/teamwork.png" className="h-full w-full" />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Enterprise
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Lorem ipsum dolor sit amet
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Lorem ipsum dolor sit amet. At magnam aspernatur sed exercitationem dolorum qui iusto
            adipisci aut internos esse qui debitis error. Qui voluptatibus perspiciatis et
            consequuntur molestias sed saepe voluptatem. Et omnis aliquid non culpa animi id
            possimus possimus quo nostrum blanditiis. Qui voluptas sint ut debitis doloribus sit
            expedita deleniti qui natus nihil At illo neque aut maiores galisum.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: 'w-5 h-5 text-white'
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">{description}</Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Nedumeriri?">
            Lorem ipsum dolor sit amet. At magnam aspernatur sed exercitationem dolorum qui iusto
            adipisci aut internos esse qui debitis error. Qui voluptatibus perspiciatis et
            consequuntur molestias sed saepe voluptatem. Et omnis aliquid non culpa animi id
            possimus possimus quo nostrum blanditiis. Qui voluptas sint ut debitis doloribus sit
            expedita deleniti qui natus nihil At illo neque aut maiores galisum..
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography variant="small" color="gray" className="flex items-center font-normal">
                  I agree the
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
