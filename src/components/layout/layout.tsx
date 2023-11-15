import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface ILayoutProps {
  children?: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isShowBackBtn = () => {
    return pathname !== '/';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-neutral-800 text-white p-4 md:px-8 flex place-items-center gap-4">
        {isShowBackBtn() && (
          <button className="border-0 p-2" onClick={() => router.back()}>
            <Image
              // className="dark:invert"
              className="invert"
              src={'/arrow-left.svg'}
              alt="go back icon"
              width={16}
              height={16}
            />
          </button>
        )}
        Tier List
      </header>
      <main className="grow flex flex-row p-4 md:p-8 overflow-y-auto gap-4">
        {children}
      </main>
      <footer className="flex justify-center border-t border-neutral-800 text-white p-4">
        <a
          href="https://github.com/poomrtp/tier-list-basic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex place-items-center gap-2">
            <span>Github</span>
            <span>
              <Image
                // className="relative align-middle dark:invert"
                className="relative align-middle invert"
                src="/arrow-top-right-on-square.svg"
                alt="arrow icon"
                width={16}
                height={16}
                priority
              />
            </span>
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Layout;
