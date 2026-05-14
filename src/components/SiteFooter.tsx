import { HelloHelloWordmark } from '@/components/icons';

export function SiteFooter() {
  return (
    <footer className="mx-auto mb-10 px-4 text-sm lg:px-6">
      <div className="mb-6 h-[5px] w-full bg-current" aria-hidden />

      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:gap-8">
        <div className="flex-1 text-[2.75rem] leading-[1] font-[900] tracking-tighter text-balance md:text-[6vw]">
          <p>Made to be worn.</p>
          <p className="red:text-red text-[#5A5A5A]">Or judged. Or both.</p>
        </div>
        <div>
          <p className="text-[45vw] leading-[1] font-[900] tracking-tighter md:text-[12.75vw]">
            ©26
          </p>
        </div>
      </div>

      <div className="mt-[8rem] mb-4 md:mt-[16rem]">
        <p className="max-w-[52ch] tracking-tight text-balance md:text-2xl">
          Created by the ++hellohello team, this store and signature collection
          celebrates our collective creativity and passion for apparel. Carefully designed.
        </p>
      </div>

      <hr className="mb-6 h-[2px] w-full bg-current border-0" />

      <div className="grid grid-cols-16 gap-x-6 gap-y-20 font-bold md:gap-6">
        <div className="order-last col-span-16 md:order-first md:col-span-4">
          <div className="flex flex-col">
            <a href="https://hellohello.is" target="_blank" rel="noopener noreferrer" aria-label="hellohello">
              <HelloHelloWordmark className="mb-2" />
            </a>
            <p>All rights reserved ©2026</p>
          </div>
        </div>

        <div className="col-span-8 md:col-span-3">
          <p>Libertad 2529</p>
          <p>Office 102</p>
          <p>Montevideo, Uruguay.</p>
        </div>

        <div className="col-span-8 md:col-span-3">
          <a href="#" className="link-hover">Privacy Policy</a>
        </div>

        <div className="col-span-8 md:col-span-2 flex flex-col gap-1">
          <a className="link-hover" href="https://dribbble.com/hellohello" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a className="link-hover" href="https://instagram.com/hellohello.is" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="link-hover" href="https://linkedin.com/company/hellohello-is" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link-hover" href="https://twitter.com/hellohello_is" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
        </div>

        <div className="col-span-8 md:col-span-2 flex flex-col gap-1">
          <a className="link-hover" href="https://hellohello.is/work" target="_blank" rel="noopener noreferrer">Work</a>
          <a className="link-hover" href="https://hellohello.is/services" target="_blank" rel="noopener noreferrer">Services</a>
          <a className="link-hover" href="https://hellohello.is/about" target="_blank" rel="noopener noreferrer">About</a>
          <a className="link-hover" href="https://hellohello.is/careers" target="_blank" rel="noopener noreferrer">Careers</a>
        </div>

        <div className="col-span-8 md:col-span-2 flex flex-col">
          <a className="link-hover" href="mailto:hello@hellohello.is">Let&apos;s talk</a>
        </div>
      </div>
    </footer>
  );
}
