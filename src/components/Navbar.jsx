/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-dark-black shadow-lg">
      {() => (
        <>
          <div className="flex items-center justify-center py-4">
              <h1 className='text-4xl text-white font-bold font-outfit'>Hack<span className='text-dark-blue'>At</span>1</h1>
          </div>
        </>
      )}
    </Disclosure>
  )
}