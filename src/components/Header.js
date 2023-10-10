
const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <header className="relative bg-white ">
          <nav
            aria-label="Top"
            className="px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:bg-gray-900 dark:border-neutral-950"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex h-16 justify-evenly items-center">

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex justify-center h-full space-x-8 ">
                    <a
                      to="/"
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-white hover:text-lime-600 border-white border-b-2 hover:border-lime-600"
                    >
                      Users
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600 border-white border-b-2 hover:border-lime-600"
                    >
                      Posts
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600 border-white border-b-2 hover:border-lime-600"
                    >
                      Posts
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
